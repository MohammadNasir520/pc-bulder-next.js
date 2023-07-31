

import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Collapse,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const NavItems = [
        {
            title: "Processor",
            itemId: 1,
            dropOptions: [
                {
                    title: "intel",
                    id: 1
                },
                {
                    title: "Ryzen",
                    id: 2
                },
                {
                    title: "Hp",
                    id: 3
                },
            ]
        },
        {
            title: "Monitor",
            itemId: 2,
            dropOptions: [
                {
                    title: "Lg",
                    id: 1
                },
                {
                    title: "sony",
                    id: 2
                },
                {
                    title: "Tcl",
                    id: 3
                },
            ]
        },
        {
            title: "MotherBoard",
            itemId: 2,
            dropOptions: [
                {
                    title: "Lg",
                    id: 1
                },
                {
                    title: "sony",
                    id: 2
                },
                {
                    title: "Tcl",
                    id: 3
                },
            ]
        },
        {
            title: "Ram",
            itemId: 2,
            dropOptions: [
                {
                    title: "Lg",
                    id: 1
                },
                {
                    title: "sony",
                    id: 2
                },
                {
                    title: "Tcl",
                    id: 3
                },
            ]
        },
        {
            title: "Power Supply Unit",
            itemId: 2,
            dropOptions: [
                {
                    title: "Lg",
                    id: 1
                },
                {
                    title: "sony",
                    id: 2
                },
                {
                    title: "Tcl",
                    id: 3
                },
            ]
        },
        {
            title: "Storage Device",
            itemId: 2,
            dropOptions: [
                {
                    title: "Lg",
                    id: 1
                },
                {
                    title: "sony",
                    id: 2
                },
                {
                    title: "Tcl",
                    id: 3
                },
            ]
        },
        {
            title: "Others",
            itemId: 2,
            dropOptions: [
                {
                    title: "Lg",
                    id: 1
                },
                {
                    title: "sony",
                    id: 2
                },
                {
                    title: "Tcl",
                    id: 3
                },
            ]
        },
    ]

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {NavItems.map((navItem) =>
                <Menu key={navItem?.itemId} placement="bottom-start">
                    <MenuHandler >
                        <h2
                            variant="small"
                            color="blue-gray"
                            className='cursor-pointer'>
                            <span className="flex items-center text-blue-gray-900 font-sans">
                                {navItem?.title}
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform 
                                    }`}
                                />
                            </span>

                        </h2>
                    </MenuHandler>
                    <MenuList>
                        {
                            navItem?.dropOptions?.map((dropOption) =>
                                <MenuItem className=" font-sans" key={dropOption?.id}>{dropOption?.title}</MenuItem>
                            )
                        }

                    </MenuList>
                </Menu>
            )
            }
        </ul>
    );

    return (
        <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link href={'/'}>
                    <Typography

                        className="mr-4 cursor-pointer py-1.5 font-medium font-sans"

                    >
                        PC Builder
                    </Typography>
                </Link>

                <div className="hidden lg:block">{navList}</div>

                <Link href={'/pcbuilder'}>
                    <Button variant="outlined" size="sm" className="hidden lg:inline-block ">
                        <span >PC BUILDER</span>
                    </Button>
                </Link>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button variant="outlined" size="sm" fullWidth className="mb-2">
                        <span>PC BUILDER</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}