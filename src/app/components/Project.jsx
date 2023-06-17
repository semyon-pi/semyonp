import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <section className='md:my-24 my-14'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
        <div className='flex flex-wrap items-center mx-auto max-w-7xl'>
          <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
            <div>
              <div className='relative w-full max-w-lg'>
                <div className='absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>

                <div className='absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
                <div className='relative'>
                  <Image
                    width={500}
                    height={500}
                    className='object-cover object-center mx-auto rounded-lg shadow-2xl'
                    alt='hero'
                    src='/assets/pexels.jpg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
            <span className='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase'>
              {' '}
              Your tagline{' '}
            </span>
            <h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl '>
              Medium length display headline.
            </h1>
            <p className='mb-8 text-base leading-relaxed text-left '>
              Free and Premium themes, UI Kit's, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
            <div className='mt-0 lg:mt-6 max-w-7xl sm:flex'>
              <div className='mt-3 rounded-lg sm:mt-0'>
                <button className='btn btn-primary'>Link</button>
              </div>
              <div className='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
                <button className='btn btn-outline'>Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
