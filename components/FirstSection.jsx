import Link from "next/link";
import Image from "next/image";

export default function FirstSection({ data }) {
  return (
    <>
      <div className="text-center">
        <img src={data.mainImg} alt="Main Image" className="max-w-full h-auto" />
        <h1 className="sm:text-7xl text-5xl font-bold text-white">Tree House</h1>
        <p className="sm:text-2xl text-xl font-bold text-white">
          A step-by-step solution for all the land, design, and build decisions it takes to get your custom dream home
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cms.treehouse-ks.eu/api/globals/mainimage");
  const data = await res.json();

  return { props: { data }, revalidate: 1 };
}
