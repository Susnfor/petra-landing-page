import React from 'react'
import Image from 'next/image'
import heroimg from '../assets/foodclean.svg'
import { ClockIcon, MapPinIcon, PhoneIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'
import { Popup } from './Popup'

export const Hero = () => {
  return (
    <div className='min-h-dvh flex justify-between relative p-0 m-0 flex-col md:flex-row order-2'>
        <div id='text-headings' className='text-4xl pt-40 ml-10'>
            <h2 className='uppercase text-third font-light pb-5'>The Restaurant</h2>
            <h1 className='text-secondary font-bold text-6xl pb-5'>Italian & Mexican</h1>
            <h2 className='text-darktext pb-12'>Breakfast and Brunch</h2>
            <button className='text-white bg-third py-2 px-4 rounded-full text-xl'>View Menu</button>
            <div 
            className='pt-10'
            >
              <div className='flex flex-col lg:flex-row '>
            <Popup  title='Cusine' desc='Italian' extra='Mexican'Icon={<GlobeEuropeAfricaIcon height={30} width={30} className='text-third text-white '/>} />
            <Popup  title='Hours' desc='Mon - Fri: 11:30am - 9pm' extra='Sat - Sun: 11:30am - 10pm' Icon={<ClockIcon height={30} width={30} className='text-third text-white '/>} />
            </div>
            <div className='flex flex-col lg:flex-row '>
            <Popup  title='Address' desc='123 Main Street' extra='123 Main Street' Icon={<MapPinIcon height={30} width={30} className='text-third text-white '/>} />
            <Popup  title='Phone' desc='123-456-7890' extra='123-456-7890' Icon={<PhoneIcon height={30} width={30} className='text-third text-white '/>} />
            </div>
            

            </div>
           

        </div>
        
        <div id='hero-img' className='md:h-[800px] md:w-[800px] h-[350px] w-[350px] relative order-1'>
            <Image src={heroimg}  
            fill={true}
            // width={900} height={800} 
            alt='hero-img' />

        </div>
    </div>
  )
}
