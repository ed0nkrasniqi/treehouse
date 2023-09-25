import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ShowRoom({ data }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="bg-[#f8f8f6] lg:px-32 p-5 py-16">
      <div className="flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1, transition: { duration: 0.5 } }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {data.docs[0].showRooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative border-[0.1rem] sm:m-0 mb-5 bg-[#f8f8f6] border-gray-300 shadow-sm hover:border-gray-500 hover:shadow-lg rounded-2xl"
            >
              <img
                className="section-house max-w-full  rounded-t-2xl"
                src={room.houseImage.url} // Use the image URL from the data
                alt={room.houseName} // Use the house name as alt text
                width={450}
                height={270}
              />
              <div className="p-2 rounded-2xl">
                <div>
                  <p className="text-center">{room.houseName}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/showroom/"
  );
  const data = await res.json();

  return { props: { data }, revalidate: 1 };
}
