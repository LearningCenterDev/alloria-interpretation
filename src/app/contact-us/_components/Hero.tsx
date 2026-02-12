"use client";

import { motion } from "motion/react";
import { Headset } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative px-6 py-12 bg-white">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-brand-primary font-black text-[10px] uppercase tracking-widest mb-6"
                >
                    <Headset size={14} /> 24/7 Global Support
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl lg:text-5xl font-[1000] text-slate-900 leading-tight mb-4 tracking-tight uppercase"
                >
                    Book An <span className="text-brand-primary">Appointment.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base text-slate-500 font-medium max-w-lg mx-auto"
                >
                    Have questions about our services or need a custom quote?
                    Our team is here to help you bridge the language gap.
                </motion.p>
            </div>
        </section>
    );
}
