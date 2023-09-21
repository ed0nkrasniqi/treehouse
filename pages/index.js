import Image from 'next/image'
import { Comfortaa } from 'next/font/google'
import Header from '../components/Header'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Name from '../components/Name'
import Comment from '../components/Comment'
import SecondSec from '../components/SecondSec'
import ImageSlider from '../components/ImageSlider'
import Slider from '../components/Slider'

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export default function Home({ data, sliderData, footerData,imgData  }) {
  return (
    <main className={`${comfortaa.className}`}>
      <Header />
      <FirstSection data={imgData}/>
      <SecondSec data={data} />
      <Slider data={sliderData} />
      <Footer data={footerData}/>
    </main>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API for data prop



  const res = await fetch(`https://cms.treehouse-ks.eu/api/testimonials/64622888290d0bd251bff7a8`)
  const data = await res.json()

  // Fetch data from external API for sliderData prop
  const sliderRes = await fetch(`https://cms.treehouse-ks.eu/api/homeslider/647a1bafb0809013fa9aeef8`)
  const sliderData = await sliderRes.json()

  const footerRes = await fetch(
    "https://cms.treehouse-ks.eu/api/globals/footer"
  );
  const footerData = await footerRes.json();  

    const imgRes = await fetch(
      "http://localhost:3000/api/globals/mainimage"
    );
    const imgData = await imgRes.json();
  
 
 

  // Pass data to the page via props
  return { props: { data, sliderData, footerData, imgData  } }
}
