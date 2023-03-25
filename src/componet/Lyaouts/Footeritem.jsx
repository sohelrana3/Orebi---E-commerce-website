import React from 'react'
import List from './List'
import Listitem from './Listitem'

const Footeritem = ({title}) => {
  return (
    <List>
          <Listitem className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]" listitem={title}/>
    </List>
  )
}

export default Footeritem