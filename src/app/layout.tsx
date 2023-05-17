import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({children,}: {children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Header/>
      
        {children}
        <Footer/></body>
    </html>
  )
}
