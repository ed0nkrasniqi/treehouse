import Link from "next/link";

export default function Footer ({data}) {
return (
<>
<footer className="bg-[#ede7de] lg:px-32 px-5 py-20  ">

<div className="lg:flex justify-between items-baseline ">

<div className="lg:m-0 mb-16">
    <h3 className="sm:text-3xl text-xl lg:pb-10 pb-3 font-semibold">LINKS</h3>
    <div className="flex">
    <ul className="mr-10">
    <li className="lg:pb-6 pb-2"><Link className="sm:text-xl" target="_blank" href="/">Home</Link></li>
    <li className="lg:pb-6 pb-2"><Link className="sm:text-xl" target="_blank" href="/about">About Us</Link></li>
    <li className="lg:pb-6 pb-2"><Link className="sm:text-xl" target="_blank" href="/contact">Contact Us</Link></li>
    <li className="lg:pb-6 pb-2"><Link className="sm:text-xl" target="_blank" href="/blog">Blog</Link></li>
    </ul>

    </div>
</div>



<div className="lg:m-0 mb-16">
    <h3 className="sm:text-3xl text-xl lg:pb-10 pb-3 font-semibold">CONTACT US</h3>
    <ul>
    <span className="sm:text-xl  font-semibold">Telephone:</span>
    <li className="lg:pb-6 pb-4"><Link className="sm:text-xl " href={`Tel:${data.footerphone}`}>{data.footerphone}</Link></li>

    <span className="sm:text-xl  font-semibold">Email:</span>
    <li className="lg:pb-6 pb-4"><Link className="sm:text-xl " href={`mailto:${data.footeremail}`}>{data.footeremail}</Link></li>

    <span className="sm:text-xl  font-semibold">Address:</span>
    <li><Link className="sm:text-xl " href="" target="_blank">{data.footeraddress}</Link></li>
    </ul>
</div>

<div>
    <h3 className="sm:text-3xl text-xl  lg:pb-10 pb-3 font-semibold">SOCIALS</h3>
    <div className="flex">
    <Link className="pr-2"  href={data.footerinstagram}><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#000" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link>
    <Link className="px-2"  href={data.footerfacebook}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30} fill="#000"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></Link>
    
    </div>
</div>

</div>

</footer>
</>
)
}


export async function getStaticProps() {
    const res = await fetch(
      "http://localhost:3000/api/globals/footer"
    );
    const data = await res.json();
  
    return { props: { data } };
  }