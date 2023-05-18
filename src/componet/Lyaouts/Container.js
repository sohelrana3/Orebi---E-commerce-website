import React from 'react'
import { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className="max-w-container mx-auto px-4">{children}</div>
  )
}

export default Container