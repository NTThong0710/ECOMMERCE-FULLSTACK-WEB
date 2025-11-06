// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from '../ProductItem';
// import required modules
import { Navigation } from 'swiper/modules';

const ProductsSlider = (props) => {
  return (
    <div className='productSlider'>
        <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductsSlider