
import Link from "next/link"
import HomeSlider from "./HomeSlider"

export default function SecondSec ({data}) {
    return (
      <main>

<div className=' bg-[#f8f8f6] lg:px-32 p-5 py-16'>

<div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4">
        
        <div className="relative  border-[0.1rem] sm:m-0 mb-5 bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house   rounded-t-2xl" src="/greenview.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl">
          <div>
            <p className="text-center">Hopkins</p>
          </div>
          </div>
        </div>

        <div className="relative sm:m-0 mb-5 border-[0.1rem] bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-t-2xl" src="/ellisville.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl ">
          <div>
            <p className="text-center">Ellisville</p>
           
          </div>
          </div>
        </div>

        <div className="relative sm:m-0 mb-5 p-0 border-[0.1rem] bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-t-2xl" src="/blue_ridge.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl ">
          <div>
            <p className="text-center">Blue Ridge</p>
           
          </div>
          </div>
        </div>

       <div className="relative sm:m-0 mb-5 border-[0.1rem] bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-t-2xl" src="/winbourne.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl ">
          <div>
            <p className="text-center">Winbourne</p>
            
          </div>
          </div>
        </div>

      </div>
    </div>


    </div>


<div className="bg-white  sm:px-32 py-16">
    <div className="flex flex-wrap justify-center">
  {data.testimonials.map((test, index) => (
    <div key={index} className="bg-white w-96  rounded-2xl p-5 mx-3 my-3 border-2 border-zinc-300">
      <div className="flex items-center rounded-2xl">
        <img className="profile-pic mr-3 rounded-full" src={test.userImage.url} />
        <h4 className="sm:text-xl text-lg font-medium">{test.userName}</h4>
      </div>
      <p className="mr-3 mt-3">{test.userComment}</p>
    </div>
  ))}
</div>
</div>

<div className="bg-[#f8f8f6]">
<div className="lg:p-32 p-10">
  <h2 className="text-green-900 text-center lg:text-7xl text-5xl">Build your dream custom home</h2>

<div className="lg:flex items-baseline justify-between lg:mt-32 mt-20">

<div className=" flex flex-col justify-center items-center w-[270px]">
  <div className="p-3 rounded-full border-4 border-[#062925] w-[130px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#062925" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  </div>
  <div className="mt-5">
    <p className="text-2xl text-center text-[#062925]">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div className="lg:m-0 mt-20 flex flex-col justify-center items-center w-[270px]">
  <div className="p-3 rounded-full border-4 border-[#062925] w-[130px]">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#062925" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-checks"><line x1="10" x2="21" y1="6" y2="6"></line><line x1="10" x2="21" y1="12" y2="12"></line><line x1="10" x2="21" y1="18" y2="18"></line><polyline points="3 6 4 7 6 5"></polyline><polyline points="3 12 4 13 6 11"></polyline><polyline points="3 18 4 19 6 17"></polyline></svg>
  </div>
  <div className="mt-5">
    <p className="text-2xl text-center text-[#062925] ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>

<div className="lg:m-0 mt-20 flex flex-col justify-center items-center w-[270px]">
  <div className="p-3 rounded-full border-4 border-[#062925] w-[130px]">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#062925" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path></svg>
  </div>
  <div className="mt-5">
    <p className="text-2xl text-center text-[#062925]">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>





</div>
</div>
</div>

<HomeSlider data={data}/>


<div className="">
<div className="sm:p-32 p-10 bg-[#f8f8f6]">
  <h2 className="sm:text-7xl text-4xl sm:mb-20 mb-10 text-green-900">Contact Us</h2>
  <div className="flex items-center justify-between border-2 border-zinc-500 rounded-full pl-10 sm:pr-3 pr-1 sm:py-2 py-1">
    <div>
      <h3 className="sm:text-2xl text-zinc-500">Have a project in mind?</h3>
    </div>
    <Link className="border-2 border-green-900 sm:py-5 py-3 sm:px-10 px-2 rounded-full bg-green-900 text-white font-bold" href="/contact">Contact</Link>
  </div>
</div>
</div>

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