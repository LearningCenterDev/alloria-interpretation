"use client";

import { motion } from "motion/react";
import { ShieldCheck, Clock, Award, CheckCircle2, ArrowRight, Zap, Combine, Users } from "lucide-react";
import Image from "next/image";

export default function Features() {

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* 1. WHY CHOOSE ALLORIA SECTION */}
            <div className="mx-auto max-w-7xl px-6 mb-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-primary mb-6">
                        Why Choose Alloria?
                    </h2>
                    <p className="text-lg text-slate-600 font-medium">
                        We deliver accuracy when it matters most, backed by industry-leading standards.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                            <Award size={32} className="text-brand-accent" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900 font-serif">
                            Certified Interpreters
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our team holds the highest certifications in the industry, ensuring specialized knowledge in medical and legal terminology.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                            <Clock size={32} className="text-brand-accent" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900 font-serif">
                            24/7 Availability
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Access professional interpretation services anytime, anywhere. Our global network ensures coverage across all time zones.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                            <ShieldCheck size={32} className="text-brand-accent" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900 font-serif">
                            Secure & Confidential
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Your privacy is our top priority. We utilize encrypted channels and strict NDAs for all our engagements.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 2. GLOBAL NETWORK SECTION */}
            <div className="mx-auto max-w-7xl px-6 mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700 uppercase tracking-widest mb-6">
                            Global Network
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6 leading-tight">
                            Seamless Communication <br />Across Borders
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                            Whether you are expanding into new markets or managing international legal proceedings, Alloria provides the linguistic infrastructure you need to succeed.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Native-speaking experts in 100+ languages.",
                                "Cultural nuance consideration included.",
                                "Rapid response times for urgent needs."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                                        <CheckCircle2 size={12} className="text-brand-accent" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-2 font-bold text-brand-primary hover:text-brand-light transition-colors group uppercase tracking-widest text-sm">
                            Explore Global Solutions <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Global Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2">Worldwide Reach</p>
                                <p className="text-3xl font-serif font-bold">Serving 50+ Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. FUTURE ROADMAP (AI WAITLIST) */}
            <div className="bg-brand-primary py-24 px-6 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                                <Zap size={14} className="animate-pulse" /> The Technology Roadmap
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                Preparing for the <span className="text-brand-accent italic font-medium">Next Era</span> of Language Solutions
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Launching Q3: We are building a powerful AI tool for instant, low-cost baseline support, designed specifically to complement our expert human teams.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <Combine size={24} className="text-brand-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Hybrid Solution Leader</h4>
                                        <p className="text-slate-400 text-sm">Market-leading human quality today with a future-proof technology partner growing alongside your needs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <Users size={24} className="text-brand-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Human-in-the-Loop Guarantee</h4>
                                        <p className="text-slate-400 text-sm">Our AI will always have a seamless human escalation fallback. Precision maintained for medical and legal workflows.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center">
                                Join the Waitlist <ArrowRight size={18} />
                            </button>
                            <p className="mt-4 text-xs text-slate-400 font-medium">
                                *Current human-service clients will receive priority Beta access.
                            </p>
                        </div>

                        {/* Teaser UI */}
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 p-2 pl-4 pt-4">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="bg-slate-800 rounded-tl-lg h-[400px] border-t border-l border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                    <Zap size={32} className="text-brand-accent opacity-50" />
                                </div>
                                <h4 className="text-white font-bold text-xl mb-2 font-serif">Alloria AI Assistant</h4>
                                <p className="text-slate-400 text-sm max-w-xs mb-8">
                                    Live translation preview interface is currently under active development.
                                </p>
                                <div className="w-full max-w-sm h-12 rounded bg-slate-700/50 animate-pulse mb-3" />
                                <div className="w-full max-w-sm h-12 rounded bg-slate-700/50 animate-pulse mb-3" />
                                <div className="w-3/4 max-w-sm h-12 rounded bg-slate-700/50 animate-pulse" />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
