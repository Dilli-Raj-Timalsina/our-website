"use client";
import { Link } from "react-scroll";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";

export default function NavBar2() {
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
                            <img src="/hamburgermenu.svg" alt="" className="w-8 h-8 " />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 navbar-end lg:navbar-start ">
                        <a href="/">
                            <img
                                src="/logooursite.png"
                                alt=""
                                className="w-28 h-20 cursor-pointer"
                            />
                        </a>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className=" text-white menu flex gap-6 items-center menu-horizontal">
                            {/* Navbar menu content here */}
                            <li className="cursor-pointer hover:text-slate-400">
                                <a href="/">Home</a>
                            </li>

                            <li className="cursor-pointer hover:text-slate-400">
                                <DropDown></DropDown>
                            </li>
                            <li className=" cursor-pointer hover:text-slate-400">
                                <a href="/referral">Referal</a>
                            </li>
                            <li className="cursor-pointer hover:text-slate-400">
                                <a href="/about">About us</a>
                            </li>

                            <li className=" cursor-pointer hover:text-slate-400">
                                <a href="/">Contact Us</a>
                            </li>

                            <li className="  cursor-pointer rounded-sm  py-1 px-4 border  border-cyan-600 text-cyan-300 text-center hover:border-cyan-400">
                                <a href="/"> Explore Our Services</a>
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
                        <a href="/">Home</a>
                    </li>

                    <li className=" cursor-pointer ">
                        <a>
                            <DropDown2></DropDown2>
                        </a>
                    </li>

                    <li className=" cursor-pointer ">
                        <a href="/referral">Referal</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="/about">About us</a>
                    </li>
                    <li className=" cursor-pointer ">
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
