import React, { useState } from 'react'
import Images from './Images';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from '../Lyaouts/Container';

const Banner = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    // <Slider {...settings}>
    //   <div className='w-full'>
    //   <Images imgsre='Images/Banner.png' />
    //   </div>
    //   <div>
    //   <Images imgsre='Images/banner2.png' />
    //   </div>
    //   <div>
    //   <Images imgsre='Images/Banner.png' />
    //   </div>  
    // </Slider>
 <Container>
 <div>
    <Slider {...settings}>
      <div>
      <Images imgsre='Images/Banner.png' />
      </div>
      <div>
      <Images imgsre='Images/Banner.png' />
      </div>
      <div>
      <Images imgsre='Images/Banner.png' />
      </div>
      
    </Slider>
  </div>
   
 </Container>
   

  )
}

export default Banner