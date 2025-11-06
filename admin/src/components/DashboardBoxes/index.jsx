import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@mui/material';
const DashboardBoxes = () => {
  return (
    <>
        <div className='w-full box py-1 px-5 bg-[#f1faff] border border-black/10 flex items-center gap-8 mb-5 justify-between
        rounded-md'>
            <div className='info'>
                <h1 className='text-[35px] font-bold leading-8 mb-3'>
                    Welcome,
                    <br />
                    <span className='text-primary'>
                        Tran Thong Nguyen
                    </span>
                    
                </h1>
                <p>Here’s What happening on your store today. See the statistics at once.</p>
                <br />
                <Button className='btn-blue !font-bold !capitalize'>+ Add Product</Button>
            </div>
            <img src="/shop-illustration.webp" className='w-[250px]'/>
        </div>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            
            className="dashBoardBoxesSlider"
        >
            <SwiperSlide>
                <div className='box p-4 rounded-md border border-black/10 flex items-center gap-4 bg-emerald-500'>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[40px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                    <div className='info w-[80%] text-white'>
                        <h3>Total Image</h3>
                        <b>3011</b>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[45px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 496H48V304h80zm224 0h-80V208h80zm112 0h-80V96h80zm-224 0h-80V16h80z"></path></svg>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='box p-4 rounded-md border border-black/10 flex items-center gap-4 bg-blue-500'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[40px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"></path></svg>
                    <div className='info w-[80%] text-white'>
                        <h3>Total Orders</h3>
                        <b>771</b>
                    </div>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[40px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='box p-4 rounded-md border border-black/10 flex items-center gap-4 bg-purple-700'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[40px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM13.3345 12C14.1629 12 14.8345 11.3284 14.8345 10.5C14.8345 9.67157 14.1629 9 13.3345 9H10.501V12H13.3345ZM13.3345 7C15.2675 7 16.8345 8.567 16.8345 10.5C16.8345 12.433 15.2675 14 13.3345 14H10.501V17H8.50098V7H13.3345Z"></path></svg>
                    <div className='info w-[100%] text-white'>
                        <h3 className='whitespace-nowrap'>Total Product</h3>
                        <b>50</b>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[45px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 496H48V304h80zm224 0h-80V208h80zm112 0h-80V96h80zm-224 0h-80V16h80z"></path></svg>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='box p-4 rounded-md border border-black/10 flex items-center gap-4 bg-rose-500'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[40px]  text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"></path><path d="m12 15 1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z"></path></svg>
                    <div className='info w-[130%] text-white'>
                        <h3 className='whitespace-nowrap'>Total Category</h3>
                        <b>8</b>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[45px] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 496H48V304h80zm224 0h-80V208h80zm112 0h-80V96h80zm-224 0h-80V16h80z"></path></svg>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default DashboardBoxes