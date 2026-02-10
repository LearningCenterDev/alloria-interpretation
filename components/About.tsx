"use client";

import { motion } from "motion/react";
import { ShieldCheck, Award, Zap, Users, CheckCircle, BrainCircuit } from "lucide-react";

export default function About() {
    const stats = [
        { value: "12y+", label: "Experience", icon: <Award size={16} /> },
        { value: "24/7", label: "Linguists", icon: <Users size={16} /> },
        { value: "15k+", label: "Projects", icon: <Zap size={16} /> },
        { value: "100%", label: "Certified", icon: <ShieldCheck size={16} /> },
    ];

    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#1a202c] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-2xl">
                    {/* Enhanced Accent Blobs */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-10 animate-pulse" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

                    <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <BrainCircuit className="text-brand-primary" size={20} />
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-brand-primary font-black uppercase text-[10px] tracking-[0.4em]"
                                >
                                    The Interpretation Engine
                                </motion.h2>
                            </div>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tight"
                            >
                                Speed Meets <span className="text-brand-primary italic">Precision</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-400 text-sm mb-8 leading-relaxed font-medium max-w-lg"
                            >
                                We don&apos;t just translate; we interpret meaning. Our linguists specialize in the nuance of human connection, ensuring your message is felt exactly as intended.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-3"
                            >
                                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2 hover:bg-white/10 transition-colors">
                                    <ShieldCheck size={14} className="text-brand-primary" /> HIPAA Compliant
                                </div>
                                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2 hover:bg-white/10 transition-colors">
                                    <CheckCircle size={14} className="text-brand-primary" /> ISO 9001
                                </div>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                    className="bg-white/5 backdrop-blur-xl p-5 lg:p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center transition-all group cursor-default"
                                >
                                    <div className="w-9 h-9 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-3 transition-transform group-hover:scale-110">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-0.5">{stat.value}</h3>
                                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
