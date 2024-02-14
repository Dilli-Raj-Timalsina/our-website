export default function ContactHero() {
    return (
        <section className="mb-4">
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                style={{
                    backgroundPosition: "50%",
                    backgroundImage:
                        'url("https://mdbcdn.b-cdn.net/img/new/slides/146.webp")',
                    height: "500px",
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className="mt-2 mb-10 text-4xl font-bold tracking-tight md:text-4xl ">
                                About Us
                            </h1>
                            <h1 className="mt-2 mb-16 text-xl font-bold tracking-tight md:text-xl text-sky-300 ">
                                Welcome To The Digital Journey That Thrives Your Business
                                <br />
                                Expertise in Web Application and Software Development for
                                Your Business Growth
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
