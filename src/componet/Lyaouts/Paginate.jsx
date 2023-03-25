import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Productsitem from '../Lyaouts/Productsitem'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div className='sm:w-full md:w-[49%] lg:w-[32%]'>
             <Productsitem  src='images/p_1.png' bages={true} />
            </div>
          ))}
      </>
    );
  }
const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
  
    setItemOffset(newOffset);
  };

  return (
    <>
     <div className='md:flex md:flex-wrap md:justify-between'>
      <Items currentItems={currentItems} />
     </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        pageClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3 text-while font-dm font-normal text-sm"
        pageLinkClassName=""
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        containerClassName="flex flex-wrap gap-x-3 mt-12"
        activeClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3 bg-black text-white font-dm font-normal text-sm"
      />
      <p className='lg:absolute lg:bottom-0 lg:right-0 mt-3 lg:mt-0 font-dm font-normal text-sm'>Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}</p>
    </>
  );
}

export default Paginate