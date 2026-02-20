"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    Globe,
    BrainCircuit,
    Mic2,
    UserCheck,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HowItWorks() {
    const steps = [
        {
            icon: <Globe size={18} />,
            title: "Select Mode",
            desc: "Choose Video, Phone, or On-Site based on your requirements.",
            color: "text-blue-600",
            bg: "bg-blue-50/80 border-blue-100",
            badge: "Step 01"
        },
        {
            icon: <BrainCircuit size={18} />,
            title: "Smart Matching",
            desc: "AI-driven matching for specialized vocabulary and cultural nuances.",
            color: "text-purple-600",
            bg: "bg-purple-50/80 border-purple-100",
            badge: "Step 02"
        },
        {
            icon: <Mic2 size={18} />,
            title: "Instant Connect",
            desc: "Enterprise-grade secure connection in under 30 seconds.",
            color: "text-emerald-600",
            bg: "bg-emerald-50/80 border-emerald-100",
            badge: "Step 03"
        }
    ];

    const features = [
        {
            title: "AI Dispatch",
            desc: "Engineered for industry-specific terminology and dialects.",
            icon: <Sparkles size={14} className="text-brand-primary" />
        },
        {
            title: "Human Core",
            desc: "Certified experts providing critical cultural context.",
            icon: <UserCheck size={14} className="text-brand-primary" />
        },
        {
            title: "Secure & Compliant",
            desc: "HIPAA, GDPR, and SOC2 certified operations.",
            icon: <CheckCircle2 size={14} className="text-brand-primary" />
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="how-it-works" className="py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100"
                    >
                        <Sparkles size={10} className="text-brand-primary" />
                        <span className="text-brand-primary font-black uppercase text-[9px] tracking-[0.2em]">Our Protocol</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-[1000] text-slate-900 leading-none mb-4 tracking-tighter uppercase"
                    >
                        How Alloria <span className="text-brand-primary">Works</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm lg:text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed"
                    >
                        A seamless path from silence to understanding.
                        Complex engineering, human experience.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-stretch">
                    {/* Left: Steps */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-transparent hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] transition-all duration-500 flex items-start gap-6"
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-sm bg-white border",
                                    step.color
                                )}>
                                    {step.icon}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-white border border-slate-100",
                                            step.color
                                        )}>
                                            {step.badge}
                                        </span>
                                        <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                                            {step.title}
                                        </h4>
                                    </div>
                                    <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="absolute top-6 right-6 text-slate-200 group-hover:text-brand-primary/10 transition-colors pointer-events-none">
                                    <p className="text-2xl font-black opacity-20 group-hover:opacity-100">0{index + 1}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Technical Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full rounded-[2.5rem] bg-slate-900 p-8 lg:p-10 text-white overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-brand-primary/10 opacity-30 blur-3xl rounded-full scale-125" />

                            <div className="relative z-10 h-full flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black mb-6 leading-tight tracking-tight uppercase">
                                    Engineering <span className="text-brand-primary">Better Outcomes.</span>
                                </h3>

                                <div className="space-y-6 flex-grow">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                                                {feature.icon}
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-bold text-sm text-white uppercase tracking-wider">{feature.title}</h5>
                                                <p className="text-slate-400 text-[12px] leading-relaxed font-medium">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <Link href="/contact-us" className="group/btn inline-flex items-center gap-3 bg-white text-slate-900 py-3 px-6 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-primary hover:text-white transition-all active:scale-95 shadow-lg shadow-brand-primary/10">
                                        Learn More
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[170px] hidden sm:block z-20"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                    <CheckCircle2 size={12} className="text-white" />
                                </div>
                                <p className="text-[9px] font-black text-slate-900 uppercase">Active</p>
                            </div>
                            <p className="text-[8px] text-slate-500 font-bold leading-relaxed">99.9% Uptime SLA delivered globally.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

