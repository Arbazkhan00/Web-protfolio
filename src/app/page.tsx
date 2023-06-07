import Image from 'next/image'
import Hero from './components/hero/page'
import About from './components/about/page'
import Manu from './components/services/page'

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Manu/>
    </main>
  )
}
