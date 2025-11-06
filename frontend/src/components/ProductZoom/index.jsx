import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState (0);
    const zoomSliderBig = useRef()
    const zoomSliderSmall = useRef()

    const goto = (index) =>{
        setSlideIndex(index)
        zoomSliderSmall.current.swiper.slideTo(index)
        zoomSliderBig.current.swiper.slideTo(index)
    }

  return (
    <>
        <div className='flex gap-3'>
            <div className='slider w-[15%]'>
                <Swiper
                    ref={zoomSliderSmall}
                    direction={'vertical'}
                    slidesPerView={4}
                    spaceBetween={10}
                    className="zoomProductSliderThumbs h-[500px] overflow-hidden"
                >
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-100' : 'opacity-30'}`}
                        onClick={()=>goto(0)}>
                            <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-100' : 'opacity-30'}`}
                        onClick={()=>goto(1)}>
                            <img src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" alt="" 
                            className='w-full trasition-all'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-100' : 'opacity-30'}`}
                        onClick={()=>goto(2)}>
                            <img src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-100' : 'opacity-30'}`}
                        onClick={()=>goto(3)}>
                            <img src="https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    ref={zoomSliderBig}
                >
                    <SwiperSlide>
                        <InnerImageZoom src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
                        zoomType='hover' zoomScale={1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <InnerImageZoom src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" 
                        zoomType='hover' zoomScale={1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <InnerImageZoom src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg" 
                        zoomType='hover' zoomScale={1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <InnerImageZoom src="https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg" 
                        zoomType='hover' zoomScale={1}/>
                    </SwiperSlide>
                </Swiper>

            </div>
            
        </div>
        
    </>
  )
}

export default ProductZoom