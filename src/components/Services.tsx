"use client";

import { motion } from "motion/react";
import { Monitor, Phone, MapPin, ArrowUpRight, CheckCircle2, Languages, AudioLines, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            title: "Video Remote (VRI)",
            slug: "vri",
            description: "On-demand visual interpretation perfect for healthcare and legal settings. HIPAA compliant encrypted streaming.",
            icon: <Monitor size={20} />,
            color: "bg-blue-50 text-blue-600",
            features: ["Face-to-face contact", "Visual cues", "24/7 Availability"]
        },
        {
            title: "Over-the-Phone (OPI)",
            slug: "opi",
            description: "Instant audio connection 24/7. Ideal for quick customer service calls and emergency situations anywhere.",
            icon: <Phone size={20} />,
            color: "bg-purple-50 text-purple-600",
            features: ["Instant connect", "Private audio", "Low bandwidth"]
        },
        {
            title: "On-Site",
            slug: "on-site",
            description: "Certified interpreters physically present for high-stakes conferences or complex medical procedures.",
            icon: <Users2 size={20} />,
            color: "bg-emerald-50 text-brand-primary",
            features: ["Physical presence", "Local experts", "Scheduled events"]
        }
    ];
    // ... (omitting return section for brevity but the tool will apply correctly)


    return (
        <section id="services" className="py-16 bg-slate-50/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-widest mb-4"
                    >
                        <Languages size={12} /> Communication Hub
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tight"
                    >
                        Bridging The <span className="text-brand-primary">Language Gap</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-slate-500 font-medium"
                    >
                        Precision-driven interpretation modes tailored for your specific industry requirements.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-[4rem] -mr-12 -mt-12 group-hover:bg-brand-primary/5 transition-colors" />

                            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm", service.color)}>
                                {service.icon}
                            </div>

                            <h4 className="text-xl font-black text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium line-clamp-2">{service.description}</p>

                            <div className="w-full h-px bg-slate-100 mb-6" />

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={`/services/${service.slug}`}>
                                <button className="flex items-center gap-2 text-[11px] font-black text-brand-primary group-hover:gap-3 transition-all uppercase tracking-widest cursor-pointer">
                                    Service Details <ArrowUpRight size={14} />
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
