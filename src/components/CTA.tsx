export default function CTA() {
    return (
        <section className="bg-brand-primary py-24 relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]" />
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <h2 className="mb-6 text-4xl font-serif font-bold tracking-tight sm:text-5xl">
                    Ready to bridge the gap?
                </h2>
                <p className="mx-auto mb-10 text-lg text-slate-300 max-w-2xl font-medium">
                    Join over 500+ global enterprises that trust Alloria for their critical communication needs.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="rounded px-8 py-3.5 font-bold shadow-md bg-brand-accent text-brand-primary hover:bg-brand-accent-hover transition-colors uppercase tracking-widest text-sm w-full sm:w-auto">
                        Request a Quote
                    </button>
                    <button className="rounded border border-white/20 bg-white/5 px-8 py-3.5 font-bold text-white transition-all hover:bg-white/10 uppercase tracking-widest text-sm w-full sm:w-auto">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
