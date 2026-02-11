"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2, MessageSquare, Phone, MapPin, Mail, Globe2, Sparkles, Headset } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactUsPage() {
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
        <div className="pt-20 pb-0 overflow-hidden">
            {/* Contact Hero */}
            <section className="relative px-6 py-12 bg-white">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-brand-primary font-black text-[10px] uppercase tracking-widest mb-6"
                    >
                        <Headset size={14} /> 24/7 Global Support
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-[1000] text-slate-900 leading-tight mb-4 tracking-tight uppercase"
                    >
                        Book An <span className="text-brand-primary">Appointment.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-slate-500 font-medium max-w-lg mx-auto"
                    >
                        Have questions about our services or need a custom quote?
                        Our team is here to help you bridge the language gap.
                    </motion.p>
                </div>
            </section>

            <section className="px-6 py-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Info */}
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

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] shadow-2xl p-6 lg:p-10 border border-slate-50 relative"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-[3rem]" />

                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input name="name" type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold shadow-sm" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                        <input name="email" type="email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold shadow-sm" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject / Service</label>
                                    <div className="relative">
                                        <select name="mode" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold appearance-none cursor-pointer shadow-sm">
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Video Remote (VRI)">Video Remote (VRI)</option>
                                            <option value="Over-the-Phone (OPI)">Over-the-Phone (OPI)</option>
                                            <option value="On-Site Interpretation">On-Site Interpretation</option>
                                            <option value="Partnership">Partnership</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                            <Globe2 size={14} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea name="notes" rows={4} required placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-xs font-bold resize-none shadow-sm" />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status !== "idle"}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={cn(
                                        "w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-3",
                                        status === "success"
                                            ? "bg-green-600 text-white shadow-green-200"
                                            : "bg-brand-primary text-white shadow-brand-primary/20 hover:bg-emerald-600 border-none"
                                    )}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === "idle" && (
                                            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <Send size={16} /> Send Message
                                            </motion.div>
                                        )}
                                        {status === "loading" && (
                                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <Loader2 size={16} className="animate-spin" /> Processing...
                                            </motion.div>
                                        )}
                                        {status === "success" && (
                                            <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-white">
                                                <CheckCircle2 size={16} /> Message Sent Successfully
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder or Visual Element */}
            <section className="px-6 py-12">
                <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden bg-slate-100 aspect-[16/5] relative group">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                        alt="Global Network"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-8 bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white text-center max-w-md">
                            <Globe2 className="w-12 h-12 text-brand-primary mx-auto mb-6 animate-pulse" />
                            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Global Operations</h3>
                            <p className="text-slate-500 font-medium text-sm">
                                Supporting over 200 languages across every time zone, every single day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
