'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Nav = () => {
  const route = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    // <div className='pt-8 my-8 flex justify-between text-black'>
    //   <Link href='/'>
    //     <h2 className='text-2xl font-bold'>SE</h2>
    //   </Link>

    //   <div className='hidden md:flex'>
    //     <Link href='/' className={`pl-8 ${route == '/' ? 'font-bold' : ''}`}>
    //       Home
    //     </Link>
    //     <Link
    //       href='/projects'
    //       className={`pl-8 ${route == '/projects' ? 'font-bold' : ''}`}
    //     >
    //       Projects
    //     </Link>
    //     <Link
    //       href='/about'
    //       className={`pl-8 ${route == '/about' ? 'font-bold' : ''}`}
    //     >
    //       About
    //     </Link>
    //     <Link
    //       href='/contact'
    //       className={`pl-8 ${route == '/contact' ? 'font-bold' : ''}`}
    //     >
    //       Contact
    //     </Link>
    //   </div>
    //   <div className='dropdown dropdown-end sm:hidden z-5'>
    //     <label tabIndex={0} className='sm:hidden swap swap-rotate  bg-orange'>
    //       <input type='checkbox' checked={navFlag} onChange={toggleOn} />
    //       <svg
    //         viewBox='0 0 512 512'
    //         fill='currentColor'
    //         width='36'
    //         height='36'
    //         className='swap-on fill-current'
    //       >
    //         <path
    //           d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'
    //           fill='black'
    //         />
    //       </svg>
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         viewBox='0 0 24 24'
    //         width='36'
    //         height='36'
    //         className='swap-off fill-current'
    //       >
    //         <path fill='none' d='M0 0h24v24H0z' />
    //         <path
    //           d='M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z'
    //           fill='black'
    //         />
    //       </svg>
    //     </label>
    //     <ul
    //       tabIndex={0}
    //       className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
    //     >
    //       <li>
    //         <Link>Item 1</Link>
    //       </li>
    //       <li>
    //         <Link>Item 2</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <nav className='relative'>
      <div className='container px-6 py-8 mx-auto md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <h2 className='text-2xl font-bold'>SE</h2>
          </Link>

          {/* Mobile menu button */}
          <div className='flex lg:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              {!isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 8h16M4 16h16'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className='flex flex-col md:flex-row md:mx-6'>
            <Link
              className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='/'
            >
              Home
            </Link>
            <Link
              className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='/projects'
            >
              Projects
            </Link>
            <Link
              className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='/about'
            >
              About
            </Link>
            <Link
              className='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='contact'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
