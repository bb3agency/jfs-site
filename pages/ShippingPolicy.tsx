import React from 'react';
// Refreshed to resolve import issues
import { Truck } from 'lucide-react';
import { useSEO } from '../useSEO';

const ShippingPolicy: React.FC = () => {
    useSEO({
        title: 'Shipping & Delivery Policy',
        description: 'Joy Fitness shipping policy. Standard delivery in 3-5 business days, express shipping in 1-2 days. COD available. Order tracking via WhatsApp.'
    });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Premium Hero Section (Matches FAQ) */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-900 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 top-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.1)_0%,rgba(15,23,42,1)_50%)]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 md:p-4 bg-slate-800/50 rounded-2xl md:rounded-3xl border border-slate-700 backdrop-blur-md mb-6 md:mb-8 text-yellow-400 shadow-xl">
                        <Truck size={32} strokeWidth={2} className="md:w-10 md:h-10" />
                    </div>
                    <h1 className="text-[40px] md:text-[64px] font-heading font-normal tracking-tight mb-4 md:mb-6 uppercase text-white max-w-4xl mx-auto leading-none">
                        Shipping & <span className="text-yellow-400">Delivery</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium font-body">
                        Ultra-fast, secure, and reliable shipping for all your performance essentials.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-20 relative z-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
                        {/* Detailed Policy Content */}
                        <div className="prose prose-slate md:prose-lg max-w-none font-body text-slate-600 prose-headings:font-subheading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-yellow-600 prose-li:font-medium">
                            <h2>Processing Time</h2>
                            <p>
                                All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or public holidays.
                            </p>
                            <p>
                                If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or WhatsApp.
                            </p>

                            <hr className="my-8 border-slate-100" />

                            <h2>Shipping Rates & Delivery Estimates</h2>
                            <p>
                                Shipping charges for your order will be calculated and displayed during the WhatsApp checkout process. Our standard delivery timelines are as follows:
                            </p>
                            <ul>
                                <li><strong>Standard Shipping:</strong> 3-5 business days</li>
                                <li><strong>Express Shipping:</strong> 1-2 business days (available in select metros)</li>
                            </ul>
                            <p className="text-sm italic text-slate-400 mt-2">* Delivery delays can occasionally occur due to unforeseen circumstances or remote locations.</p>

                            <hr className="my-8 border-slate-100" />

                            <h2>Shipment Confirmation & Order Tracking</h2>
                            <p>
                                You will receive a Shipment Confirmation message with your tracking number(s) once your order has shipped. The tracking number will be active within 24 hours. We provide live WhatsApp updates for your convenience.
                            </p>

                            <hr className="my-8 border-slate-100" />

                            <h2>International Shipping</h2>
                            <p>
                                Currently, we do not ship outside of India. We are focused on providing the best possible service and delivery speeds within domestic borders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShippingPolicy;
