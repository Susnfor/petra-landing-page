import React from 'react'
import Link from 'next/link'
import { ThemeChange } from './ThemeChange'

export const navItems = [

    {
        title: 'Menu',
        path:   '#menu',

    },
    {
        title: 'About',
        path:   '#about',

    },
    {
        title: 'Contact',
        path:   '#contact',

    },
   

]

export const Navbar = ({isDark, setIsDark}:any) => {
  return (
    <div className='flex justify-between font-extrabold pt-10 px-20 sticky'>
        <div id='logo' className='relative'>
            <h1 className='text-3xl text-secondary'>Foodie</h1>
        </div>
        <div id='navitems' className='text-xl flex justify-evenly items-center gap-14 relative' >
           {
            navItems.map((item)=>(
                <Link href={item.path} key={item.title} className=' text-darktext'>{item.title}</Link>
            ))
           }
           <div className='flex items-center gap-2 m-0 p-0'>
           <button className='text-white bg-third py-2 px-4 rounded-full'>Sign In</button>
           <ThemeChange handleChange={() => setIsDark(!isDark)} isChecked={isDark} />
           </div>


        </div>



    </div>
  )
}
