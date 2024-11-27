import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
    return (
        <div className="container text-gray-100 flex justify-center my-20 ">
            <div
                className=" md:w-3/4 rounded-xl"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.02)" }}>
                <h1 className="text-center text-primary text-3xl font-bold fira-code border-b border-slate-800 p-3">
                    FAQs
                </h1>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                        value="item-1"
                        className="border-slate-800 px-10 py-3">
                        <AccordionTrigger>
                            How do I get a Referral Code?
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-gray-400">
                            The referral code is placed on the dashboard
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border-slate-800 px-10 py-3">
                        <AccordionTrigger>
                            Do I get rewarded in tokens or ETH when I refer
                            buyers?
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-gray-400">
                            You receive your rewards in ETH instantly once
                            someone you refer makes a transaction!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border-slate-800 px-10 py-3">
                        <AccordionTrigger>
                            How do I get a referral code?
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-gray-400">
                            Yes. It's animated by default, but you can disable
                            it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
