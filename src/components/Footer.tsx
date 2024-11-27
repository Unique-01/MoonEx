import MoonexLogo from "@/assets/moonexLogo3.svg";
import { FaTelegram } from "react-icons/fa6";
import { GrReddit } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#051422] text-white py-14">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2 mb-4 lg:mb-0">
                    <img src={MoonexLogo} alt="Moonex Logo" className="" />
                </div>

                {/* Links Section */}
                <div className="flex space-x-6 mb-4 lg:mb-0 font-bold">
                    <a href="#about" className=" hover:text-yellow-500">
                        About Us
                    </a>
                    <a href="#roadmap" className=" hover:text-yellow-500">
                        Roadmap
                    </a>
                    <a href="#faqs" className=" hover:text-yellow-500">
                        FAQs
                    </a>
                    <a href="#contact" className=" hover:text-yellow-500">
                        Contact Us
                    </a>
                </div>

                {/* Contact Section */}
                <div className="">
                    <p className="font-bold text-white text-3xl">
                        Contact <span className="text-yellow-500">Us</span>
                    </p>
                    <div className="flex justify-between space-x-4 mt-2">
                        <a
                            href="https://telegram.org"
                            target="_blank"
                            rel="noreferrer">
                            <FaTelegram size={30} />
                        </a>
                        <a
                            href="https://reddit.com"
                            target="_blank"
                            rel="noreferrer">
                            <GrReddit size={30} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer">
                            <FiTwitter size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
