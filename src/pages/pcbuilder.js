import { Button } from "@material-tailwind/react";
import Link from "next/link";


const PcBuilder = () => {
    const products = [
        {
            category: "processor",
            id: 1,
            imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
            email: "category",
            role: "admin",
            district: "sirajgonj",
            batch: "2020",
        },
        {
            category: "motherboard",
            id: 2,
            imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
            email: "category",
            role: "admin",
            district: "sirajgonj",
            batch: "2020",
        },
        {
            category: "Monitor",
            id: 3,
            imageUrl: "https://pictures.abebooks.com/inventory/31367552755.jpg",
            email: "category",
            role: "admin",
            district: "sirajgonj",
            batch: "2020",
        },
    ];




    return (

        <div className="overflow-hidden min-h-screen mx-auto border border-gray-200 shadow-md m-5">
            <table className="w-4/5 mx-auto border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            categories
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Genre
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Publication Date
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
                                <div className="h-10 w-10">
                                    <img
                                        className="h-full w-full  object-cover object-center"
                                        src={product.imageUrl}
                                        alt=""
                                    />

                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{product?.category}</div>
                                    <div className="text-gray-400">{product?.email}</div>
                                </div>
                            </th>

                            {/* batch */}
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1    py-1  font-semibold">
                                    {product?.batch}
                                </span>
                            </td>
                            <td className="px-6 py-4">{product?.district}</td>

                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <Link href={`/productComponents/${product?.id}`}>
                                        <Button size="sm">Choose</Button>
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

export default PcBuilder;