import { Comfortaa } from 'next/font/google'
import Link from 'next/link'

export const comfortaa = Comfortaa({
    subsets:[ 'latin'],
    weight: ['300','400','500','600']
  })

export default function Contact() {
    return (
      <main className={`${comfortaa.className}`}>
     
    



     <div className="background"></div>
     <div className="sm:flex sm:flex-row items-center sm:p-0 p-5  justify-center sm:min-h-screen ">
    <div className="sm:w-1/2 relative">
      <div className="relative">
      
        <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 bg-white bg-opacity-50 px-10 py-10 rounded-2xl sm:-translate-y-1/2 ">
          <h1 className="text-5xl pb-10 font-bold text-black mb-2">Have a project in mind?</h1>
          <p className="text-black pb-10 text-2xl font-bold">Reach out to us. We can make your dream a reality.</p>
          
          <div className='py-5'>
            <p className='text-xl'>Email:</p>
          <Link className='text-xl' href='mailto:treehouse@gmail.com'>treehouse@gmail.com</Link>
          </div>
          <div className='py-5'>
            <p className='text-xl'>Phone:</p>
          <Link className='text-xl' href='Tel: +383 44 400 4000'>+383 44 400 400</Link>
          </div>

    <div className='flex just pt-10'>  
    <Link className="px-2"  href="#"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#000" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link>
    <Link className="px-2"  href="#"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#000" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></Link>
    <Link className="px-2"  href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30} fill="#000"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></Link>
    </div> 

        </div>
      </div>
    </div>
    <div className="sm:w-1/2 rounded-3xl sm:mr-24  p-8">
      <h1 className="text-4xl font-bold text-black mb-6">Contact Us</h1>
      <div className="mb-6">
        <label for="name" className="block text-black font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full px-4 py-2 border bg-white bg-opacity-50  border-gray-400 rounded-xl focus:outline-none "/>
      </div>
      <div className="mb-6">
        <label for="email" className="block text-black font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full px-4  py-2 border bg-white bg-opacity-50 border-gray-400 rounded-xl focus:outline-none "/>
      </div>
      <div className="mb-6">
        <label for="message" className="block text-black font-semibold mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border bg-white bg-opacity-50  border-gray-400 rounded-xl resize-none focus:outline-none "></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="px-10 py-2  bg-green-900 bg-opacity-70 text-white  font-semibold rounded-lg hover:bg-green-950 focus:outline-none  ">Submit</button>
      </div>
    </div>
  </div>


  
      </main>
    )
  }
