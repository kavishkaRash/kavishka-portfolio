import { Link } from "react-router-dom";

export default function CheckmateCaseStudy() {
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
                            Checkmate<span className="text-zinc-800 animate-pulse">.</span>
                        </h1>
                    </div>

                    <p className="text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-relaxed font-light tracking-tight">
                        A Korea study-visa admission platform built for Sri Lankan students, connecting them to <span className="text-white">26 partner universities</span> with a scalable full-stack architecture and a production-ready admin system.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {["React", "Vite", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map((tech) => (
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
                        title="The Idea Behind Checkmate"
                        content="Checkmate Admission Guide was built to simplify one of the most confusing journeys a Sri Lankan student faces: applying to a Korean university and securing a D-4 or D-2 student visa. The goal was to turn a scattered, agent-dependent process into a single, guided platform — real university data, a clear visa roadmap, and a management system the Checkmate team could actually run the business on."
                    />

                    <Section
                        number="02"
                        tag="Challenge"
                        title="The Problem I Wanted to Solve"
                        content="Most study-abroad consultancies in Sri Lanka rely on WhatsApp threads, PDFs, and manual follow-ups. There was no central place for a student to browse real partner universities, compare programs, or understand exactly what a D-4 visa requires. On the business side, there was no way to track appointments, student inquiries, or reviews without spreadsheets. Checkmate was built to close both gaps at once."
                    />

                    <Section
                        number="03"
                        tag="Execution"
                        title="How I Built It"
                        content="I designed a clean, trust-focused UI in React and Tailwind CSS, then built a single dynamic UniversityDetail component driven entirely by data — so adding a 27th university never means writing new code. The data itself is structured into nested categories (Language Program, Bachelor, Master, PhD, Associate Degree) so programs can be filtered per category instead of dumped in one flat list. On the backend, a MERN API handles inquiries, appointments, reviews, and a full admin dashboard, with JWT-based auth separating admin and public access."
                    />
                </div>

                <section className="space-y-20">
                    <Header number="04" title="Core System Architecture" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card title="Frontend" description="React + Vite UI with a single dynamic route serving all 26 partner universities." />
                        <Card title="Backend" description="Node.js + Express REST API handling inquiries, appointments, and reviews." />
                        <Card title="Database" description="MongoDB storing university programs, student appointments, and admin data." />
                        <Card title="Deployment" description="Frontend deployed with Git-based CI, backend running on a dedicated API server." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="05" title="University Data System" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <ul className="space-y-4">
                                {[
                                    "26 partner universities, 171+ programs",
                                    "Single UniversityDetail.jsx via useParams()",
                                    "Nested categories data shape (Language, Bachelor, Master, PhD)",
                                    "Category tabs filter programs, not just labels",
                                    "Fees, duration, and intake per program",
                                    "New university = one data entry, zero new code"
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
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.5em]">Data-Driven Routing</span>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase">26 Universities / 1 Component</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="06" title="API Communication" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="Axios" description="Handles inquiry submissions, appointment booking, and admin dashboard requests." />
                        <Card title="React Router DOM" description="Powers dynamic university routes and protected admin routes." />
                        <Card title="REST APIs" description="Structured endpoints connecting the React frontend to the MERN backend." />
                        <Card title="useState / useEffect" description="Manages form state, tab filtering, and scroll-reset between page navigations." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="07" title="Student Journey" />
                    <div className="relative overflow-hidden p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[60px]">
                        <div className="p-16 rounded-[59px] bg-[#050505] backdrop-blur-3xl">
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-16">
                                {[
                                    "Browse partner universities",
                                    "Compare programs by category",
                                    "Book a free consultation",
                                    "Submit visa documents",
                                    "Track application progress"
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
                        <Card title="Appointments" description="Manage and track student consultation bookings." />
                        <Card title="Students" description="Central record of every applicant in the pipeline." />
                        <Card title="Reviews" description="Add, edit, and moderate student success stories." />
                        <Card title="Inquiries" description="Contact form submissions routed straight to the team." />
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="09" title="Real Problems Solved" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Category Filtering", "Mobile Scroll Fix", "SEO Meta Tags",
                            "Social Integration", "Toast Notifications", "Dynamic Routing"
                        ].map((text) => (
                            <div key={text} className="aspect-square flex items-center justify-center p-8 border border-white/5 rounded-3xl bg-white/[0.01] hover:bg-white hover:text-black transition-all duration-500 group">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-tight">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-12 p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                        <Header number="10" title="Frontend Layers" />
                        <div className="space-y-3">
                            {["React Router", "Tailwind CSS", "Axios Client"].map((item) => (
                                <div key={item} className="p-6 rounded-2xl border border-white/5 bg-black hover:border-white/20 transition-all flex justify-between items-center group">
                                    <h4 className="text-white font-medium tracking-tight">{item}</h4>
                                    <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12 p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                        <Header number="11" title="Backend Layers" />
                        <div className="space-y-3">
                            {["Express REST API", "MongoDB", "JWT Auth"].map((item) => (
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
                                {["React", "Vite", "Tailwind CSS", "Axios"].map(t => (
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
                            content="Checkmate isn't just a landing page for a consultancy. It's a data-driven university catalog, a lead-generation engine, and an internal admin system in one codebase — built so the business can scale from 26 universities to hundreds without a single new page being written."
                        />
                        <Section
                            number="14"
                            tag="Result"
                            title="Final Outcome"
                            content="The final product is live at checkmateadmission.com, handling real student inquiries for a real consultancy. It demonstrates full-stack architecture thinking, scalable data modelling, SEO-ready deployment, and the kind of production polish that goes beyond a typical student project."
                        />
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        to="https://checkmateadmission.com"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Live Site</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">Checkmate Admission</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </div>
                    </Link>

                    <Link
                        to="https://github.com/kavishkaRash/Checkmate-Admission-Frontend"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Frontend Repository</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">Checkmate Frontend</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </div>
                    </Link>
                </div>

                <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600">Case Study 2026</p>
                    <div className="flex gap-12">
                        {["Scalable", "Live", "Full-Stack"].map(f => (
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