export default function OurClients() {
    return (
        <div className="flex flex-col md:pb-20 pb-10  bg-white">
            <h1 className="text-3xl text-gray-900 font-bold md:py-14 py-7 text-center">
                Our Clients
            </h1>
            <div className="flex justify-around items-center ">
                <img src="/mainlogo.png" alt="" className="w-32 h-15" />
                <img
                    src="https://nextjssite-mu.vercel.app/logo.webp"
                    alt=""
                    className="w-28 h-28"
                />
                <img src="/logovstruk.jpg" alt="" className="w-28  h-20" />
                <img src="/gama.jpg" alt="" className="w-28  h-20" />
            </div>
        </div>
    );
}
