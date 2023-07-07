import Image from "next/image";
import Link from "next/link";

const BlogParagraph = ({ parag }) => {
  
  
  return (
    <>
      {parag.map((child, index) => {
        const childLength = child.children.length > 1 ;
        console.log(childLength)
        return (
         
          <div key={index}>
            {child.type === "h1" && <h1 className="text-7xl mx-10 my-10">{child.children[0].text}</h1>}
            {child.type === "h2" && <h2 className="text-6xl mx-10">{child.children[0].text}</h2>}
            {child.type === "h3" && <h3 className="text-5xl mx-10">{child.children[0].text}</h3>}
            {child.type === "h4" && <h4 className="text-4xl mx-10">{child.children[0].text}</h4>}
            {child.type === "h5" && <h5 className="text-3xl">{child.children[0].text}</h5>}
            {child.type === "h6" && <h6>{child.children[0].text}</h6>}
            {!child.type && <p className="text-xl mx-10">{child.children[0].text}</p>}
            {child.type === "italic" && <em className="italic">{child.children[0].text}</em>}
            {child.type === "bold" && <strong className="font-bold">{child.children[0].text}</strong>}
            {child.type === "ul" && (
              <ul>
                {child.children.map((li, index) => (
                
                  <li key={index} className="text-xl mx-10">• {li.children[0].text}</li>
                ))}
              </ul>
            )}
            {child.type === "ol" && (
              <ol>
              {child.children.map((li, index) => (
              <li key={index}  className="text-xl mx-10 my-2">{index + 1}. {li.children[0].text}</li>
              ))}
              </ol>
            )}


            {child.type === "upload" && (
              <ImageComponent
               
                src={child?.value?.url ?? ""}
                width={child?.value?.width ?? 0}
                height={child?.value?.height ?? 0}
                alt={child?.value?.filename ?? ""}
              />
            )}

            {childLength && child.children[1].type === "link" && (
            <a href={child?.children[1].url} target="_blank" rel="noopener noreferrer">
               <p className="text-2xl underline mx-10">{child?.children[1]?.children[0]?.text}</p> 
            </a>
            )}


            

</div>
         
        );
      })}
    </>
  );
};

export default BlogParagraph;

const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-xl m-10`}
    />
  );
};
