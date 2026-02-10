"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Globe, ShieldCheck, Zap, UserCheck, ArrowRight, Languages, Mic2, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
    const steps = [
        {
            icon: <Globe size={20} />,
            title: "Select Service Mode",
            desc: "Choose from Video, Phone, or On-Site depending on your requirements.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: <BrainCircuit size={20} />,
            title: "Linguist Matching",
            desc: "Our AI-powered system finds the perfect certified interpreter for your niche.",
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            icon: <Mic2 size={20} />,
            title: "Instant Connection",
            desc: "Connect in less than 30 seconds for a seamless communication experience.",
            color: "text-brand-primary",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-slate-50 ring-1 ring-slate-100 group"
                        >
                            <div className="relative h-[450px] lg:h-[550px] w-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
                                    alt="Modern Team"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>

                            {/* Status Interactive Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-slate-100 z-20"
                            >
                                <div className="relative">
                                    <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-brand-primary">
                                        <UserCheck size={18} />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#2FBF71] border-2 border-white animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-800 uppercase tracking-wide">Live Linguist</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3].map(i => <div key={i} className="w-0.5 h-1.5 bg-brand-primary/40 rounded-full animate-bounce" style={{ animationDelay: `${i * 100}ms` }} />)}
                                        </div>
                                        <p className="text-[9px] font-bold text-slate-400">Audio Sync: Online</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Polish */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-[80px] -z-10 animate-pulse" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-brand-primary/30" />
                                <h2 className="text-brand-primary font-black uppercase text-[10px] tracking-[0.4em]">The Protocol</h2>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-6 tracking-tight">How Alloria <span className="italic">Works</span></h3>
                            <p className="text-base text-slate-500 font-medium mb-10 leading-relaxed">
                                Our platform integrates human intelligence with seamless connectivity to provide instant interpretation anywhere.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="group p-5 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100 transition-all duration-500 flex items-start gap-5 cursor-default"
                                >
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6 shadow-sm", step.bg, step.color)}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-black text-slate-800 mb-0.5 flex items-center gap-2">
                                            <span className="text-brand-primary text-[10px] bg-brand-primary/5 px-1.5 py-0.5 rounded tracking-tighter">STEP 0{index + 1}</span>
                                            {step.title}
                                        </h4>
                                        <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-[11px] hover:gap-4 transition-all cursor-pointer group"
                        >
                            Connect To A Professional <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
}
