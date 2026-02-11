"use client";

import { use } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Monitor, Phone, Users2, ArrowLeft, ShieldCheck, Globe2,
    Zap, Clock, MessageSquare, Building2, Languages as LangIcon,
    FileText, Mic2, Sparkles, CheckCircle2, BarChart3, Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

const Heart = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

const serviceDetails = {
    "industry-specialization": {
        title: "Industry Specialization",
        icon: <Building2 className="w-12 h-12" />,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        description: "Tailored linguistic solutions for complex sectors that require deep domain expertise and absolute precision.",
        longDescription: "General language services aren't enough when lives or legal outcomes are on the line. At Alloria, we specialize in the unique vocabularies and regulatory requirements of critical industries. Our linguists aren't just language experts; they are subject matter specialists with years of experience in their respective fields.",
        features: [
            { title: "Healthcare & HIPAA", desc: "Certified medical interpreters trained in complex terminology and patient confidentiality.", icon: <Heart className="w-5 h-5 text-red-500" /> },
            { title: "Legal & Judiciary", desc: "Expert support for depositions, hearings, and complex contract translations with certified accuracy.", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
            { title: "Corporate & Finance", desc: "High-stakes communication for board meetings, financial reports, and global business expansions.", icon: <BarChart3 className="w-5 h-5 text-emerald-500" /> },
            { title: "Government & Public", desc: "Supporting civic engagement with community-centered interpretation and document accessibility.", icon: <Building2 className="w-5 h-5 text-slate-500" /> }
        ],
        stats: [
            { label: "Sectors Covered", val: "12+" },
            { label: "Expert Linguists", val: "5,000+" },
            { label: "Accuracy Rate", val: "99.9%" }
        ]
    },
    "interpretation": {
        title: "Interpretation Services",
        icon: <LangIcon className="w-12 h-12" />,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        heroImage: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf97?auto=format&fit=crop&q=80&w=2000",
        description: "Instant verbal communication across 200+ languages via Video, Phone, or On-Site support.",
        longDescription: "Communication happens in the moment. Our interpretation services ensure that you never miss a beat, no matter the language. We leverage cutting-edge technology to connect you with world-class interpreters in seconds, or deploy specialists to your location for face-to-face interaction.",
        features: [
            { title: "Video Remote (VRI)", desc: "Face-to-face clarity on any device with one-tap connection.", icon: <Monitor className="w-5 h-5 text-emerald-500" /> },
            { title: "Over-the-Phone (OPI)", desc: "The fastest way to connect for triage, support, and urgent calls.", icon: <Phone className="w-5 h-5 text-emerald-500" /> },
            { title: "On-Site Support", desc: "Personalized presence for conferences, legal, and medical procedures.", icon: <Users2 className="w-5 h-5 text-emerald-500" /> },
            { title: "24/7 Availability", desc: "Around-the-clock support for every time zone on the planet.", icon: <Clock className="w-5 h-5 text-emerald-500" /> }
        ],
        stats: [
            { label: "Languages", val: "200+" },
            { label: "Avg. Connection", val: "< 30s" },
            { label: "Uptime", val: "99.99%" }
        ]
    },
    "translation": {
        title: "Professional Translation",
        icon: <FileText className="w-12 h-12" />,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
        description: "Elite document translation and website localization with meticulous attention to detail.",
        longDescription: "The written word demands a higher level of scrutiny. Our translation process combines native-level fluency with meticulous proofreading and quality assurance protocols. From legal contracts and medical records to full-scale website localization, we ensure your message is culturally relevant and technically flawless.",
        features: [
            { title: "Legal Translation", desc: "Certified translations for court documents, contracts, and regulatory filings.", icon: <ShieldCheck className="w-5 h-5 text-purple-500" /> },
            { title: "Medical Documents", desc: "Technical accuracy for patient records, clinical trials, and instructions.", icon: <CheckCircle2 className="w-5 h-5 text-purple-500" /> },
            { title: "Software Localization", desc: "Going beyond translation to make your app feel native in every market.", icon: <Globe2 className="w-5 h-5 text-purple-500" /> },
            { title: "Marketing & Creative", desc: "Transcreation that preserves your brand voice across cultural boundaries.", icon: <Sparkles className="w-5 h-5 text-purple-500" /> }
        ],
        stats: [
            { label: "QA Steps", val: "3-Tier" },
            { label: "Words Translated", val: "50M+" },
            { label: "Certified Labs", val: "ISO 9001" }
        ]
    },
    "transcription": {
        title: "Audio & Video Transcription",
        icon: <Mic2 className="w-12 h-12" />,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        heroImage: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=2000",
        description: "Precise conversion of spoken audio into formatted text, optimized for search and accessibility.",
        longDescription: "Unlock the value of your audio and video assets. Our transcriptionists deliver verbatim or clean-read transcripts with speaker identification and precise time-coding. Whether it's legal depositions, research interviews, or media content, we provide the textual foundation you need to search, analyze, and share.",
        features: [
            { title: "Verbatim Accuracy", desc: "Capturing every utterance exactly as spoken for legal and research needs.", icon: <CheckCircle2 className="w-5 h-5 text-orange-500" /> },
            { title: "Time-Coding", desc: "Syncing your text perfectly with your media for easy reference.", icon: <Clock className="w-5 h-5 text-orange-500" /> },
            { title: "Foreign Language", desc: "Direct transcription from source audio to target text languages.", icon: <LangIcon className="w-5 h-5 text-orange-500" /> },
            { title: "Secure Delivery", desc: "Encrypted handling of sensitive audio for privacy-obsessed industries.", icon: <ShieldCheck className="w-5 h-5 text-orange-500" /> }
        ],
        stats: [
            { label: "Accuracy", val: "99.5%" },
            { label: "Turnaround", val: "24h" },
            { label: "Formats", val: "Any" }
        ]
    },
    "languages": {
        title: "Global Language Coverage",
        icon: <Globe2 className="w-12 h-12" />,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
        heroImage: "https://images.unsplash.com/photo-1521737706176-74fc2446738c?auto=format&fit=crop&q=80&w=2000",
        description: "Supporting the major and minor languages of the world through our vast network of native speakers.",
        longDescription: "Diversity is our strength. We maintain a network of over 10,000 certified linguists covering everything from common global languages like Spanish and Mandarin to rare regional dialects and indigenous tongues. We make sure that no community is left out of the conversation.",
        features: [
            { title: "Rare Dialects", desc: "Expertise in indigenous and less-commonly-taught languages (LCTLs).", icon: <Globe2 className="w-5 h-5 text-cyan-500" /> },
            { title: "Native Speakers", desc: "100% of our network consists of native or bilingual-primary linguists.", icon: <Users className="w-5 h-5 text-cyan-500" /> },
            { title: "Cultural Nuance", desc: "Training focused on the social and cultural context of communication.", icon: <Heart className="w-5 h-5 text-cyan-500" /> },
            { title: "ASL Support", desc: "Comprehensive American Sign Language services for accessibility.", icon: <Users2 className="w-5 h-5 text-cyan-500" /> }
        ],
        stats: [
            { label: "Linguists", val: "10k+" },
            { label: "Languages", val: "200+" },
            { label: "Dialects", val: "500+" }
        ]
    },
    "proficiency-testing": {
        title: "Language Proficiency Testing",
        icon: <ShieldCheck className="w-12 h-12" />,
        color: "text-red-600",
        bgColor: "bg-red-50",
        heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000",
        description: "Rigorous competency evaluations to ensure your bilingual staff meet vertical standards.",
        longDescription: "Verify the skills of your team with confidence. Our proficiency testing services provide objective, standardized assessments of verbal and written language ability. We help organizations in healthcare, social services, and legal sectors ensure that their bilingual employees are truly qualified for high-stakes roles.",
        features: [
            { title: "Skills Assessment", desc: "Standardized testing for listening, speaking, reading, and writing.", icon: <CheckCircle2 className="w-5 h-5 text-red-500" /> },
            { title: "Medical Cert Prep", desc: "Guided evaluations to prepare staff for medical interpreter certification.", icon: <Building2 className="w-5 h-5 text-red-500" /> },
            { title: "Compliance Audits", desc: "Regular testing to meet federal and state language access requirements.", icon: <ShieldCheck className="w-5 h-5 text-red-500" /> },
            { title: "Custom Scoring", desc: "Metrics designed around the specific vocabulary of your industry.", icon: <BarChart3 className="w-5 h-5 text-red-500" /> }
        ],
        stats: [
            { label: "Scales Used", val: "ACTFL" },
            { label: "Tests Given", val: "20k/yr" },
            { label: "Certification", val: "Global" }
        ]
    },
    "vri": {
        title: "Video Remote Interpretation",
        shortTitle: "VRI",
        icon: <Monitor className="w-12 h-12" />,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        heroImage: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=2000",
        description: "High-definition video interpretation that combines face-to-face clarity with digital convenience.",
        longDescription: "Video Remote Interpretation (VRI) is the bridge between traditional on-site services and telephone support. It provides the visual cues necessary for sensitive medical appointments, complex technical troubleshooting, and ASL support, all through a secure, encrypted video platform.",
        features: [
            { title: "HD Clarity", desc: "Crystal clear audio and video quality for accurate visual communication.", icon: <CheckCircle2 className="w-5 h-5 text-blue-500" /> },
            { title: "Universal Platform", desc: "Connect on tablets, smartphones, or computers with no hardware required.", icon: <Monitor className="w-5 h-5 text-blue-500" /> },
            { title: "HIPAA Secure", desc: "Fully encrypted tunnels ensuring absolute patient and client privacy.", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
            { title: "ASL Certified", desc: "Instant access to American Sign Language interpreters for accessibility.", icon: <Users2 className="w-5 h-5 text-blue-500" /> }
        ],
        stats: [
            { label: "Latency", val: "< 1s" },
            { label: "Language Mix", val: "30+ HD" },
            { label: "Stability", val: "99.9%" }
        ]
    },
    "opi": {
        title: "Over-the-Phone Interpretation",
        shortTitle: "OPI",
        icon: <Phone className="w-12 h-12" />,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        heroImage: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?auto=format&fit=crop&q=80&w=2000",
        description: "Instant audio connection to certified interpreters in over 200 languages for immediate support.",
        longDescription: "When every second counts, OPI is the fastest way to bridge the language gap. Our telephone interpretation network is optimized for speed and reliability, making it the perfect choice for emergency services, call centers, and fast-paced retail environments.",
        features: [
            { title: "200+ Languages", desc: "Global coverage for even the most obscure regional dialects.", icon: <Globe2 className="w-5 h-5 text-purple-500" /> },
            { title: "30s Connection", desc: "Average wait times of less than 30 seconds for any language.", icon: <Zap className="w-5 h-5 text-purple-500" /> },
            { title: "Low Bandwidth", desc: "Works on any standard phone line or low-speed internet connection.", icon: <Phone className="w-5 h-5 text-purple-500" /> },
            { title: "Simple Billing", desc: "Pay-as-you-go per-minute rates with no long-term contracts.", icon: <BarChart3 className="w-5 h-5 text-purple-500" /> }
        ],
        stats: [
            { label: "Support", val: "24/7" },
            { label: "Avg Wait", val: "18s" },
            { label: "Network", val: "Global" }
        ]
    },
    "on-site": {
        title: "On-Site Interpretation",
        shortTitle: "F2F",
        icon: <Users2 className="w-12 h-12" />,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000",
        description: "Professional interpreters physically present for high-stakes meetings and complex procedures.",
        longDescription: "Some situations demand the physical presence of a specialist. Our On-Site Interpretation services provide certified professionals who understand the nuances of non-verbal communication and can manage group dynamics in legal, medical, and corporate settings.",
        features: [
            { title: "Personal Presence", desc: "Interpreters who manage the physical flow of conversation professionally.", icon: <Users2 className="w-5 h-5 text-emerald-500" /> },
            { title: "SME Logistics", desc: "Linguists chosen specifically for their industry expertise and location.", icon: <Building2 className="w-5 h-5 text-emerald-500" /> },
            { title: "Flexible Modes", desc: "Support for both simultaneous and consecutive interpretation methods.", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
            { title: "Event Support", desc: "Full-scale equipment rental and support for conferences and events.", icon: <Sparkles className="w-5 h-5 text-emerald-500" /> }
        ],
        stats: [
            { label: "Regions", val: "50 States" },
            { label: "Min Hours", val: "2hr" },
            { label: "Expertise", val: "High" }
        ]
    }
};

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = serviceDetails[slug as keyof typeof serviceDetails];

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Compact Background Hero */}
            <section className="relative h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-white/50 hover:text-brand-primary transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <ArrowLeft size={10} strokeWidth={3} /> Back to Services
                        </Link>

                        <div className="flex items-center gap-4 mb-4">
                            <div className={cn("p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-brand-primary")}>
                                {service.icon}
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-[1000] text-white tracking-tight uppercase italic leading-none">
                                {service.title.split(' ')[0]} <span className="text-brand-primary">{service.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                        </div>
                        <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {/* Quick Stats Row */}
                        <div className="flex flex-wrap gap-10 pb-8 border-b border-slate-100">
                            {service.stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-xl font-black text-slate-900 mb-0.5">{stat.val}</p>
                                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Content Blocks */}
                        <div className="space-y-16">
                            {/* Service Overview */}
                            <section className="prose prose-slate max-w-none">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3 italic">
                                    <div className="w-2 h-7 bg-brand-primary rounded-full" />
                                    Overview
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-[1.8]">
                                    {service.longDescription}
                                </p>
                            </section>

                            {/* Core Features */}
                            <section>
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-3 italic">
                                    <div className="w-2 h-7 bg-blue-500 rounded-full" />
                                    Capabilities
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-brand-primary/20 hover:bg-slate-50/30 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 p-2 rounded-lg bg-slate-50 text-slate-600 group-hover:text-brand-primary transition-colors">
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-black text-slate-900 mb-1 uppercase tracking-tight">{feature.title}</h3>
                                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="sticky top-28 space-y-6">
                        <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <Sparkles size={80} />
                            </div>
                            <h3 className="text-xl font-black mb-4 uppercase tracking-tight leading-tight">Request a <br /> Proposal</h3>
                            <p className="text-slate-400 text-xs font-medium mb-8 leading-relaxed">
                                Our solution architects will build a custom framework for your specific requirements.
                            </p>
                            <Link
                                href="/contact-us"
                                className="w-full py-4 bg-brand-primary hover:bg-emerald-600 rounded-xl flex items-center justify-center gap-3 font-black text-[11px] uppercase tracking-widest transition-all"
                            >
                                <MessageSquare size={14} strokeWidth={3} /> Start Inquiry
                            </Link>
                        </div>

                        <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                            <h4 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-4">Quality Standards</h4>
                            <ul className="space-y-3">
                                {[
                                    "Native Linguists Only",
                                    "24/7 Global Support",
                                    "ISO 9001 Certified",
                                    "HIPAA Compliant"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={12} className="text-brand-primary" strokeWidth={3} />
                                        <span className="text-[11px] font-black text-slate-700 uppercase italic tracking-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
