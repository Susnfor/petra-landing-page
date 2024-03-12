import { useState } from 'react'
import Link from 'next/link'
import { ThemeChange } from './ThemeChange'
import { ChartBarIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

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
    const [toggle, setToggle] = useState(false);
  return (
    <div className='flex justify-between font-extrabold pt-10 md:px-20 px-10 sticky w-full z-10 transition-all'>

        {
            !toggle &&  <div id='logo' className='relative'>
            <h1 className='text-3xl text-secondary'>Petra</h1>
        </div>
        }
        {/* <div id='logo' className='relative'>
            <h1 className='text-3xl text-secondary'>Foodie</h1>
        </div> */}
        <div id='navitems' className='text-xl sm:flex justify-evenly items-center gap-14 relative hidden w-full' >
            
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

        <div className='sm:hidden relative w-full z-20 flex-row items-center'>
            <div className='flex flex-row  justify-end items-center relative '>
             <ThemeChange handleChange={() => setIsDark(!isDark)} isChecked={isDark} />
             <Bars3BottomRightIcon className="w-6 h-6 text-secondary" onClick={() => setToggle(!toggle)}/>
             </div>

             <div 
              className={`${toggle ? 'animate-menu-open ' : 'animate-menu-close sr-only '} 
               flex flex-col items-center gap-14 bg-primary h-dvh`} 
              > 
              <XMarkIcon className="w-6 h-6 text-secondary " onClick={() => setToggle(!toggle)}/> 
             {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="text-xl text-secondary hover:text-third"
                  onClick={() => setToggle(!toggle)}
                >
                  {item.title}
                </Link>
              ))}
              </div>

        </div>







    </div>
  )
}
