import Link from 'next/link'
import React from 'react'
import AnimatedText from '../components/animated/AnimatedText'

const Contact = () => {
  const headingContent = (
    <div class='w-full mx-auto'>
      <h2 className='font-bold text-4xl pb-4'>Let&apos;s chat!</h2>
      <p>You can contact me through any of the following means.</p>
    </div>
  )
  const headingLinks = (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className='py-4'>
        <p className='text-slate-500'>Send me an email</p>
        <Link href={'mailto:Semyonpinhasov@gmail.com'} target='_blank'>
          Semyonpinhasov@gmail.com
        </Link>
      </div>
      <div className='py-4'>
        <p className='text-slate-500'>Follow me on dev.to</p>
        <Link href={'https://dev.to/semyonpi'} target='_blank'>
          https://dev.to/semyonpi
        </Link>
      </div>
      <div className='py-4'>
        <p className='text-slate-500'>Follow me on Github</p>
        <Link href={'https://github.com/semyon-pi'} target='_blank'>
          https://github.com/semyon-pi
        </Link>
      </div>
      <div className='py-4'>
        <p className='text-slate-500'>Connect on LinkedIn</p>
        <Link
          href={'https://www.linkedin.com/in/semyonpinhasov'}
          target='_blank'
        >
          https://www.linkedin.com/in/semyonpinhasov
        </Link>
      </div>
    </div>
  )
  return (
    <section className='md:my-24 my-14 text-black h-screen'>
      <div class='flex flex-col  py-8 mx-auto max-w-7xl'>
        <div class='flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue'>
          <AnimatedText heading={headingContent} fromRight={false} />
          <AnimatedText heading={headingLinks} fromRight={true} />
        </div>
      </div>
    </section>
  )
}

export default Contact
