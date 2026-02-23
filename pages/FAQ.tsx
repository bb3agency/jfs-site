import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const faqs = [
    {
        category: "Products & Quality",
        questions: [
            {
                q: "Are your products 100% authentic?",
                a: "Yes. We source all our supplements directly from the manufacturers and authorized primary importers. Every product comes with an authenticity guarantee and verifiable importer seals, ensuring you get exactly what you pay for—no middlemen, no fakes."
            },
            {
                q: "What is the difference between Whey Protein Concentrate and Isolate?",
                a: "Whey Protein Concentrate (WPC) typically contains 70-80% protein along with some carbohydrates and fats. Whey Isolate goes through further processing to remove most of the fat and lactose, resulting in 90%+ protein content. Isolate is ideal if you're lactose sensitive or on a strict low-carb/low-fat cut."
            },
            {
                q: "How do I verify the authenticity of my product?",
                a: "Most premium brands provide a scratch code or a QR code on the packaging. You can verify this code directly on the manufacturer's or authorized importer's official website."
            }
        ]
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggleFaq = (idx: string) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 top-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.1)_0%,rgba(15,23,42,1)_50%)]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-slate-800/50 rounded-2xl md:rounded-3xl border border-slate-700 backdrop-blur-md mb-6 md:mb-8 text-yellow-400">
                        <MessageCircle size={32} strokeWidth={2} className="md:w-10 md:h-10" />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-4 md:mb-6 uppercase text-white max-w-4xl mx-auto leading-tight">
                        Frequently Asked <span className="text-yellow-400">Questions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        Everything you need to know about our products, shipping, and authenticity guarantees.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 relative z-20 -mt-10">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 p-6 md:p-12">
                        {faqs.map((group, groupIdx) => (
                            <div key={groupIdx} className="mb-12 last:mb-0">
                                <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-900 uppercase tracking-tight mb-6 md:mb-8">
                                    {group.category}
                                </h2>

                                <div className="space-y-4">
                                    {group.questions.map((faq, faqIdx) => {
                                        const idx = `${groupIdx}-${faqIdx}`;
                                        const isOpen = openIndex === idx;
                                        return (
                                            <div
                                                key={faqIdx}
                                                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-slate-900 bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                                            >
                                                <button
                                                    onClick={() => toggleFaq(idx)}
                                                    className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-yellow-600 transition-colors"
                                                >
                                                    <span className="text-base md:text-lg pr-4">{faq.q}</span>
                                                    <div className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-slate-900 text-yellow-400' : 'bg-slate-100 text-slate-400'}`}>
                                                        {isOpen ? <ChevronUp size={20} className="md:w-6 md:h-6" /> : <ChevronDown size={20} className="md:w-6 md:h-6" />}
                                                    </div>
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                                >
                                                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                                                        {faq.a}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
