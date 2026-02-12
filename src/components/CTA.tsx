export default function CTA() {
    return (
        <section className="bg-white py-24 dark:bg-black">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-3xl bg-orange-600 px-8 py-16 text-center shadow-2xl sm:px-16">
                    <div className="relative z-10">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Ready to revolutionize your workflow?
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-lg text-orange-100 sm:text-xl">
                            Join thousands of teams who are already building better products with Press1.
                            Start your 14-day free trial today.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition-all hover:bg-orange-50 active:scale-95">
                                Get started for free
                            </button>
                            <button className="rounded-full border border-orange-400 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-500 active:scale-95">
                                Talk to sales
                            </button>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-orange-500 blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-orange-400 blur-3xl opacity-50" />
                </div>
            </div>
        </section>
    );
}
