import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"





export default function ContactUs () {
  
  const[ref, inView] = useInView({
  threshold: 0.7
});


    return(
        <div>
<motion.div 
ref={ref}
initial={{opacity : 0}}
animate ={inView && {opacity: 1 , transition : {duration: 0.5 }}}
className="lg:p-32 px-10 py-20 bg-[#fff]">
  <h2 className="sm:text-7xl text-3xl sm:mb-20 mb-10 text-green-900">Contact Us</h2>
  <div className="flex items-center justify-between border-2 border-zinc-500 rounded-full sm:pl-10 pl-5 sm:pr-3 pr-1 sm:py-2 py-1">
    <div>
      <h3 className="sm:text-2xl text-sm text-zinc-500">Have a project in mind?</h3>
    </div>
    <Link className="border-2 border-green-900 sm:py-5 py-3 sm:px-10 px-2 rounded-full bg-green-900 text-white font-bold" href="/contact">Contact</Link>
  </div>
</motion.div>
</div>
    )
}