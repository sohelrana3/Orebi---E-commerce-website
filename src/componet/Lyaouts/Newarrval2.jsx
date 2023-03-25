import React from 'react'
import Container from './Container'
import Headding from './Headding'
import Flex from './Flex'
import Productsitem from './Productsitem'
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'

const Newarrval2 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className='sm:mt-7 md:mt-10 lg:mt-20 xl:mt-32'>
            <Container>
                <Headding title='New Arrivals' />
                <Slider {...settings}>
                     <div className='sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_1.png' bages={true} />
                    </div>
                    <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_2.png' bages={true} />
                    </div>
                    <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_3.png' bages={true} />
                    </div>
                    <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_4.png' bages={true} />
                    </div>
                     <div className='sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_1.png' bages={true} />
                    </div>
                    <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_2.png' bages={true} />
                    </div>
                    <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_3.png' bages={true} />
                    </div>
                    <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                        <Productsitem src='images/p_4.png' bages={true} />
                    </div>
                  
                </Slider>
            </Container>
        </div>
      )
}
export default Newarrval2