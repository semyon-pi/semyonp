import Nav from './components/Nav'
import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'
``

const HankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Semyon',
  description: 'My Software Developer Portfolio',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={HankenGrotesk.style} className='flex justify-center bg-gradient-radial from-[#FBDDC8] to-[#FFFFFF]'>
        <div className='w-5/6 md:w-2/3'>
          <div>
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
