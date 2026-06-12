import { FaAws, FaGithub, FaJenkins } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoDocker } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";
import { SiExpress, SiJenkins, SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";

const Skills = () => {
    return (
        <section className="py-32 bg-surface" id="skills">
            <div className="max-w-7xl mx-auto px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="font-label text-primary tracking-[0.3em] font-semibold mb-2 block uppercase">Expertise</span>
                        <h2 className="font-headline text-5xl font-bold tracking-tighter text-white">Technical Arsenal</h2>
                    </div>
                    <p className="text-on-surface-variant max-w-md text-right">
                        A curated selection of the technologies I master to build high-performance modern web applications.
                    </p>
                </div>

                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-6">Full Stack</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><SiMongodb /></span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">MongoDB</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">NoSQL database design, aggregation pipelines, and high-availability data modeling.</p>
                    </div>

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><SiExpress /></span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">Express JS</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Middleware architecture, RESTful routing, and robust server-side security protocols.</p>
                    </div>

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><RiReactjsLine /></span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">React</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Component-driven architecture, state management (Redux/Zustand), and hooks.</p>
                    </div>

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><TbBrandNodejs /></span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">Node JS</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Event-driven runtime optimization, stream processing, and server-side logic.</p>
                    </div>

                </div>

                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-6">DevOps & Cloud</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><IoLogoDocker /></span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">Docker</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Containerization, image builds, DockerHub integration, and consistent deployment environments.</p>
                    </div>

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-6xl  text-primary"><SiJenkins /> </span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">Jenkins</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">CI/CD pipeline automation, GitHub webhook triggers, and automated build deployments.</p>
                    </div>

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><FaAws /></span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">AWS EC2</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Cloud server provisioning, Linux environment setup, and production-grade application hosting.</p>
                    </div>

                    <div className="group bg-surface-container p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary"><FiGithub /> </span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">GitHub Actions</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Automated CI/CD workflows, SSH-based EC2 deployment, and zero-downtime pipelines.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;