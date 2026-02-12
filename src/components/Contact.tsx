"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2, MessageSquare, Phone, MapPin, Mail, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            mode: formData.get("mode"),
            notes: formData.get("notes"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("idle");
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-16 bg-slate-50/50 relative overflow-hidden">
            {/* Global Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

                    <div className="pt-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-slate-100 shadow-sm mb-4">
                            <Globe2 size={12} className="text-brand-primary animate-spin-slow" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Join the Network</span>
                        </div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-6 tracking-tight"
                        >
                            Connect with an <br />
                            <span className="text-brand-primary">Expert</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm text-slate-500 font-medium leading-relaxed mb-10 max-w-md"
                        >
                            Professional interpretation is just a few clicks away. Our team ensures 99.9% accuracy and HIPAA compliance.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Phone size={14} />, label: "Hotline", val: "+1 (720) 243-6452" },
                                { icon: <Mail size={14} />, label: "Support", val: "hello@allorialearning.com" },
                                { icon: <MessageSquare size={14} />, label: "Chat", val: "24/7 Available" },
                                { icon: <MapPin size={14} />, label: "HQ", val: "Denver, CO" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-brand-primary/5 flex items-center justify-center text-brand-primary transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black uppercase tracking-wider text-slate-400">{item.label}</p>
                                        <p className="text-[11px] font-bold text-slate-800">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-slate-100 relative overflow-hidden"
                    >
                        {/* Visual Polish */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-[3rem]" />

                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input name="name" type="text" required placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                    <input name="email" type="email" required placeholder="john@company.com" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Mode</label>
                                <div className="relative">
                                    <select name="mode" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold appearance-none cursor-pointer">
                                        <option value="Video Remote (VRI)">Video Remote (VRI)</option>
                                        <option value="Over-the-Phone (OPI)">Over-the-Phone (OPI)</option>
                                        <option value="On-Site (OSI)">On-Site (OSI)</option>
                                        <option value="Translation Service">Translation Service</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                        <Globe2 size={12} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Notes</label>
                                <textarea name="notes" rows={3} placeholder="Tell us about your language needs..." className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold resize-none" />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status !== "idle"}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "w-full py-3.5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-3",
                                    status === "success"
                                        ? "bg-green-600 text-white shadow-green-200"
                                        : "bg-brand-primary text-white shadow-brand-primary/20 hover:bg-emerald-600 border-none"
                                )}
                            >
                                <AnimatePresence mode="wait">
                                    {status === "idle" && (
                                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                            <Send size={14} /> Send Application
                                        </motion.div>
                                    )}
                                    {status === "loading" && (
                                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                            <Loader2 size={14} className="animate-spin" /> Sending...
                                        </motion.div>
                                    )}
                                    {status === "success" && (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-white">
                                            <CheckCircle2 size={14} /> Application Sent
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
