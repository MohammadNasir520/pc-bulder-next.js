import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";




const ProductCard = () => {
    const product = {
        name: "nasir",
        image: "",
        _id: 3,
        author: "author",
        publicationDate: "ksd",
        genre: "ksd"
    }
    const { name, author, genre, image, publicationDate, _id } = product;


    return (
        <div>
            <div className="my-2 ">
                <Link href={`/productdetails/${_id}`}>
                    <div className="relative flex min-w-[350px] max-w-[20rem] h-[550px] flex-col rounded-xl bg-blue-gray-200 bg-clip-border text-gray-700 shadow-2xl">
                        <div className="relative m-0 p-4 pb-1 flex justify-center overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <Image
                                className=" min-h-[300px] max-h-[350px] min-w-[280px] max-w-[20rem]   rounded-sm "
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
                                5.0
                            </Typography>
                        </div>

                        <div className="px-3">
                            {/* author  */}
                            <div className=" flex space-x-2 items-center py-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <h3 className=" block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {author}
                                </h3>
                            </div>

                            {/* Genre */}
                            <div className=" flex space-x-2 items-center mb-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                                <h3 className=" block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {genre}
                                </h3>
                            </div>
                            {/*publication date*/}
                            <div className=" flex space-x-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                    />
                                </svg>

                                <h3 className=" block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {publicationDate.toString()}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default ProductCard;
