
import Link from "next/link"

export default function SecondSec ({data}) {
    return (
      <main>

<div className=' bg-[#f8f8f6] sm:px-32 p-5 py-16'>

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

<div className="">
<div className="p-32 bg-[#f8f8f6]">
  <h2 className="text-7xl mb-20 text-green-900">Contact Us</h2>
  <div className="flex items-center justify-between border-2 border-zinc-500 rounded-full pl-10 pr-3 py-2">
    <div>
      <h3 className="text-2xl text-zinc-500">Have a project in mind?</h3>
    </div>
    <Link className="border-2 border-green-900 py-5 px-10 rounded-full bg-green-900 text-white font-bold" href="/contact">Contact</Link>
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