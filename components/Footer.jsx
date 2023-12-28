export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral md:h-80 text-neutral-content">
            <nav className="max-w-80">
                <img src="/logo3.svg" alt="" className="w-16 h-fit " />
                <p className="">
                    Lorem ipsum dolor sit amet consectetur. Tellus nibh aliquam posuere
                    mollis ornare at molestie. S
                </p>
            </nav>
            <nav>
                <header className="footer-title text-white text-xl">Quick Links</header>
                <a className="link link-hover">Our Services</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Why Choose Us</a>
                <a className="link link-hover">Testimonials</a>
                <a className="link link-hover">Referrals</a>
            </nav>
            <nav>
                <header className="footer-title text-white text-xl">Contact Us</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
}
