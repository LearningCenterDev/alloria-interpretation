"use client";

import { motion } from "motion/react";
import {
    Users,
    Handshake,
    ShieldCheck,
    Brain,
    Zap,
    Search,
    Video,
    Phone,
    MapPin,
    Sparkles,
    Cpu,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HowItWorksPage() {
    return (
        <main className="pt-20 pb-16 overflow-hidden bg-white">
            {/* Optimized Hero */}
            <section className="px-6 py-10 lg:py-16 relative">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100/50"
                        >
                            <Brain size={10} className="text-emerald-600" />
                            <span className="text-emerald-700 font-black uppercase text-[9px] tracking-[0.2em]">100% Human Intelligence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-6xl font-[1000] text-slate-900 leading-[0.95] mb-6 tracking-tighter uppercase"
                        >
                            High-Precision <br />
                            <span className="text-brand-primary">Interpretation.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed"
                        >
                            Alloria eliminates AI risk by connecting you with certified human experts who understand
                            the nuances of culture, context, and specialized industry vocabulary.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Compact Human Manifesto */}
            <section className="px-6 py-16 bg-slate-900 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-2xl lg:text-4xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                                Why Humans <span className="text-brand-primary">Win.</span>
                            </h2>
                            <p className="text-slate-400 font-medium text-base mb-8 leading-relaxed">
                                AI translates data; humans translate meaning. We bridge the critical gaps in
                                medical, legal, and enterprise communication where errors aren't just mistakes—they're liabilities.
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    { title: "Zero Hallucination", icon: <ShieldCheck size={16} className="text-brand-primary" /> },
                                    { title: "Cultural Context", icon: <Sparkles size={16} className="text-brand-primary" /> },
                                    { title: "Emotional EQ", icon: <Handshake size={16} className="text-brand-primary" /> },
                                    { title: "Subject Experts", icon: <Users size={16} className="text-brand-primary" /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="shrink-0">{item.icon}</div>
                                        <h4 className="font-black text-white uppercase text-[11px] tracking-wide">{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/5 bg-slate-800/50 p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-brand-primary font-black uppercase text-[10px] tracking-widest">Safety Protocol</div>
                                    <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-tighter">Active</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                                        <h5 className="font-bold text-white text-[11px] mb-1">STANDARD MACHINE TRANSLATION</h5>
                                        <p className="text-[10px] text-slate-500 leading-tight">Misses 40% of cultural nuances and specialized terminology in high-stakes environments.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h5 className="font-bold text-white text-[11px] uppercase">ALLORIA HUMAN PROTOCOL</h5>
                                            <CheckCircle2 size={12} className="text-emerald-500" />
                                        </div>
                                        <p className="text-[10px] text-white/90 leading-tight font-medium">100% accuracy in intent, dialect, and professional terminology delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Streamlined Steps */}
            <section className="py-16 lg:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Select Mode", desc: "Choose Video, Phone, or On-Site to match your logistics.", icon: <Video size={24} /> },
                            { step: "02", title: "Expert Vetting", desc: "Our 5-stage human certification ensures absolute accuracy.", icon: <Search size={24} /> },
                            { step: "03", title: "Instant Link", desc: "Connect in seconds via low-latency encrypted networks.", icon: <Zap size={24} /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] transition-all duration-500"
                            >
                                <div className="text-5xl font-black text-slate-50 absolute -top-6 left-6 pointer-events-none opacity-50">
                                    {item.step}
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 shadow-sm transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-[13px] leading-relaxed mb-0">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tighter Service Grid */}
            <section className="bg-slate-50/50 py-16 px-6 border-y border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {[
                            { title: "Video Remote", icon: <Video size={16} />, desc: "Visual-first connection for full context." },
                            { title: "Phone OPI", icon: <Phone size={16} />, desc: "Instant audio support on-demand." },
                            { title: "On-Site", icon: <MapPin size={16} />, desc: "Premium in-person expert presence.", className: "col-span-2 lg:col-span-1" }
                        ].map((mode, i) => (
                            <div key={i} className={cn("bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300", mode.className)}>
                                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                                    {mode.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{mode.title}</h4>
                                    <p className="text-slate-500 text-[11px] font-medium leading-tight">{mode.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Punchy Final CTA */}
            <section className="px-6 py-16 lg:py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        Ready for <br />
                        <span className="text-brand-primary">Pure Precision?</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-base lg:text-lg max-w-xl mx-auto">
                        Connect with certified human professionals in under 30 seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact-us" className="group w-full sm:w-auto bg-slate-900 text-white rounded-xl px-8 py-4 font-black uppercase text-[11px] tracking-[0.2em] shadow-xl hover:bg-brand-primary transition-all flex items-center justify-center gap-2">
                            Connect Now
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-900 rounded-xl px-8 py-4 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-slate-50 transition-all">
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
