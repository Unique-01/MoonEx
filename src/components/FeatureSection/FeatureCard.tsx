import { ReactNode } from "react";

interface FeatureProp {
    feature: {
        icon: ReactNode;
        title: string;
        description: string;
    };
}

const FeatureCard: React.FC<FeatureProp> = ({ feature }) => {
    return (
        <div
            className="text-white border border-slate-800 p-5 rounded-xl"
            style={{ backgroundColor: "rgba(217, 217, 217, 0.02)" }}>
            <div className="feature-icon flex">
                <div className="p-2 rounded-full">{feature.icon}</div>
            </div>
            <div className="mt-4">
                <p className=" font-semibold">{feature.title}</p>
                <p className="text-xs mt-1">{feature.description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
