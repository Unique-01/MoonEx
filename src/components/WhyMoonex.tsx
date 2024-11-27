import MoonexLogo from "@/assets/moonexLogo2.svg";
import UniswapLogo from "@/assets/uniswapLogo.svg";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const WhyMoonex: React.FC = () => {
    return (
        <div className="container fira-code py-20 relative" id="about">
            <h1 className="text-3xl text-white font-extrabold  m-5">
                Why <span className="text-primary">MoonEX</span>?
            </h1>
            <div
                className="overflow-x-auto md:px-10 px-5 pt-3 pb-5 rounded-xl"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.02)" }}>
                <div className="absolute light-gradient md:h-[500px] md:w-[500px] -bottom-20 lg:left-52"></div>

                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className=" p-4 text-primary font-bold  md:text-xl">
                                Comparison
                            </th>
                            <th>
                                <span className="flex justify-center">
                                    <img
                                        src={MoonexLogo}
                                        alt="moonex"
                                        className="w-60"
                                    />
                                </span>
                            </th>
                            <th>
                                <span className="flex justify-center">
                                    <img
                                        src={UniswapLogo}
                                        alt="Uniswap"
                                        className="w-40"
                                    />
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {[...Array(6)].map((_, index) => (
                            <tr key={index}>
                                <td className="p-4 text-gray-400 border-y border-e border-slate-800">
                                    {index + 1}. Point no {index + 1}
                                </td>
                                <td className="p-4  text-center border-y border-e border-slate-800">
                                    <span className="flex justify-center text-xl">
                                        <FaCheck className="text-green-300" />
                                    </span>
                                </td>
                                <td className="p-4 text-center border-y border-slate-800">
                                    <span className="flex justify-center text-xl">
                                        <FaTimes className="text-red-500" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WhyMoonex;
