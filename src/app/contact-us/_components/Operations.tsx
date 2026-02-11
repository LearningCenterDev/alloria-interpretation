"use client";

import { Globe2 } from "lucide-react";

export default function Operations() {
    return (
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
    );
}
