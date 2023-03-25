import React from 'react'
import Slider from "react-slick";
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
                <Images imgsre='Images/banner2.png' />
            </div>
            <div>
                <Images imgsre='Images/Banner.png' />
            </div>  
        </Slider>
       </Container>
    </div>
  )
}

export default Banner3