"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    Globe,
    BrainCircuit,
    Mic2,
    ArrowRight,
    Sparkles,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
    const steps = [
        {
            icon: <Globe size={22} />,
            title: "Select Mode",
            desc: "Choose Video, Phone, or On-Site based on your needs.",
            color: "text-blue-600",
            bg: "bg-blue-50 border-blue-100",
            shadow: "hover:shadow-blue-100"
        },
        {
            icon: <BrainCircuit size={22} />,
            title: "Smart Match",
            desc: "AI instantly finds the perfect certified linguist.",
            color: "text-purple-600",
            bg: "bg-purple-50 border-purple-100",
            shadow: "hover:shadow-purple-100"
        },
        {
            icon: <Zap size={22} />,
            title: "Start Talking",
            desc: "Connect in <30s. Clear, encrypted, professional.",
            color: "text-emerald-600",
            bg: "bg-emerald-50 border-emerald-100",
            shadow: "hover:shadow-emerald-100"
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-80" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Compact Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-4"
                    >
                        <Sparkles size={12} className="text-brand-primary" />
                        <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em]">Workflow</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-[1000] text-slate-900 tracking-tight"
                    >
                        Interpretation <span className="text-brand-primary">Explained</span>
                    </motion.h2>
                </div>

                {/* Steps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-5 relative"
                >
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={cn(
                                "group relative bg-white p-5 rounded-2xl border border-slate-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm",
                                step.shadow,
                                "hover:shadow-lg"
                            )}
                        >
                            {/* Step Number Badge */}
                            <div className="absolute top-3 right-3 text-[10px] font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                                0{index + 1}
                            </div>

                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 mx-auto md:mx-0",
                                step.bg,
                                step.color
                            )}>
                                {step.icon}
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-brand-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Compact Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 flex justify-center"
                >
                    <Link href="/contact-us" className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest hover:text-brand-primary transition-colors group cursor-pointer">
                        Ready to connect?
                        <span className="text-slate-900 group-hover:text-brand-primary flex items-center gap-1">
                            Get Started <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
