import UserModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sendEmailFun from "../config/sendEmail.js";
import verifyEmailTemplate from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";
import {v2 as cloudinary} from 'cloudinary'
import fs, { access } from 'fs'
import { error } from "console";

cloudinary.config({ 
        cloud_name: process.env.cloudinary_Config_Cloud_Name, 
        api_key: process.env.cloudinary_Config_api_key,
        api_secret: process.env.cloudinary_Config_api_secret,
        secure: true
    });

export async function registerUserController(request, response) {
    try {
        let user;

        const {name, email, password} = request.body
        if(!name || !email || !password){
            return response.status(400).json({
                message : "Provide email, name, password",
                error : true,
                success : false
            })
        }

        user = await UserModel.findOne({ email:email })
        if(user){
            return response.json({
                message : "User already registered with this email",
                error : true,
                success : false
            })
        }

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)
        
        user = new UserModel({
            email: email,
            password: hashPassword,
            name: name,
            otp: verifyCode,
            otpExpires: Date.now() + 600000
        })

        await user.save()
        
        //Send verification email
        await sendEmailFun({
            to : email,
            subject : "Verify email from Ecommerce App",
            text : `Mã OTP của bạn là: ${verifyCode}`,
            html : verifyEmailTemplate(name, verifyCode)
        })

        //Create a JWT token for verification purposes
        const token = jwt.sign(
            {
                email: user.email, id: user.id
            },
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        )

        return response.status(200).json({
            success: true,
            error:false,
            message: "User registered successfully! Please verify your email.",
            token: token,
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export async function verifyEmailController(request, response){
    try {
        const {email, otp} = request.body

        const user = await UserModel.findOne({email:email})
        if(!user) {
            return response.status(400).json({error: true, success: false, message: "Không tìm thấy người dùng"})
        }
        const isCodeValid = user.otp === otp;
        const isNotExpired = user.otpExpires > Date.now()
        
        if(isCodeValid && isNotExpired) {
            user.verify_email = true
            user.otp = null
            user.otpExpires = null
            await user.save()
            return response.status(200).json({error:false, success:true, message:"Xác thực email thành công"})

        }
        else if (!isCodeValid) {
            return response.status(400).json({error:false, success:true, message:"OTP không hợp lệ"})
        }
        else {
            return response.status(400).json({error:false, success:true, message:"Xác thực email thành công"})
        }
    } catch(error){
        return response.status(500).json({
            message: error.message || error,
            error:true,
            success: false
        })
    }

}

//Login controller
export async function loginUserController(request, response) {
    try {
        const {email, password} = request.body

        const user = await UserModel.findOne({email: email})

        if(!user){
            response.status(400).json({
                message:"Tài khoản chưa được đăng ký",
                error:true,
                success: false
            })
        }

        if(user.status !== "Active"){
            response.status(400).json({
                message:"Liên hệ admin",
                error:true,
                success: false
            })
        }

        if(user.verify_email !== true){
            response.status(400).json({
                message:"Email của bạn chưa được xác thực. Vui lòng xác thực email của bạn trước",
                error:true,
                success: false
            })
        }
        
        const checkPassword = await bcryptjs.compare(password, user.password)

        if(!checkPassword){
            response.status(400).json({
                message:"Sai mật khẩu",
                error:true,
                success: false
            })
        }

        const accesstoken = await generatedAccessToken(user._id)
        const refreshToken = await generatedRefreshToken(user._id)

        const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
            last_login_date : new Date()
        })

        const cookiesOption = {
            httpOnly : true,
            secure : false, // có thể đổi thành true khi set https://
            sameSite : "None"
        }
        response.cookie('accessToken',accesstoken,cookiesOption)
        response.cookie('refreshToken',refreshToken,cookiesOption)

        return response.json({
            message : "Đăng nhập thành công",
            error : false,
            success: true,
            data : {
                accesstoken,
                refreshToken
            }
        })
        } catch(error) {
            return response.status(500).json({
                message : error.message || error,
                error : true,
                success : false
            })
        }

}

//Logout controller
export async function logoutUserController(request, response) {
    try {

        const userId = request.userId // middleware

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }
        response.clearCookie('accessToken',cookiesOption)
        response.clearCookie('refreshToken',cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userId,{
            refresh_token : ""
        })

        return response.json({
            message : "Đăng xuất thành công",
            error : false,
            success: true
        })

    } catch(error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//Avatar upload
export async function userAvatarController(request, response) {
    try{
        let imagesArr= []
        const userId = request.userId
        const image = request.files

        const user = await UserModel.findOne({_id: userId})

        //first remove avatar from cloudinary
        const imgUrl = user.avatar
        const urlArr = imgUrl.split("/")
        const avatar_image = urlArr[urlArr.length - 1]
        const imageName = avatar_image.split(".")[0]
        
        if(imageName){
            const res = await cloudinary.uploader.destroy(
                imageName,
                (error, result) => {
                    // console.log(error, res)
                }
            )
        }

        if(!user){
            return response.status(500).json({
            message : "Không tìm thấy người dùng",
            error : true,
            success : false
            })
        }

        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: false,
        }
        
        for(let i=0; i < image?.length; i++){

            const img= await cloudinary.uploader.upload(
                image[i].path,
                options,
                function (error, result){
                    imagesArr.push(result.secure_url)
                    fs.unlinkSync(`uploads/${request.files[i].filename}`)
                }
            )
        }

        user.avatar = imagesArr[0],
        await user.save()

        return response.status(200).json({
            _id: userId,
            avatar: imagesArr[0]
        })

    } catch(error){
         return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//Delete image
export async function removeImageFromCloudinary(request, response) {
    const imgUrl = request.query.img
    const urlArr = imgUrl.split("/")
    const image = urlArr[urlArr.length - 1]
    const imageName = image.split(".")[0]
    
    if(imageName){
        const res = await cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                // console.log(error, res)
            }
        )

        if (res) {
            response.status(200).send(res)
        }
    }
}

//update user details
export async function updateUserDetails(request, response) {
    try {
        const userId = request.userId // auth middleware
        const { name, email, mobile, password } = request.body

        const userExist = await UserModel.findById(userId)
        if(!userExist) return response.status(400).send('Người dùng này không thể cập nhật')
        
        let verifyCode = ""

        if(email !== userExist.email){
            verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        }

        let hashPassword = ""
        
        if(password){
            const salt = await bcryptjs.genSalt(10)
            hashPassword = await bcryptjs.hash(password, salt)
        } else {
            hashPassword = userExist.password
        }
        
        const updateUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                name: name,
                mobile: mobile,
                email: email,
                verify_email: email !== userExist.email ? false : true,
                password: hashPassword,
                otp: verifyCode!=="" ? verifyCode : null,
                otpExpires: verifyCode!=="" ? Date.now() + 600000 : ''
            },
            { new: true }
        )

        
        if (email !== userExist.email){
            // Send verification email
            await sendEmailFun({
                to: email,
                subject: "Xác thực email từ web bán hàng",
                text: "",
                html: verifyEmailTemplate(name, verifyCode)
            })
        }

        return response.json({
            message: "Thông tin người dùng cập nhật thành công",
            error: false,
            success: true,
            user: updateUser
        })


    } catch ( error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//forgot password
export async function forgotPasswordController(request, response){
    try {
        const {email} = request.body

        const user = await UserModel.findOne({email:email})

        if(!user){
            return response.status(400).json({
                message : "Email không phù hợp",
                error : true,
                success: false
            })
        }

        else {
            let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

            user.otp = verifyCode
            user.otpExpires = Date.now() + 600000

            await user.save()

            await sendEmailFun({
                to: email,
                subject: "Xác thực email từ Ecommerce App",
                text: "",
                html: verifyEmailTemplate(user.name, verifyCode)
            })

            return response.json({
                message : "Kiểm tra email của bạn",
                error : false,
                success : true
            })
        }

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//verify forgot password
export async function verifyForgotPasswordOtp(request, response) {
    try{
        const {email, otp}= request.body;
        const user = await UserModel.findOne({email:email})
        
        if(!user){
            return response.status(400).json({
                message : "Email không phù hợp",
                error : true,
                success: false
            })
        }

        if(!email || !otp){
            return response.status(400).json({
                message : "Vui lòng cung cấp email, otp",
                error: true,
                success: false
            })
        }

        if(otp !== user.otp){
            return response.status(400).json({
                message : "OTP không phù hợp",
                error: true,
                success: false
            })
        }

        const currentTime = new Date().toISOString()

        if (user.otpExpires < currentTime) {
            return response.status(400).json({
                message: "OTP đã quá hạn",
                error: true,
                success: false
            })
        }

        user.otp = "";
        user.otpExpires = "";

        await user.save()

        return response.status(400).json({
            message : "Xác thực OTP thành công",
            error: true,
            success: false
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//reset password
export async function resetPassword(request, response) {
    try{
        const {email, newPassword, confirmPassword} = request.body
        if(!email || !newPassword || !confirmPassword){
            return response.status(400).json({
                message : "Vui lòng cung cấp đầy đủ email, newPassword, confirmPassword"
            })
        }
        const user = await UserModel.findOne({email});
        if(!user){
            return response.status(400).json({
                message : "Email không hợp lệ",
                error : true,
                success : false
            })
        }

        if( newPassword !== confirmPassword){
            return response.status(400).json({
                message : "Thông tin về mật khẩu cần trùng khớp với nhau",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(confirmPassword,salt)
        
        
        user.password= hashPassword
        await user.save()

        return response.json({
            message : "Cập nhật mật khẩu thành công",
            error : false,
            success : true
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//refresh token controller
export async function refreshToken(request, response) {
    try {
        const refreshToken = request.cookies.refreshToken || request?.header?.authorization?.split(" ")[1] //Bearer token
        if (!refreshToken){
            return response.status(400).json({
                message : "Token không hợp lệ",
                error : true,
                success : false
            })
        }

        const verifyToken = await jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH_TOKEN)
        if (!verifyToken){
             return response.status(401).json({
                message : "Token đã quá hạn",
                error : true,
                success : false
            })
        }
        const userId =verifyToken?._id
        const newAccessToken = await generatedAccessToken(userId)

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.cookie('accessToken',newAccessToken,cookiesOption)

        return response.json({
            message : "AccessToken mới đã được tạo",
            error: false,
            success: true,
            data : {
                accessToken : newAccessToken
            }
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

// get login user details
export async function userDetails(request, response) {
    try {
        const userId = request.userId

        const user = await UserModel.findById(userId).select('-password -refresh_token')

        return response.json({
            message : 'Chi tiết users',
            data : user,
            error : false,
            success : true

        })

    } catch (error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}