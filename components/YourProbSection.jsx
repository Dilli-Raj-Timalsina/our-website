"use client";
import { Link } from "react-scroll";

export default function YourProbSection() {
    return (
        <section>
            <div className="flex flex-col text-center items-center md:items-start md:text-start absolute md:left-24 md:top-60 top-40 left-4 text-white h-fit pb-20  pr-4">
                <p className="text-cyan-400 text-lg">WEB + ANDRIOD + IOS </p>
                <h1 className=" text-5xl text-white font-semibold mt-4 font-sans">
                    YOUR TECH PARTNER !
                </h1>
                <p className="text-slate-100 mt-6 md:w-1/2 w-full  h-fit">
                    Take the opportunity to elevate your business to new heights with our
                    futuristic ecommerce platforms and auxiliary tech services , just
                    bring your idea and accelerate your business with our tech suite .
                </p>
                <button className="cursor-pointer   py-3 px-6  text-white text-center bg-cyan-600 w-fit mt-6 text-base hover:bg-cyan-500">
                    <Link
                        activeClass="active"
                        to="whyus"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer"
                    >
                        Why Choose Us ?
                    </Link>
                </button>
            </div>
            <img
                src="/navimage.png"
                alt=""
                className="w-2/5 h-fit absolute right-0 top-32 hidden md:flex"
            />
        </section>
    );
}
