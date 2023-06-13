import Link from "next/link"

export default function ContactUs () {
    return(
        <div className="">
<div className="sm:p-32 p-10 bg-[#fff]">
  <h2 className="sm:text-7xl text-3xl sm:mb-20 mb-10 text-green-900">Contact Us</h2>
  <div className="flex items-center justify-between border-2 border-zinc-500 rounded-full sm:pl-10 pl-5 sm:pr-3 pr-1 sm:py-2 py-1">
    <div>
      <h3 className="sm:text-2xl text-sm text-zinc-500">Have a project in mind?</h3>
    </div>
    <Link className="border-2 border-green-900 sm:py-5 py-3 sm:px-10 px-2 rounded-full bg-green-900 text-white font-bold" href="/contact">Contact</Link>
  </div>
</div>
</div>
    )
}