import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MainSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const MainSlider = () => {
    return (
        <div className='bg-transparent shadow-xl cursor-pointer'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
             
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-slide'><img src={'https://www.paklap.pk/pub/media/easyslide/Best_Gaming_Laptops_in_Pakistan.jpg'} alt="banner" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src={'https://www.paklap.pk/pub/media/easyslide/Dell_Laptops_Prices_in_Pakistan_1.jpg'} alt="banner" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default MainSlider