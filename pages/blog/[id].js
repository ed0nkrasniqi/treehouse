import { Comfortaa } from "next/font/google";
import Header from "@/components/Header";
import BlogParagraph from "@/components/BlogParagraph";
import Footer from "@/components/Footer";
import BlogSlider from "@/components/BlogSlider";

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

export default function BlogPages({ data, footerData }) {
  return (
    <>
      <main className={`${comfortaa.className}`}>
        <Header />
        
        <BlogSlider data={data}/>
        
        <div className="mb-20">
          <BlogParagraph parag={data.content}/>
        </div>
    
        
       
        <Footer data={footerData} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://cms.treehouse-ks.eu/api/blog/");
  const data = await res.json();

  const paths = data.docs.map((item,) => ({
    params: { id: item?.id.toString() }
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://cms.treehouse-ks.eu/api/blog/${params.id}`);
  const data = await res.json();

  const footerRes = await fetch("https://cms.treehouse-ks.eu/api/globals/footer");
  const footerData = await footerRes.json();

  return { props: { data, footerData }, revalidate : 2 };
}
