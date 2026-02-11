"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "How quickly can I get an interpreter?",
            a: "For Video Remote (VRI) and Over-the-Phone (OPI) services, we offer near-instant connections, typically under 30 seconds for common languages."
        },
        {
            q: "Do you offer certified medical interpretation?",
            a: "Yes, all our medical interpreters are HIPAA-compliant and hold recognized certifications in healthcare interpretation."
        },
        {
            q: "What are your interpretation rates?",
            a: "Rates depend on the language, mode (VRI/OPI/On-site), and complexity. We offer both pay-as-you-go and subscription tiers. Contact us for a custom quote."
        },
        {
            q: "Can I book on-site interpretation services?",
            a: "Absolutely. We have a global network of on-site interpreters. We recommend booking at least 48 hours in advance for on-site requests."
        }
    ];

    return (
        <section className="px-6 py-12 bg-slate-50/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">
                        <HelpCircle size={12} /> Common Questions
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={false}
                            className={cn(
                                "rounded-2xl border transition-all duration-300",
                                openFaq === i ? "bg-white border-brand-primary/20 shadow-xl" : "bg-white/50 border-slate-100 hover:border-slate-200"
                            )}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className="text-sm font-black text-slate-900 pr-8">{faq.q}</span>
                                <ChevronDown
                                    size={18}
                                    className={cn("text-slate-400 transition-transform duration-300", openFaq === i && "rotate-180 text-brand-primary")}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-0">
                                            <div className="w-full h-px bg-slate-50 mb-4" />
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
