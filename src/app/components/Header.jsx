import React from 'react'
import AnimatedText from './animated/AnimatedText'

const Header = () => {
  const headingContent = (
    <h2 className='text-white text-xl font-bold'>
      Semyon Pinhasov - Software Developer
    </h2>
  )
  const headingParagraph = (
    <p className='header py-2 my-4 text-xl'>
      Passionate Web Developer and Adventurous Explorer, merging technology and
      creativity to craft captivating digital experiences. Bringing together my
      love for coding and my insatiable curiosity for the world, I'm here to
      build innovative websites that leave a lasting impact..
    </p>
  )
  return (
    <section className='sm:my-24 my-14  h-screen'>
      <div className='md:px-24 px-8 h-96 flex items-center'>
        <div>
          <AnimatedText heading={headingContent} fromRight={false} />
          <AnimatedText heading={headingParagraph} fromRight={true} />
        </div>
      </div>
    </section>
  )
}

export default Header
