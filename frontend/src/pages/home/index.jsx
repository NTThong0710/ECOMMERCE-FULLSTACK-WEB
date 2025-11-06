import AdBannerSlider from "../../components/AdsBannerSlider";
import HomeCatSlider from "../../components/HomeCatSlider"
import HomeSlider from "../../components/HomeSlider"
import { TbTruckDelivery } from "react-icons/tb";

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import ProductsSlider from "../../components/ProductsSlider";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BlogItem from "../../components/BlogItem";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider/>
      <HomeCatSlider/>
  
      <section className="bg-white py-8">
        <div className="container flex items-center flex-col lg:flex-row gap-5">
          <div className="part1 w-[70%]"><HomeBannerV2/></div>
          <div className="part2 w-[30%] flex items-center gap-5"><BannerBoxV2/></div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec w-[65%]">
              <Box sx={{ maxWidth: { xs: 320, sm: 800 }, bgcolor: 'background.paper' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >

                  <Tab label="Fashion"/>
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductsSlider items={6}/>
          
        </div>
      </section>
    
      
      

      <section className="py-4 pt-2 bg-white">
        <div className='container'>
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] 
          flex items-center justify-between rounded-md mb-5">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]"/>
              <span className='text-[20px] uppercase
              font-[600]'>Free Shipping</span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
            </div>
            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>
          <AdBannerSlider items={4}/>
        </div>
      </section>

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6}/>
          
        </div>
      </section>

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6}/>
          
        </div>
      </section>
      <div className="bg-white py-5 pt-0">
        <div className="container">
          <AdBannerSlider items={4}/>
        </div>
      </div>

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Wellness</h2>
          <ProductsSlider items={6}/>
        </div>
      </section>
      
      <div className="bg-white py-5 pt-0 blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      
    </>
  )
}

export default Home