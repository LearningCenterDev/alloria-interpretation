"use client";

import { motion } from "motion/react";
import { Monitor, Phone, Users2, ArrowRight, ShieldCheck, Globe2, Zap, Clock, MessageSquare, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
    const services = [
        {
            title: "Video Remote Interpretation",
            shortTitle: "VRI",
            description: "High-definition video interpretation that combines the benefits of face-to-face communication with the convenience of on-demand technology.",
            icon: <Monitor className="w-6 h-6" />,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            features: [
                "HD Video & Crystal Clear Audio",
                "HIPAA & GDPR Compliant Security",
                "ASL & 30+ Spoken Languages",
                "Instant Connection on Any Device"
            ]
        },
        {
            title: "Over-the-Phone Interpretation",
            shortTitle: "OPI",
            description: "Instant audio connection to certified interpreters in over 200 languages. Perfect for triage, customer service, and urgent meetings.",
            icon: <Phone className="w-6 h-6" />,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            features: [
                "200+ Languages Supported",
                "Average Connection Under 30s",
                "Available 24/7/365",
                "Low Bandwidth Requirements"
            ]
        },
        {
            title: "On-Site Interpretation",
            shortTitle: "F2F",
            description: "Professional interpreters physically present at your location for complex procedures, legal hearings, and large-scale conferences.",
            icon: <Users2 className="w-6 h-6" />,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
            features: [
                "Certified Subject Matter Experts",
                "Simultaneous & Consecutive Modes",
                "Local & Travel Coverage",
                "Equipment Rental Options"
            ]
        }
    ];

    const stats = [
        { label: "Languages", value: "200+", icon: <Globe2 className="w-5 h-5" /> },
        { label: "Uptime", value: "99.9%", icon: <Zap className="w-5 h-5" /> },
        { label: "Available", value: "24/7", icon: <Clock className="w-5 h-5" /> },
        { label: "Satisfaction", value: "98%", icon: <ShieldCheck className="w-5 h-5" /> },
    ];

    return (
        <div className="pt-20 pb-12">
            {/* Page Hero */}
            <section className="relative px-6 py-12 overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-black text-xs uppercase tracking-widest mb-6"
                        >
                            <Handshake size={14} /> Our Expertise
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl font-[1000] text-slate-900 leading-[1.1] mb-4 tracking-tight uppercase"
                        >
                            Professional <br />
                            <span className="text-brand-primary">Interpretation Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base text-slate-500 font-medium leading-relaxed"
                        >
                            We provide world-class interpretation services designed for reliability,
                            speed, and absolute precision across every communication channel.
                        </motion.p>
                    </div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-primary mb-3 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <span className="text-xl font-black text-slate-900 mb-0.5">{stat.value}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="px-6 py-16 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "grid lg:grid-cols-2 gap-12 items-center",
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(index % 2 === 1 ? "lg:order-2" : "")}>
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md", service.bgColor, service.color)}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                        {service.title}
                                        <span className="block text-brand-primary text-lg mt-0.5">({service.shortTitle})</span>
                                    </h2>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5">
                                        {service.description}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {service.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                                <span className="text-xs font-bold text-slate-700">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-6 px-6 py-3 bg-slate-900 text-white font-black text-[10px] rounded-xl flex items-center gap-2 hover:bg-brand-primary transition-all uppercase tracking-widest group shadow-md">
                                        Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className={cn(
                                    "relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl group",
                                    index % 2 === 1 ? "lg:order-1" : ""
                                )}>
                                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={`https://images.unsplash.com/${index === 0 ? 'photo-1605647540924-852290f6b0d5' : index === 1 ? 'photo-1516383274235-5f42d6c6426d' : 'photo-1521737604893-d14cc237f11d'}?auto=format&fit=crop&q=80&w=1000`}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl z-20 border border-white/50 shadow-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                                <MessageSquare className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Success Story</p>
                                                <p className="text-sm font-bold text-slate-900">Reduced wait times by 40%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-12">
                <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 p-10 lg:p-16 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight uppercase">
                            Ready to break the <br />
                            <span className="text-brand-primary">Language Barrier?</span>
                        </h2>
                        <p className="text-slate-400 font-medium mb-12 max-w-xl mx-auto text-lg leading-relaxed">
                            Join thousands of organizations that trust Alloria for their mission-critical
                            interpretation needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-brand-primary text-white font-black text-sm rounded-2xl hover:bg-emerald-600 transition-all uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/20">
                                Get Started Now
                            </button>
                            <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black text-sm rounded-2xl transition-all uppercase tracking-[0.2em] backdrop-blur-md border border-white/10">
                                Contact Sales
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
