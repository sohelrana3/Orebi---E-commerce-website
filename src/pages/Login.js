import React from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Button from '../componet/Lyaouts/Button'
import Container from '../componet/Lyaouts/Container'
import Headding from '../componet/Lyaouts/Headding'
import Inputbox from '../componet/Lyaouts/Inputbox'

const Login = () => {
  return (
    <Container>
        <Badcam />
        <div className='w-full border-b border-[#F0F0F0] pb-16'>
            <p className='w-1/3 text-[#767676] font-dm font-normal text-sm'>Lorem Ipsum is simply dummy  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='mt-14'>
            <Headding title='Returning Customer' /> 
            <div className='flex w-3/4 gap-x-10'>
                <Inputbox as='input' title='Email address' placeholder="company@domain.com" />
                <Inputbox as='input' title='Password' placeholder="******" />
            </div>
            <div className='mt-7'>
                <Button title='Login' />
            </div>
            <div className='mt-32'>
                <Headding title='New Customer' /> 
                <p className='w-1/3 text-[#767676] font-dm font-normal text-sm'>Lorem Ipsum is simply dummy  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <div className='mt-12'>
                    <Button title='Continue' />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Login