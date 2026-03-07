import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { useSEO } from '../useSEO';

const Returns: React.FC = () => {
    useSEO({
        title: 'Returns & Refunds Policy',
        description: 'Joy Fitness returns and refunds policy. We sell 100% authentic supplements with a strict no return policy to ensure product safety and hygiene.'
    });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Premium Hero Section (Matches FAQ) */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-900 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 top-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.1)_0%,rgba(15,23,42,1)_50%)]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-slate-800/50 rounded-2xl md:rounded-3xl border border-slate-700 backdrop-blur-md mb-6 md:mb-8 text-yellow-400 shadow-xl">
                        <RefreshCcw size={32} strokeWidth={2} className="md:w-10 md:h-10" />
                    </div>
                    <h1 className="text-[40px] md:text-[64px] font-heading font-normal tracking-tight mb-4 md:mb-6 uppercase text-white max-w-4xl mx-auto leading-none">
                        Returns & <span className="text-yellow-400">Refunds</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium font-body">
                        We stand by the authenticity of our products. Learn about our clear and fair return process.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-20 relative z-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
                        <div className="prose prose-slate md:prose-lg max-w-none font-body text-slate-600 prose-headings:font-subheading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-yellow-600 prose-li:font-medium">
                            <p className="lead font-medium text-slate-700">
                                At <strong>JOY Fitness</strong>, we only sell 100% authentic supplements sourced from trusted distributors. Due to the nature of nutritional supplements, we follow a strict <strong>No Return / No Refund</strong> policy to maintain product safety, hygiene, and authenticity.
                            </p>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl my-8">
                                <p className="text-slate-900 font-bold m-0">
                                    Once a product is delivered, returns or refunds are not accepted under any circumstances. Supplements are consumable products and cannot be resold once shipped.
                                </p>
                            </div>

                            <h2>Damaged or Incorrect Items</h2>
                            <p>
                                However, if you receive a damaged product, leaking container, or incorrect item, you must contact our support team within <strong>24 hours of delivery via WhatsApp</strong>.
                            </p>

                            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                                <h3 className="text-yellow-900 font-bold mt-0 mb-3 text-[18px]">Mandatory Unboxing Video</h3>
                                <p className="text-yellow-800 m-0 leading-relaxed text-[16px]">
                                    To report any issue, it is mandatory to record a complete unboxing video while opening the package. The video must be uncut and unedited, starting from the sealed package and clearly showing the shipping label and the product inside. <strong>Without a proper unboxing video, we will not be able to process any claim.</strong>
                                </p>
                            </div>

                            <p>
                                If the issue is verified by our support team, we may provide a replacement for the damaged or incorrect product depending on availability.
                            </p>

                            <hr className="my-8 border-slate-100" />

                            <h2>Please note the following conditions:</h2>
                            <ul className="space-y-2">
                                <li>Returns are <strong>not accepted</strong> for opened supplements</li>
                                <li>Returns are <strong>not accepted</strong> for taste preference or personal reasons</li>
                                <li>Returns are <strong>not accepted</strong> for clearance or discounted items</li>
                                <li><strong>Claims without a valid unboxing video will not be accepted</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Returns;
