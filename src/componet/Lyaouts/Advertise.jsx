import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Images from './Images'
import Flex from './Flex'

const Advertise = () => {
  return (
    <div className='mt-4 sm:mt-10 md:mt-20  lg:mt-36'>
        <Container>
            <Flex className='flex gap-x-5'>
                <div className='max-w-2/4'>
                    <Link to='#'>
                        <Images imgsre='images\Ad_1.png' />
                    </Link>
                </div>
                <div className='max-w-2/4'>
                    <Link to='#'>
                        <Images imgsre='images\Ad_2.png' />
                    </Link> 
                     <Link className='mt-2 sm:mt-5 md:mt-6 lg:mt-10 inline-block' to='#'>
                        <Images imgsre='images\Ad_3.png' />
                    </Link>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Advertise