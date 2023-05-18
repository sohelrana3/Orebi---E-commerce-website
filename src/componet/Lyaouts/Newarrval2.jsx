import React from 'react'
import Container from './Container'
import Headding from './Headding'
import Flex from './Flex'
import Productsitem from './Productsitem'
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import { useRef } from 'react'

const Newarrval2 = () => {
    let coustom = useRef()
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
      let next = ()=>{
        coustom.current.slickNext()
      }
      let prev = ()=>{
        coustom.current.slickPrev()
      }
    return (
        <div className='sm:mt-7 md:mt-10 lg:mt-20 xl:mt-32'>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <Headding title='New Arrivals' />
                    </div>
                    <div className='flex gap-x-6 '>
                    <FaAngleLeft onClick={prev} className='text-2xl hover:text-white hover:bg-primary hover:rounded-full'/>
                    <FaAngleRight onClick={next} className='text-2xl hover:text-white hover:bg-primary hover:rounded-full'/> 
                    </div>
                </div>
            
                <Slider ref={coustom} {...settings}>
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