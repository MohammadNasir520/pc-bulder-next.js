import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";




const ProductCard = ({ product }) => {
    const { name, category, price, image, status, _id, rating } = product;


    return (
        <div>
            <div className="my-2  ">
                <div className="relative flex min-w-[350px] max-w-[20rem] min-h  mx-auto flex-col rounded-xl bg-blue-gray-50 bg-clip-border text-gray-700 shadow-2xl">
                    <Link href={`/productDetailsPage/${_id}`}>
                        <div className="relative m-0 p-4 pb-1 flex justify-center overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <Image
                                width={310}
                                height={380}
                                className=" min-h-[300px] max-h-[380px] min-w-[280px] max-w-[20rem]   rounded-sm "
                                src={image}
                                alt="product"
                            />
                        </div>
                        <div className="p-2 flex justify-between px-2">
                            <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {name}
                            </h4>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
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
                        </div>

                        <div className="px-3">
                            {/* category  */}
                            <div className=" flex space-x-2 items-center py-0">


                                <h3 className=" block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    category:  {category}
                                </h3>
                            </div>

                            {/* price */}
                            <div className=" flex space-x-2 items-center mb-1">

                                <h3 className=" block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    price:   {price}
                                </h3>
                            </div>
                            {/*publication date*/}
                            <div className=" flex space-x-2 items-center">


                                <h3 className=" block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    status:    {status.toString()}
                                </h3>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;
