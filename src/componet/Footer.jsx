import React from 'react'
import Container from './Lyaouts/Container'
import Flex from './Lyaouts/Flex'
import Footerheadding from './Lyaouts/Footerheadding'
import Footeritem from './Lyaouts/Footeritem'
import Images from './Lyaouts/Images'

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
        <Container>
            <Flex className='grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-0'>
                <div className="w-[10%]">
                    <Footerheadding title='MENU' />
                    <Footeritem title='Home' />
                    <Footeritem title='Shop' />
                    <Footeritem title='About' />
                    <Footeritem title='Contarct' />
                    <Footeritem title='Journal' />
                </div>
                <div className="sm:w-[50%] lg:w-[100%]">
                    <Footerheadding title='SHOP' />
                    <Footeritem title='Category 1' />
                    <Footeritem title='Category 2' />
                    <Footeritem title='Category 3' />
                    <Footeritem title='Category 4' />
                    <Footeritem title='Category 5' />
                </div>
                <div className="sm:w-[50%] lg:w-[100%]">
                    <Footerheadding title='HELP' />
                    <Footeritem title='Privacy Policy' />
                    <Footeritem title='Terms & Conditions' />
                    <Footeritem title='Special E-shop' />
                    <Footeritem title='Shipping' />
                    <Footeritem title='Secure Payments' />
                </div>
                <div className="w-[30%] col-span-2">
                    <div>
                    <Footerheadding title='(052) 611-5711' />
                    <Footerheadding title='company@domain.com' />
                    <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                         575 Crescent Ave. Quakertown, PA 18951
                    </p>
                    </div>
                </div>
                <div className="w-[40%]">
                    <Images imgsre="images/OREBI©.png"/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Footer