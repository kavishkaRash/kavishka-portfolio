const Projects = () => {
    return (

        <section className="py-32 bg-surface-container-low" id="projects">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="font-headline text-5xl font-bold tracking-tighter text-white mb-16">Selected Works</h2>

                {/* <!-- Featured Project Card --> */}
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container overflow-hidden border border-outline-variant/10">
                    <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden z-10">
                        <img alt="FinTech Dashboard" className="absolute inset-0  w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="Sophisticated fintech dashboard interface featuring dark mode, cyan data visualizations, glassmorphic cards, and complex financial charts" src="https://res.cloudinary.com/dnjnrgzxs/image/upload/v1775118079/image_ue7jwh.png" />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    <div className="lg:col-span-5 p-12 flex flex-col justify-center">
                        <span className="text-tertiary font-label tracking-widest text-xs font-bold mb-4 uppercase">Project Showcase</span>
                        <h3 className="font-headline text-4xl font-bold text-white mb-6">UserHub Management System</h3>
                        <p className="text-on-surface-variant mb-8 leading-relaxed">
                            A full-stack MERN application for managing users with complete CRUD functionality.
                            Features real-time data handling, RESTful API integration, and a connected MongoDB database for persistent storage.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-10">
                            <span class="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">MongoDB</span>
                            <span class="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">Express</span>
                            <span class="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">React</span>
                            <span class="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">Node.js</span>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <a class="bg-primary text-on-primary px-6 py-3 rounded-md font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2" target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_USER_HUB_LIVE_DEMO_LINK}>
                                Live Demo <span class="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                            <a class="bg-surface-container-high/60 border border-outline-variant text-white px-6 py-3 rounded-md font-bold hover:bg-surface-container-highest transition-all duration-300 flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kavishkaRash/UserHub-frontend.git">
                                Frontend <span class="material-symbols-outlined text-sm" data-icon="computer">Computer</span>
                            </a>

                            <a class="bg-surface-container-high/60 border border-outline-variant text-white px-6 py-3 rounded-md font-bold hover:bg-surface-container-highest transition-all duration-300 flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kavishkaRash/UserHub-backend.git">
                                Backend <span class="material-symbols-outlined text-sm" data-icon="settings">settings</span>
                            </a>

                        </div>


                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="group bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high transition-all">
                        <h4 className="font-headline text-2xl font-bold text-white mb-3">NovaCart E-Commerce</h4>
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Developing a full-featured online shopping platform where users can explore products, manage their cart, and complete secure purchases. Includes user authentication, product management, and a seamless checkout experience.</p>
                        <div className="text-primary font-bold flex items-center gap-2" href="#">
                            Ongoing <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )

}

export default Projects;