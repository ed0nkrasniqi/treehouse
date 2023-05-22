import Image from 'next/image'
import { Comfortaa } from 'next/font/google'
import Header from './components/Header'
import FirstSection from './components/FirstSection'
import Footer from './components/Footer'
import Name from './components/Name'
import Comment from './components/Comment'
import SecondSec from './components/SecondSec'
import ImageSlider from './components/ImageSlider'

export const comfortaa = Comfortaa({
  subsets:[ 'latin'],
  weight: ['300','400','500','600']
})

export default function Home({data}) {
  return (
    <main className={`${comfortaa.className}`}>
      <Header />
      <FirstSection />
    
      <SecondSec data={data}/>
      <Footer />

    </main>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/testimonials/64622888290d0bd251bff7a8`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
