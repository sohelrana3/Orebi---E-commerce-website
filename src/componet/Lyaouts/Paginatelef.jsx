import React from 'react'
import {RxTriangleDown} from 'react-icons/rx'
import { useState } from 'react'
import Paginateleftdown from './Paginateleftdown'

const Paginatelef = ({title, drop}) => {
    let [Drop, setDrop] = useState(drop)
    let [show, setShow] = useState(drop)
    let handleShowclick = ()=>{
        setShow(!show)
    }
  return (
    <div>
       { Drop 
        ? <div>
            <div onClick={handleShowclick} className='flex justify-between items-center'>
            <h3 className='cursor-pointer font-dm font-bold text-xl pt-5'>{title}</h3>
            <RxTriangleDown />
          </div> 
          { show &&(
            <div>
               <Paginateleftdown title='Catagory 1' supdrop={false}/>
               <Paginateleftdown title='Catagory 2' supdrop={true}/>           
               <Paginateleftdown title='Catagory 1' supdrop={false}/>
               <Paginateleftdown title='Catagory 2' supdrop={true}/>           
               <Paginateleftdown title='Catagory 2' supdrop={true}/>           
             </div> 
          )}  
          
        </div>   
         : <div>
            <div>
                 <h3 className='cursor-pointer font-dm font-bold text-xl pt-5'>{title}</h3>
            </div>
            <div>
               <Paginateleftdown title='Catagory 1' supdrop={false}/>
               <Paginateleftdown title='Catagory 1' supdrop={false}/>
               <Paginateleftdown title='Catagory 2' supdrop={true}/>
               <Paginateleftdown title='Catagory 2' supdrop={true}/>
               <Paginateleftdown title='Catagory 2' supdrop={true}/>
            </div>
         </div>
        }
    </div>
  )
}

export default Paginatelef