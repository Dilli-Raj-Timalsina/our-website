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
            <div className=" flex flex-row justify-center gap-14 items-center z-10 overflow-x-auto hide-scroll-bar">
                <div className=" text-center font-medium bg-white px-8 py-4 shadow-lg flex flex-col w-80 items-center ">
                    <img src="/quote.svg" alt="" className="w-10 h-fit " />
                    <p className="  ">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque tellus
                        integer rutrum in ut a. Suspendisse aenean sit sapien cursus. Quis
                        ac neque sed nunc leo eget faucibus est tellus.
                    </p>
                    <img src="/photoicon.png" alt="" className="w-8 h-fit mt-6" />
                    <p>Herlin mirza</p>
                </div>
                <div className=" text-center bg-white px-8 py-4 shadow-lg flex flex-col w-80 items-center ">
                    <img src="/quote.svg" alt="" className="w-10 h-fit " />
                    <p className="  ">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque tellus
                        integer rutrum in ut a. Suspendisse aenean sit sapien cursus. Quis
                        ac neque sed nunc leo eget faucibus est tellus.
                    </p>
                    <img src="/photoicon.png" alt="" className="w-8 h-fit mt-6" />
                    <p>Herlin mirza</p>
                </div>
                <div className=" text-center bg-white px-8 py-4 shadow-lg flex flex-col w-80 items-center ">
                    <img src="/quote.svg" alt="" className="w-10 h-fit " />
                    <p className="  ">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque tellus
                        integer rutrum in ut a. Suspendisse aenean sit sapien cursus. Quis
                        ac neque sed nunc leo eget faucibus est tellus.
                    </p>
                    <img src="/photoicon.png" alt="" className="w-8 h-fit mt-6" />
                    <p>Herlin mirza</p>
                </div>
            </div>
            <div className=" flex gap-2 pt-14 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            </div>
        </div>
    );
}
