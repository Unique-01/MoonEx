import "./App.css";
import Faq from "./components/Faq";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyMoonex from "./components/WhyMoonex";

function App() {
    return (
        <div className="bg-[#071624] w-full">
            <div className="relative z-30 overflow-hidden py-5">
                <div className="bold-gradient md:h-[520px] md:w-[520px] h-96 w-96 -left-20 -top-20  absolute"></div>

                <div
                    className="border border-slate-700 w-[1800px] h-[800px] absolute z-10 -left-[400px] -top-12  rotate-12"
                    style={{ borderRadius: "100%" }}></div>
                <div
                    className="border border-slate-700 w-[1500px] h-[650px] absolute z-10 -left-60 top-12  rotate-12"
                    style={{ borderRadius: "100%" }}></div>
                <div
                    className="border border-slate-700 w-[1100px] h-[550px] absolute top-28  rotate-12"
                    style={{ borderRadius: "100%" }}></div>

                <Navbar />
                <HeroSection />
            </div>
            <WhyMoonex />
            <FeatureSection />
            <Faq />
            <Footer />
        </div>
    );
}

export default App;
