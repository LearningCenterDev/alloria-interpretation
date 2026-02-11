"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Languages, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about-us" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "Contact", href: "/contact-us" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const id = href.replace("/#", "#");
            const element = document.querySelector(id);
            if (element) {
                const offset = scrolled ? 80 : 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            setIsMobileMenuOpen(false);
        } else if (href === pathname) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={false}
                animate={{
                    width: scrolled ? "88%" : "100%",
                    marginTop: scrolled ? "1rem" : "0rem",
                    borderRadius: scrolled ? "2rem" : "0rem",
                    paddingLeft: scrolled ? "1.5rem" : "2.5rem",
                    paddingRight: scrolled ? "1.5rem" : "2.5rem",
                    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
                    boxShadow: scrolled ? "0 20px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)" : "0 0 0 rgba(0,0,0,0), 0 0 0 0px rgba(0,0,0,0)",
                    borderWidth: scrolled ? "1px" : "0px",
                }}
                transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                    mass: 0.6
                }}
                className={cn(
                    "pointer-events-auto flex flex-col border-white/40",
                    scrolled ? "backdrop-blur-xl" : ""
                )}
            >
                <div className={cn(
                    "w-full mx-auto flex justify-between items-center py-3.5 transition-all duration-300",
                    !scrolled && "max-w-7xl"
                )}>
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 cursor-pointer custom-hover group"
                        onClick={(e) => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                    >
                        <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 transition-transform group-hover:scale-105 group-active:scale-95">
                            <Languages size={20} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">
                            Alloria
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-10">
                            {navItems.filter(item => item.name !== "Contact").map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={cn(
                                        "text-[13px] font-bold transition-colors relative group cursor-pointer tracking-wide",
                                        pathname === item.href ? "text-brand-primary" : "text-slate-600 hover:text-brand-primary"
                                    )}
                                >
                                    {item.name}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all",
                                        pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                                    )} />
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/contact-us"
                            className="px-6 py-2 bg-brand-primary hover:bg-emerald-600 text-white text-[13px] font-black rounded-xl shadow-md shadow-brand-primary/20 transition-all cursor-pointer uppercase tracking-widest"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        layout
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-100 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden md:hidden"
                        >
                            <div className="pt-2 pb-6 flex flex-col gap-3 bg-white px-4 rounded-b-3xl">
                                {navItems.filter(item => item.name !== "Contact").map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            handleNavClick(e, item.href);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={cn(
                                            "px-4 py-3 text-base font-semibold rounded-xl transition-all border border-transparent cursor-pointer flex items-center justify-between",
                                            pathname === item.href ? "text-brand-primary bg-emerald-50" : "text-slate-700 hover:text-brand-primary hover:bg-slate-50 hover:border-slate-100"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact-us"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-3 mt-2 bg-brand-primary text-white text-center font-bold rounded-xl shadow-lg cursor-pointer text-sm uppercase tracking-widest"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
