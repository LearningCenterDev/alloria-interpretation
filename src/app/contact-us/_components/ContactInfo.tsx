"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, Sparkles, Globe2 } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Contact Information</h2>
                <div className="grid gap-5">
                    {[
                        { icon: <Phone size={18} />, label: "Call Us", val: "+1 (720) 243-6452", detail: "Mon-Fri from 8am to 5pm." },
                        { icon: <Mail size={18} />, label: "Email Us", val: "hello@allorialearning.com", detail: "Our friendly team is here to help." },
                        { icon: <MapPin size={18} />, label: "Office", val: "Denver, Colorado", detail: "Come say hello at our HQ." },
                        { icon: <MessageSquare size={18} />, label: "Live Chat", val: "Available 24/7", detail: "Instant support for urgent needs." },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-lg border border-slate-50 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                <p className="text-sm font-black text-slate-900 mb-0.5">{item.val}</p>
                                <p className="text-[11px] text-slate-500 font-medium leading-tight">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Sparkles size={80} />
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tight">Join Our Team?</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed mb-4">
                    Are you a certified interpreter looking to join a world-class network?
                    We're always looking for talented linguists.
                </p>
                <button className="text-brand-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Apply as Interpreter <Globe2 size={12} />
                </button>
            </motion.div>
        </div>
    );
}
