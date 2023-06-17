'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2, // Adjust the delay between each child animation
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const Cards = () => {
  return (
    <section>
      <div className='relative items-center w-full  py-12 mx-auto  max-w-7xl'>
        <AnimatePresence>
          <motion.div
            className='grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <motion.div className='p-6' variants={childVariants}>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-red-600 rounded-full bg-orange-50'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height='1em'
                  width='1em'
                >
                  <path d='M218.9 636.3l42.6 26.6c.1.1.3.2.4.3l12.7 8 .3.3a186.9 186.9 0 0094.1 25.1c44.9 0 87.2-15.7 121-43.8a256.27 256.27 0 01164.9-59.9c52.3 0 102.2 15.7 144.6 44.5l7.9 5-111.6-289V179.8h63.5c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8H264.7c-4.4 0-8 3.6-8 8v51.9c0 4.4 3.6 8 8 8h63.5v173.6L218.9 636.3zm333-203.1c22 0 39.9 17.9 39.9 39.9S573.9 513 551.9 513 512 495.1 512 473.1s17.9-39.9 39.9-39.9zM878 825.1l-29.9-77.4-85.7-53.5-.1.1c-.7-.5-1.5-1-2.2-1.5l-8.1-5-.3-.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8a256.27 256.27 0 01-164.9 59.9c-53 0-103.5-16.1-146.2-45.6l-28.9-18.1L146 825.1c-2.8 7.4-4.3 15.2-4.3 23 0 35.2 28.6 63.8 63.8 63.8h612.9c7.9 0 15.7-1.5 23-4.3a63.6 63.6 0 0036.6-82.5z' />
                </svg>
              </div>
              <h1 className='mx-auto mb-8 text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-xl'>
                Crafting Seamless Digital Experiences
              </h1>
              <p className='mx-auto text-base leading-relaxed text-gray-500'>
                With expertise in both front-end and back-end development, I
                specialize in creating seamless digital experiences that
                captivate users and deliver tangible results. From designing
                elegant user interfaces to implementing robust server-side
                functionality, I bring a holistic approach to web development
                that ensures exceptional quality and performance.
              </p>
            </motion.div>

            <motion.div className='p-6' variants={childVariants}>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-red-600 rounded-full bg-orange-50'>
                <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  height='1em'
                  width='1em'
                >
                  <path d='M21 7h-6a1 1 0 00-1 1v3h-2V4a1 1 0 00-1-1H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1zM8 6h2v2H8V6zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm9 4h-2v-2h2v2zm0-4h-2v-2h2v2z' />
                </svg>
              </div>
              <h1 className='mx-auto mb-8 text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-xl'>
                Empowering Businesses
              </h1>
              <p className='mx-auto text-base leading-relaxed text-gray-500'>
                As a full stack web developer, I thrive on empowering businesses
                with innovative web solutions. By harnessing the power of
                cutting-edge technologies, I build scalable and secure web
                applications that enhance productivity, optimize processes, and
                drive growth. My strong problem-solving skills and attention to
                detail allow me to tackle complex challenges head-on, delivering
                solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div className='p-6' variants={childVariants}>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-red-600 rounded-full bg-orange-50'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <path d='M5 13v.875C5 17.258 7.686 20 11 20' />
                  <path d='M9 6 A3 3 0 0 1 6 9 A3 3 0 0 1 3 6 A3 3 0 0 1 9 6 z' />
                  <path d='M21 18 A3 3 0 0 1 18 21 A3 3 0 0 1 15 18 A3 3 0 0 1 21 18 z' />
                  <path d='M16 9l2 2 2-2' />
                  <path d='M18 10v-.875C18 5.742 15.314 3 12 3M3 15l2-2 2 2' />
                </svg>
              </div>
              <h1 className='mx-auto mb-8 text-md font-semibold leading-none tracking-tighter text-neutral-600 lg:text-xl'>
                Transforming Ideas
              </h1>
              <p className='mx-auto text-base leading-relaxed text-gray-500'>
                With a passion for bridging the gap between creativity and
                functionality, I bring your visions to life through meticulous
                planning, strategic architecture, and precise coding. Whether
                it&apos;s an e-commerce platform, a content management system,
                or a custom web application, I have the skills and experience to
                turn your dreams into reality, one line of code at a time.
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Cards
