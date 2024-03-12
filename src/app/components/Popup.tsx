import React from 'react'
import { ScrollParallax } from 'react-just-parallax'


type PopupProps = {

  title: string,
  Icon: any,
  desc: string,
  extra?: string
}
export const Popup = ({title, Icon,  desc, extra}: PopupProps) => {
  return (
    <ScrollParallax >
    <div className='h-30 relative py-5'>
      
    <div className='h-40 w-52 bg-white rounded-3xl shadow-md flex flex-col justify-center items-center'>
      <h1 className='text-fifth text-xl '>{title}</h1>
      <p className='font-light text-base text-darktext'>{desc}</p>
      <p className='text-base text-darktext'>{extra}</p>
      <div className='absolute top-0 left-7 my-0 bg-yellow-500 rounded-lg shadow-md'>
      {Icon}
      </div>
      </div>
      
      





    </div>
    </ScrollParallax>
  )
}
