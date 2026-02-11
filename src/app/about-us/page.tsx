"use client";

import { motion } from "motion/react";
import { Target, Heart, Award, Users, Search, Building2, Quote, Sparkles, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutUsPage() {
    const values = [
        {
            title: "Absolute Precision",
            description: "We believe in communication where nothing is lost in translation. Accuracy is our core promise.",
            icon: <Target className="w-6 h-6" />,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "Cultural Empathy",
            description: "Our interpreters don't just bridge languages; they bridge cultures with respect and understanding.",
            icon: <Heart className="w-6 h-6" />,
            color: "text-red-600",
            bgColor: "bg-red-50"
        },
        {
            title: "Reliability First",
            description: "Mission-critical means being there when it matters most. 99.9% uptime is our standard.",
            icon: <Award className="w-6 h-6" />,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        }
    ];

    return (
        <div className="pt-20 pb-12 overflow-hidden">
            {/* Mission Hero */}
            <section className="relative px-6 py-12 bg-white">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-8">
                                <Sparkles size={12} /> Since 2024
                            </div>
                            <h1 className="text-3xl lg:text-5xl font-[1000] text-slate-900 leading-[0.95] mb-5 tracking-tighter uppercase">
                                Our Mission Is <br />
                                <span className="text-brand-primary">Global Unity.</span>
                            </h1>
                            <p className="text-base text-slate-500 font-medium leading-relaxed mb-6">
                                Alloria was founded on a simple belief: language should never be a barrier to
                                human potential, healthcare, or justice.
                            </p>
                            <div className="flex items-center gap-6">
                                <div>
                                    <p className="text-2xl font-black text-slate-900">10k+</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Interpreters</p>
                                </div>
                                <div className="w-px h-10 bg-slate-100" />
                                <div>
                                    <p className="text-2xl font-black text-slate-900">500k+</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Hours Served</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover="hover"
                            className="relative w-fit mx-auto lg:mr-0 group/mission"
                        >
                            {/* Main Image Container */}
                            <motion.div
                                variants={{
                                    hover: { scale: 1.02, rotate: 1 }
                                }}
                                className="w-[280px] sm:w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative border-[6px] border-white ring-1 ring-slate-100 z-10 transition-all duration-500"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                    alt="Our Team"
                                    className="w-full h-full object-cover group-hover/mission:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                            </motion.div>

                            {/* Floating Card - Synced Animation */}
                            <motion.div
                                variants={{
                                    hover: { x: -10, y: -10, scale: 1.05 }
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [-1, 1, -1]
                                }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                    default: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-50 max-w-[190px] z-20 backdrop-blur-sm bg-white/95"
                            >
                                <Quote className="text-brand-primary w-6 h-6 mb-3 opacity-40" />
                                <p className="text-slate-700 font-bold text-[10px] leading-relaxed italic mb-4">
                                    "The best interpretation happens when you forget the interpreter is even there."
                                </p>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-50 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-blue-500/20" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-900 leading-none mb-1">Sarah Jenkins</p>
                                        <p className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tighter">Founder & CEO</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Background Element */}
                            <div className="absolute -inset-4 bg-brand-primary/5 rounded-[3rem] blur-2xl -z-10 group-hover/mission:bg-brand-primary/10 transition-colors duration-500" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="px-6 py-16 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-3 tracking-tight uppercase">
                            Values That <span className="text-brand-primary">Drive Us</span>
                        </h2>
                        <p className="text-sm text-slate-500 font-medium max-w-xl mx-auto">
                            Behind every connection we facilitate is a commitment to excellence and empathy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm", value.bgColor, value.color)}>
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-24 opacity-10">
                            <Globe2 size={400} />
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight tracking-tight uppercase">
                                    Breaking Barriers <br />
                                    <span className="text-brand-primary">Everywhere.</span>
                                </h2>
                                <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                                    With a network of certified professionals across 6 continents, we are ready
                                    to support your communication needs 24/7, no matter the distance.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { label: "Headquarters", val: "New York, USA", icon: <Building2 className="w-5 h-5 text-brand-primary" /> },
                                        { label: "Global Offices", val: "London, Tokyo, Berlin", icon: <Search className="w-5 h-5 text-brand-primary" /> },
                                        { label: "Our Reach", val: "190+ Countries", icon: <Users className="w-5 h-5 text-brand-primary" /> },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                                <p className="text-white font-bold text-sm">{item.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative hidden lg:block">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 pt-12">
                                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Office 1" />
                                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Office 2" />
                                    </div>
                                    <div className="space-y-4">
                                        <img src="https://images.unsplash.com/photo-152202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Office 3" />
                                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Office 4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
