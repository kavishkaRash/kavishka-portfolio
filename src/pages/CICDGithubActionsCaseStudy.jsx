import { Link } from "react-router-dom";

export default function CICDGithubActionsCaseStudy() {
    return (
        <div className="min-h-screen bg-[#060610] text-zinc-200 font-sans selection:bg-zinc-500/30 selection:text-white">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-zinc-800/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-16 space-y-48">

                <section className="relative z-10 space-y-16 pt-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <span className="h-[1px] w-12 bg-zinc-800 group-hover:w-24 group-hover:bg-zinc-400 transition-all duration-700 ease-in-out" />
                            <p className="uppercase tracking-[0.6em] text-[10px] font-black text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                DevOps Case Study
                            </p>
                        </div>
                        <h1 className="text-6xl lg:text-[10rem] font-bold tracking-tighter leading-[0.75] text-white">
                            GitHub<br />
                            <span className="text-zinc-600">Actions</span>
                            <span className="text-zinc-800 animate-pulse">.</span>
                        </h1>
                    </div>

                    <p className="text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-relaxed font-light tracking-tight">
                        A fully automated <span className="text-white">CI/CD pipeline</span> that deploys a Node.js REST API to AWS EC2 on every GitHub push - using GitHub Actions, Nginx, and PM2.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {["GitHub Actions", "AWS EC2", "Node.js", "Nginx", "PM2", "SSH Deploy"].map((tech) => (
                            <span key={tech} className="px-8 py-3 rounded-full border border-white/5 bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-2xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 cursor-default shadow-2xl">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="space-y-40">
                    <Section
                        number="01"
                        tag="Vision"
                        title="Why I Built This"
                        content="Manual deployments are slow, error-prone, and inconsistent. I wanted to build a pipeline that eliminates all manual steps - where pushing code to GitHub is the only action needed to get a live, updated application running on a real cloud server."
                    />

                    <Section
                        number="02"
                        tag="Challenge"
                        title="The Problem to Solve"
                        content="Most beginner projects are deployed manually - copy files, SSH in, restart the server. This approach doesn't scale and breaks easily. I wanted to implement a real-world DevOps workflow using GitHub Actions to automate the entire build and deployment lifecycle."
                    />

                    <Section
                        number="03"
                        tag="Execution"
                        title="How I Built It"
                        content="I set up a Node.js REST API on an AWS EC2 Ubuntu instance, configured Nginx as a reverse proxy to handle HTTP traffic on port 80, and used PM2 as a process manager to keep the app running. Then I wrote a GitHub Actions workflow that triggers on every push to main - SSHing into the EC2 instance, pulling the latest code, installing dependencies, and restarting the application automatically."
                    />
                </div>

                <section className="space-y-20">
                    <Header number="04" title="Pipeline Flow" />
                    <div className="relative overflow-hidden p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[60px]">
                        <div className="p-16 rounded-[59px] bg-[#050505] backdrop-blur-3xl">
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-16">
                                {[
                                    "Push to GitHub",
                                    "Actions Workflow Triggers",
                                    "SSH into EC2",
                                    "Pull Latest Code",
                                    "PM2 Restart App"
                                ].map((item, i) => (
                                    <div key={i} className="space-y-6 group">
                                        <div className="text-[40px] font-bold text-zinc-900 group-hover:text-white transition-colors duration-500">
                                            0{i + 1}
                                        </div>
                                        <p className="text-zinc-200 font-semibold text-xs leading-relaxed uppercase tracking-[0.2em]">{item}</p>
                                        <div className="w-6 h-[1px] bg-zinc-800 group-hover:w-full transition-all duration-700" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="05" title="System Architecture" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card title="GitHub Actions" description="Workflow triggered on every push to main branch - zero manual steps." />
                        <Card title="AWS EC2" description="Ubuntu server hosting the Node.js REST API in production environment." />
                        <Card title="Nginx" description="Reverse proxy handling HTTP traffic on port 80, forwarding to Node.js on port 3000." />
                        <Card title="PM2" description="Process manager ensuring the app stays live, auto-restarts on failure." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="06" title="GitHub Actions Workflow" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <ul className="space-y-4">
                                {[
                                    "Triggered on push to main",
                                    "SSH into EC2 using secrets",
                                    "Git pull latest code",
                                    "npm install dependencies",
                                    "PM2 restart application",
                                    "Zero downtime deployment"
                                ].map((item, i) => (
                                    <li key={i} className="group flex items-center gap-8 py-4 border-b border-white/5 text-zinc-400 hover:text-white transition-all duration-300">
                                        <span className="text-[10px] font-mono text-zinc-700 group-hover:text-white transition-colors">0{i + 1}</span>
                                        <span className="text-xl font-light tracking-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group aspect-square lg:aspect-video rounded-[60px] overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-transparent z-0" />
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center space-y-6">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-1000">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.5em]">Pipeline Active</span>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase">Status: Auto Deploy / Live</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="07" title="Engineering Stack" />
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">CI/CD & Cloud</h3>
                            <div className="space-y-2">
                                {["GitHub Actions", "AWS EC2 (Ubuntu)", "SSH Key Authentication", "Git"].map(t => (
                                    <div key={t} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[24px] text-zinc-300 group hover:bg-white hover:text-black transition-all duration-500">
                                        <span className="text-xl font-light tracking-tight">{t}</span>
                                        <span className="text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">Verified</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">Server & Runtime</h3>
                            <div className="space-y-2">
                                {["Node.js / Express", "Nginx Reverse Proxy", "PM2 Process Manager", "Ubuntu Linux"].map(t => (
                                    <div key={t} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[24px] text-zinc-300 group hover:bg-white hover:text-black transition-all duration-500">
                                        <span className="text-xl font-light tracking-tight">{t}</span>
                                        <span className="text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">Production</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-32 py-20 border-t border-white/5 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="max-w-4xl mx-auto space-y-40">
                        <Section
                            number="08"
                            tag="Key Insight"
                            title="What Makes This Real"
                            content="This is not a simulated pipeline. Every component - the EC2 instance, the Nginx config, the PM2 process, the GitHub Actions secrets - was set up and configured manually from scratch. This is a production-grade DevOps workflow, not a tutorial copy."
                        />
                        <Section
                            number="09"
                            tag="Result"
                            title="Final Outcome"
                            content="The result is a fully automated deployment pipeline where a single git push deploys the latest code to a live AWS EC2 server with zero manual intervention. This demonstrates real-world DevOps skills - cloud infrastructure, CI/CD automation, server configuration, and secure SSH workflows."
                        />
                    </div>
                </section>

                <div className="grid md:grid-cols-1 gap-6">
                    <Link
                        to="https://github.com/kavishkaRash/Node-Js-RestAPI-EC2"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Repository</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">GitHub Actions + EC2 Pipeline</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>
                    </Link>
                </div>

                <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600">Case Study 2026</p>
                    <div className="flex gap-12">
                        {["Automated", "Scalable", "Production"].map(f => (
                            <span key={f} className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600 hover:text-white transition-colors cursor-default">{f}</span>
                        ))}
                    </div>
                    <Link to="/" className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600 hover:text-white transition-colors">
                        ← Back to Portfolio
                    </Link>
                </footer>

            </div>
        </div>
    );
}

function Header({ number, title }) {
    return (
        <div className="flex items-end gap-6 overflow-hidden">
            <span className="font-mono text-[10px] text-zinc-700 tracking-[0.5em] uppercase mb-2">/ {number}</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white">{title}</h2>
        </div>
    )
}

function Section({ number, tag, title, content }) {
    return (
        <section className="space-y-8 group">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase">{number} // {tag}</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-white transition-all duration-700 leading-tight">{title}</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg lg:text-xl max-w-5xl font-light tracking-wide group-hover:text-zinc-300 transition-colors duration-500">
                {content}
            </p>
        </section>
    );
}

function Card({ title, description }) {
    return (
        <div className="group relative bg-white/[0.015] border border-white/[0.05] rounded-[40px] p-10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-700 overflow-hidden">
            <div className="relative z-10 space-y-4">
                <div className="w-10 h-[1px] bg-zinc-800 group-hover:w-full transition-all duration-700 ease-in-out" />
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-400 leading-relaxed text-sm font-light transition-colors duration-500">{description}</p>
            </div>
        </div>
    );
}