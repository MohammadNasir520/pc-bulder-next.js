import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import Link from "next/link";

export default function FeaturedCard() {
    return (
        <Link href={`/products/4`}>


            <Card
                shadow={false}
                className="relative grid h-[10rem] w-full max-w-[17rem] items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-5-5600g-eid-special-desktop-pc-01-500x500.webp')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-1 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                        PC
                    </Typography>


                </CardBody>
            </Card>

        </Link>
    );
}