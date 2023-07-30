
import { Button } from "@material-tailwind/react";
import Link from "next/link";


const ProductComponents = () => {
    const products = [
        {
            category: "processor",
            id: 1,
            imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
            email: "category",
            price: 250,
            district: "sirajgonj",
            batch: "2020",
        },
        {
            category: "motherboard",
            id: 2,
            imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
            email: "category",
            price: 250,
            district: "sirajgonj",
            batch: "2020",
        },
        {
            category: "Monitor",
            id: 3,
            imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
            email: "category",
            price: 250,
            district: "sirajgonj",
            batch: "2020",
        },
    ];




    return (

        <div className="overflow-hidden min-h-screen mx-auto border border-gray-200 shadow-md m-5">
            <table className="w-1/2 mx-auto border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            components
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Price
                        </th>


                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            choose
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {products?.map((product) => (
                        <tr key={product?.id} className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="h-36 w-32">
                                    <img
                                        className="h-full w-full  object-cover object-center"
                                        src={product.imageUrl}
                                        alt=""
                                    />

                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{product?.category}</div>

                                </div>
                            </th>

                            {/* batch */}
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1    py-1  font-semibold">
                                    <div className="flex items-center gap-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        {product?.price}
                                    </div>
                                </span>
                            </td>
                            <td className="px-6 py-4">{product?.district}</td>

                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <Link href={`/productComponents/${product?.id}`}>
                                        <Button size="sm"> Add To Builder</Button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductComponents;