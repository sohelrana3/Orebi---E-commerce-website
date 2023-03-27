import React from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Container from '../componet/Lyaouts/Container'
import Inputbox from '../componet/Lyaouts/Inputbox'
import Headding from '../componet/Lyaouts/Headding'
import Formch from '../componet/Lyaouts/Formch'
import Button from '../componet/Lyaouts/Button'

const Singup = () => {
  return (
    <Container>
        <Badcam />
        <div className='w-full border-b border-[#F0F0F0] pb-5 md:pb-16'>
            <p className='w-ful lg:w-1/3 text-[#767676] font-dm font-normal text-sm'>Lorem Ipsum is simply dummy  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='mt-5 sm:mt-7 md:mt-10 lg:mt-14 border-b border-[#F0F0F0] pb-5 sm:pb-7 md:pb-10 lg:pb-16'>
            <Headding title='Your Personal Details' /> 
            <div className='md:flex w-full lg:w-3/4 gap-x-10'>
                <Inputbox as='input' title='First Name' placeholder="First Name" />
                <Inputbox as='input' title='Last Name' placeholder="Last Name" />
            </div>
            <div className='md:flex w-full lg:w-3/4 gap-x-10'>
                <Inputbox as='input' title='Email address' placeholder="company@domain.com" />
                <Inputbox as='input' title='Telephone' placeholder="Your Phone Namber" />
            </div>
        </div>
        <div className='mt-5 sm:mt-7 md:mt-10 lg:mt-14 border-b border-[#F0F0F0] pb-5 sm:pb-7 md:pb-10 lg:pb-16'>
            <Headding title='New Customer' /> 
            <div className='md:flex w-full lg:w-3/4 gap-x-10'>
                <Inputbox as='input' title='Address 1' placeholder="4279 Zboncak Port Suite 6212" />
                <Inputbox as='input' title='Address 2' placeholder="-" />
            </div>
            <div className='md:flex w-full lg:w-3/4 gap-x-10'>
                <Inputbox as='input' title='city' placeholder="Your City" />
                <Inputbox as='input' title='Post Code' placeholder="8510" />
            </div>
            <div className='md:flex w-full lg:w-3/4 gap-x-10'>
                <Inputbox as='input' title='Country' placeholder="Please select" />
                <Inputbox as='input' title='Region/State' placeholder="Please select" />
            </div>
        </div>
        <div className='mt-5 sm:mt-7 md:mt-10 lg:mt-14 border-b border-[#F0F0F0] pb-5 sm:pb-7 md:pb-10 lg:pb-16'>
            <Headding title='Your Password' /> 
            <div className='md:flex w-full lg:w-3/4 gap-x-10'>
                <Inputbox as='input' title='Password' placeholder="Password" />
                <Inputbox as='input' title='Repeat Password' placeholder="Repeat Password" />
            </div>
        </div>
        <div className='flex gap-x-2.5 mt-16'>
        <input type="checkbox"/>
        <p>I have read and agree to the Privacy Policy</p>
        </div>
        <div className='flex  gap-x-9 mt-9'>
            <p>
                Subscribe Newsletter
            </p>
            <Formch title='Yes' />
            <Formch title='No' />
        </div>
        <div className='mt-7'>
            <Button title='Login' />
        </div>
    </Container>
  )
}

export default Singup