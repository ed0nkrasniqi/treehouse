import { Comfortaa } from 'next/font/google'
import ImageSlider from '../../components/ImageSlider'
import BedroomsNum from '../../components/BedroomsNum'
import BathroomsNum from '../../components/BathroomsNum'
import Header from '../../components/Header'
import Link from 'next/link'
import Footer from '../../components/Footer'
import SquareMetres from '../../components/SquareMetres'
import ContactUs from '@/components/Contactus'
import { useInView } from "react-intersection-observer"
import { motion } from 'framer-motion'


export const comfortaa = Comfortaa({
    subsets:[ 'latin'],
    weight: ['300','400','500','600']
  })

export default function Projects({data, footerData}) {

    const [ref, inView] = useInView({
      threshold: 0.5,
    });

    const [imgRef, inViewImg] = useInView({
      threshold: 0.3
    });
    
    console.warn('project', data);
    return (
<main className={`${comfortaa.className}`}>
      <Header />

      <>
      <div className="flex w-full h-full">
        <div className="flex-grow overflow-hidden">
          
          <ImageSlider data={data} className="w-full h-full" />
        </div>
      </div>

{/* ///// */}
<motion.div 
ref={ref}
initial={{opacity:0}}
animate={inView && {opacity:1, transition:{ duration: 0.5}}}
className='bg-zinc-100 lg:flex justify-center  m-10 rounded-xl lg:py-10 p-5'>

<div className='lg:pl-10  py-10 lg:pr-32'>
<div>
  <h3 className='sm:text-3xl text-xl font-bold mb-5'>House Square Metres</h3>
  <SquareMetres metres={data.houseSquare}/>
  </div>
  <div className='flex jusitfy-center'>
    <Link href='/contact' target='_blank' className='text-white font-bold sm:text-xl bg-green-950 text-center rounded-full lg:mt-10 mt-3 lg:px-28 px-16 lg:py-4 py-2'>Contact Us</Link>
  </div>
</div>


<div  className='bg-white lg:pr-[380px]  lg:pl-10  py-10 px-5 rounded-xl'>
        <h3 className='sm:text-3xl text-xl font-bold mb-10'>Featured Highlights</h3>
       <BedroomsNum number= {data.bedroomsNumber}/>
       <BathroomsNum number={data.bathroomsNumber} />
       

<div className='lg:flex justify-between items-center'>
    <div >

<ul className='sm:flex  my-[20px]'>
        <li className='pb-2 underline'><Link className='lg:mr-[20px] sm:pr-[20px]   ' href='#'>Modern House</Link></li>
        <li className='pb-2 underline'><Link className='lg:mr-[20px] sm:pr-[20px]   ' href='#'>Classic House</Link></li>
        <li className='pb-2 underline'><Link className='lg:mr-[20px] sm:pr-[20px]   ' href='#'>Modern House</Link></li>
        <li className='pb-2 underline'><Link className='lg:mr-[20px] sm:pr-[20px]   ' href='#'>Classic House</Link></li>
</ul>    

    </div>
</div>
</div>
</motion.div>
{/* ////// */}


{data.floorImages.map((floor, index)=>{
  return (
    <div key={floor.id} className='flex bg-[#f8f8f6]  justify-center'>
<div className='border-2 border-zinc-200 shadow-lg rounded-xl bg-white sm:p-10 p-5 m-10'>
    <h4 className='text-center sm:py-10 sm:text-3xl text-xl font-bold'>{floor.fltitle}</h4>
  <img src={floor.flimage.url} />
</div>
</div>
  )
})}

<ContactUs />

<motion.div 
       ref={imgRef}
       initial={{ opacity: 0 }}
       animate={inViewImg && { opacity: 1, transition: { duration: 0.5,} }}
className='flex flex-wrap mb-2 border-zinc-300  justify-center'>
  
  {data.moreImages.map((more, index) => {
    return (
      <>
      <div
      key={more.id} className='flex   justify-center sm:w-1/2'>
        <div className='lg:p-5  px-5 py-2'>
          <img className='sm:rounded-3xl rounded-xl' src={more.galleryImages.url} />
        </div>
      </div>
      </>
    );
  })}
</motion.div>
</>
    

      
      <Footer data={footerData}/>
</main>
    )
  }


 
  export async function getStaticPaths() { 
    
    const res = await fetch(`http://localhost:3000/api/projects/`);
    const data =  await res.json();

   const paths =  data?.docs?.map((doc) => ({
        params : {id : doc?.id}
    }));

    return {
      paths, fallback: false
}
}
  export async function getStaticProps({params}) {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/projects/${params.id}`)
    const data = await res.json()
  
    const footerRes = await fetch(
      "http://localhost:3000/api/globals/footer"
    );
    const footerData = await footerRes.json();
    // Pass data to the page via props
    return { props: { data, footerData } , revalidate : 2  }
  }

 


  export const save = () => { 

  }