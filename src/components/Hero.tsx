"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Video,
  Calendar,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants: any = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative px-6 pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-white">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 right-0 h-full w-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-primary/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.012]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Content (POLISHED & ATTRACTIVE) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-100 text-brand-primary font-black text-[10px] mb-8 shadow-[0_2px_15px_-3px_rgba(47,191,113,0.1)] uppercase tracking-[0.2em]"
            >
              <Sparkles size={12} className="text-emerald-500 animate-pulse" />
              Trusted by 10k+ professionals
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-[1000] text-slate-900 leading-[1.05] mb-6 tracking-[-0.03em] uppercase"
            >
              Speak Every <br />
              <span className="text-brand-primary drop-shadow-[0_2px_10px_rgba(47,191,113,0.15)] relative">
                Language Instantly!
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-[17px] font-medium text-slate-500/90 leading-relaxed max-w-lg mb-9"
            >
              Certified human interpretation for medical, legal, and business
              needs. Delivering precision{" "}
              <span className="text-slate-900 font-bold">
                where communication feels like play.
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-8 gap-y-4 mb-10"
            >
              {["Instant Connect", "Expert Linguists", "HIPAA Protected"].map(
                (feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 group cursor-default"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <CheckCircle2 size={12} className="text-brand-primary" />
                    </div>
                    <span className="text-[13px] font-bold text-slate-700 tracking-tight">
                      {feat}
                    </span>
                  </div>
                ),
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link href="/contact-us">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 20px 40px -10px rgba(47, 191, 113, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-brand-primary text-white font-black text-[13px] rounded-2xl flex items-center gap-2.5 transition-all uppercase tracking-widest cursor-pointer group shadow-xl shadow-brand-primary/20"
                >
                  <Calendar
                    size={18}
                    className="transition-transform group-hover:rotate-12"
                  />
                  Book Session
                </motion.button>
              </Link>
              <Link href={"/how-it-works"}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgb(248 250 252)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-white custom-hover text-slate-700 border border-slate-200/80 font-black text-[13px] rounded-2xl flex items-center gap-2.5 transition-all tracking-wide cursor-pointer group shadow-sm"
                >
                  How it works{" "}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 py-2 px-5 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden bg-slate-200 shadow-sm transition-transform hover:scale-110 hover:z-10"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 11}`}
                      width={36}
                      height={36}
                      alt="User"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col border-l border-slate-200/60 pl-5">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] leading-none mb-1">
                  Our Community
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={11} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[12px] font-black text-slate-900">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Showcase (KEPT PERFECT - AS IS) */}
          <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-[420px]"
            >
              {/* Main Frame */}
              <div className="rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] ring-1 ring-slate-100 relative group aspect-[4/5] lg:aspect-auto lg:h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=90"
                  alt="Professional Interpreter"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>

              {/* Refined Floating Elements */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-30 border border-white/50"
              >
                <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center text-brand-primary">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight">
                    Live Video Call
                  </p>
                  <div className="flex gap-1 items-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                    <p className="text-[9px] font-black text-brand-primary uppercase">
                      Active Now
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30 border border-white/50"
              >
                <div className="w-9 h-9 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                    Global Support
                  </p>
                  <p className="text-[13px] font-black text-slate-900 tracking-tight">
                    30+ LANGUAGES
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
