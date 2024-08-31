import React from 'react'
import './Basics.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const Basics:React.FC = () => {
  return (
    <>
<div className="about">
<div className="container">
<h1>ABOUT</h1>
<h2 className='text-center'>The Basics Of Healthy Food</h2>
<h6 className='text-center'>In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur <br /> voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.</h6>


</div>

<div className="slide">
<div className="container">
<div className="swiper">
  
<Swiper

centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
breakpoints={{
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
}}
navigation={true}
modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic1.svg" alt="" className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src="/images/basics/basic2.svg" alt="" className='img-fluid'/></SwiperSlide>
       
      
      </Swiper>
</div>

</div>
</div>

</div>

    </>
  )
}

export default Basics