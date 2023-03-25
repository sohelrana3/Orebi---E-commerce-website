import React from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Container from '../componet/Lyaouts/Container'
import Images from '../componet/Lyaouts/Images'


const About = () => {
  return (
    <Container>
       <div>
            <Badcam />
          <div className='grid grid-cols-2 gap-x-10'>
            <div> 
                <Images imgsre='images/aboutimg.png' />
            </div>
            <div>
                <Images imgsre='images/aboutimg.png' />
            </div>
          </div>
          <div>
            <h4 className='text-primary font-dm font-normal text-[39px] mt-28'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
          </div>
          <div className='grid grid-col-1 lg:grid-cols-3 mt-28 gap-x-10'>
            <div>
                <h4 className='text-primary font-dm font-bold text-2xl mb-2'>Our Vision</h4>
                <p className='text-primary font-dm text-sm font-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <h4 className='text-primary font-dm font-bold text-2xl mb-2'>Our Story</h4>
                <p className='text-primary font-dm text-sm font-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div>
                <h4 className='text-primary font-dm font-bold text-2xl mb-2'>Our Brands</h4>
                <p className='text-primary font-dm text-sm font-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
          </div>
       </div>
    </Container>
  )
}

export default About