import React, { useState } from 'react'
import OtpInput from '../../components/OtpBox'
import { Button } from "@mui/material";

const Verify = () => {
  const [otp,setOtp] = useState("")
  const handleOtpChange = (value) =>{
    setOtp(value)
  }
  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  }
  return (
    <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10
                flex flex-col'>
                    <div className='text-center flex items-center justify-center'>
                      <img src="/verify3.png" width='80' />
                    </div>
                    <h3 className='font-[600] text-center text-[18px] text-black mt-4'>Verify OTP</h3>
                    <p className='text-center mt-2'>OTP send to <span className='text-primary font-bold'>ntt710@gmail.com</span></p>
                    <form onSubmit={verifyOTP}>
                      <OtpInput length={4} onChange={handleOtpChange}/>
                      <div className='flex items-center justify-center'>
                        <Button
                          type="submit"
                          className="w-full !text-white btn-org"
                        >
                          Verify OTP
                        </Button>
                      </div>
                    </form>
                </div>
               
            </div>
            
    </section> 
  )
}

export default Verify