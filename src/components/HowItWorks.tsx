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
            icon: <Globe size={22} />,
            title: "Select Mode",
            desc: "Choose from Video, Phone, or On-Site based on your requirements.",
            color: "text-blue-600",
            bg: "bg-blue-50/80 border-blue-100",
            badge: "Step 01"
        },
        {
            icon: <BrainCircuit size={22} />,
            title: "Matching",
            desc: "Our AI instantly finds the perfect certified interpreter for your niche.",
            color: "text-purple-600",
            bg: "bg-purple-50/80 border-purple-100",
            badge: "Step 02"
        },
        {
            icon: <Mic2 size={22} />,
            title: "Connect",
            desc: "Connect in less than 30s for a seamless, high-fidelity experience.",
            color: "text-emerald-600",
            bg: "bg-emerald-50/80 border-emerald-100",
            badge: "Step 03"
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
        <section id="how-it-works" className="py-14 lg:py-16 bg-white relative overflow-hidden">
            {/* Background Polish */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 -track-x-1/4 opacity-60" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-primary/[0.02] rounded-full blur-[80px] translate-y-1/3 translate-x-1/3" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image (More Compact) */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border-[6px] border-white ring-1 ring-slate-100 group"
                        >
                            <div className="relative h-[380px] lg:h-[460px] w-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
                                    alt="Modern Team"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Live Status Badge (Smaller) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute top-6 left-6 bg-white/95 backdrop-blur-md pl-2 pr-4 py-2 rounded-xl shadow-lg flex items-center gap-3 border border-white/50 z-20"
                            >
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-brand-primary">
                                        <UserCheck size={16} className="stroke-[2.5px]" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-brand-primary border-2 border-white animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-slate-800 uppercase tracking-widest mb-0.5">Live</p>
                                    <p className="text-[9px] font-bold text-emerald-600">Online Now</p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-[50px] -z-10" />
                    </div>

                    {/* Right Column: Content (More Compact) */}
                    <motion.div
                        className="order-1 lg:order-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 w-fit">
                                <Sparkles size={10} className="text-brand-primary" />
                                <span className="text-brand-primary font-black uppercase text-[9px] tracking-[0.2em]">Our Protocol</span>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-[1000] text-slate-900 leading-tight mb-4 tracking-tight uppercase">
                                How Alloria <span className="text-brand-primary">Works</span>
                            </h3>

                            <p className="text-sm lg:text-base text-slate-500 font-medium mb-8 leading-relaxed max-w-lg">
                                We combine human intelligence with instant connectivity to provide seamless interpretation anywhere.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative p-4 rounded-2xl bg-white border border-slate-100 hover:border-transparent hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-start gap-4 overflow-hidden"
                                >
                                    <div className={cn(
                                        "absolute top-0 left-0 w-1 h-full transition-all duration-300 opacity-0 group-hover:opacity-100",
                                        step.color.replace('text-', 'bg-')
                                    )} />

                                    <div className={cn(
                                        "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-sm border",
                                        step.bg,
                                        step.color
                                    )}>
                                        {step.icon}
                                    </div>

                                    <div className="relative z-10 pr-4">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className={cn(
                                                "text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/50 border border-slate-100",
                                                step.color
                                            )}>
                                                {step.badge}
                                            </span>
                                            <h4 className="text-base font-bold text-slate-900 transition-colors group-hover:text-brand-primary">
                                                {step.title}
                                            </h4>
                                        </div>
                                        <p className="text-slate-500 text-[12px] leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants} className="mt-8">
                            <Link href="/contact-us" className="group inline-flex items-center gap-2.5 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:text-brand-primary transition-colors cursor-pointer">
                                <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                                Start Your Session
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
