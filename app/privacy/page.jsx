import React from "react";
import NavBar from "@/components/NavBar";

const PrivacyPolicyPage = () => {
    return (
        <div className="w-screen h-full bg-gray-100 ">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-24 relative z-0 bg-sky-950"
            />
            <NavBar />
            <div className="max-w-2xl mx-auto px-4 py-8 my-14 ">
                <h1 className="text-3xl font-bold mb-4 text-gray-950">Privacy Policy</h1>
                <p className="mb-4 text-gray-800">
                    At Ecom-suite, safeguarding your privacy is paramount to us. We
                    understand the importance of protecting your personal information and
                    ensuring its confidentiality. This Privacy Policy serves as a
                    transparent explanation of how we handle your data when you engage
                    with our services. We urge you to review this policy carefully to
                    understand how we collect, use, disclose, and safeguard your
                    information. By accessing or using our services, you acknowledge and
                    agree to the terms outlined in this privacy policy. Your trust is
                    fundamental to our relationship, and we are dedicated to upholding the
                    highest standards of privacy protection.
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">
                    Information We Collect
                </h2>
                <p className="mb-4 text-gray-800">
                    In our efforts to provide you with exceptional services, we may gather
                    various types of personal information from you. This may include but
                    is not limited to your name, email address, phone number, mailing
                    address, and other contact details. Additionally, we may collect
                    information about your device, such as its unique identifiers,
                    operating system, and browser type. Furthermore, we may track your
                    browsing activity on our platforms, including pages visited, links
                    clicked, and interactions with our content. Rest assured, all data
                    collected is handled with the utmost care and in accordance with
                    applicable privacy laws and regulations.
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">
                    How We Use Your Information
                </h2>
                <p className="mb-4 text-gray-800">
                    The information we gather plays a pivotal role in enhancing your
                    experience with Ecom-suite. Primarily, we utilize this data to
                    provide, maintain, and improve the quality of our services. By
                    understanding your preferences, we can tailor our offerings to better
                    meet your needs and expectations. Additionally, your information
                    enables us to effectively communicate with you, promptly respond to
                    your inquiries, and address any concerns you may have. Through
                    personalized interactions, we aim to create a seamless and enjoyable
                    experience for each user. Your feedback and engagement are integral to
                    our continuous efforts to innovate and optimize our services .
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">
                    Information Sharing
                </h2>
                <p className="mb-4 text-gray-800">
                    In certain instances, it may be necessary for us to share your
                    information with trusted third-party service providers to facilitate
                    the delivery of our services. These providers may include hosting
                    partners, payment processors, analytics services, and other entities
                    essential to our operations. Rest assured, we only engage with
                    reputable partners who adhere to stringent privacy standards and
                    utilize your information solely for the purposes outlined in our
                    Privacy Policy. <br />
                    Additionally, there may be circumstances where we are obligated to
                    disclose your information in compliance with legal requirements, such
                    as responding to lawful requests from law enforcement agencies or
                    regulatory authorities. We may also share your information to protect
                    our rights, property, or safety, or the rights, property, or safety of
                    others.
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">Security</h2>
                <p className="mb-4 text-gray-800">
                    We take reasonable measures to protect your information from
                    unauthorized access, use, or disclosure. However, no method of
                    transmission over the internet, or method of electronic storage, is
                    100% secure.
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">Your Choices</h2>
                <p className="mb-4 text-gray-800">
                    You can control the collection and use of your information through
                    your account settings. You may also choose to opt-out of certain
                    communications or services.
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">
                    Updates to This Policy
                </h2>
                <p className="mb-4 text-gray-800">
                    We may update this privacy policy from time to time. We will notify
                    you of any changes by posting the new privacy policy on this page.
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-950">Contact Us</h2>
                <p className="mb-4 text-gray-800">
                    If you have any questions, concerns, or inquiries regarding our
                    privacy policy or the handling of your personal information, we
                    encourage you to reach out to us. Your feedback is valuable to us, and
                    we are committed to addressing any queries or apprehensions you may
                    have.
                    <br />
                    You can contact us via email at ecomsuite78@gmail.com. Our dedicated
                    privacy team will promptly respond to your emails and provide you with
                    the assistance you need. Whether you seek clarification on specific
                    privacy practices, wish to exercise your rights regarding your
                    personal data, or have general inquiries about our services, we are
                    here to help.
                    <br />
                    Additionally, if you prefer to speak with us directly, you can contact
                    the founder of Ecom-suite, Gopi Shah, at +977-9817788454. Gopi Shah is
                    available to address any privacy-related concerns or inquiries you may
                    have and ensure that your privacy rights are upheld.
                    <br />
                    At Ecom-suite, we value transparency, accountability, and your trust.
                    We are committed to maintaining open lines of communication with our
                    users and addressing their privacy concerns promptly and effectively.
                    Your privacy matters to us, and we strive to provide you with the
                    assurance and support you need to feel confident in our services.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
