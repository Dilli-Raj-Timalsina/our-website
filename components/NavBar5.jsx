export default function NavBar5() {
    return (
        <div className="navbar absolute top-0  pt-5 pl-20 pr-24">
            <div className=" navbar-start ">
                <img src="/logo3.svg" alt="" className="w-20 h-fit" />
            </div>
            <div className="navbar-end  text-nowrap ">
                <ul className=" text-white flex gap-8 items-center ">
                    <li className=" cursor-pointer z-10">
                        <a>About us</a>
                    </li>
                    <li className="  cursor-pointer z-10">
                        <a>Referal</a>
                    </li>
                    <li className="  cursor-pointer z-10">
                        <a>Our Services</a>
                    </li>
                    <li className="  cursor-pointer z-10">
                        <a>Contact Us</a>
                    </li>
                    <li className="  cursor-pointer z-10 rounded-sm  py-1 px-4 border-2 border-cyan-600 text-cyan-600 text-center">
                        <a>Explore Our Services</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
