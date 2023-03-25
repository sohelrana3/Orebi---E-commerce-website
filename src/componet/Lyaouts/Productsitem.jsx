import React from 'react'
import Bages from './Bages'
import Images from './Images'
import Flex from './Flex'
import {AiFillHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
 import {AiOutlineReload} from 'react-icons/ai'

const Productsitem = ({src, bages}) => {
  return (
  <div>
      <div className='relative group overflow-y-hidden'>
        <Images className='w-full' imgsre={src} />
        { bages &&
        <Bages title='New' />
        }
        <div>
          <div className='bg-transparent h-40 w-full absolute left-0 bottom-[-43%] py-6 px-7 group-hover:bottom-0 ease-in-out delay-150'>
            <Flex className='flex justify-end gap gap-x-1 sm:gap-x-4 items-center'>
              <p className='font-dm text-base font-normal text-[#6d6d6d]'>Add to Wish List</p>
              <AiFillHeart className='text-base'/>
            </Flex>
            <Flex className='my-5 flex justify-end gap gap-x-1 sm:gap-x-4 items-center'>
              <p className='font-dm text-base font-normal text-[#6d6d6d]'>Corparate</p>
              <AiOutlineReload className='text-base'/>
            </Flex>
            <Flex className='flex justify-end gap gap-x-1 sm:gap-x-4 items-center'>
              <p className='font-dm text-base font-normal text-[#6d6d6d]'>Add to Cart</p>
              <FaShoppingCart className='text-base'/>
            </Flex>
          </div>
        </div>
    </div>
    <div>
        <Flex className='flex justify-between items-center mt-6'>
          <h3 className='font-dm font-bold lg:max-xl:text-sm text-xl'>Basic Crew Neck Tee</h3>
          <p className='font-dm font-normal text-base text-[#767676]'>$44.00</p>
        </Flex>
          <p className='font-dm mt-2 lg:mt-4 font-normal text-base text-[#767676]'>Black</p>
    </div>
  </div>
  )
}

export default Productsitem