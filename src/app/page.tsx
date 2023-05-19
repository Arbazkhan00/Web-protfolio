import Image from 'next/image'
import Hero from '@/components/hero/hero'
import About from '@/components/SecondSection/about'
import Manu from '@/components/3rd/Manu'

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Manu/>
    </main>
  )
}
