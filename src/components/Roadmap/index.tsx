import { IoCheckmarkDone } from "react-icons/io5";
import { PiLightningBold } from "react-icons/pi";
import { MdLinkOff } from "react-icons/md";
import { FiLock } from "react-icons/fi";
const Roadmap: React.FC = () => {
    return (
        <div className="text-white container py-10 relative">
            <h1 className="text-end text-white fira-code text-3xl font-bold">
                Project <span className="text-primary ">Roadmap</span>
            </h1>
            <div className="absolute light-gradient md:h-96 md:w-96 -top-20  lg:right-32"></div>
            <div className="mt-20 lg:px-10">
                <div className="text-end text-green-200 font-bold text-2xl fira-code mb-10">
                    <h1>Phase One</h1>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center ms-8 md:ms-12">
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t border-slate-600 w-full border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-xs text-gray-500  lg:mx-[-50px]  text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t border-slate-600 w-full border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-xs text-gray-500 lg:mx-[-50px] text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center">
                            <div className=" lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t  border-slate-600 w-full border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-xs text-gray-500 lg:mx-[-50px] text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center pe-4">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t border-slate-600 w-full "></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center my-[-15px] relative">
                    <div className="font-bold text-2xl fira-code text-yellow-300">
                        <h1>Phase Two</h1>
                    </div>
                    <div className="absolute light-gradient md:h-[700px] md:w-[700px] -top-52 -left-96"></div>
                    <div className="flex flex-col items-center">
                        <div className="border-r border-slate-600 h-36 "></div>
                        <p className="bg-slate-800 p-2 rounded-full">
                            <PiLightningBold />
                        </p>
                        <div className="border-r border-slate-600 h-36 "></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div className="border-t border-slate-600 w-24"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t border-slate-600 w-full border-dashed"></div>
                        </div>
                        <p className="text-xs text-gray-500 text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t border-slate-600 w-full border-dashed"></div>
                        </div>
                        <p className="text-xs text-gray-500 lg:mx-[-50px]  text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t  border-slate-600 w-full border-dashed"></div>
                        </div>
                        <p className="text-xs text-gray-500 lg:mx-[-50px] text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center pe-4">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <IoCheckmarkDone />
                            </p>
                            <div className="border-t border-slate-600 w-full "></div>
                        </div>
                        <p className="text-xs text-gray-500 lg:mx-[-50px] text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                    </div>
                </div>
                <div className="flex justify-between  items-center my-[-80px] md:my-[-64px] ms-[-15.5px]">
                    <div className="flex flex-col items-center gap-10">
                        <div className="border-r border-slate-600 h-28 md:h-24 "></div>
                        <p className="bg-slate-800 p-2 rounded-full">
                            <MdLinkOff />
                        </p>
                        <div className="border-r border-slate-600 h-28 md:h-24 "></div>
                    </div>
                    <div className="font-bold text-2xl fira-code text-red-500">
                        <h1>Phase Three</h1>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center">
                            <div className="border-t border-slate-600 w-24"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <FiLock />
                            </p>
                            <div className="border-t border-slate-600 w-full border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-xs text-gray-500 lg:mx-[-50px]  text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <FiLock />
                            </p>
                            <div className="border-t border-slate-600 w-full border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-xs text-gray-500 lg:mx-[-50px] text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center">
                            <div className="lg:hidden border-t border-slate-600 w-full border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <FiLock />
                            </p>
                            <div className="border-t  border-slate-600 w-full border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-xs text-gray-500 lg:mx-[-50px] text-center max-w-36">
                            Point number one is completed and seven words
                        </p>
                        <div className="flex items-center pe-4">
                            <div className="lg:hidden border-t border-slate-600 w-16 border-dashed"></div>
                            <p className="bg-slate-800 p-2 rounded-full">
                                <FiLock />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
