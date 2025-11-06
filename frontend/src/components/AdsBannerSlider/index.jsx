import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

import '../AdsBannerSlider/index.css'

const AdBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
        <Swiper 
        slidesPerView={props.items}
        spaceBetween={20}
        navigation={true} modules={[Navigation]} className="smlBtn">
            <SwiperSlide>
                <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp'} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp'} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp'} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img={'https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp'} link={"/"}/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp'} link={"/"}/>
            </SwiperSlide>

        </Swiper>
    </div>

  )
}

export default AdBannerSlider