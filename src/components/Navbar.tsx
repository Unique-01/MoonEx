import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";
import MoonexLogo from "@/assets/MoonexLogo.svg";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container mx-auto text-white py-4  font-extrabold relative z-30">
            <div className=" lg:flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex lg:block justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img src={MoonexLogo} alt="Moonex" />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white text-2xl transition-all duration-300">
                            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                        </button>
                    </div>
                </div>

                {/* Desktop Menu Links */}
                <div
                    className={`${
                        menuOpen
                            ? "max-h-[550px] opacity-100"
                            : "max-h-0 opacity-0 lg:opacity-100"
                    } overflow-hidden lg:static lg:max-h-full lg:flex lg:w-auto lg:justify-between lg:items-center transition-all duration-500 ease-in-out`}>
                    <ul className="flex flex-col lg:flex-row gap-6 my-3 w-full lg:my-0 text-sm text-center lg:text-left text-white">
                        <li>
                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-white">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/roadmap"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-white">
                                Roadmap
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-white">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-white">
                                Contact Us
                            </Link>
                        </li>
                        <div className="lg:hidden my-4 px-4">
                            <Link
                                to="/connect-wallet"
                                className="bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] text-black hover:bg-yellow-600 py-2 px-4 transition-all duration-300 w-full text-center rounded-full text-sm">
                                Connect Wallet
                            </Link>
                        </div>
                    </ul>
                </div>

                <div className="hidden lg:block transition-colors duration-500 ease-in-out">
                    <Link
                        to="/connect-wallet"
                        className="bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] text-black hover:from-yellow-600 hover:to-yellow-400 py-3 px-5  w-full text-center rounded-full cursor-pointer text-sm">
                        Connect Wallet
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
