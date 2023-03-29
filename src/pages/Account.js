import React from 'react'
import Badcam from '../componet/Lyaouts/Badcam'
import Container from '../componet/Lyaouts/Container'
import Flex from '../componet/Lyaouts/Flex'
import List from '../componet/Lyaouts/List'
import Listitem from '../componet/Lyaouts/Listitem'

const Account = () => {
  return (
    <Container>
      <Badcam />
      <Flex className='flex'>
        <div className='w-1/3 bg-red-500'>
          <List>
           <Listitem listitem='Dashboard'/>
           <Listitem listitem='Other'/>
           
          </List>
        </div>
        <div className='w-9/12 bg-green-500'>
          <h1>hell0</h1>
        </div>
      </Flex>
    </Container>
  )
}

export default Account