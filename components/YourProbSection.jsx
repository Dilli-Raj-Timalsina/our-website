export default function YourProbSection() {
    return (
        <section>
            <div className="flex flex-col text-center items-center md:items-start md:text-start absolute md:left-24 md:top-60 top-40 left-4 text-white h-fit pb-20  pr-4">
                <p className="text-cyan-400 ">YOUR , PROBLEM OUR SOLUTION</p>
                <h1 className=" text-4xl text-white font-semibold mt-4">
                    BEST IT SOLUTION PROVIDER
                </h1>
                <p className="text-slate-100 mt-6 md:w-1/2 w-full  h-fit">
                    Lorem ipsum dolor sit amet consectetur. Sed id aliquam
                    interdum enim. Rhoncus amet mauris tincidunt pulvinar sed
                    integer placerat eu. Lorem euismod odio viverra vel
                    fringilla et diam nisi pr
                </p>
                <button className="cursor-pointer   py-1 px-4 border-2 border-cyan-600 text-white text-center bg-blue-600 w-fit mt-6">
                    <a>Explore Our Services</a>
                </button>
            </div>
            <img
                src="/navimage.png"
                alt=""
                className="w-2/5 h-fit absolute right-0 top-32 hidden md:flex"
            />
        </section>
    );
}
