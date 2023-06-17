import Image from 'next/image'
import React from 'react'

const Article = () => {
  return (
    <div className='pt-8 sm:flex lg:items-end group'>
      <div className='flex-shrink-0 mb-4 sm:mb-0 sm:mr-4'>
        <Image
          height={100}
          width={100}
          className='w-full rounded-md h-32 lg:w-32 object-cover'
          src='/assets/pexels.jpg'
          alt='text'
        />
      </div>
      <div>
        <span className='text-sm text-gray-500'>August 20.20.21</span>
        <p className='mt-3 text-lg font-medium leading-6'>
          <a
            href='./blog-post.html'
            className='text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl'
          >
            12 Graphic Design Skills You Need To Get Hired (&amp; How to Develop
            Them){' '}
          </a>
        </p>
        <p className='mt-2 text-lg text-gray-500'>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
      </div>
    </div>
  )
}

export default Article
