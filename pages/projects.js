import { Comfortaa } from 'next/font/google'
import ProjectTitle from './components/ProjectTitle'
import ImageSlider from './components/ImageSlider'
import BedroomsNum from './components/BedroomsNum'
import BathroomsNum from './components/BathroomsNum'
import Header from './components/Header'
import Link from 'next/link'
import Footer from './components/Footer'
import FloorTitle from './components/FloorTitle'
import SquareMetres from './components/SquareMetres'


export const comfortaa = Comfortaa({
    subsets:[ 'latin'],
    weight: ['300','400','500','600']
  })

export default function Projects({data}) {
    
    console.warn('project', data);
    return (
<main className={`${comfortaa.className}`}>
      <Header />

      <div className="flex w-full h-full">
        <div className="flex-grow overflow-hidden">
          
          <ImageSlider data={data} className="w-full h-full" />
        </div>
      </div>

{/* ///// */}
<div className='bg-zinc-100 sm:flex justify-center  m-10 rounded-xl sm:py-10 p-5'>

<div className='sm:pl-10  py-10 sm:pr-32'>
<div>
  <h3 className='sm:text-3xl text-xl font-bold mb-5'>House Square Metres</h3>
  <SquareMetres metres={data.houseSquare}/>
  </div>
  <div className='flex jusitfy-center'>
    <Link href='/contact' target='_blank' className='text-white font-bold sm:text-xl bg-green-950 text-center rounded-full sm:mt-10 mt-3 sm:px-28 px-16 sm:py-4 py-2'>Contact Us</Link>
  </div>
</div>


<div className='bg-white sm:pr-[380px]  sm:pl-10  py-10 px-5 rounded-xl'>
        <h3 className='sm:text-3xl text-xl font-bold mb-10'>Featured Highlights</h3>
       <BedroomsNum number= {data.bedroomsNumber}/>
       <BathroomsNum number={data.bathroomsNumber} />
       

<div className='sm:flex justify-between items-center'>
    <div >

<ul className='sm:flex  my-[20px]'>
        <li className='pb-2 decoration-2'><Link className='sm:mr-[20px] sm:pr-[20px]   sm:border-r-2' href='#'>Modern House</Link></li>
        <li className='pb-2 decoration-2'><Link className='sm:mr-[20px] sm:pr-[20px]   sm:border-r-2' href='#'>Classic House</Link></li>
        <li className='pb-2 decoration-2'><Link className='sm:mr-[20px] sm:pr-[20px]   sm:border-r-2' href='#'>Modern House</Link></li>
        <li className='pb-2 decoration-2'><Link className='sm:mr-[20px] sm:pr-[20px]   sm:border-r-2' href='#'>Classic House</Link></li>
</ul>    

    </div>
</div>
</div>
</div>
{/* ////// */}


{data.floorImages.map((floor, index)=>{
  return (
    <div key={floor.id} className='flex border-b-2 justify-center'>
<div className='border-2 border-zinc-400 shadow-xl rounded-xl sm:p-10 p-5 m-10'>
    <h4 className='text-center sm:py-10 sm:text-3xl text-xl font-bold'>{floor.fltitle}</h4>
  <img src={floor.flimage.url} />
</div>
</div>
  )
})}


<p className='pl-5 mt-10 sm:text-3xl text-xl'>Tour This House</p>
<div className='flex flex-wrap  border-zinc-300  justify-center'>
  
  {data.moreImages.map((more, index) => {
    return (
      <>
      <div key={more.id} className='flex  justify-center sm:w-1/2'>
        <div className='sm:p-5 px-5 py-2'>
          <img className='sm:rounded-3xl rounded-xl' src={more.galleryImages.url} />
        </div>
      </div>
      </>
    );
  })}
</div>



      
      <Footer />
</main>
    )
  }



  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/projects/64637b9b8598e53198f3e710`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

 