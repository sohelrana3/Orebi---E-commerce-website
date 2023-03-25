import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'


const Paginateleftdown = ({title, supdrop}) => {
    let [subdrop, setSubdrop] = useState(supdrop);
    let [subshow, setsubshow] = useState(false);
    let handlesubdrop = ()=>{
        setsubshow(!subshow)
    }
  return (

    <div>
        {subdrop ?
         <div>
            <div onClick={handlesubdrop} className='flex justify-between items-center'>
                <h3 className='cursor-pointer font-dm font-normal text-base text-[#767676] py-5 border-b border-solid border-[#767676] w-full'>{title}</h3>
                <AiOutlinePlus />
            </div>
            {subshow && (
                <div>
                    {/* <h3>ccccc</h3>
                    <h3>ccccc</h3>
                    <h3>ccccc</h3>
                    <h3>ccccc</h3> */}
                </div>
            )}
         </div>
        
        :
        <h3 className='cursor-pointer font-dm font-normal text-base text-[#767676] py-5 border-b border-solid border-[#767676] w-full'>{title}</h3>
        }
    </div>
  )
}

export default Paginateleftdown