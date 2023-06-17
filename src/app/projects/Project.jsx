import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project, reverse }) => {
  const { githubLink, url, image, title, paragraph, tech } = project

  return (
    <section>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
        <div
          className={`flex flex-wrap items-center mx-auto max-w-7xl ${
            reverse ? 'flex-row-reverse' : ''
          }`}
        >
          <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
            <div>
              <div className='relative w-full max-w-lg'>
                <div className='absolute top-0 rounded-full bg-red-200 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div className='absolute rounded-full bg-orange-100 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
                <div className='relative'>
                  <Image
                    width={400}
                    height={400}
                    className='object-cover object-center mx-auto rounded-lg shadow-2xl'
                    alt='hero'
                    src={`/assets/${image}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
            <span className='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase'>
              {tech}
            </span>
            <h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl'>
              {title}
            </h1>
            <p className='mb-8 text-base leading-relaxed text-left text-gray-500'>
              {paragraph}
            </p>
            <div className='mt-0 lg:mt-6 max-w-7xl sm:flex'>
              <div className='mt-3 rounded-lg sm:mt-0'>
                <Link
                  href={githubLink}
                  className='btn btn-outline'
                  target='_blank'
                >
                  <svg
                    viewBox='0 0 1024 1024'
                    fill='currentColor'
                    height='2em'
                    width='2em'
                  >
                    <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z' />
                  </svg>
                </Link>
              </div>
              <div className='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
                <Link href={url} className='btn btn-outline' target='_blank'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    height='2em'
                    width='2em'
                  >
                    <path d='M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z' />
                    <path d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
