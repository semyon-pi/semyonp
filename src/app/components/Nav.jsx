'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
const Nav = () => {
  const [navFlag, setNavFlag] = useState(false)
  const route = usePathname()

  const toggleOn = () => {
    // 👇️ passed function to setState
    setNavFlag((navFlag) => !navFlag)
  }

  return (
    <div className='pt-8 my-8 flex justify-between text-black'>
      <div>Semyon</div>
      <ul className='hidden md:flex'>
        <Link href='/' className={`pl-8 ${route == '/' ? 'font-bold' : ''}`}>
          Home
        </Link>
        <Link
          href='/projects'
          className={`pl-8 ${route == '/projects' ? 'font-bold' : ''}`}
        >
          Projects
        </Link>
        <Link
          href='/about'
          className={`pl-8 ${route == '/about' ? 'font-bold' : ''}`}
        >
          About
        </Link>
        <Link
          href='/contact'
          className={`pl-8 ${route == '/contact' ? 'font-bold' : ''}`}
        >
          Contact
        </Link>
      </ul>
      <label className='md:hidden swap swap-rotate bg-white'>
        <input type='checkbox' checked={navFlag} onChange={toggleOn} />
        <svg
          viewBox='0 0 512 512'
          fill='currentColor'
          width='36'
          height='36'
          className='swap-on fill-current'
        >
          <path
            d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'
            fill='black'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='36'
          height='36'
          className='swap-off fill-current'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z'
            fill='black'
          />
        </svg>
      </label>
    </div>
  )
}

export default Nav
