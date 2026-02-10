export default function Features() {
    const features = [
        {
            title: "AI Powering",
            description: "Harness the power of machine learning to automate repetitive tasks and gain deep insights into your project's progress.",
            icon: "🤖"
        },
        {
            title: "Real-time Collaboration",
            description: "Work together seamlessly with your team. Experience instantaneous updates and live edits across all your devices.",
            icon: "⚡"
        },
        {
            title: "Advanced Analytics",
            description: "Track performance with precision. Our detailed analytics help you identify bottlenecks and optimize productivity.",
            icon: "📊"
        },
        {
            title: "Secure Infrastructure",
            description: "Your data is safe with us. We use industry-standard encryption and security protocols to protect your information.",
            icon: "🛡️"
        },
        {
            title: "Global Reach",
            description: "Deploy globally with ease. Our architecture ensures low latency and high availability for users everywhere.",
            icon: "🌍"
        },
        {
            title: "Customizable Workflows",
            description: "Tailor the platform to fit your unique needs. Create custom automations and integrations effortlessly.",
            icon: "⚙️"
        }
    ];

    return (
        <section id="features" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        Everything you need to scale
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        Our platform provides all the tools necessary to manage complex projects and high-performance teams.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-orange-200 hover:shadow-xl hover:shadow-orange-600/5 dark:border-zinc-800 dark:bg-black dark:hover:border-orange-500/50"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl transition-transform group-hover:scale-110 dark:bg-orange-950">
                                {feature.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
