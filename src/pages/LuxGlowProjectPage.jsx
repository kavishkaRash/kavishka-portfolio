import { Link } from "react-router-dom";

export default function LuxGlowCaseStudy() {
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
                                Full Stack Case Study
                            </p>
                        </div>
                        <h1 className="text-8xl lg:text-[12rem] font-bold tracking-tighter leading-[0.75] text-white">
                            LuxGlow<span className="text-zinc-800 animate-pulse">.</span>
                        </h1>
                    </div>

                    <p className="text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-relaxed font-light tracking-tight">
                        A luxury skincare e-commerce platform built with <span className="text-white">modern full-stack</span> technologies, scalable architecture, and a production-ready business management system.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map((tech) => (
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
                        title="The Idea Behind LuxGlow" 
                        content="LuxGlow was created as a concept for a modern luxury skincare e-commerce platform. The goal was to build something that feels like a real commercial product, not just a student project with proper UX, scalable backend architecture, secure authentication, and a complete admin management system." 
                    />
                    
                    <Section 
                        number="02" 
                        tag="Challenge" 
                        title="The Problem I Wanted to Solve" 
                        content="Most e-commerce templates are either too basic or not scalable. Common issues include poor admin management, weak authentication systems, unoptimized UI performance, and lack of real-world architecture. LuxGlow was designed to solve these gaps using a complete full-stack architecture." 
                    />

                    <Section 
                        number="03" 
                        tag="Execution" 
                        title="How I Built It" 
                        content="I started by designing a clean luxury-style UI using React and Tailwind CSS. Then I developed the backend using Node.js and Express with a modular architecture structure for better scalability and maintainability. MongoDB was used to manage flexible product, user, and order data. Finally, I implemented JWT-based authentication to securely separate admin and customer roles." 
                    />
                </div>

                <section className="space-y-20">
                    <Header number="04" title="Core System Architecture" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card title="Frontend" description="React-based UI architecture with reusable components and hooks." />
                        <Card title="Backend" description="Express + Node.js REST API with modular architecture." />
                        <Card title="Database" description="MongoDB for flexible product, user, and order management." />
                        <Card title="Deployment" description="Netlify, Render, and Supabase cloud infrastructure." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="05" title="Authentication & Security" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <ul className="space-y-4">
                                {[
                                    "Google Login integration",
                                    "Email & Password authentication",
                                    "OTP verification flow",
                                    "JWT-based session handling",
                                    "Protected admin routes",
                                    "Role-based access control"
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
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.5em]">System Encrypted</span>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase">Status: Secure / SSL Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="06" title="API Communication" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="Axios" description="Used for authentication requests, fetching products, order handling, and dashboard updates." />
                        <Card title="React Router DOM" description="Handles dynamic navigation, protected routes, and SPA architecture." />
                        <Card title="REST APIs" description="Structured API communication between frontend and backend services." />
                        <Card title="useEffect" description="Dynamic data fetching and synchronization with backend state." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="07" title="Customer Experience Flow" />
                    <div className="relative overflow-hidden p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[60px]">
                        <div className="p-16 rounded-[59px] bg-[#050505] backdrop-blur-3xl">
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-16">
                                {[
                                    "Browse luxury products",
                                    "Add items to shopping cart",
                                    "Place secure orders",
                                    "Track real-time status",
                                    "Seamless SPA navigation"
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
                    <Header number="08" title="Admin Dashboard" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card title="Revenue" description="Analytics & performance." />
                        <Card title="Users" description="Platform activity monitoring." />
                        <Card title="Inventory" description="Dynamic product management." />
                        <Card title="Orders" description="Lifecycle management." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="09" title="Advanced Features" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Toast Notifications", "React Icons", "Nodemailer",
                            "Google Auth", "OTP Logic", "RBAC System"
                        ].map((text) => (
                            <div key={text} className="aspect-square flex items-center justify-center p-8 border border-white/5 rounded-3xl bg-white/[0.01] hover:bg-white hover:text-black transition-all duration-500 group">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-tight">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-12 p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                        <Header number="10" title="Backend Layers" />
                        <div className="space-y-3">
                            {["JWT Middleware", "CORS Policy", "JSON Parsing"].map((item) => (
                                <div key={item} className="p-6 rounded-2xl border border-white/5 bg-black hover:border-white/20 transition-all flex justify-between items-center group">
                                    <h4 className="text-white font-medium tracking-tight">{item}</h4>
                                    <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12 p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                        <Header number="11" title="Infrastructure" />
                        <div className="space-y-3">
                            {["Netlify CDN", "Render API", "Supabase Storage"].map((item) => (
                                <div key={item} className="p-6 rounded-2xl border border-white/5 bg-black hover:border-white/20 transition-all flex justify-between items-center group">
                                    <h4 className="text-white font-medium tracking-tight">{item}</h4>
                                    <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="space-y-20">
                    <Header number="12" title="Engineering Stack" />
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">Frontend Development</h3>
                            <div className="space-y-2">
                                {["React", "Tailwind CSS", "Axios", "Framer Motion"].map(t => (
                                    <div key={t} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[24px] text-zinc-300 group hover:bg-white hover:text-black transition-all duration-500">
                                        <span className="text-xl font-light tracking-tight">{t}</span>
                                        <span className="text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">Verified Component</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">Backend Engineering</h3>
                            <div className="space-y-2">
                                {["Node.js", "Express.js", "MongoDB", "JWT Authentication"].map(t => (
                                    <div key={t} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[24px] text-zinc-300 group hover:bg-white hover:text-black transition-all duration-500">
                                        <span className="text-xl font-light tracking-tight">{t}</span>
                                        <span className="text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">System Protocol</span>
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
                            number="13"
                            tag="The Difference"
                            title="The Special Sauce"
                            content="LuxGlow is not just an e-commerce website. It is a complete business management system with secure authentication, admin dashboard control, real-time order tracking, scalable backend architecture, and cloud-based deployment infrastructure."
                        />
                        <Section
                            number="14"
                            tag="Result"
                            title="Final Outcome"
                            content="The final result feels more like a real startup product than a basic portfolio project. It demonstrates full-stack engineering ability, system architecture thinking, secure authentication implementation, scalable backend planning, and production-level development mindset."
                        />
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        to="https://github.com/kavishkaRash/luxglow-ecommerce-frontend"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Frontend Repository</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">LuxGlow UI</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </div>
                    </Link>

                    <Link
                        to="https://github.com/kavishkaRash/luxglow-ecommerce-backend"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Backend Repository</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">LuxGlow Engine</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </div>
                    </Link>
                </div>

                <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600">Case Study 2024</p>
                    <div className="flex gap-12">
                        {["Secure", "Scalable", "Modern"].map(f => (
                            <span key={f} className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600 hover:text-white transition-colors cursor-default">{f}</span>
                        ))}
                    </div>
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