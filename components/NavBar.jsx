export default function NavBar() {
    return (
        <div className="drawer absolute top-0 z-20">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar lg:pl-20 lg:pr-24">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <img
                                src="/hamburgermenu.svg"
                                alt=""
                                className="w-8 h-8 "
                            />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 navbar-end lg:navbar-start ">
                        <div className="">
                            <img
                                src="/logo3.svg"
                                alt=""
                                className="w-20 h-fit"
                            />
                        </div>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className=" text-white menu flex gap-6 items-center menu-horizontal">
                            {/* Navbar menu content here */}
                            <li className="cursor-pointer">
                                <a>About us</a>
                            </li>
                            <li className=" cursor-pointer">
                                <a>Referal</a>
                            </li>
                            <li className=" cursor-pointer">
                                <a>Contact Us</a>
                            </li>
                            <li className=" cursor-pointer">
                                <a>Our Services</a>
                            </li>
                            <li className="  cursor-pointer rounded-sm  py-1 px-4 border  border-cyan-600 text-cyan-300 text-center">
                                <a>Explore Our Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side ">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="  w-80 min-h-full  bg-base-200 flex flex-col gap-8 text-xl items-center pt-14">
                    {/* Sidebar content here */}
                    <li className="cursor-pointer">
                        <a>About us</a>
                    </li>
                    <li className=" cursor-pointer ">
                        <a>Referal</a>
                    </li>
                    <li className=" cursor-pointer ">
                        <a>Contact Us</a>
                    </li>
                    <li className=" cursor-pointer ">
                        <a>Our Services</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
