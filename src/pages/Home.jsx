import React from 'react'
import Addisonalinfo from '../componet/Lyaouts/Addisonalinfo'
import Advertise from '../componet/Lyaouts/Advertise'
import Banner from '../componet/Lyaouts/Banner'
import Banner2 from '../componet/Lyaouts/Banner2'
import Bastseller from '../componet/Lyaouts/Bastseller'
import Middeladd from '../componet/Lyaouts/Middeladd'
import Newarrval2 from '../componet/Lyaouts/Newarrval2'
import Specialoffers from '../componet/Lyaouts/Specialoffers'
import Banner3 from '../componet/Lyaouts/Banner3'


const Home = () => {
  return (
    <>
      <Banner3 />
      <Addisonalinfo />
      <Advertise />
      <Newarrval2 />
      <Bastseller />
      <Middeladd />
      <Specialoffers />
    </>
  )
}

export default Home