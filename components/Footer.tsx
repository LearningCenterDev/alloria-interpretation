"use client";

import { motion } from "motion/react";
import { Languages, Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a202c] text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6 text-white cursor-pointer group"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6">
                                <Languages size={18} />
                            </div>
                            <span className="font-bold text-xl tracking-tight">Alloria</span>
                        </motion.div>
                        <p className="text-sm font-medium leading-relaxed mb-8 max-w-sm text-slate-400">
                            Transforming global communication with instant, certified, and human-powered interpretation services. Available 24/7.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -3, color: "#2FBF71", backgroundColor: "rgba(47, 191, 113, 0.1)" }}
                                    className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center transition-all border border-white/10"
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {[
                        {
                            title: "Solutions",
                            links: ["Video Remote", "On-Site OSI", "Phone OPI", "Translation"]
                        },
                        {
                            title: "Resources",
                            links: ["Case Studies", "Integrations", "API Docs", "Security"]
                        },
                        {
                            title: "Company",
                            links: ["History", "Linguists", "Careers", "Contact"]
                        }
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-6">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <motion.a
                                            href="#"
                                            whileHover={{ x: 3, color: "white" }}
                                            className="text-xs font-bold hover:text-brand-primary transition-all flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-brand-primary/0 group-hover:bg-brand-primary transition-all" />
                                            {link}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 text-[10px] uppercase font-black tracking-[0.2em]">
                        <p className="text-slate-500">&copy; {currentYear} Alloria. All rights reserved.</p>
                        <div className="flex gap-5">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Safety</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Design & Development by <a href="https://www.press1.dev" target="_blank" className="text-white hover:text-brand-primary transition-colors">Press1</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
