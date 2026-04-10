const About = () => {
    return (
        <section className="py-32 bg-surface-container-low relative" id="about">

            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT SIDE */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary/30"></div>
                    <div className="relative aspect-[4/5] bg-surface-container rounded-lg overflow-hidden border border-outline-variant/10 shadow-inner">
                        <img alt="Kavishka Rashen Profile" class="w-full h-full object-cover" data-alt="Professional portrait of a young man with a confident expression in a dark studio setting with subtle blue backlighting" src="https://res.cloudinary.com/dnjnrgzxs/image/upload/v1774524036/file_000000009ef8720b9ea57f1fc4d9a77d_wvuioe.png" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent opacity-90"></div>
                    </div>

                    {/* EXPERIENCE BOX */}
                    <div className="absolute -bottom-6 -right-6 bg-tertiary text-on-tertiary p-6 rounded-md shadow-xl max-w-[200px]">
                        <p class="text-4xl font-headline font-black mb-1">1+</p>
                        <p class="text-sm font-bold uppercase tracking-tighter">Building Real World Web Projects</p>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="order-1 lg:order-2">
                    <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8 relative">
                        Decoding Complexity, <br />
                        <span class="text-primary">Crafting Solutions.</span>

                    </h2>

                    <div className="space-y-6 text-on-surface-variant body-lg leading-relaxed">
                        <p> I'm a passionate MERN stack developer with deep experience in building full-scale web applications. I don't just write code; I architect ecosystems that are performant, secure, and user-centric.</p>
                        <p>My philosophy centers on <span class="text-tertiary">intentional engineering</span>—ensuring every line of JavaScript serves a specific purpose in the user's journey. From complex API integrations to responsive front-end interfaces, I bridge the gap between logic and human experience.</p>

                        <ul className="grid grid-cols-2 gap-4 pt-4">
                            <li class="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                Scalable Systems
                            </li>

                            <li class="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                Clean Code Practices
                            </li>

                            <li class="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                API Integration
                            </li>

                            <li class="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                Responsive UI Design
                            </li>

                        </ul>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default About;