import Name from "./Name"
import Comment from "./Comment"

export default function SecondSec ({data}) {
    return (
      <main>

<div className=' bg-white px-32 py-16'>

<div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="relative border-[0.1rem] bg-[#f1e6d7] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-2xl" src="/greenview.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl bg-[#f]">
          <div className="flex justify-between">
            <p>Hopkins</p>
            <p>$188.000</p>
          </div>
          </div>
        </div>

        <div className="relative border-[0.1rem] bg-[#f1e6d7] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-2xl" src="/ellisville.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl bg-[#f1e6d7]">
          <div className="flex justify-between">
            <p>Ellisville</p>
            <p>$348.000</p>
          </div>
          </div>
        </div>

        <div className="relative border-[0.1rem] bg-[#f1e6d7] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-2xl" src="/blue_ridge.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl bg-[#f1e6d7]">
          <div className="flex justify-between">
            <p>Blue Ridge</p>
            <p>$213.000</p>
          </div>
          </div>
        </div>

       <div className="relative border-[0.1rem] bg-[#f1e6d7] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl">
          <img className="section-house  rounded-2xl" src="/winbourne.jpg" alt="Greenview" width={450} height={270} />
          <div className="p-2 rounded-2xl bg-[#f1e6d7]">
          <div className="flex justify-between">
            <p>Winbourne</p>
            <p>$188.000</p>
          </div>
          </div>
        </div>

      </div>
    </div>


    </div>


<div className="bg-zinc-100 px-32 py-16">
    <div className="flex flex-wrap justify-center">
  {data.testimonials.map((test, index) => (
    <div key={index} className="bg-white w-96 rounded-2xl p-5 mx-3 my-3 border-2 border-zinc-300">
      <div className="flex items-center rounded-2xl">
        <img className="profile-pic mr-3 rounded-full" src={test.userImage.url} />
        <h4 className="text-xl font-medium">{test.userName}</h4>
      </div>
      <p className="mr-3 mt-3">{test.userComment}</p>
    </div>
  ))}
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