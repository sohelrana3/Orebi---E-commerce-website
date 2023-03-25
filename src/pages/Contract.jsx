import React from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Button from '../componet/Lyaouts/Button'
import Container from '../componet/Lyaouts/Container'
import Inputbox from '../componet/Lyaouts/Inputbox'

const Contract = () => {
  return (
    <Container>
        <Badcam />
        <div className='w-2/4'>
          <h2 className='text-dm text-[39px] font-bold text-primary mb-10'>Fill Up a form</h2>
          <Inputbox as="input" placeholder="Your Name" title="Your name here"/>
          <Inputbox as="input" placeholder="Your Email" title="Your email here" />
          <Inputbox as="Textarea" rows="6" placeholder="Your message here" title="Message" />
        </div>
        <div className='mt-10'>
          <Button />
        </div>
        <div className='w-full h-[574px] mt-36'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.1202763159035!2d90.35425382437471!3d23.78087273829727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0be89363e87%3A0x3795036c15355c82!2sKallyanpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1679552023453!5m2!1sen!2sbd"
        width='100%' height='100%'></iframe>
        </div>
    </Container>
    
  )
}

export default Contract