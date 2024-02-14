import NavBar from "@/components/NavBar";

export default function WebDev() {
    return (
        <div className="w-screen h-full bg-slate-50 ">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-24 relative z-0 bg-sky-950"
            />

            <NavBar></NavBar>
            <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
                            Web Development
                        </h2>
                        <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
                            Enhanced
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
                                IT Solutions
                            </span>
                        </h1>
                        <p className="mt-6 text-md text-gray-600 max-w-lg text-center">
                            Discover the exceptional features of our insurance services
                            designed to streamline processes and provide comprehensive
                            coverage for your needs.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Website Design and Development
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Our team specializes in crafting intelligent websites
                                    tailored to meet and exceed your expectations. By
                                    understanding your business needs, we customize every
                                    aspect of the website to ensure optimal performance
                                    and user satisfaction.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Comprehensive Service Offerings
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    We offer a wide range of services, including web
                                    design, web development, application development,
                                    hosting, e-commerce solutions, search engine
                                    optimization (SEO), and consulting. Our holistic
                                    approach ensures that all aspects of your online
                                    presence are covered to drive success.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Cost-Efficient Premiums
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Experience cost-effective insurance solutions. We keep
                                    our premiums competitive, ensuring you receive optimal
                                    coverage without breaking the bank.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Scalable Content Management
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    We implement robust content management systems that
                                    allow for different permission levels. This ensures
                                    scalability and accountability, enabling multiple
                                    users to manage, create, and modify digital content
                                    with varying levels of access.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
