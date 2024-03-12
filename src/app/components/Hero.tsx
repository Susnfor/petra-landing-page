import React from 'react'
import Image from 'next/image'
import heroimg from '../assets/foodclean.svg'

export const Hero = () => {
  return (
    <div className='min-h-dvh flex justify-between relative p-0 m-0'>
        <div id='text-headings' className='text-4xl pt-40 ml-10'>
            <h2 className='uppercase text-third font-light pb-5'>The Restaurant</h2>
            <h1 className='text-secondary font-bold text-6xl pb-5'>Italian & Mexican</h1>
            <h2 className='text-darktext pb-12'>Breakfast and Brunch</h2>
            <button className='text-white bg-third py-2 px-4 rounded-full text-xl'>View Menu</button>

        </div>
        <div id='hero-img' className=' relative'>
            <Image src={heroimg}  
            // fill={true}
            width={900} height={800} 
            alt='hero-img' />

        </div>
    </div>
  )
}
