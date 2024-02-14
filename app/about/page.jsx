import NavBar from "@/components/NavBar";
import Accordin from "@/components/Accordin";
import StartProject from "@/components/StartProject";
import WhoAre from "@/components/WhoAre";
import ContactHero from "@/components/ContactHero";
import OurSixD from "@/components/OurSixD";

export default function AboutUs() {
    return (
        <div className="w-screen h-full bg-slate-50 ">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-28 relative z-0 bg-sky-950"
            />

            <NavBar></NavBar>
            <ContactHero></ContactHero>

            <div className="flex md:flex-row md:justify-between md:mx-16 mx-4 flex-col gap-6">
                <WhoAre
                    title={"Who are we"}
                    content="  We are a team of 25 experts with over 3 years of experience in building
                web applications and software. Our goal is to help businesses grow their
                online presence and achieve their goals through the use of technology. We
                have a wealth of experience in this field and are well-equipped to handle
                any project, big or small. Whether you need a new website, a custom
                software solution, or help with digital marketing, we have the skills and
                expertise to help you succeed."
                ></WhoAre>
                <WhoAre
                    title={"Our Mission"}
                    content=" Our mission is to empower our clients to fully utilize the internet by providing affordable and effective custom technology solutions.. We understand that every business is unique, and therefore we offer customized solutions tailored to each client’s specific needs. Our team of experts have years of experience in web application and software development, and we are dedicated to providing the highest quality services at an affordable price."
                ></WhoAre>
                <WhoAre
                    title={"Why Us"}
                    content=" We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price. With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.."
                ></WhoAre>
            </div>
            <OurSixD></OurSixD>
            <Accordin></Accordin>
            <StartProject></StartProject>
        </div>
    );
}
