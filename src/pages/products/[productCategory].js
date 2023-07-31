import ProductCard from "@/components/ProductCard";

const Products = ({ products }) => {
    console.log(products)
    return (
        <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3">

            {
                products?.map((product, i) => <ProductCard
                    key={i}
                    product={product}
                ></ProductCard>
                )
            }

        </div>
    );
};

export default Products;

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products/")
    const products = await res.json()
    const paths = products?.data?.map((product) => ({
        params: { productCategory: product.category }
    })
    )
    return { paths: paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    console.log(params.productId)
    const res = await fetch(`http://localhost:5000/api/v1/products/categories/${params.productCategory}`)
    const data = await res.json()
    console.log(data)
    return {
        props: {
            products: data?.data
        }
    }
}