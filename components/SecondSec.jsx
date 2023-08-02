import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ContactUs from "./Contactus";
import Image from "next/image";

export default function SecondSec({ data }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [testimonialsRef, inViewTestimonials] = useInView({
    threshold: 0.5,
  });

  const [iconRef, inViewIcon] = useInView({
    threshold: 0.5,
  });

  return (
    <main>
      <div className="bg-[#f8f8f6] lg:px-32 p-5 py-16">
        <div className="flex justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView && { opacity: 1, transition: { duration: 0.5} }}
            className="grid md:grid-cols-2 lg:grid-cols-4  gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative border-[0.1rem] sm:m-0 mb-5 bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl"
            >
              <Image
                className="section-house max-w-full  rounded-t-2xl"
                src="/greenview.jpg"
                alt="Greenview"
                width={450}
                height={270}
              />
              <div className="p-2 rounded-2xl">
                <div>
                  <p className="text-center">Hopkins</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative sm:m-0 mb-5 border-[0.1rem] bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl"
            >
              <Image
                className="section-house  rounded-t-2xl"
                src="/ellisville.jpg"
                alt="Greenview"
                width={450}
                height={270}
              />
              <div className="p-2 rounded-2xl ">
                <div>
                  <p className="text-center">Ellisville</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="relative sm:m-0 mb-5 p-0 border-[0.1rem] bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl"
            >
              <Image
                className="section-house  rounded-t-2xl"
                src="/blue_ridge.jpg"
                alt="Greenview"
                width={450}
                height={270}
              />
              <div className="p-2 rounded-2xl ">
                <div>
                  <p className="text-center">Blue Ridge</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="relative sm:m-0 mb-5 border-[0.1rem] bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl"
            >
              <Image
                className="section-house  rounded-t-2xl"
                src="/winbourne.jpg"
                alt="Greenview"
                width={450}
                height={270}
              />
              <div className="p-2 rounded-2xl ">
                <div>
                  <p className="text-center">Winbourne</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white sm:px-32 py-16">
        <div
          ref={testimonialsRef}
          className="flex flex-wrap justify-center"
        >
          {data.testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={
                inViewTestimonials && {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.5 * index },
                }
              }
              className="bg-white w-96 rounded-2xl p-5 mx-3 my-3 border-2 border-zinc-300"
            >
              <div className="flex items-center rounded-2xl">
                <Image className="profile-pic mr-3 rounded-full" width={100} height={100} src={test.userImage.url} />
                <h4 className="sm:text-xl text-lg font-medium">{test.userName}</h4>
              </div>
              <p className="mr-3 mt-3">{test.userComment}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#f8f8f6]">
        <div className="lg:p-32 p-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={
              inViewIcon && {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }
            }
            className="text-green-900 text-center lg:text-7xl text-5xl"
          >
            Build your dream custom home
          </motion.h2>

          <div ref={iconRef} className="flex flex-col items-center justify-center lg:mt-32 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inViewIcon && { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
              className="lg:flex justify-center"
            >
              <motion.div className="flex flex-col justify-center lg:mr-32 lg:mb-0 mb-14 items-center w-[270px]">
                <div className="p-3 rounded-full border-4 border-[#062925] w-[130px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#062925"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-home"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="mt-5">
                  <p className="text-2xl text-center text-[#062925]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inViewIcon && { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
                className="flex flex-col justify-center lg:mr-32 lg:mb-0 mb-14 items-center w-[270px]"
              >
                <div className="p-3 rounded-full border-4 border-[#062925] w-[130px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#062925"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-list-checks"
                  >
                    <line x1="10" x2="21" y1="6" y2="6"></line>
                    <line x1="10" x2="21" y1="12" y2="12"></line>
                    <line x1="10" x2="21" y1="18" y2="18"></line>
                    <polyline points="3 6 4 7 6 5"></polyline>
                    <polyline points="3 12 4 13 6 11"></polyline>
                    <polyline points="3 18 4 19 6 17"></polyline>
                  </svg>
                </div>
                <div className="mt-5">
                  <p className="text-2xl text-center text-[#062925] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inViewIcon && { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.5 } }}
                className="flex flex-col justify-center  items-center w-[270px]"
              >
                <div className="p-3 rounded-full border-4 border-[#062925] w-[130px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#062925"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-hammer"
                  >
                    <path d="m15 10a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm0 0h6m-6 0v6m0-6l-2 2m2-2l2-2"></path>
                    <path d="m9 21v-6m0 6a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 0h-6m6 0l2 2m-2-2l-2-2"></path>
                  </svg>
                </div>
                <div className="mt-5">
                  <p className="text-2xl text-center text-[#062925]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactUs />
    </main>
  );
}

  
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://cms.treehouse-ks.eu/api/testimonials/64622888290d0bd251bff7a8`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

  export async function getStaticProps() {
    const res = await fetch(
      "https://cms.treehouse-ks.eu/homeslider/647a1bafb0809013fa9aeef8"
    );
    const data = await res.json();
  
    return { props: { data } };
  }