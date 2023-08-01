

import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Chip,
    Avatar,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    UserCircleIcon,
    CubeTransparentIcon,
    Bars3Icon,
    XMarkIcon,
    FlagIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    Square3Stack3DIcon,
    RocketLaunchIcon,
    FaceSmileIcon,
    PuzzlePieceIcon,
    GiftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const colors = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-500",
    "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
    purple: "bg-purple-50 text-purple-500",
    teal: "bg-teal-50 text-teal-500",
    cyan: "bg-cyan-50 text-cyan-500",
    pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [

    {
        color: "orange",
        icon: ChatBubbleOvalLeftIcon,
        title: "Processor",
        description: "News and writings, press releases, and resources",
    },
    {
        color: "green",
        icon: UsersIcon,
        title: "Monitor",
        description: "We are always looking for talented people. Join us!",
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "Ram",
        description: "All the stuff that we dan from legal made us add.",
    },
    {
        color: "purple",
        icon: RocketLaunchIcon,
        title: "PowerSupply",
        description: "Checkout our products that helps a startup running.",
    },
    {
        color: "teal",
        icon: FaceSmileIcon,
        title: "StorageUnit",
        description: "Set of beautiful icons that you can use in your project.",
    },
    {
        color: "cyan",
        icon: PuzzlePieceIcon,
        title: "MotherBoard",
        description: "High quality UI Kits helps you to 2x faster.",
    },

];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ icon, title, color }, key) => (
            <div key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    {/* <div className={`rounded-lg p-5 ${colors[color]}`}>
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 w-6",
                        })}
                    </div> */}
                    <div>
                        <Link href={`/products/${title}`}>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="flex items-center text-sm"
                            >
                                {title}
                            </Typography>

                        </Link>


                    </div>
                </MenuItem>
            </div>
        )
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-normal">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >

                            Categories
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">

            <NavListMenu />

        </List>
    );
}

export default function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);
    const { data: session } = useSession()

    console.log('session', session)

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href={'/'}>
                    <Typography

                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                    >
                        PC BUILD
                    </Typography>
                </Link>

                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="flex gap-3">


                    <Link href={'/pcbuilder'}>
                        <Button variant="outlined" size="sm" className="hidden lg:inline-block ">
                            <span >PC BUILDER</span>
                        </Button>
                    </Link>

                    {
                        !session?.user
                            ?
                            <div className="hidden gap-2 lg:flex">
                                <Button
                                    onClick={() => signIn('github')}
                                    variant="text" size="sm" color="blue-gray">
                                    Sign In
                                </Button>
                                <Button variant="gradient" size="sm">
                                    Sign Up
                                </Button>
                            </div>
                            :
                            <div>
                                <Button
                                    onClick={() => signOut()}
                                    className="hidden lg:block" variant="gradient" size="sm">
                                    Sign out
                                </Button>
                            </div>
                    }
                    {session?.user?.image ?
                        <Avatar src={session?.user?.image} alt="avatar" size="sm" /> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    }


                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div>
                    <Link href={'/pcbuilder'}>
                        <Button variant="outlined" size="sm" className=" lg:hidden ">
                            <span >PC BUILDER</span>
                        </Button>
                    </Link>
                </div>
                {
                    !session?.user ?
                        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                                Sign In
                            </Button>
                            <Button variant="gradient" size="sm" fullWidth>
                                Sign Up
                            </Button>
                        </div> :
                        <Button
                            onClick={() => signOut()}
                            className="lg:hidden my-2" variant="gradient" size="sm">
                            Sign out
                        </Button>
                }

                {session?.user?.image ?
                    <Avatar src={session?.user?.image} alt="avatar" size="sm" /> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                }

            </Collapse>
        </Navbar>
    );
}