"use client";
import React, { useRef } from "react";
import BounceSpinners from "./spinners/BounceSpinners";
import SuccessMessage from "./spinners/SuccessMessage";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({ from_name: "", to_name: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSucess] = useState(false);
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const sendEmail = (templateParams) => {
        emailjs
            .send(
                "default_service",
                "template_d5nvhbu",
                templateParams,
                "pwwGIhv0Mp6iAT3uD"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData, "formData");
        sendEmail(formData);
        setTimeout(() => {
            setLoading(false);
            setFormData({ from_name: "", to_name: "", message: "" });
            setSucess(true);
            setTimeout(() => {
                setSucess(false);
            }, 3000);
        }, 3000);
    };
    return (
        <div className="flex md:text-start flex-col md:flex-row w-screen h-full  justify-around bg-sky-950 px-3 py-16">
            <div className="md:w-2/5  text-center">
                <h1 className="text-4xl text-white font-semibold ">Write a message</h1>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="w-full mt-4 px-3 py-2 outline-none  rounded-sm"
                        placeholder="Your Full Name"
                    />
                    <input
                        type="email"
                        id="to_name"
                        name="to_name"
                        value={formData.to_name}
                        required
                        onChange={handleChange}
                        className="w-full mt-4 px-3 py-2 outline-none rounded-sm"
                        placeholder="Your Email"
                    />
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full mt-4 px-3 py-2 outline-none rounded-sm"
                        placeholder="Write your message..."
                    ></textarea>

                    <button
                        disabled={loading}
                        type="submit"
                        className="px-10 rounded-md py-2 text-white text-lg font-medium bg-blue-500 text-center mt-6 "
                    >
                        {loading ? (
                            <BounceSpinners size={"w-4 h-4"} />
                        ) : (
                            <span>Send Message</span>
                        )}
                    </button>
                    {success && (
                        <SuccessMessage
                            message={"contacted succesfully, we will reach you soon !"}
                            position="top-10 right-10"
                        ></SuccessMessage>
                    )}
                </form>
            </div>
            <div className="">
                <h1 className="text-4xl text-white text-center md:text-start font-semibold py-10 md:py-0 ">
                    Contact Info
                </h1>
                <ul className="flex flex-col gap-4 pt-2">
                    <li className="flex items-center gap-4 ">
                        <img src="/homeicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">Ecom technology Pvt.ltd</p>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <img src="/locationicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">Bagmati Kathmandu , Nepal</p>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <img src="/messageicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">ecomsuite78@gmail.com</p>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <img src="/phoneicon.svg" alt="" className="w-5 h-5" />
                        <p className="text-lg text-gray-200">+977-9817788454</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
