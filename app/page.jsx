import YourProbSection from "@/components/YourProbSection";
import ServiceCard from "@/components/ServiceCard";
import FindOut from "@/components/FindOut";
import LetsMake from "@/components/LetsMake";
import WhyUs from "@/components/WhyUs";
import OurClients from "@/components/OurClients";
import TestimonialBox from "@/components/TestimonialBox";
import NavBar from "@/components/NavBar";
import ContactUs from "@/components/ContactUs";

export default function Home() {
    return (
        <div>
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-128 md:h-screen relative z-0 bg-sky-950"
            />
            <NavBar></NavBar>
            <YourProbSection></YourProbSection>
            <div
                name="services"
                className=" md:w-screen h-full  flex flex-col md:flex-row justify-around md:pb-16 pb-10"
            >
                <img
                    src="/butterfly.svg"
                    alt=""
                    className="w-2/5 hidden md:flex h-fit absolute left-0 z-0"
                />
                <h1 className="text-2xl text-gray-800 font-bold  mt-10 mb-10 text-center md:hidden">
                    Our Services
                </h1>
                <ServiceCard></ServiceCard>
                <FindOut></FindOut>
            </div>
            <div className="w-screen h-full  flex justify-around items-center py-10 md:pb-20 md:pt-16 px-2  md:px-12  bg-white">
                <LetsMake></LetsMake>
                <img src="/laughing.png" alt="" className="w-2/5 h-fit hidden md:flex" />
            </div>
            <WhyUs></WhyUs>
            <OurClients></OurClients>
            <TestimonialBox></TestimonialBox>
            <ContactUs></ContactUs>
        </div>
    );
}
