import React from 'react'
import { Children } from 'react'

const Dropdown = ({children, className, dropref}) => {
  return (
    <div className={className} ref={dropref}>{children}</div>
  )
}

export default Dropdown