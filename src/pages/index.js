
import ProductCard from "@/components/ProductCard";
import FeaturedCard from "@/components/FeaturedCard";
import Banner from "@/components/Banner";

export default function Home({ products }) {
  return (
    <>



      <Banner></Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {
          products.slice(0, 6).map((product, i) => <ProductCard
            key={i}
            product={product}
          ></ProductCard>)
        }
      </div>
      <div>
        <FeaturedCard></FeaturedCard>
      </div>


    </>
  );
}



export const getStaticProps = async () => {


  const res = await fetch(`http://localhost:5000/api/v1/products`)
  const data = await res.json()
  console.log(data)
  return {
    props: {
      products: data?.data
    }
  }
}