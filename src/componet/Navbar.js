import React from 'react'
import Container  from './Lyaouts/Container'
import Images from './Lyaouts/Images'
import Flex from './Lyaouts/Flex'
import List from './Lyaouts/List'
import Listitem from './Lyaouts/Listitem'
import {RiBarChartHorizontalFill} from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let [show, setshow] = useState(true)
    useEffect(()=>{
        function scrollWidth(){
            if(window.innerWidth < 1024){
                setshow(false)
            }else{
                setshow(true)
            }
        }
        scrollWidth()
        window.addEventListener("resize", scrollWidth);
    },[])
    // let handleClick = ()=>{
    //     setshow(!show)
    // }
  return (
   <nav>
       <Container>
            <Flex className="lg:flex">
                <div className='lg:w-3/12'>
                    <Link to="/">
                      <Images imgsre="images/OREBI©.png"/>
                    </Link>
                </div>
                <div className='w-9/12 w-full'>
                <RiBarChartHorizontalFill onClick={()=>setshow(!show)} className='black lg:hidden ml-auto absolute top-2.5 right-2.5'/>
                {
                    show && (<List className="lg:flex justify-end gap-x-10 mt-5 lg:mt-0">
                    <Listitem href='/' className="font-dm text-sm font-bold hover:font-bold my-2.5 lg:my-0" listitem="Home"/>
                    <Listitem href='about' className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0" listitem="About"/>
                    <Listitem className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0" listitem="Blog"/>
                    <Listitem href='Contract' className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0" listitem="Contract"/>
                </List> 
                  
                )}
              
                </div>
            </Flex>
       </Container>
   </nav>
  )
}

export default Navbar