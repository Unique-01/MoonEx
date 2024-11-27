import { LuDollarSign, LuShieldCheck } from "react-icons/lu";
import FeatureCard from "./FeatureCard";
import "./FeatureSection.css";
import { FaPhoneSlash } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const features = [
    {
        icon: <LuDollarSign />,
        title: "Cheapest TXs",
        description:
            "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
        icon: <LuShieldCheck />,
        title: "CerTIK",
        description:
            "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
    },
    {
        icon: <FaPhoneSlash />,
        title: "No Contract Sells",
        description: "No contract sells to fund the marketing wallets",
    },
    {
        icon: <TbAdjustmentsHorizontal />,
        title: "CrossDex Support",
        description:
            "Exchange popular digital currencies at the cheapest possible transaction price",
    },
];

const FeatureSection: React.FC = () => {
    return (
        <div className="container pb-10">
            <h1 className="fira-code text-3xl font-bold text-center text-white mb-5">
                Our <span className="text-primary">Features</span>
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {features.map((feature, index) => (
                    <FeatureCard feature={feature} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
