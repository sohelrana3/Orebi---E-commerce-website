import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({listitem, className, href}) => {
  return (
    <li className={className}>
      <Link to={href}>
        {listitem}
      </Link>
      </li>
  )
}

export default Listitem