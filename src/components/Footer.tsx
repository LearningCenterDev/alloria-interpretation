"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    return (
        <footer className="bg-white text-slate-600 py-16 border-t border-slate-200 relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center gap-3 mb-6 text-brand-primary cursor-pointer group"
                            onClick={(e) => {
                                if (pathname === "/") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                        >
                            <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6">
                                <Languages size={18} className="text-brand-accent" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900 font-serif">Alloria</span>
                        </Link>
                        <p className="text-sm font-medium leading-relaxed mb-8 max-w-sm text-slate-500">
                            Bridging language gaps with absolute precision for a connected world.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-slate-50 border border-slate-200 text-slate-400 hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        {
                            title: "Services",
                            links: [
                                { name: "Legal Interpretation", href: "/services" },
                                { name: "Medical Translation", href: "/services" },
                                { name: "Corporate Solutions", href: "/services" },
                                { name: "Conference Services", href: "/services" }
                            ]
                        },
                        {
                            title: "Company",
                            links: [
                                { name: "About Us", href: "/about-us" },
                                { name: "Careers", href: "/about-us" },
                                { name: "Blog", href: "#" },
                                { name: "Contact", href: "/contact-us" }
                            ]
                        },
                        {
                            title: "Contact",
                            links: [
                                { name: "123 Global Plaza, New York, NY 10001", href: "#" },
                                { name: "+1 (555) 123-4567", href: "#" },
                                { name: "hello@alloria.com", href: "#" }
                            ]
                        }
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.15em] mb-6">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2 text-slate-500"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="pt-10 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-400 font-medium">&copy; {currentYear} Alloria Inc. All rights reserved.</p>
                    <div className="flex flex-col lg:flex-row items-center gap-6 text-xs font-medium">
                        <div className="flex gap-5">
                            <Link href="#" className="text-slate-400 hover:text-brand-primary transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-slate-400 hover:text-brand-primary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
