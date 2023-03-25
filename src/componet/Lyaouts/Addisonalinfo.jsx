import React from 'react'
import Container from './Container'
import Flex from './Flex'
import {RiNumber2} from 'react-icons/ri'
import {FaCarSide} from 'react-icons/fa'
import {AiOutlineReload} from 'react-icons/ai'

const Addisonalinfo = () => {
  return (
    <Container>
        <Flex className='flex justify-between py-2 sm:py-7 border-b-2 border-solid border-[#F0F0F0]'>
            <Flex className='flex gap-x-1 sm:gap-x-2.5 items-center '>
             <RiNumber2 className='text-[10px] sm:text-2xl' />
             <p className='font-dm text-[10px] sm:text-base font-normal text-[#6D6D6D]'>Two years warranty</p>
            </Flex>
            <Flex className='flex gap-x-2.5 items-center'>
             <FaCarSide className='text-[10px] sm:text-2xl' />
             <p className='font-dm text-[10px] sm:text-base font-normal text-[#6D6D6D]'>Free shipping</p>
            </Flex>
            <Flex className='flex gap-x-2.5 items-center'>
             <AiOutlineReload className='text-[10px] sm:text-2xl' />
             <p className='font-dm text-[10px] sm:text-base font-normal text-[#6D6D6D]'>Return policy in 30 days</p>
            </Flex>
        </Flex>
    </Container>
  )
}

export default Addisonalinfo