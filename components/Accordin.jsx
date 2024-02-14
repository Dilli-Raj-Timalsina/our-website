export default function Accordin() {
    return (
        <div className="w-screen  px-5 h-full  flex flex-row justify-around mt-28">
            <img src="/navimage.png" alt="" className="w-1/2 h-fit hidden md:flex" />
            <div>
                <div className="flex flex-col mx-auto text-start max-w-xl ">
                    <h2 className="font-bold text-4xl mt-5 tracking-tight ">
                        Why Choose Us?
                    </h2>
                    <p className="text-neutral-500 text-base mt-6 ">
                        Our vision is to be the leading provider of custom technology
                        solutions for businesses looking to grow their online presence. We
                        strive to be at the forefront of technological advancements and to
                        continuously improve our services in order to stay ahead of the
                        competition. We are committed to empowering our clients to fully
                        leverage the potential of the internet through the use of
                        cost-effective and innovative solutions.
                    </p>
                </div>
                <div className="grid divide-y divide-neutral-200 bg-white mx-8 my-10 border border-gray-200 rounded-sm">
                    <div className="py-5 px-6 md:px-10">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Website Developmet</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We specialize in creating custom websites that are
                                tailored to the specific needs of each client. Our team of
                                experts can handle everything from the design and
                                development of the website to ongoing maintenance and
                                updates.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-6 md:px-10">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Mobile Application</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We have experience in developing mobile apps for Android
                                and iOS platforms, we are able to create apps that are
                                optimized for different devices and screen sizes.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-6 md:px-10">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Software Development</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We have a team of software developers who can create
                                custom software solutions for businesses of all sizes.
                                Whether you need a simple application or a complex system,
                                we have the skills and expertise to deliver a solution
                                that meets your needs.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-6 md:px-10">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Graphic Design</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We have a team of experienced graphic designers who can
                                create visually appealing and engaging designs for
                                websites, brochures, business cards, and other marketing
                                materials.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-6 md:px-10">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>eCommerce</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We have experience in creating e-commerce websites and
                                integrating it with various payment gateways and shipping
                                providers. We can help you set up your online store and
                                make it easy for customers to purchase your products and
                                services online.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-6 md:px-10">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Digital Marketing</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                We provide a variety of digital marketing services such as
                                search engine optimization (SEO), social media marketing,
                                and email marketing to help businesses increase their
                                online visibility and reach more customers.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}
