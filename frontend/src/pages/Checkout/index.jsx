import React from 'react'
import TextField from '@mui/material/TextField';
import './index.css'
import { Button } from '@mui/material';
import { IoBagCheck } from "react-icons/io5";

const Checkout = () => {
  return (
    <section className='py-10'>
        <div className='container flex gap-5'>
            <div className='leftCol w-[70%]'>
                <div className='card bg-white shadow-md p-5 w-full'>
                    <h1 className='text-[22px] font-[600]'>Billing Details</h1>

                    <form className='w-full mt-3 '>
                        <div className='flex items-center gap-3 mt-3 mb-3'>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Full Name" variant="outlined" 
                                size='small' required/>
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Country" variant="outlined" 
                                size='small' required/>
                            </div>
                        </div>
                        
                    </form>

                    <h3 className='mb-3'>Street address</h3>
                    <form className='w-full mt-3'>
                        <div className='mt-3 mb-3'>
                            <TextField className='w-full' label="House number and street name" variant="outlined" 
                            size='small'/>
                        </div>
                    </form>
                    <form action="">
                        <div className='mt-3 mb-3'>
                            <TextField className='w-full' label="Apartment, suite, unit, etc. (Optional)" variant="outlined" 
                            size='small'/>
                        </div>
                    </form>

                    <form className='mt-3'>
                        <div className='flex items-center gap-3'>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Town/ City" variant="outlined" 
                                size='small' required/>
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="State/Country" variant="outlined" 
                                size='small' required/>
                            </div>
                        </div>
                    </form>

                    <h3 className='mt-3'>PostCode/ Zip *</h3>
                    
                    <form className='mt-3'>
                        <TextField className='w-full' label="Zip Code" variant="outlined" 
                        size='small'/>
                    </form>
                    <form className='mt-3'>
                        <div className='flex items-center gap-3'>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Phone number" variant="outlined" 
                                size='small'/>
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Address" variant="outlined" 
                                size='small'/>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div className='rightCol w-[30%]'>
                <div className='card shadow-md bg-white p-5 rounded-md'>    
                    <h2 className='text-[22px] font-[500] mb-4'>Your Order</h2>
                    <div className='flex items-center justify-between py-2 border-t border-b border-black/10'>
                        <span className='text-[14px] font-[600]'>Product</span>
                        <span className='text-[14px] font-[600]'>Subtotal</span>
                    </div>
                    <div className='scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-1'>
                        <div className='flex items-center justify-between py-2 px-3'>
                            <div className='part1 flex items-center gap-3'>
                                <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="" className='w-full
                                    transition-all group-hover:scale-105' />
                                </div>

                                <div className='info'>
                                    <h4 className='text-[14px] font-[500]'>Men Onaque Casual Shirt</h4>
                                    <span className='text-[13px]'>Qty : 1</span>
                                </div>
                            </div>
                            
                            <span className='text-[14px] font-[500]'>$300.00</span>
                        </div>
                        <div className='flex items-center justify-between py-2 px-3'>
                            <div className='part1 flex items-center gap-3'>
                                <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="" className='w-full
                                    transition-all group-hover:scale-105' />
                                </div>

                                <div className='info'>
                                    <h4 className='text-[14px] font-[500]'>Men Onaque Casual Shirt</h4>
                                    <span className='text-[13px]'>Qty : 1</span>
                                </div>
                            </div>
                            
                            <span className='text-[14px] font-[500]'>$300.00</span>
                        </div>
                        <div className='flex items-center justify-between py-2 px-3'>
                            <div className='part1 flex items-center gap-3'>
                                <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="" className='w-full
                                    transition-all group-hover:scale-105' />
                                </div>

                                <div className='info'>
                                    <h4 className='text-[14px] font-[500]'>Men Onaque Casual Shirt</h4>
                                    <span className='text-[13px]'>Qty : 1</span>
                                </div>
                            </div>
                            
                            <span className='text-[14px] font-[500]'>$300.00</span>
                        </div>
                        <div className='flex items-center justify-between py-2 px-3'>
                            <div className='part1 flex items-center gap-3'>
                                <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="" className='w-full
                                    transition-all group-hover:scale-105' />
                                </div>

                                <div className='info'>
                                    <h4 className='text-[14px] font-[500]'>Men Onaque Casual Shirt</h4>
                                    <span className='text-[13px]'>Qty : 1</span>
                                </div>
                            </div>
                            
                            <span className='text-[14px] font-[500]'>$300.00</span>
                        </div>
                        <div className='flex items-center justify-between py-2 px-3'>
                            <div className='part1 flex items-center gap-3'>
                                <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="" className='w-full
                                    transition-all group-hover:scale-105' />
                                </div>

                                <div className='info'>
                                    <h4 className='text-[14px] font-[500]'>Men Onaque Casual Shirt</h4>
                                    <span className='text-[13px]'>Qty : 1</span>
                                </div>
                            </div>
                            
                            <span className='text-[14px] font-[500]'>$300.00</span>
                        </div>
                    </div>
                    <Button className='btn-lg btn-org !text-white !mt-5 w-full flex items-center gap-2'><IoBagCheck className='text-[18px]'/>Checkout</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout