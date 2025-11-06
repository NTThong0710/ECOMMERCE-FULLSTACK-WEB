import { Button } from '@mui/material'
import { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';


const Login = () => {

    
    const [isShowPassword, setShowPassword] = useState(true)

    const [formFields, setFormFields] = useState({
        email:'',
        password:''
    })
    const context = useContext(MyContext)
    const history = useNavigate()

    const forgotPassword=() => {
        history('/verify')
        context.openAlertBox('success', 'OTP Send')    
    }
  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10
            flex flex-col'>
                <h3 className='font-[600] text-center text-[18px] text-black'>Login to your account</h3>
                <form className='w-full mt-5'> 
                    <div className='form-group mb-5'>
                        <TextField type='email' id="outlined-basic" label="Email ID" variant="outlined" className='w-full'
                        name='name'/>
                    </div>
                    <div className='form-group mb-5 relative'>
                        <TextField type={isShowPassword==true ? 'password': 'text'} id="outlined-basic" label="Password" variant="outlined" className='w-full'
                        name='password'/>
                        <Button className='!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !overflow-hidden'
                        onClick={()=>setShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === true ? <IoMdEye className='text-[20px] opacity-75'/>
                                : <IoMdEyeOff className='text-[20px] opacity-75'/>
                            }
                        </Button>
                    </div>
                    <a className='link cursor-pointer text-[14px] font-[600]'
                    onClick={forgotPassword}>Forgot Password?</a>
                    <div className='mt-3 mb-3 flex items-center w-full'>
                        <Button className='btn-org btn-lg !text-white !w-full'>Login</Button>
                    </div>
                    <span className='block w-full text-center text-[14px] mb-3'>Not Registered?<Link to='/register' className='text-[#ff5252] text-[14px] font-[600]'> Sign Up</Link></span>
                    <p className='text-center text-[13px] font-[500] mb-3'>Or countinue with social account</p>
                    <Button className='flex gap-3 !bg-[#f1f1f1] btn-lg !text-black !w-full'><FcGoogle className='text-[20px]'/><span>Sign in with Google</span></Button>
                </form>
                
            </div>
        </div>
    </section>  
  )
}

export default Login