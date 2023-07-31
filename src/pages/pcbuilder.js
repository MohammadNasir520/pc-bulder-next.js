import { Button } from "@material-tailwind/react";
import Link from "next/link";


const PcBuilder = () => {
    const categories = [
        {
            id: 1,
            title: 'Processor',
            image: "https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-3-3200g/ryzen-3-3200g-3-500x500.jpg"
        },
        {
            id: 2,
            title: 'Monitor',
            image: "https://www.startech.com.bd/image/cache/catalog/monitor/walton/wd215v04/wd215v04-01-500x500.webp"
        },
        {
            id: 3,
            title: 'MotherBoard',
            image: "https://www.startech.com.bd/image/cache/catalog/Motherboard/Gigabyte/Gigabyte%20GA-H110M%20S2PH-DDR4-500x500.jpg"
        },
        {
            id: 4,
            title: 'PowerSupply',
            image: "https://www.startech.com.bd/image/cache/catalog/power-supply/Antec/neoeco-gold-650w/neoeco-gold-650w-01-500x500.webp"
        },
        {
            id: 5,
            title: 'Ram',
            image: "https://www.startech.com.bd/image/cache/catalog/ram/lexar/16gb-ddr4-3200mhz/16gb-ddr4-3200mhz-01-500x500.webp"
        },
        {
            id: 6,
            title: 'StorageUnit',
            image: "https://www.startech.com.bd/image/cache/catalog/server-accessories/ssd/dell/ssd-240gb-500x500.jpg"
        },
    ]


    return (

        <div className="overflow-hidden min-h-screen mx-auto border border-gray-200 shadow-md m-5">
            <table className="w-4/5 mx-auto border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            categories
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Added Components
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
                    {categories?.map((category) => (
                        <tr key={category?.id} className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal items-center text-gray-900">
                                <div className="h-24 w-24">
                                    <img
                                        className="h-full w-full  object-cover object-center"
                                        src={category.image}
                                        alt=""
                                    />

                                </div>
                                <div className="text-sm">
                                    <div className="font-semibold">{category?.title}</div>
                                    <div className="font-medium text-gray-700">Required</div>
                                </div>
                            </th>

                            {/* batch */}
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1    py-1  font-semibold">
                                    {category?.batch}
                                </span>
                            </td>
                            <td className="px-6 py-4">{category?.district}</td>

                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <Link href={`/productComponents/${category?.title}`}>
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