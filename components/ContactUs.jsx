export default function ContactUs() {
    return (
        <div className="flex md:text-start flex-col md:flex-row w-screen h-full  justify-around bg-sky-950 px-3 py-16">
            <div className="md:w-2/5  text-center">
                <h1 className="text-4xl text-white font-semibold ">Write a message</h1>
                <form action="" method="post">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full mt-4 px-3 py-2 outline-none  rounded-sm"
                        placeholder="Your Full Name"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full mt-4 px-3 py-2 outline-none rounded-sm"
                        placeholder="Your Email"
                    />
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full mt-4 px-3 py-2 outline-none rounded-sm"
                        placeholder="Write your message..."
                    ></textarea>
                    <button
                        type="submit"
                        className="px-10 rounded-md py-2 text-white text-lg font-medium bg-blue-500 text-center mt-6 "
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="">
                <h1 className="text-4xl text-white text-center md:text-start font-semibold py-10 md:py-0 ">
                    Contact Info
                </h1>
                <ul className="flex flex-col gap-4 pt-2">
                    <li className="flex items-center gap-4 ">
                        <img src="/homeicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">Ecom technology Pvt.ltd</p>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <img src="/locationicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">
                            800 N King Street Suite 304 1198 Wilmington, US
                        </p>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <img src="/messageicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">ecomsuite@gmail.com</p>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <img src="/phoneicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">+1232878927</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
