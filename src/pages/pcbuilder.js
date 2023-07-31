import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useSelector } from "react-redux";


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

    const { components } = useSelector(state => state.components)
    console.log('com', components)



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

                            {/* added components */}
                            {components.find(component => component.category === category.title) ?
                                components.filter(component => component.category === category.title)?.map(
                                    component =>

                                        <>
                                            <td className="px-6 py-4 ">
                                                <div className="flex items-center gap-1">
                                                    <div className="h-24 w-24">
                                                        <img
                                                            className="h-full w-full  object-cover object-center"
                                                            src={component.image} alt="" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium flex items-center gap-x-1">
                                                            rating:
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
                                                            {component?.rating}
                                                        </div>

                                                        <p> price:   {component.price}</p>
                                                    </div>

                                                </div>

                                                <span className="inline-flex items-center    py-1  font-semibold">
                                                    {(component?.name)}
                                                </span>

                                            </td>

                                        </>
                                )
                                :
                                <>
                                    <td>
                                        <h1
                                            className="text-md text-gray-700 font-semibold"
                                        > please select {category.title} First
                                        </h1>
                                    </td>
                                </>
                            }


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
        </div >
    );
};

export default PcBuilder;