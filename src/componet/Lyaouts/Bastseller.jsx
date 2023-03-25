import React from 'react'
import Container from './Container'
import Headding from './Headding'
import Flex from './Flex'
import Productsitem from './Productsitem'

const Bastseller = () => {
  return (
    <div className='sm:mt-7 md:mt-10 lg:mt-20 xl:mt-32'>
        <Container>
            <Headding title='Our Bestsellers' />
            <Flex className='sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10'>
                <div className='sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Productsitem src='images/p_4.png' bages={true} />
                </div>
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Productsitem src='images/p_3.png' bages={true} />
                </div>
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Productsitem src='images/p_2.png' bages={true} />
                </div>
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Productsitem src='images/p_1.png' bages={true} />
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Bastseller