import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../HomeSliderV2/index.css'

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const HomeBannerV2 = () => {
  return (
    <section>
        <div className="container flex items-center">
            <div className="part1 w-full">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="homeSliderV2"
                >
                    <SwiperSlide>
                            <div className='item rounded-md overflow-hidden relative'>
                                <img src="/banner2.jpg" className='w-full'/>
                                <div className='info absolute top-0 -right-[100%] transition-all opacity-0 duration-700 w-[50%] h-[100%]  z-50 p-8 flex items-center flex-col'>
                                    <h3 className='text-[18px] font-[500] -right-[100%] relative opacity-0 duration-[2s] w-full text-left mb-3'>Big saving sales day</h3>
                                    <h1 className='text-[35px] font-[700] mb-3 -right-[100%] relative opacity-0 duration-[2.5s]'>Buy New Trend Women Black Cotton Blend Top</h1>
                                    <h3 className='text-[18px] font-[500] flex items-center gap-3 w-full text-left mb-3
                                    -right-[100%] relative opacity-0 duration-[3s]'>Starting At Only <span className='text-[30px] font-[700] text-primary'>$1000</span></h3>
                                    <div className="w-full flex justify-start">
                                        <Link to='/'>
                                            <Button className="btn-org ">Shop Now</Button><br/>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className='item rounded-md overflow-hidden relative'>
                                <img src="/banner2.jpg" className='w-full'/>
                                <div className='info absolute top-0 -right-[100%] transition-all opacity-0 duration-700 w-[50%] h-[100%]  z-50 p-8 flex items-center flex-col'>
                                    <h3 className='text-[18px] font-[500] -right-[100%] relative opacity-0 duration-[2s] w-full text-left mb-3'>Big saving sales day</h3>
                                    <h1 className='text-[35px] font-[700] mb-3 -right-[100%] relative opacity-0 duration-[2.5s]'>Buy New Trend Women Black Cotton Blend Top</h1>
                                    <h3 className='text-[18px] font-[500] flex items-center gap-3 w-full text-left mb-3
                                    -right-[100%] relative opacity-0 duration-[3s]'>Starting At Only <span className='text-[30px] font-[700] text-primary'>$1000</span></h3>
                                    <div className="w-full flex justify-start">
                                        <Link to='/'>
                                            <Button className="btn-org ">Shop Now</Button><br/>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
        </div>
    </section>
    
  )
}

export default HomeBannerV2