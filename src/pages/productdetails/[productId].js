import { Typography } from "@material-tailwind/react";

const productDetailsCard = ({ product }) => {
    console.log(product)

    const { name, image, category, price, status, rating } = product
    return (

        <div className="h-screen relative">


            <div className="w-full flex justify-center mt-6 ">
                <div className="relative flex ju flex-col w-full justify-center max-w-[48rem] md:flex-row rounded-sm bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 md:w-2/5  flex justify-center shrink-0 overflow-hidden rounded-sm rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img alt="image" className="max-w-full max-h-full" src={`${image}`} />
                    </div>
                    <div className="p-6 flex flex-col justify-center w-full">

                        {/* product name */}
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {name}
                        </h4>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {rating}
                        </Typography>

                        <div className=" flex space-x-2">


                            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {category}
                            </h3>
                        </div>


                        <div className=" flex space-x-2">

                            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {price}
                            </h3>
                        </div>

                        <div className=" flex space-x-2">


                            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {status}
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default productDetailsCard;

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products/")
    const products = await res.json()
    const paths = products?.data?.map((product) => ({
        params: { productId: product._id }
    })
    )
    return { paths: paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    console.log(params.productId)
    const res = await fetch(`http://localhost:5000/api/v1/products/${params.productId}`)
    const data = await res.json()
    console.log(data)
    return {
        props: {
            product: data?.data
        }
    }
}