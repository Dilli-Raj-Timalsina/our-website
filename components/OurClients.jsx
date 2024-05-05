export default function OurClients() {
    return (
        <div className="flex flex-col md:pb-20 pb-10  bg-white">
            <h1 className="text-3xl text-gray-900 font-bold md:py-14 py-7 text-center">
                Our Clients
            </h1>
            <div className="flex justify-around items-center ">
                <img src="/mainlogo.png" alt="" className="md:w-32 md:h-15 w-24 h-10" />
                <img
                    src="https://nextjssite-mu.vercel.app/logo.webp"
                    alt=""
                    className="md:w-28 m:h-28 w-20 h-20"
                />
                <img
                    src="/logovstruk.jpg"
                    alt=""
                    className="md:w-28  md:h-20 w-20 h-15"
                />
                <img src="/gama.jpg" alt="" className="md:w-28  md:h-20 w-20 h-15" />
            </div>
        </div>
    );
}
