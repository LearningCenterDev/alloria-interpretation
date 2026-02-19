import {
    Monitor,
    Phone,
    Users2,
    ShieldCheck,
    Globe2,
    Zap,
    Clock,
    MessageSquare,
    Building2,
    CheckCircle2,
    Headphones,
    Video,
    FileText,
    Languages,
    Mic2,
    MapPin,
    Handshake,
    Sparkles
} from "lucide-react";
import React from "react";

export interface ServiceDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    icon: any;
    color: string;
    bgColor: string;
    heroImage: string;
    features: {
        title: string;
        description: string;
        icon: any;
    }[];
    specifications: {
        label: string;
        value: string;
    }[];
    useCases: {
        industry: string;
        application: string;
    }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
    "vri": {
        slug: "vri",
        title: "Video Remote Interpretation",
        subtitle: "High-Definition Visual Communication",
        description: "Our Video Remote Interpretation (VRI) service brings the power of face-to-face communication to any location instantly. Perfect for situations where visual cues and body language are critical for understanding, VRI provides a cost-effective alternative to on-site interpretation without sacrificing the quality of connection.",
        icon: Monitor,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        heroImage: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "HD Video Quality", description: "Experience premium, lag-free video that captures every subtle gesture and facial expression.", icon: Video },
            { title: "HIPAA Compliant", description: "Fully encrypted streaming ensuring patient privacy and data security for medical and legal use.", icon: ShieldCheck },
            { title: "Instant Access", description: "Connect to a certified interpreter in under 30 seconds across 30+ spoken and visual languages.", icon: Zap }
        ],
        specifications: [
            { label: "Connection Speed", value: "< 30 Seconds" },
            { label: "Video Quality", value: "1080p HD" },
            { label: "Encryption", value: "AES-256 bit" },
            { label: "Availability", value: "24/7/365" }
        ],
        useCases: [
            { industry: "Healthcare", application: "Doctor-patient consultations and emergency triage." },
            { industry: "Legal", application: "Depositions, attorney-client meetings, and courtroom proceedings." },
            { industry: "Education", application: "Parent-teacher conferences and student counseling sessions." }
        ]
    },
    "opi": {
        slug: "opi",
        title: "Over-the-Phone Interpretation",
        subtitle: "Instant Voice Connection Anywhere",
        description: "Over-the-Phone Interpretation (OPI) is our most versatile and fastest communication solution. With support for over 200 languages, OPI allows you to overcome language barriers in seconds using any phone line. It is the ideal choice for high-volume environments and urgent situations where speed is the top priority.",
        icon: Phone,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        heroImage: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "200+ Languages", description: "Access a massive network of native-speaking linguists covering almost every corner of the globe.", icon: Globe2 },
            { title: "Crystal Clear Audio", description: "High-fidelity audio processing ensures every word is captured with perfect clarity.", icon: Headphones },
            { title: "Universal Access", description: "No special equipment needed—connect from any mobile, landline, or VoIP system.", icon: Zap }
        ],
        specifications: [
            { label: "Language Support", value: "200+ Dialects" },
            { label: "Average Queue", value: "12 Seconds" },
            { label: "Phone Support", value: "Global / 800-Number" },
            { label: "Uptime", value: "99.99%" }
        ],
        useCases: [
            { industry: "Customer Support", application: "In-bound call centers and technical support desks." },
            { industry: "Emergency Services", application: "911 dispatch centers and crisis hotlines." },
            { industry: "Finance", application: "Loan processing and insurance claim reporting." }
        ]
    },
    "on-site": {
        slug: "on-site",
        title: "On-Site Interpretation",
        subtitle: "Professional In-Person Expertise",
        description: "For high-stakes meetings, sensitive medical procedures, or complex legal cases, nothing beats the presence of a professional in-person interpreter. Our On-Site service provides certified experts who integrate seamlessly into your environment, offering both simultaneous and consecutive interpretation modes.",
        icon: Users2,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Subject Matter Experts", description: "Linguists vetted for specific expertise in engineering, law, medicine, or tech.", icon: Building2 },
            { title: "Cultural Nuance", description: "Navigate complex social interactions with an expert who understands the cultural context.", icon: MessageSquare },
            { title: "Custom Equipment", description: "Full support for simultaneous interpretation booths, headsets, and microphones.", icon: Clock }
        ],
        specifications: [
            { label: "Booking Time", value: "24-48 Hours Lead" },
            { label: "Interpretation Modes", value: "Simultaneous / Consecutive" },
            { label: "Expertise Levels", value: "Tier 1-3 Certified" },
            { label: "Coverage", value: "Global / Regional" }
        ],
        useCases: [
            { industry: "Government", application: "Diplomatic summits and international delegations." },
            { industry: "Conferences", application: "Keynote speeches and multi-lingual workshops." },
            { industry: "Enterprise", application: "Board of director meetings and intensive training." }
        ]
    },
    "translation": {
        slug: "translation",
        title: "Document Translation",
        subtitle: "Precision Text Localization",
        description: "Our translation services transform your documents with 100% accuracy and cultural relevance. We handle everything from technical manuals and legal contracts to marketing collateral and website localization, ensuring your message resonates perfectly in every language.",
        icon: FileText,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Native Linguists", description: "All translations are performed and reviewed by native-speaking experts.", icon: Languages },
            { title: "Terminology Management", description: "We maintain consistent glossaries for your industry-specific terms.", icon: ShieldCheck },
            { title: "Fast Turnaround", description: "Rapid delivery options for time-sensitive business requirements.", icon: Zap }
        ],
        specifications: [
            { label: "Accuracy Rate", value: "99.9%" },
            { label: "File Formats", value: "DOCX, JSON, PDF, +50 more" },
            { label: "Compliance", value: "ISO 17100" },
            { label: "Linguists", value: "50,000+ Globally" }
        ],
        useCases: [
            { industry: "Marketing", application: "Product catalogs and global campaign materials." },
            { industry: "Legal", application: "Contracts, patents, and regulatory documents." },
            { industry: "Tech", application: "Software UI and developer documentation." }
        ]
    },
    "transcription": {
        slug: "transcription",
        title: "Audio Transcription",
        subtitle: "Voice to Text with Absolute Accuracy",
        description: "Convert your audio and video recordings into high-quality text documentation. Our transcriptionists are specialized in medical, legal, and corporate terminology, providing verbatim or cleaned-up transcripts with precise time-coding for all your mission-critical recordings.",
        icon: Mic2,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Time Coding", description: "Accurate timestamps for easy reference within your recordings.", icon: Clock },
            { title: "Multi-Speaker ID", description: "Clear identification of different speakers in complex meetings.", icon: Users2 },
            { title: "Secure Delivery", description: "End-to-end encrypted file transfers for sensitive data.", icon: ShieldCheck }
        ],
        specifications: [
            { label: "Audio Fidelity", value: "Studio Quality" },
            { label: "Turnaround", value: "As fast as 4 Hours" },
            { label: "Verbatim", value: "Full / Intelligent Option" },
            { label: "Platforms", value: "Zoom, Teams, MP4, WAV" }
        ],
        useCases: [
            { industry: "Media", application: "Video subtitling and interview transcripts." },
            { industry: "Corporate", application: "Board meeting minutes and earnings calls." },
            { industry: "Legal", application: "Courtroom recordings and hearing transcripts." }
        ]
    },
    "industry-specialization": {
        slug: "industry-specialization",
        title: "Industry Verticals",
        subtitle: "Sector-Specific Language Mastery",
        description: "General translation isn't enough for specialized fields. Our linguists are subject matter experts in medicine, law, engineering, and finance. We ensure that correctly used terminology and industry-specific nuances are maintained across every project.",
        icon: Building2,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Vetted Specialists", description: "Linguists with degrees and experience in their respective fields.", icon: CheckCircle2 },
            { title: "Compliance Experts", description: "Deep understanding of HIPAA, GDPR, and localized regulations.", icon: ShieldCheck },
            { title: "Scaleable Support", description: "From tiny clinics to multinational conglomerates.", icon: Globe2 }
        ],
        specifications: [
            { label: "Sectors", value: "15+ Main Industries" },
            { label: "Certification", value: "NAATI / CCHI / ATA" },
            { label: "Custom Glossaries", value: "Client-Specific" },
            { label: "Network", value: "250+ Subject Experts" }
        ],
        useCases: [
            { industry: "Medical", application: "Clinical trials and patient records." },
            { industry: "Engineering", application: "Blueprint labels and technical specifications." },
            { industry: "Finance", application: "Annual reports and investment prospectuses." }
        ]
    },
    "interpretation": {
        slug: "interpretation",
        title: "Real-time Interpretation",
        subtitle: "Bridging the Gap Instantly",
        description: "Whether it is VRI, OPI, or On-site, our interpretation provides the bridge between cultures. We focus on the flow of conversation, ensuring that no meaning is lost and communication feels as natural as if everyone spoke the same language.",
        icon: Languages,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Flow Optimized", description: "Minimized lag for natural back-and-forth conversation.", icon: Zap },
            { title: "Cultural Sensitivity", description: "Interpreters who understand social contexts.", icon: MessageSquare },
            { title: "Global Network", description: "Interpreters in every time zone for 24/7 support.", icon: Globe2 }
        ],
        specifications: [
            { label: "Real-time Lag", value: "< 100ms" },
            { label: "Connections", value: "Multi-platform" },
            { label: "Protocol", value: "WebRTC / SIP" },
            { label: "Redundancy", value: "Triple-Path Audio" }
        ],
        useCases: [
            { industry: "Business", application: "International stakeholder meetings." },
            { industry: "Social Services", application: "Community outreach and refugee support." },
            { industry: "Government", application: "Public hearings and town halls." }
        ]
    },
    "languages": {
        slug: "languages",
        title: "Language Portfolio",
        subtitle: "200+ Languages Covered",
        description: "From widely spoken languages like Spanish, Mandarin, and Arabic to rare dialects and indigenous tongues, our portfolio covers the world. We are committed to language access for everyone, no matter how obscure the language might be.",
        icon: Globe2,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
        heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Rare Dialects", description: "Access to linguists for over 50+ rare and endangered languages.", icon: Sparkles },
            { title: "Global Coverage", description: "Presence in over 180 countries.", icon: MapPin },
            { title: "Continuity", description: "The same interpreter available for follow-up sessions.", icon: Handshake }
        ],
        specifications: [
            { label: "Total Tongues", value: "200+" },
            { label: "Dialect Support", value: "Comprehensive" },
            { label: "Regional Match", value: "Optional" },
            { label: "ASL Support", value: "Certified Visual" }
        ],
        useCases: [
            { industry: "Non-Profit", application: "Global humanitarian effort coordination." },
            { industry: "Tourism", application: "Multi-lingual guide services and travel apps." },
            { industry: "Public Safety", application: "Multilingual emergency broadcasts." }
        ]
    },
    "proficiency-testing": {
        slug: "proficiency-testing",
        title: "Proficiency Testing",
        subtitle: "Certified Language Audits",
        description: "Ensure your own staff meets language requirements with our proficiency testing. We provide rigorous assessments of speaking, listening, reading, and writing skills, backed by certified evaluations and detailed score reports.",
        icon: ShieldCheck,
        color: "text-red-600",
        bgColor: "bg-red-50",
        heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
        features: [
            { title: "Certified Assessment", description: "Tests designed by linguistic experts and psychologists.", icon: Sparkles },
            { title: "Remote Proctoring", description: "Tests can be taken anywhere with secure video monitoring.", icon: Monitor },
            { title: "Detailed Reporting", description: "Full breakdown of strengths and improvement areas.", icon: FileText }
        ],
        specifications: [
            { label: "Testing Tiers", value: "Beginner - Superior" },
            { label: "Standards", value: "ACTFL / CEFR" },
            { label: "Result Time", value: "24-48 Hours" },
            { label: "Validity", value: "2 Years Certified" }
        ],
        useCases: [
            { industry: "HR", application: "Hiring bilingual employees and call center staff." },
            { industry: "Healthcare", application: "Testing medical staff for patient safety." },
            { industry: "Government", application: "Vetting translators for sensitive roles." }
        ]
    }
};
