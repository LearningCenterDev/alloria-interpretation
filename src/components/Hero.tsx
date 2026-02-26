"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Star,
  Users2,
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
    <section className="relative px-6 pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-primary text-white">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 right-0 h-full w-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-bold text-[11px] mb-8 uppercase tracking-[0.15em] shadow-sm"
            >
              Global Reach & Perspective
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6 tracking-tight"
            >
              Bridging Language Gaps with <br />
              <span className="text-brand-accent italic font-medium relative">
                Absolute Precision
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg font-medium text-slate-300 leading-relaxed max-w-2xl mb-10"
            >
              Professional interpretation services for legal, medical, and corporate needs. We ensure your message retains its power and accuracy in every language.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              <Link href="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold text-[14px] rounded flex items-center gap-2.5 transition-colors shadow-md"
                >
                  Start Now
                </motion.button>
              </Link>
              <Link href={"/services"}>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-white/5 border border-white/20 text-white font-bold text-[14px] rounded flex items-center gap-2.5 transition-colors shadow-sm"
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl rounded-lg overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <div className="aspect-[21/9] lg:aspect-[24/9] relative">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90"
                alt="Professional Meeting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Trust Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full mt-24 bg-white rounded-xl shadow-sm border border-slate-100 p-10 relative z-20"
          >
            <h3 className="text-2xl font-serif text-brand-primary font-bold mb-10">Trusted Compliance & Global Standards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "HIPAA COMPLIANT", icon: <CheckCircle2 size={24} className="text-blue-500" /> },
                { title: "ISO 9001 CERTIFIED", icon: <CheckCircle2 size={24} className="text-blue-500" /> },
                { title: "GLOBAL COVERAGE", icon: <Star size={24} className="text-blue-500" /> },
                { title: "LOCAL EXPERTISE", icon: <Users2 size={24} className="text-blue-500" /> }
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    {badge.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">{badge.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
