import React from 'react'
import { useState } from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Container from '../componet/Lyaouts/Container'
import Flex from '../componet/Lyaouts/Flex'
import Paginate from '../componet/Lyaouts/Paginate'
import Paginatelef from '../componet/Lyaouts/Paginatelef'


const Shop = () => {
  let [SortPagination, setSortPagination] = useState(12)
  let handlePaginateChange = (e) => {
    setSortPagination(+e.target.value);
  }
  return (
    <Container>
        <Badcam  title='Products'/>
        <Flex className='flex gap-x-5'>
          <div className='w-[25%] bg-white hidden sm:block'>
            <div className='pr-5'>
              <Paginatelef title='Shop by Category' drop={false} />
              <Paginatelef title='Shop by Color' drop={true} />
              <Paginatelef title='Shop by Brand' drop={true} />
              <Paginatelef title='Shop by Price' drop={false} />
            </div>
          </div>
          <div className='w-[75%] relative'>
            <div className='flex gap-x-4'>
            <div className='lg:flex items-center gap-x-4'>
              <span className='inline-block'>Sort By :</span>
              <select id="countries" class="md:w-[239px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Featured</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className='lg:flex items-center gap-x-4'>
              <span className='inline-block'>Sort By :</span>
              <select onChange={handlePaginateChange} id="countries" class="md:w-[239px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>12</option>
                <option value="24">24</option>
                <option value="48">48</option>
                <option value="72">72</option>
              </select>
            </div>
            </div>
            <Paginate itemsPerPage={SortPagination} />
          </div>
        </Flex>
    </Container>
  )
}

export default Shop