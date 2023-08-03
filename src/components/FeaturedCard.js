import {
    Card,
    CardHeader,
    CardBody,
    Typography,

} from "@material-tailwind/react";
import Link from "next/link";

export default function FeaturedCard() {
    const FeaturedItems = [
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

        <div className="my-7" >
            <div className="flex justify-center my-4 text-2xl">

                <h1 className="font-semibold font-sans ">Features</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center space-y-6">
                {
                    FeaturedItems.map((item) =>


                        <Link
                            key={item?.id}
                            href={`/products/${item?.title}`}>


                            <Card
                                shadow={false}
                                className="relative grid h-[12rem]  w-[17rem] items-end justify-center overflow-hidden text-center"
                            >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    style={{
                                        backgroundImage: `url('${item.image}')`

                                    }}
                                    className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover object-cover bg-center"
                                >
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                </CardHeader>
                                <CardBody className="relative py-1 px-6 md:px-12">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-6 font-medium leading-[1.5]"
                                    >
                                        {item?.title}
                                    </Typography>


                                </CardBody>
                            </Card>

                        </Link>
                    )
                }

            </div>
        </div>
    );
}