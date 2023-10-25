import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Comfortaa } from 'next/font/google'
import { motion } from 'framer-motion';
import Image from 'next/image';


export const comfortaa = Comfortaa({
    subsets:[ 'latin'],
    weight: ['300','400','500','600']
  })



  export default function About ({data, footerData}) {
    return (
        <main className={`${comfortaa.className} `}>
            <Header />
          <div className='lg:p-32 p-5'>
            <motion.div
            className='lg:flex justify-center'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
          <div className='lg:w-[500px]'>
            <motion.p
            className='text-xl'
            initial={{ x: -100 }}
            animate={{ x: 0 }} 
            transition={{ delay: 0.3, type: 'just', stiffness: 120 }}
            >
            {data.aboutUs}
            </motion.p>
          </div>
          <motion.div
            className='lg:pl-64 lg:m-0 mt-10'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'just', stiffness: 120 }}
           >
          <Image
            className='rounded-xl about-image'
            src={data?.aboutImage?.url}
            width={800}
            height={800}
          />
          </motion.div>
          </motion.div>
          </div>
          <Footer data={footerData}/>
        </main>
    )
  }



  export async function getStaticProps() {
    const res = await fetch(
      "https://cms.treehouse-ks.eu/api/globals/about"
    );
    const data = await res.json();

    const footerRes = await fetch(
      "https://cms.treehouse-ks.eu/api/globals/footer"
    );
    const footerData = await footerRes.json();



  
    return { props: { data, footerData } , revalidate : 1  };
  }