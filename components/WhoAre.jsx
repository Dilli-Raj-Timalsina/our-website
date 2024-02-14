export default function WhoAre({ title, content }) {
    return (
        <div className="mx-auto md:w-lg max-w-lg md:w-80 p-6 px-10 pb-16 bg-white rounded-lg shadow-md ">
            <div className=" text-start w-14 h-2 my-8 bg-sky-300"></div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">{title}</h3>
            <p className="text-base leading-relaxed">{content}</p>
        </div>
    );
}
