import React, { useEffect, useState} from 'react'
import { MoonIcon, SunIcon  } from '@heroicons/react/24/outline'
type ToggleProps = {
    handleChange: any
    isChecked: boolean
}
export const ThemeChange = ({handleChange, isChecked}: ToggleProps) => {


  return (
    <div className='hover:animate-spin-slow transition-all'>
        <span className=''>
        <input type="checkbox" id="check" className='sr-only peer' onChange={handleChange} />
        
        <label htmlFor="check"
        >

          <span className=''> {isChecked ? <SunIcon className='h-6 w-6 text-third'/> : <MoonIcon className='h-6 w-6 text-third'/>}</span> 
        </label>
        </span>

    
    </div>
  )
}
