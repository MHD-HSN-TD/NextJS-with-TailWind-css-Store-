import './globals.css'
import { Inter, Phudu, Cairo, Kanit } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/navBar/NavBar'
import Btn from '../components/elements/Btn'
import { Providers } from '@/components/Provider/Provider'

// const inter = Inter({ subsets: ['latin'] })
const phudu = Phudu({ subsets: ['latin'] })
const cairo = Cairo({ subsets: ['arabic'], weight: ["900"] })
const kanit = Kanit({ subsets: ['latin'], weight: ["300"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${kanit.className} bg-default transition-all duration-300`}>
        <Providers>
          <NavBar />
          {children}
          <div className='h-screen'>
          </div>
          <Btn></Btn>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
