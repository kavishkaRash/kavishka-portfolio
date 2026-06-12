import { Link } from "react-router-dom";

export default function CICDJenkinsCaseStudy() {
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
                            Jenkins<br />
                            <span className="text-zinc-600">Pipeline</span>
                            <span className="text-zinc-800 animate-pulse">.</span>
                        </h1>
                    </div>

                    <p className="text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-relaxed font-light tracking-tight">
                        A fully automated <span className="text-white">CI/CD pipeline</span> that builds a Docker image, pushes to DockerHub, and deploys to AWS EC2 - triggered automatically on every GitHub push via webhook.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {["Jenkins", "Docker", "DockerHub", "AWS EC2", "Nginx", "PM2", "GitHub Webhook"].map((tech) => (
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
                        content="I wanted to go beyond basic deployments and build a real enterprise-grade CI/CD pipeline. Jenkins is one of the most widely used automation servers in the industry - learning to configure it from scratch, connect it to GitHub, and automate Docker-based deployments to AWS EC2 was a deliberate step toward professional DevOps engineering."
                    />

                    <Section
                        number="02"
                        tag="Challenge"
                        title="The Problem to Solve"
                        content="Traditional deployments require manual SSH, manual builds, and manual container management - slow, inconsistent, and error-prone. I wanted to eliminate all of that. The goal was a pipeline where pushing code to GitHub is the only action needed - Jenkins handles everything else automatically."
                    />

                    <Section
                        number="03"
                        tag="Execution"
                        title="How I Built It"
                        content="I installed Jenkins locally and exposed it to the internet using ngrok, then configured a GitHub webhook to trigger Jenkins on every push. Jenkins runs through a multi-stage Jenkinsfile pipeline - checking out code, building a Docker image tagged with the build number, pushing it to DockerHub, and finally SSHing into the AWS EC2 instance to pull the latest image, stop the old container, and start the new one - all automatically."
                    />
                </div>

                <section className="space-y-20">
                    <Header number="04" title="Pipeline Flow" />
                    <div className="relative overflow-hidden p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[60px]">
                        <div className="p-16 rounded-[59px] bg-[#050505] backdrop-blur-3xl">
                            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10">
                                {[
                                    "Push to GitHub",
                                    "Webhook Triggers Jenkins",
                                    "Docker Image Build",
                                    "Push to DockerHub",
                                    "SSH into EC2",
                                    "Deploy New Container"
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
                        <Card title="Jenkins" description="Automation server running pipeline stages - checkout, build, push, deploy - triggered via GitHub webhook." />
                        <Card title="Docker" description="Containerizes the Node.js app into a portable image tagged with build number for version control and rollback." />
                        <Card title="DockerHub" description="Cloud registry storing all versioned Docker images - enables consistent deployments across environments." />
                        <Card title="AWS EC2" description="Ubuntu production server - pulls latest Docker image, stops old container, starts new one via SSH." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="06" title="Jenkinsfile Pipeline Stages" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <ul className="space-y-4">
                                {[
                                    "SCM Checkout - pull latest code",
                                    "Build Docker Image - tagged with build number",
                                    "Login to DockerHub - secure credentials",
                                    "Push Image to DockerHub",
                                    "SSH Deploy to EC2 - stop old, start new",
                                    "Post Actions - Docker logout + cleanup"
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
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.5em]">Pipeline Running</span>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase">Status: Build Success / Deployed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="07" title="Docker Strategy" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="Build Number Tagging" description="Every image is tagged with the Jenkins build number - enabling precise version control and instant rollback to any previous deployment." />
                        <Card title="linux/amd64 Platform" description="Images are explicitly built for linux/amd64 to ensure compatibility with the EC2 Ubuntu instance architecture." />
                        <Card title="DockerHub Registry" description="All versioned images are stored on DockerHub - making deployments consistent and environment-independent." />
                        <Card title="Container Lifecycle" description="Old container is stopped and removed before the new one starts - ensuring clean, conflict-free deployments every time." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="08" title="Engineering Stack" />
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">CI/CD & Containerization</h3>
                            <div className="space-y-2">
                                {["Jenkins 2.555+", "Docker / DockerHub", "GitHub Webhooks", "ngrok Tunnel"].map(t => (
                                    <div key={t} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[24px] text-zinc-300 group hover:bg-white hover:text-black transition-all duration-500">
                                        <span className="text-xl font-light tracking-tight">{t}</span>
                                        <span className="text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">Verified</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">Cloud & Server</h3>
                            <div className="space-y-2">
                                {["AWS EC2 (Ubuntu)", "Nginx Reverse Proxy", "PM2 Process Manager", "SSH Agent Plugin"].map(t => (
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
                            number="09"
                            tag="Key Insight"
                            title="What Makes This Real"
                            content="This is not a tutorial copy. Every component was configured from scratch - Jenkins installed and secured, ngrok tunnel configured, GitHub webhook connected, Jenkinsfile written, Docker credentials stored securely, EC2 SSH keys managed via Jenkins credentials. This is a production-grade CI/CD pipeline built with real DevOps engineering practices."
                        />
                        <Section
                            number="10"
                            tag="Result"
                            title="Final Outcome"
                            content="The result is a fully automated deployment system where a git push triggers Jenkins, builds a versioned Docker image, pushes it to DockerHub, and deploys it live to AWS EC2 - all without any manual intervention. Build number tagging enables instant rollback. This demonstrates enterprise-level DevOps skills - containerization, pipeline automation, cloud deployment, and secure credential management."
                        />
                    </div>
                </section>

                
                <div className="grid md:grid-cols-1 gap-6">
                    <Link
                        to="https://github.com/kavishkaRash/github-docker-and-genkins-ci-cd-pipeline"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Repository</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">Jenkins + Docker + EC2 Pipeline</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>
                    </Link>
                </div>

                <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600">Case Study 2026</p>
                    <div className="flex gap-12">
                        {["Automated", "Containerized", "Production"].map(f => (
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