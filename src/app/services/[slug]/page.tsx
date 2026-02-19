"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { serviceDetails } from "@/constant/service-details";
import {
    ArrowLeft,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Calendar,
    ShieldCheck,
    Zap,
    Info
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const data = serviceDetails[slug as string];

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">404</h1>
                <p className="text-slate-500 mb-8 font-medium">Service not found.</p>
                <Link href="/services" className="px-6 py-2 bg-brand-primary text-white font-black text-[10px] rounded-lg uppercase tracking-widest shadow-lg">
                    Back to Services
                </Link>
            </div>
        );
    }

    const Icon = data.icon;

    return (
        <div className="min-h-screen bg-white">
            {/* Compact Header */}
            <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                    <div className={cn("absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.03] rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4", data.bgColor.replace('bg-', 'bg-'))} />
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => router.back()}
                        className="group flex items-center gap-1.5 text-slate-400 hover:text-brand-primary transition-colors mb-8 text-[9px] font-black uppercase tracking-widest"
                    >
                        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" /> Back
                    </motion.button>

                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mb-4", data.bgColor, data.color.replace('text-', 'border-') + '/10', data.color)}>
                                <Sparkles size={10} className="animate-pulse" />
                                <span className="font-black uppercase text-[9px] tracking-wider">Linguistic Excellence</span>
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-[1000] text-slate-900 leading-tight mb-4 tracking-tight uppercase">
                                {data.title}
                            </h1>

                            <p className="text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-lg">
                                {data.subtitle}. Professional, high-fidelity interpretation optimized for rapid global deployment.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Link href="/contact-us">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-6 py-3 bg-brand-primary text-white font-black text-[11px] rounded-xl flex items-center gap-2 transition-all uppercase tracking-widest shadow-md shadow-brand-primary/10"
                                    >
                                        <Calendar size={16} /> Book Session
                                    </motion.button>
                                </Link>
                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global Standard</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative hidden lg:block"
                        >
                            <div className="rounded-3xl overflow-hidden border-[6px] border-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 aspect-[5/3] relative group">
                                <img
                                    src={data.heroImage}
                                    alt={data.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className={cn("absolute bottom-4 right-4 p-4 rounded-2xl backdrop-blur-md bg-white/90 shadow-lg", data.color)}>
                                    <Icon size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modern Compact Main Content */}
            <section className="pb-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-[1.8fr_1fr] gap-10 items-start">
                        {/* Left Content */}
                        <div className="space-y-12">
                            <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                                <div className="flex items-center gap-2 mb-3 text-brand-primary">
                                    <Info size={16} />
                                    <h3 className="text-xs font-black uppercase tracking-widest">Quick Overview</h3>
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {data.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                {data.features.map((feat, i) => (
                                    <div key={i} className="p-5 rounded-2xl border border-slate-100 hover:border-brand-primary/20 transition-all group">
                                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", data.bgColor, data.color)}>
                                            <feat.icon size={20} />
                                        </div>
                                        <h4 className="text-xs font-black text-slate-900 mb-1.5 uppercase tracking-tight">{feat.title}</h4>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                            {feat.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                {data.useCases.map((use, i) => (
                                    <div key={i} className="p-5 rounded-2xl bg-slate-900 text-white">
                                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-primary mb-2 block">{use.industry}</span>
                                        <p className="text-[11px] font-medium leading-relaxed opacity-80">{use.application}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar - Compact Specs */}
                        <div className="lg:sticky lg:top-24 space-y-4">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-[10px] font-black text-slate-900 mb-5 tracking-[0.2em] uppercase flex items-center gap-2">
                                    <ShieldCheck className="text-brand-primary" size={14} /> Capability Matrix
                                </h3>
                                <div className="space-y-4">
                                    {data.specifications.map((spec, i) => (
                                        <div key={i} className="flex items-center justify-between group">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{spec.label}</span>
                                            <span className="text-[11px] font-black text-slate-900 group-hover:text-brand-primary transition-colors">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-brand-primary p-6 rounded-2xl text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Need a demo?</h4>
                                    <p className="text-[11px] font-medium opacity-90 mb-4 leading-relaxed">Experience Alloria's {data.slug.toUpperCase()} in action with a 5-minute preview.</p>
                                    <Link href="/contact-us">
                                        <button className="w-full py-2.5 bg-white text-brand-primary font-black text-[10px] rounded-lg uppercase tracking-widest hover:bg-slate-50 transition-colors">
                                            Request Trial
                                        </button>
                                    </Link>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl transition-transform group-hover:scale-150" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mini CTA */}
            <section className="pb-16 pt-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="rounded-2xl bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-1">Scale your communication</h3>
                            <p className="text-slate-400 text-[11px] font-medium tracking-wide italic">Join professional organizations worldwide relying on Alloria.</p>
                        </div>
                        <Link href="/contact-us">
                            <button className="px-8 py-3 bg-white text-slate-900 font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all cursor-pointer">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
