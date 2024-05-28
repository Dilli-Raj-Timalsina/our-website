import NavBar from "../NavBar";

export default function VideoEditing() {
    return (
        <div className="w-screen h-full bg-slate-50 ">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-24 relative z-0 bg-sky-950"
            />

            <NavBar></NavBar>
            <section className="overflow-hidden bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                    Produce faster
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Video Editing and Graphics Designing
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    "Enhance your videos using top-notch tools like
                                    Premiere Pro, After Effects, Canva, and advanced AI
                                    editors within the Ecom Suite. Elevate your video
                                    editing game and graphic design prowess with these
                                    professional-grade resources, ensuring your content
                                    stands out in the digital realm."
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                            >
                                                <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                                                <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                                                <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                                            </svg>
                                            Video Editing Services : <span> </span>
                                        </dt>
                                        <dd className="inline">
                                            We specialize in creative visual enhancements,
                                            including stunning visual effects, meticulous
                                            color grading, and dynamic motion graphics.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            Graphic Design Solutions : <span> </span>
                                        </dt>
                                        <dd className="inline">
                                            Our graphic design services harness leading
                                            designing tools to create visually captivating
                                            and strategically aligned designs that elevate
                                            your brand's identity and make a lasting
                                            impact.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <img
                            src="/videoediting.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] h-[32rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 mr-1 md:mr-0"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
