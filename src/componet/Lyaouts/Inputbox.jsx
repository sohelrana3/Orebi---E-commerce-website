import React from 'react'

const Inputbox = (props) => {
  return (
    <div>
        <h4 className='font-dm text-base font-bold text-primary mb-2.5'>{props.title}</h4>
        < props.as rows={props.rows} placeholder={props.placeholder} className='mb-2.5 pb-2.5 w-full border-b border-solid border-[#767676] outline-none 
        font-dm text-base font-normal text-primary placeholder:font-dm placeholder:text-sm placeholder:font-normal placeholder:text-[#767676] ' />
    </div>
  )
}

export default Inputbox