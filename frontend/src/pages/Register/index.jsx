import { Button } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [isShowPassword, setShowPassword] = useState(true)
  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10
            flex flex-col'>
                <h3 className='font-[600] text-center text-[18px] text-black'>Register with a new account</h3>
                <form className='w-full mt-5'>
                    <div className='form-group mb-5'>
                        <TextField type='name' id="outlined-basic" label="Full Name" variant="outlined" className='w-full'/> 
                    </div> 
                    <div className='form-group mb-5'>
                        <TextField type='email' id="outlined-basic" label="Email ID" variant="outlined" className='w-full'/> 
                    </div>
                    <div className='form-group mb-5 relative'>
                        <TextField type={isShowPassword==true ? 'password': 'text'} id="outlined-basic" label="Password" variant="outlined" className='w-full'/>
                        <Button className='!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !overflow-hidden'
                        onClick={()=>setShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === true ? <IoMdEye className='text-[20px] opacity-75'/>
                                : <IoMdEyeOff className='text-[20px] opacity-75'/>
                            }
                        </Button>
                    </div>
                </form>
                
                <div className='mt-3 mb-3 flex items-center w-full'>
                    <Button className='btn-org btn-lg !text-white !w-full'>Register</Button>
                </div>
                <span className='text-center text-[14px] mb-3'>Already have an account?<Link to='/login' className='text-[#ff5252] text-[14px] font-[600]'> Login</Link></span>
                <p className='text-center text-[13px] font-[500] mb-3'>Or countinue with social account</p>
                <Button className='flex gap-3 !bg-[#f1f1f1] btn-lg !text-black'><FcGoogle className='text-[20px]'/><span>Sign up with Google</span></Button>
            </div>
        </div>
    </section>  
  )
}

export default Register