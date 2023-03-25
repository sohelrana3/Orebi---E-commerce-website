import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Badcam = ({title}) => {
    console.log(window.location.pathname);
  return (
    <div className='my-10 sm:my-16 md:my-20 lg:my-28'>
        <h1 className='mb-3 font-dm font-bold text-5xl capitalize'>{window.location.pathname.split("/")[1]}</h1>
        <p className='flex items-center gap-x-2 font-normal font-dm text-[#767676]'>
          <Link to='/'>Home</Link><FaAngleRight/> {window.location.pathname.split("/")[1]}
        </p>
    </div>
  )
}

export default Badcam