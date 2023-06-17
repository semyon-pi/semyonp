import React from 'react'
import Article from './Article'
import Image from 'next/image'

const Articles = () => {
  return (
    <section className='md:my-24 my-14'>
      <div class='relative'>
        <div class='relative flex justify-start'>
          <span class='pr-3 text-lg font-medium text-neutral-600 bg-white'>
            {' '}
            Some of the issues{' '}
          </span>
        </div>
      </div>
      <div class='space-y-8 lg:divide-y lg:divide-gray-100'>
        <Article />
        <div class='pt-8 sm:flex lg:items-end group'>
          <div class='flex-shrink-0 mb-4 sm:mb-0 sm:mr-4'>
            <Image
              height={100}
              width={100}
              className='w-full rounded-md h-32 lg:w-32 object-cover'
              src='/assets/pexels.jpg'
              alt='text'
            />{' '}
          </div>
          <div>
            <span class='text-sm text-gray-500'>August 20.20.21</span>
            <p class='mt-3 text-lg font-medium leading-6'>
              <a
                href='./blog-post.html'
                class='text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl'
              >
                Meet Now What? The essential new podcast for evolving designers{' '}
              </a>
            </p>
            <p class='mt-2 text-lg text-gray-500'>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
