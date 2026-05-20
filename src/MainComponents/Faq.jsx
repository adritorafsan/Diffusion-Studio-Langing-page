import { useState } from "react"
import FaqBox from "../SubComponents/FaqBox"



const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const FaqData = [
        { question: "What is Diffusion Studio?", answer: "Diffusion Studio is a browser-based video editor and creative suite built on an infinite canvas. It combines the spatial freedom of a design tool with the precision of a modern NLE, so you can compose scenes visually, refine with timeline control, and export — all in one place.", special:"" },

        { question: "Do I need to install anything?", answer: "No. Diffusion Studio runs entirely in your browser, no downloads, no plugins, no setup. A macOS app is coming soon, bringing the full creative platform to your desktop with MCP support, so your AI agents can work alongside you.", special:"" },

        { question: "How does AI work in Diffusion Studio?", answer: "AI features include generation, smart actions, and context aware tools, all built into the editing workflow. You choose models, direct the output, and stay in control. AI helps you move faster, but you’re always in the driver’s seat." , special:""},

        { question: "Is Diffusion Studio free to use?", answer: "Yes. The free plan includes unlimited projects, unlimited 4K exports, no watermark, and 250 one-time trial AI credits. Upgrade to Pro for more credits and access to advanced AI models.", special:"" },

        { question: "Can I use Diffusion Studio for commercial work?", answer: "Yes. Commercial use is allowed on all plans, including Free.", special:"border-none"},
    ]
    return (
        <div className='flex flex-col justify-center items-center gap-y-5 mt-40 mb-2'>
            <h1 className='font-primary text-primary text-3xl '>Frequently asked questions </h1>

            <div className="flex flex-col justify-center items-center gap-y-2 mt-5">

                {FaqData.map((faq, index) => {
                    return <FaqBox  key={index} activeIndex={activeIndex === index} onClick={() => setActiveIndex((prev) => prev === index ? null : index)} question={faq.question} answer={faq.answer} special={faq.special} />;
                })}

            </div>

        </div>
    )
}

export default Faq