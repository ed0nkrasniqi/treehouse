import Header from '@/components/Header';
import { Comfortaa } from 'next/font/google'



export const comfortaa = Comfortaa({
    subsets:[ 'latin'],
    weight: ['300','400','500','600']
  })



  export default function About ({data}) {
    return (
        <main className={`${comfortaa.className} `}>
            <Header />
            <div className='lg:p-32 p-5'>
            <div className='lg:flex justify-center'>
                <div className='lg:w-[500px]'>
                <p className='text-xl'>
                    {data.aboutUs}
                </p>
                </div>
                <div className='lg:pl-64 lg:m-0 mt-10'>
                    <img className='rounded-xl about-image' src={data.aboutImage.url}/>
                </div>
            </div>
            </div>
        </main>
    )
  }



  export async function getStaticProps() {
    const res = await fetch(
      "http://localhost:3000/api/globals/about"
    );
    const data = await res.json();
  
    return { props: { data } };
  }