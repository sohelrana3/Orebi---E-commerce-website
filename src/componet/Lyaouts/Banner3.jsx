import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';
import Images from './Images';

const Banner3 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='bg-[#f5f5f3]'>
       <Container>
       <Slider {...settings}>
            <div>
              <h2>fff</h2>
            </div>
            <div>
                <h2>fff</h2>
            </div>  
        </Slider>
       </Container>
    </div>
  )
}

export default Banner3