export default function ServiceCard() {
    return (
        <div className="grid grid-cols-2  h-fit md:mt-20 md:ml-16 md:mr-4 px-2 md:p-0 gap-2 md:gap-6  basis-4/12">
            <section className=" md:w-56 md:h-64 w-48 h-60 bg-white p-2 shadow-lg flex  z-10 flex-col items-center  gap-y-2 gap-x-2">
                <img
                    src="/graphics.png"
                    alt=""
                    className="w-24 h-fit rounded-full p-2 bg-slate-100"
                />
                <h1 className="text-xl font-semibold text-gray-800 pt-2 pb-1 text-nowrap">
                    Digital Marketing
                </h1>
                <p className="text-sm text-center">
                    SEO, social media, email—maximize visibility, reach more customers!
                </p>
            </section>
            <section className="  md:w-56 md:h-64 w-48 h-60 bg-white p-2 shadow-lg flex z-10 flex-col items-center  gap-y-2 gap-x-2">
                <img
                    src="/webdev.svg"
                    alt=""
                    className="w-24 h-fit rounded-full p-2 bg-slate-100"
                />
                <h1 className="text-xl font-semibold text-gray-800 pt-2 pb-1 text-nowrap">
                    Web Development
                </h1>
                <p className="text-sm text-center">
                    Tailored websites from design to maintenance. Your unique online
                    presence .
                </p>
            </section>
            <section className=" md:w-56 md:h-64 w-48 h-60 bg-white p-2 shadow-lg flex z-10 flex-col items-center  gap-y-2 gap-x-2">
                <img
                    src="/uiux.png"
                    alt=""
                    className="w-24 h-fit rounded-full p-2 bg-slate-300"
                />
                <h1 className="text-xl font-semibold text-gray-800 pt-2 pb-1 text-nowrap">
                    Graphics Design
                </h1>
                <p className="text-sm text-center">
                    Our skilled graphic team crafts eye-catching designs for websites,
                    brochures, cards .
                </p>
            </section>
            <section className=" md:w-56 md:h-64 w-48 h-60 bg-white p-2 shadow-lg flex z-10 flex-col items-center  gap-y-2 gap-x-2">
                <img
                    src="/mobileicon.svg"
                    alt=""
                    className="w-24 h-fit rounded-full p-2 bg-slate-100"
                />
                <h1 className="text-xl font-semibold text-gray-800 pt-2 pb-1 text-nowrap">
                    App Development
                </h1>
                <p className="text-sm text-center">
                    We ace mobile app dev for Android/iOS, optimized for all devices .
                </p>
            </section>
        </div>
    );
}
