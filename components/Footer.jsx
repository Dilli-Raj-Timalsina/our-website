"use client";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral md:h-80 text-neutral-content">
            <nav className="max-w-80">
                <Link
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <img
                        src="/logooursite.png"
                        alt=""
                        className="w-20 h-fit cursor-pointer"
                    />
                </Link>
                <p className="">
                    At Ecom Suite, we're dedicated to empowering businesses with
                    innovative IT solutions tailored to their needs. With a focus on
                    quality, reliability, and customer satisfaction, we strive to exceed
                    expectations and drive success in the digital realm. Partner with us
                    to unlock the full potential of your business today.
                </p>
            </nav>
            <nav>
                <header className="footer-title text-white text-xl">Quick Links</header>
                <a className="link link-hover" href="/service-section/webdev">
                    Our Services
                </a>
                <a className="link link-hover" href="/about">
                    About Us
                </a>
                <a className="link link-hover" href="/about">
                    Why Choose Us
                </a>
                <a className="link link-hover" href="#">
                    Testimonials
                </a>
                <a className="link link-hover" href="/referral">
                    Referrals
                </a>
            </nav>
            <nav>
                <header className="footer-title text-white text-xl">Contact Us</header>
                <a className="link link-hover" href="/privacy">
                    Terms of use
                </a>
                <a className="link link-hover" href="/privacy">
                    Privacy policy
                </a>
                <a className="link link-hover" href="/privacy">
                    Cookie policy
                </a>
            </nav>
        </footer>
    );
}
