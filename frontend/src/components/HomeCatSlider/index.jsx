
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import '../HomeCatSlider/index.css'

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider py-8 pt-4'>
        <div className='container'>
            <Swiper
                slidesPerView={8}
                spaceBetween={10}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Bags</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Groceries</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Beauty</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1741661105893_well.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/'>
                        <div className='item py-7 px-3 bg-white rounded-sm text-center
                        flex items-center justify-center flex-col'>
                            <img src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png" 
                            alt="" className='w-[60px] hover:scale-105'/>
                            <h3 className='text-[15px] font-[500] mt-3'>Jewellery</h3>    
                        </div>
                    </Link>
                    
                </SwiperSlide>


            </Swiper>
        </div>
    </div>
  )
}

export default HomeCatSlider