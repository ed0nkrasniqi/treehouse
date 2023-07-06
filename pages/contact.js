import Header from '@/components/Header';
import { Comfortaa } from 'next/font/google';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

export default function Contact({data}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can perform further actions, such as sending the form data to a server
  };

  return (
    <main className={`${comfortaa.className}`}>
      <Header />
      <div className="background"></div>
      <div className="lg:flex lg:flex-row items-center lg:p-0 p-5 justify-center sm:min-h-screen">
        
        
      <div className="lg:w-1/2 relative">
      <div className="relative">
      
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform my-5 lg:-translate-x-1/2 bg-white bg-opacity-50 px-10 py-10 rounded-2xl lg:-translate-y-1/2 ">
          <h1 className="text-5xl pb-10 font-bold text-black mb-2">Have a project in mind?</h1>
          <p className="text-black pb-10 text-2xl font-bold">Reach out to us. We can make your dream a reality.</p>
          
          <div className='py-5'>
            <p className='text-xl'>Email:</p>
            <Link className='text-xl' href={`mailto:${data.email}`}>{data.email}</Link>
          </div>
          <div className='py-5'>
            <p className='text-xl'>Phone:</p>
            <Link className='text-xl' href={`Tel:${data.phone}`}>{data.phone}</Link>
          </div>

    <div className='flex just pt-10'>  
    <Link className="px-2"  href={data.instagram} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#000" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link>
    <Link className="px-2"  href={data.facebook} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30} fill="#000"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></Link>
    </div> 

        </div>
      </div>
    </div>


        <div className="lg:w-1/2 lg:m-10 rounded-3xl bg-white bg-opacity-50 p-8">
          <h1 className="text-5xl font-bold text-black mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-black font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border bg-white bg-opacity-50 border-gray-400 rounded-xl focus:outline-none"
                {...register('name', { required: true })}
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-black font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border bg-white bg-opacity-50 border-gray-400 rounded-xl focus:outline-none"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <span className="text-red-500">Invalid email address</span>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-black font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border bg-white bg-opacity-50 border-gray-400 rounded-xl resize-none focus:outline-none"
                {...register('message', { required: true })}
              ></textarea>
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2 bg-green-900 bg-opacity-70 text-white font-semibold rounded-lg hover:bg-green-950 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://cms.treehouse-ks.eu/api/globals/contact-info"
  );
  const data = await res.json();

  return { props: { data } };
}