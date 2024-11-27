const HeroSection: React.FC = () => {
    return (
        <div className="container relative">
            <div className="relative z-30">
                <div className="lg:flex items-center lg:h-screen py-10">
                    <div className="lg:grid grid-cols-3">
                        <div className="space-y-5 col-span-2">
                            <h1 className="text-6xl font-extrabold text-white fira-code">
                                Trusted Multi-Chain{" "}
                                <span className="text-yellow-400">DEX</span>{" "}
                                Platform
                            </h1>
                            <p className="text-neutral-500 text-2xl fira-code">
                                Trade, earn, and own crypto on the all-in-one
                                multi-chain DEX
                            </p>
                            <div className="font-extrabold flex space-x-6">
                                <button className="bg-gradient-to-r from-[#E4B40D] to-[#FBD966] hover:from-yellow-600 hover:to-yellow-400 py-3 px-8 text-center rounded-full cursor-pointer text-sm">
                                    Connect Wallet
                                </button>
                                <button className="text-[#E4B40D] border-2 border-[#E4B40D] hover:bg-gradient-to-r hover:from-[#E4B40D] hover:to-[#FBD966] hover:text-black transition-all ease-in-out py-3 px-10 text-center rounded-full cursor-pointer text-sm">
                                    Trade Crypto
                                </button>
                            </div>
                        </div>
                        <div className="relative hidden lg:block overflow-hidden -mt-20">
                            <div className=" relative z-30 h-[259px] w-[259px] bg-gradient-to-br from-[#FFF6D7] from-10% to-[#EDD955] via-[#E4B40D] rounded-full  ms-auto"></div>
                            <div className="absolute light-gradient h-96 w-96 -top-5  "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
