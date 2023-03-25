import React from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Container from '../componet/Lyaouts/Container'
import Headding from '../componet/Lyaouts/Headding'

const Login = () => {
  return (
    <Container>
        <Badcam />
        <div className='w-full border-b border-[#767676] pb-16'>
            <p className='w-1/3 text-[#767676] font-dm font-normal text-sm'>Lorem Ipsum is simply dummy  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div>
            <Headding className='text-[#767676]' title='Returning Customer' /> 
        </div>
    </Container>
  )
}

export default Login