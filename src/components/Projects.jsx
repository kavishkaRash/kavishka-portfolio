import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className="py-32 bg-surface-container-low" id="projects">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="font-headline text-5xl font-bold tracking-tighter text-white mb-16">
                    Selected Works
                </h2>

                {/* Featured Project Card */}
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container overflow-hidden border border-outline-variant/10">

                    <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden  z-10">
                        <img
                            alt="FinTech Dashboard"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            src="https://res.cloudinary.com/ddrbcubf8/image/upload/q_auto/f_auto/v1778438489/Screenshot_2026-05-10_at_23.53_caw0qk.png"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    <div className="lg:col-span-5 p-12 flex flex-col justify-center">
                        <span className="text-tertiary text-xs font-bold mb-4 uppercase tracking-widest">
                            Project Showcase
                        </span>

                        <h3 className="text-4xl font-bold text-white mb-6">
                            LuxGlow E-Commerce
                        </h3>

                        <p className="text-on-surface-variant mb-8 leading-relaxed">
                            LuxGlows is a modern luxury e-commerce platform for cosmetics and skincare products.
                            It offers a seamless shopping experience with product browsing, secure checkout, and a beautifully designed UI focused on elegance and simplicity.
                            Built for a smooth and responsive user experience across all devices.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10">
                            <span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">MongoDB</span>
                            <span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">Express</span>
                            <span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">React</span>
                            <span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">Node.js</span>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <Link to="https://luxglows.netlify.app/" class="bg-primary text-on-primary px-6 py-3 rounded-md font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://luxglows.netlify.app/">
                                Live Demo <span class="material-symbols-outlined text-sm">open_in_new</span>
                            </Link>
                            <Link to="/project-detail" class="bg-surface-container-high/60 border border-outline-variant text-white px-6 py-3 rounded-md font-bold hover:bg-surface-container-highest transition-all duration-300 flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kavishkaRash/luxglow-ecommerce-frontend.git">
                                View Case Study <span class="material-symbols-outlined text-sm" data-icon="computer">Computer</span>
                            </Link>

                        </div>

                    </div>
                </div>

                {/* Grid Projects */}



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">


                    <div className="group bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high transition-all">
                        <h4 className="text-2xl font-bold text-white mb-3">UserHub Management System</h4>
                        <p className="text-on-surface-variant text-sm mb-6">
                            A full-stack MERN application for managing users with complete CRUD functionality.
                            Features real-time data handling, RESTful API integration, and MongoDB storage.            </p>
                        <a href={import.meta.env.VITE_USER_HUB_LIVE_DEMO_LINK} className="text-primary font-bold flex items-center gap-2">
                            Explore
                        </a>
                    </div>

                    <div className="group bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high transition-all">
                        <h4 className="text-2xl font-bold text-white mb-3">Checkmate Admission Guide</h4>
                        <p className="text-on-surface-variant text-sm mb-6">
                            Checkmate Admission Guide is an ongoing visa and education consultancy platform designed to assist students and professionals in their journey to study abroad.
                            The system focuses on providing structured guidance for university applications, visa processing, and document management with a smooth and user-friendly experience.
                        </p>
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
    );
};

export default Projects;