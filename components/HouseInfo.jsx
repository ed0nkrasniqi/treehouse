
export default function HouseInfo ({data}) {
    return (
        <>
        </>
    )
}



export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://cms.treehouse-ks.eu/api/projects/64637b9b8598e53198f3e710`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }