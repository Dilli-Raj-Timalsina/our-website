export default function StartProject() {
    return (
        <div className="bg-white relative left-3 mr-3 md:left-44 mb-20 rounded-md shadow-lg md:px-10 md:pb-14 pb-24 px-10  pt-8 w-11/12 md:w-3/4 h-fit  my-10 text-start">
            <p className="md:text-3xl text-2xl font-bold text-sky-400 text-center md:text-start">
                Would you like to start a project with us?
            </p>
            <div className="text-gray-600 font-medium text-base mt-4  ">
                If you are looking for an IT Service Provider to help you create a
                <span className="md:hidden">
                    {" "}
                    remarkable presence online, you've come to the right place.
                </span>
            </div>
            <div className="text-gray-600 font-medium text-base hidden md:flex">
                remarkable presence online, you've come to the right place.
            </div>
            <a
                className="absolute text-lg font-medium px-10 py-2 bg-sky-400 text-gray-900 text-center rounded-md md:right-10 md:bottom-20 bottom-6 right-16 border border-gray-100"
                href="/"
            >
                Contact Us
            </a>
        </div>
    );
}
