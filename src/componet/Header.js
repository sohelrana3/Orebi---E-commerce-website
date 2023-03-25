import React, { useRef } from 'react'
import Container from './Lyaouts/Container'
import Flex from './Lyaouts/Flex'
import Dropdown from './Lyaouts/Dropdown'
import Images from './Lyaouts/Images'
import Form from './Lyaouts/Form'
import {FaBars, FaSearch, FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import {RxTriangleDown} from 'react-icons/rx'
import {ImCross} from 'react-icons/im'
import List from './Lyaouts/List'
import Listitem from './Lyaouts/Listitem'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  let [Catagory,setCatagory] = useState(false)
  let [User, setUser] = useState(false)
  let [Shop, setShop] = useState(false)
  let Catagoryref = useRef();
  let Userref = useRef();
  let Shopref = useRef();
  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
      //Catagoru if condision
     if(Catagoryref.current.contains(e.target)){
      setCatagory(true)
     }else{
      setCatagory(false)
     }
     // user if  condision
     if(Userref.current.contains(e.target)){
      setUser(true)
     }else{
      setUser(false)
     }
     if(Shopref.current.contains(e.target)){
      setShop(true)
     }else{
      setShop(false)
     }
    })
  },[])

  return (
   <div className='bg-[#f3f3f3]'>
        <Container>
            <Flex className="flex justify-between items-center">
              <div>
                <Dropdown className='z-50 cursor-pointer relative'dropref={Catagoryref}>
                  <p className='flex items-center gap-x-2.5'>
                    <FaBars/>
                    <span className='hidden lg:inline'>Shop Your Catagory</span>
                    </p>
                    {Catagory && ( 
                      <List className='absolute top-9 bg-[#262626] w-[263px]'>
                        <Listitem className='font-dm text-sm font-normal py-4 px-5 text-[#b1b5b5] border border-solid border-[#292a2a] hover:text-white hover:px-7' listitem="Accesories" />
                        <Listitem className='font-dm text-sm font-normal py-4 px-5 text-[#b1b5b5] border border-solid border-[#292a2a] hover:text-white hover:px-7' listitem="Furniture" />
                        <Listitem className='font-dm text-sm font-normal py-4 px-5 text-[#b1b5b5] border border-solid border-[#292a2a] hover:text-white hover:px-7' listitem="Electronics" />
                        <Listitem className='font-dm text-sm font-normal py-4 px-5 text-[#b1b5b5] border border-solid border-[#292a2a] hover:text-white hover:px-7' listitem="Clothes" />
                        <Listitem className='font-dm text-sm font-normal py-4 px-5 text-[#b1b5b5] border border-solid border-[#292a2a] hover:text-white hover:px-7' listitem="Home appliances" />
                      </List>
                    )}
                </Dropdown>
              </div>
              <div className='w-[600px] relative py-4'>
                <Form className='py-4 px-5 w-full placeholder:text-[#c4c4c4]' placeholder='Search Products' />
                <FaSearch className='absolute top-9 right-4' />
              </div>
              <div>
                <Flex className='flex gap-x-10'>
                  <div className='flex'>
                  <Dropdown className='z-50 flex cursor-pointer relative'dropref={Userref}>
                  <FaUserAlt />
                    <RxTriangleDown />
                    {User && ( 
                      <List className='absolute top-9 right-0 bg-white w-[263px]'>
                        <Listitem href='login' className='font-dm text-sm font-normal py-4 px-5 text-[#767676] text-center border-b border-solid border-[#f0f0f0] hover:text-white  hover:bg-[#262626]' listitem="My Account" />
                        <Listitem className='font-dm text-sm font-normal py-4 px-5 text-[#767676] text-center border-b border-solid border-[#f0f0f0] hover:text-white hover:bg-[#262626]' listitem="Log Out" />                   
                      </List>
                    )}
                </Dropdown>
                    
                  </div>
                  <div>
                    <Dropdown className='z-50 flex cursor-pointer relative'dropref={Shopref}>
                      <FaShoppingCart />
                      {Shop && ( 
                        <div className='w-[360px] absolute top-9 right-0 bg-white p-5 border border-solid border-[#f5f5f3]'>
                          <div className=' mb-5 bg-[#f5f5f3]'>
                            <Flex className='flex gap-x-4 border-b border-solid border-[#a39c9c]'>
                              <div className='flex w-1/3'>
                                <Images imgsre="images/p_1.png"/>
                              </div>
                              <div className='flex w-2/3 flex-col justify-center relative'>
                                <h3 className='font-dm text-sm font-bold text-primary mb-2.5'>Black Smart Watch</h3>
                                <p className='font-dm text-sm font-bold text-primary'>$44.00</p>
                                <ImCross className='absolute top-1/2 right-4' />
                              </div>
                            </Flex>                              
                          </div>
                          <div className=''>
                            <h4 className='my-2.5'>Subtotal: <span>$44.00</span></h4>
                            <Link className='mr-2.5 font-dm text-sm font-bold text-primary py-4 px-10  border border-solid border-primary inline-block' to='#'>View Cart</Link>
                            <Link className='font-dm text-sm font-bold text-white bg-primary py-4 px-10  border border-solid border-primary inline-block' to='#'>Checkout</Link>
                          </div>
                        </div>
                      )}
                    </Dropdown>
                  </div>
                </Flex>
              </div>
            </Flex>
        </Container>
   </div>
  )
}

export default Header