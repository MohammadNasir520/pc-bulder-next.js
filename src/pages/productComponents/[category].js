
import { addToStor } from "@/redux/feature/component/componentSlice";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";


const CategoryComponents = ({ components }) => {
    const storedComponents = useSelector(state => state.components)
    console.log(storedComponents)

    const dispatch = useDispatch()


    return (

        <div className="overflow-hidden min-h-screen mx-auto border border-gray-200 shadow-md m-5">
            <table className="w-1/2 mx-auto border-collapse bg-white text-left text-sm  text-gray-800 font-sans">
                <thead className="bg-gray-50 w-full ">
                    <tr className="w-full mx-auto">
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            components
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Price
                        </th>


                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                            Add To Builder
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {components?.map((component) => (
                        <tr key={component?.id} className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal items-center ">
                                <div className="h-36 w-32">
                                    <img
                                        className="h-full w-full  object-cover object-center"
                                        src={component.image}
                                        alt=""
                                    />

                                </div>
                                <div className="text-sm pl-3">
                                    <div className="font-semibold">{component?.name}</div>

                                    <div className="font-medium flex items-center gap-x-1">
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
                                    <div className="font-medium ">{component?.category}</div>
                                    <div className="font-medium ">{component?.status}</div>

                                </div>
                            </th>

                            {/* price */}
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1    py-1  font-semibold">
                                    <div className="flex items-center gap-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <h1 className="font-semibold">  {component?.price}</h1>
                                    </div>
                                </span>
                            </td>


                            <td className="px-6 py-4">
                                <div className="flex gap-2">

                                    <Button
                                        onClick={() => dispatch(addToStor(component))}
                                        size="sm"
                                    > Add </Button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryComponents;

export const getServerSideProps = async (context) => {
    const { params } = context
    console.log(params.productId)
    const res = await fetch(`http://localhost:5000/api/v1/products/categories/${params.category}`)
    const data = await res.json()
    console.log(data)
    return {
        props: {
            components: data?.data
        }
    }
}