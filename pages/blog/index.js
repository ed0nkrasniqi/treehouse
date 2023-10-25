import { Comfortaa } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";


export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

export default function Blog({ data, footerData }) {
  return (
    <main className={`${comfortaa.className}`}>
      <Header />


<div className="lg:p-32 p-5">
  <h1 className="text-green-900 text-center text-5xl mb-20">Blog</h1>
  <div className="flex flex-wrap justify-center">

    {data?.docs?.map((item,index) => (
      <Link key={item.id} href={`/blog/${item?.id}`}>
        <motion.div
          className="relative  m-5"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            className="rounded-xl blog-images"
            src={item?.blog[0]?.blogImg?.url}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }} 
            width={400}
            height={400}
          />
          <motion.div
            className="absolute rounded-xl px-5 inset-0 overflow-hidden"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="h-full w-full flex place-items-end justify-center text-white"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {item.isHovered && (
                <motion.span className="text-2xl pb-2">{item?.data?.blogTitle}</motion.span>
              )}
            </motion.div>
            <motion.div
              className="absolute inset-0 opacity-0 hover:opacity-100"
              initial={{ opacity: 0 }} 
              whileHover={{ opacity: 1 }} 
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-b from-transparent to-gray-900 h-full w-full flex place-items-end justify-center text-white">
                <span className="text-2xl pb-2">{item?.blog[0]?.blogTitle}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    ))}
  </div>
</div>

      <Footer data={footerData} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://cms.treehouse-ks.eu/api/blog/`);
  const data = await res.json();

  const footerRes = await fetch(
    "https://cms.treehouse-ks.eu/api/globals/footer"
  );
  const footerData = await footerRes.json();

  return { props: { data, footerData } , revalidate : 1  };
}
