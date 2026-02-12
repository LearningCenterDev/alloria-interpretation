"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactForm() {
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
    );
}
