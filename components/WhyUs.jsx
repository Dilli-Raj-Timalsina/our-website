export default function WhyUs() {
    return (
        <div className="w-screen h-full bg-sky-950 " name="whyus">
            <div className="text-center flex flex-col items-center pt-10 gap-2">
                <h1 className="text-4xl text-sky-500 font-semibold">Why choose us?</h1>
                <p className="text-slate-200 text-sm max-w-2xl">
                    Choose us for top-notch yet budget-friendly solutions. Experienced
                    devs, plus a dash of digital marketing magic. Your success,
                    simplified!
                </p>
            </div>

            <div className="grid grid-cols-2 md:gap-y-8 md:gap-x-16 gap-4  w-screen h-full place-content-center place-items-center md:pt-16 pt-10 pb-10 text-center">
                <div className="max-w-96 ">
                    <h1 className="md:text-3xl text-xl font-semibold text-slate-100 text-nowrap">
                        Resonable Budget
                    </h1>
                    <p className="text-xs md:text-sm text-slate-200 pt-2">
                        Your success shouldn't break the bank! We're all about reasonable
                        costs, caring for your budget. Our secret? We leverage modern
                        tools and software to minimize your expenses while maximizing
                        results📊🤝
                    </p>
                </div>
                <div className="max-w-96">
                    <h1 className="md:text-3xl text-xl font-semibold text-slate-100 text-nowrap">
                        Auxiliary Services
                    </h1>
                    <p className="text-xs md:text-sm text-slate-200 pt-2 ">
                        We're your go-to tech wizards! Beyond awesome web development, we
                        ace digital marketing, SEO, graphics design, and app/software
                        development. Your digital evolution starts here! 🌟
                    </p>
                </div>
                <div className="max-w-96">
                    <h1 className="md:text-3xl text-xl font-semibold text-slate-100 text-nowrap">
                        Experienced Team
                    </h1>
                    <p className="text-xs md:text-sm text-slate-200 pt-2">
                        Meet our powerhouse team of experienced devs, masters of their
                        craft! With a proven track record, they've aced multiple projects,
                        turning visions into digital reality. Excellence is our standard,
                        and your project is next in line for success.💻
                    </p>
                </div>
                <div className="max-w-96">
                    <h1 className="md:text-3xl text-xl font-semibold text-slate-100 text-nowrap">
                        Digital Marketing
                    </h1>
                    <p className="text-xs md:text-sm text-slate-200 pt-2">
                        We provide a variety of digital marketing services such as search
                        engine optimization (SEO), social media marketing, and email
                        marketing to help businesses increase their online visibility and
                        reach more customers🌐
                    </p>
                </div>
            </div>
        </div>
    );
}
