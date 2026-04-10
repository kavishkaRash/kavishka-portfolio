const Skills = () => {
    return (
        <section className="py-32 bg-surface" id="skills">
            <div className="max-w-7xl mx-auto px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">

                    <div>
                        <span class="font-label text-primary tracking-[0.3em] font-semibold mb-2 block uppercase">Expertise</span>
                        <h2 class="font-headline text-5xl font-bold tracking-tighter text-white">Technical Arsenal</h2>
                    </div>

                    <p class="text-on-surface-variant max-w-md text-right">
                        A curated selection of the technologies I master to build high-performance modern web applications.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* <!-- Skill Card: MongoDB --> */}
                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span class="material-symbols-outlined text-4xl text-primary" data-icon="database">database</span>
                        </div>
                        <h3 class="font-headline text-2xl font-bold text-white mb-2">MongoDB</h3>

                        <p class="text-sm text-on-surface-variant leading-relaxed">NoSQL database design, aggregation pipelines, and high-availability data modeling.</p>
                    </div>

                    {/* <!-- Skill Card: Express --> */}
                    <div class="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div class="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span class="material-symbols-outlined text-4xl text-primary" data-icon="router">router</span>
                        </div>
                        <h3 class="font-headline text-2xl font-bold text-white mb-2">Express JS</h3>
                        <p class="text-sm text-on-surface-variant leading-relaxed">Middleware architecture, RESTful routing, and robust server-side security protocols.</p>
                    </div>

                    {/* <!-- Skill Card: React --> */}
                    <div class="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div class="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span class="material-symbols-outlined text-4xl text-primary" data-icon="widgets">widgets</span>
                        </div>
                        <h3 class="font-headline text-2xl font-bold text-white mb-2">React</h3>
                        <p class="text-sm text-on-surface-variant leading-relaxed">Component-driven architecture, state management (Redux/Zustand), and hooks.</p>
                    </div>

                    {/* <!-- Skill Card: Node --> */}
                    <div class="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div class="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            {/* <span class="material-symbols-outlined text-4xl text-primary" data-icon="javascript">javascript</span> */}
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                className="w-12 h-12 filter hue-rotate-[500deg] saturate-200 brightness-110"/>
                        </div>
                        <h3 class="font-headline text-2xl font-bold text-white mb-2">Node JS</h3>
                        <p class="text-sm text-on-surface-variant leading-relaxed">Event-driven runtime optimization, stream processing, and server-side logic.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}


export default Skills;