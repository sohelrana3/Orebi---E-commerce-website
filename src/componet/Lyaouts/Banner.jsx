import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Images from './Images';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';
const Banner = () => {
    let [dotActive, setActiveDot] = useState(0)
    const settings = {
        dots: true,
        beforeChange: (prev, next) => {
            setActiveDot(next);
          },
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
             position:"absolute",
             top: "43%",
             left: "8%",
            
            }}
          >
            <ul style={{
             margin: "0px", 
             position:"absolute",
             top: 0,
             left: 0,
             display: "grid"
            }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
            i == dotActive
           ? {
              width: "30px",
              color: "red",
              borderRight: "3px black solid",
             
            }
            :{
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                
            }
        }
          >
           0 {i + 1}
          </div>
        ),
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              appendDots: dots => (
                <div
                  style={{
                   position:"absolute",
                   top: "23%",
                   left: "1%",
                  
                  }}
                >
                  <ul style={{
                   margin: "0px", 
                   position:"absolute",
                   top: 0,
                   left: 0,
                   display: "grid"
                  }}> {dots} </ul>
                </div>
              ),
              customPaging: i => (
                <div
                  style={
                  i == dotActive
                 ? {
                    width: "30px",
                    color: "red",
                    borderRight: "3px black solid",
                   
                  }
                  :{
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px white solid",
                      
                  }
              }
                >
                 0 {i + 1}
                </div>
              ),
            }
          },
         
        ]
        
      };
      
  return (

    <Slider {...settings}>
      <div className='w-full'>
      <Images imgsre='Images/Banner.png' />
      </div>
      <div>
      <Images imgsre='Images/banner2.png' />
      </div>
      <div>
      <Images imgsre='Images/Banner.png' />
      </div>  
    </Slider>
 
  
   

  )
}

export default Banner