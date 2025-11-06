
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import '../HomeSlider/index.css'

// import required modules
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
const HomeSlider = () => {
  return (
    <div className='homeSlider py-4'>
      <div className='container'>
          <Swiper spaceBetween={20}
          autoplay={{
            delay:2500,
            disableOnInteraction: false,
          }} 
          
          effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow,Autoplay]} className="mySwiper"
          >
          <SwiperSlide>
              <div className='item rounded-[20px] overflow-hidden'>
                <img src="https://serviceapi.spicezgold.com/download/1755503418386_NewProject(12).jpg" alt="" />
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img src="https://serviceapi.spicezgold.com/download/1755503364377_1721277298204_banner.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" 
              alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" 
              alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper> 
      </div>

    </div>
  )
}

export default HomeSlider