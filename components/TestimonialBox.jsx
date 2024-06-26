export default function TestimonialBox() {
    return (
        <div className="bg-slate-100 h-full flex flex-col pb-6 relative px-2 md:px-0 items-center">
            <img
                src="/butterfly.svg"
                alt=""
                className="w-2/6 h-fit absolute left-0 z-0"
            />
            <h1 className="text-3xl text-gray-900 font-bold py-14  z-10 hidden md:flex">
                what our client says about us
            </h1>
            <h1 className="text-3xl text-gray-900 font-bold py-8  z-10 md:hidden">
                Our Client Says !
            </h1>
            <div className=" flex flex-col md:flex-row justify-center gap-14 items-center z-10 overflow-x-auto hide-scroll-bar font-medium">
                <div className=" text-center  bg-white px-8 py-4 shadow-lg flex flex-col w-80 items-center  min-h-80 ">
                    <img src="/quote.svg" alt="" className="w-10 h-10 " />
                    <p className="text-gray-800">
                        Highly Capable Developer Delivers Robust E- commerce Solution .
                        The experience of working with them has been largely positive, and
                        the outcomes have been tangible.
                    </p>

                    <img
                        src="/mama.jpg"
                        alt=""
                        className="w-24 h-24 mt-4 mb-2 rounded-full"
                    />

                    <p className="text-gray-800">Ram Shah</p>
                </div>
                <div className=" text-center  bg-white px-8 py-4 shadow-lg flex flex-col w-80 items-center min-h-80">
                    <img src="/quote.svg" alt="" className="w-10 h-10 " />
                    <p className="text-gray-800">
                        A game-changer! From the moment I engaged with their services, I
                        knew I was in good hands. Their team's professionalism and
                        friendliness made the enti ...
                    </p>
                    <img
                        src="/roland.jpg"
                        alt=""
                        className="w-24 h-24 mt-4 mb-2 rounded-full"
                    />
                    <p className="text-gray-800">Roland shah</p>
                </div>
                <div className=" text-center bg-white px-8 py-4 shadow-lg flex flex-col w-80 items-center  min-h-80">
                    <img src="/quote.svg" alt="" className="w-10 h-10 " />
                    <p className=" text-gray-800 ">
                        Absolutely thrilled with the software company's service! Seamless,
                        intuitive, and tailored to our needs. Their tech prowess and
                        attention to detail elevated our online store.
                    </p>
                    <img
                        src="/sudheer_reddy.jpg"
                        alt=""
                        className="w-24 h-24 mt-4 mb-2 rounded-full"
                    />
                    <p className="text-gray-800">Sudheer Reddy</p>
                </div>
            </div>
            <div className=" flex gap-2 pt-14 items-center justify-center" name="contact">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            </div>
        </div>
    );
}
