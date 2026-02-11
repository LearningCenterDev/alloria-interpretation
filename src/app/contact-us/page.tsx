"use client";

import Hero from "./_components/Hero";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";
import Operations from "./_components/Operations";
import FAQ from "./_components/FAQ";

export default function ContactUsPage() {
    return (
        <div className="pt-20 pb-0 overflow-hidden">
            {/* Contact Hero */}
            <Hero />

            <section className="px-6 py-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <ContactInfo />

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Global Operations section */}
            <Operations />

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
}
