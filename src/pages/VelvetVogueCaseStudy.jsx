import { Link } from "react-router-dom";

export default function VelvetVogueCaseStudy() {
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
                            Velvet Vogue<span className="text-zinc-800 animate-pulse">.</span>
                        </h1>
                    </div>

                    <p className="text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-relaxed font-light tracking-tight">
                        A full-stack fashion e-commerce platform built with <span className="text-white">PHP and MySQL</span>, covering the complete customer journey from product discovery to checkout, backed by a secure, role-based admin system and an automated deployment pipeline.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {["PHP", "MySQL", "PDO", "Vanilla JavaScript", "HTML/CSS", "Jenkins"].map((tech) => (
                            <span key={tech} className="px-8 py-3 rounded-full border border-white/5 bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-2xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 cursor-default shadow-2xl">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            to="http://velvet-vogue.infinityfree.io/"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all duration-300"
                        >
                            View Live Site
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </Link>
                        <Link
                            to="https://github.com/kavishkaRash/velvet-vogue-site"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-[0.2em] hover:border-white hover:text-white transition-all duration-300"
                        >
                            View Repository
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </Link>
                    </div>
                </section>

               
                <div className="space-y-40">
                    <Section
                        number="01"
                        tag="Vision"
                        title="The Idea Behind Velvet Vogue"
                        content="Velvet Vogue was built as a university coursework project for HND Software Engineering, but the goal was never to build a toy demo. I wanted a fashion e-commerce platform that behaved like a real one: a customer who can browse a full catalogue, filter by category, size, and colour, add to cart, and check out — and an admin who can actually manage that inventory from a dedicated dashboard, not a spreadsheet."
                    />

                    <Section
                        number="02"
                        tag="Challenge"
                        title="The Problem I Wanted to Solve"
                        content="Most classroom PHP projects stop at basic CRUD with no real security thinking behind them — plaintext passwords, raw SQL queries open to injection, unescaped output vulnerable to XSS. Velvet Vogue was built to do it properly from the start: bcrypt password hashing, PDO prepared statements for every query, and htmlspecialchars() escaping on all user-generated output, alongside a clean role-based system separating customers from admins."
                    />

                    <Section
                        number="03"
                        tag="Execution"
                        title="How I Built It"
                        content="I built the backend in PHP 8 with a MySQL database designed around 9 relational tables — users, products, categories, cart items, orders, and more — all defined in a single schema file with seed data included. Authentication and role checks live in a shared includes/auth.php, with header and footer partials reused across every page. To close the loop, I set up a Jenkins pipeline triggered by a GitHub webhook: every push to main is automatically checked out, packaged, and deployed via FTP to live hosting — no manual uploads."
                    />
                </div>

                
                <section className="space-y-20">
                    <Header number="04" title="Core System Architecture" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card title="Backend" description="PHP 8.x handling routing, auth, and business logic across every page." />
                        <Card title="Database" description="MySQL/MariaDB via PDO — 9 relational tables with seeded demo data." />
                        <Card title="Frontend" description="Vanilla JavaScript and modular CSS, no framework dependencies." />
                        <Card title="Deployment" description="Jenkins pipeline auto-deploying via FTP to InfinityFree hosting." />
                    </div>
                </section>

                
                <section className="space-y-20">
                    <Header number="05" title="Security by Design" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <ul className="space-y-4">
                                {[
                                    "Bcrypt password hashing — never plaintext",
                                    "PDO prepared statements on every query",
                                    "htmlspecialchars() output escaping (XSS protection)",
                                    "Role-based access — customer vs. admin",
                                    "Protected admin routes and dashboard",
                                    "DB credentials excluded from version control"
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
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.5em]">SQL Injection Protected</span>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase">PDO / Bcrypt / XSS-Safe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-20">
                    <Header number="06" title="Database Design" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="9 Relational Tables" description="Users, products, categories, cart items, orders, and more, fully normalised." />
                        <Card title="Seed Data Included" description="database_schema.sql ships with demo products and accounts out of the box." />
                        <Card title="PDO Layer" description="A single db.php connection file, kept out of version control for security." />
                        <Card title="Demo Accounts" description="seed_users.php provisions a working admin and customer login instantly." />
                    </div>
                </section>

                
                <section className="space-y-20">
                    <Header number="07" title="Automated Deployment" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <ul className="space-y-4">
                                {[
                                    "GitHub webhook triggers Jenkins on every push",
                                    "Jenkins checks out the latest main branch",
                                    "Deploy folder prepared via rsync, excluding .git",
                                    "FTP Publisher pushes files to InfinityFree hosting",
                                    "Zero manual upload — fully automated pipeline",
                                    "Console feedback on deploy success or failure"
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
                                    <span className="text-white font-bold text-xs uppercase tracking-[0.5em]">Push to Deploy</span>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase">Jenkins / FTP / InfinityFree</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
                <section className="space-y-20">
                    <Header number="08" title="Customer Journey" />
                    <div className="relative overflow-hidden p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[60px]">
                        <div className="p-16 rounded-[59px] bg-[#050505] backdrop-blur-3xl">
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-16">
                                {[
                                    "Register or log in",
                                    "Browse & filter products",
                                    "View size, colour & stock",
                                    "Add items to cart",
                                    "Checkout & confirm order"
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
                    <Header number="09" title="Admin Dashboard" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card title="Inventory" description="View and manage the full product catalogue in one place." />
                        <Card title="Add Product" description="Dedicated form for adding new stock with category, size, and colour." />
                        <Card title="Protected Access" description="Admin routes gated behind role checks — customers can't reach them." />
                        <Card title="Contact Messages" description="Customer contact form submissions stored directly in the database." />
                    </div>
                </section>

               
                <section className="space-y-20">
                    <Header number="10" title="Real Engineering Practices" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Prepared Statements", "Bcrypt Hashing", "Role-Based Access",
                            "XSS Escaping", "CI/CD Pipeline", "Session Auth"
                        ].map((text) => (
                            <div key={text} className="aspect-square flex items-center justify-center p-8 border border-white/5 rounded-3xl bg-white/[0.01] hover:bg-white hover:text-black transition-all duration-500 group">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-center leading-tight">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-12 p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                        <Header number="11" title="Frontend Layers" />
                        <div className="space-y-3">
                            {["Vanilla JavaScript", "Modular Stylesheets", "Shared Header/Footer"].map((item) => (
                                <div key={item} className="p-6 rounded-2xl border border-white/5 bg-black hover:border-white/20 transition-all flex justify-between items-center group">
                                    <h4 className="text-white font-medium tracking-tight">{item}</h4>
                                    <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12 p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                        <Header number="12" title="Backend & Deployment" />
                        <div className="space-y-3">
                            {["PHP 8.x / PDO / MySQL", "Jenkins Pipeline", "FTP to InfinityFree"].map((item) => (
                                <div key={item} className="p-6 rounded-2xl border border-white/5 bg-black hover:border-white/20 transition-all flex justify-between items-center group">
                                    <h4 className="text-white font-medium tracking-tight">{item}</h4>
                                    <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

               
                <section className="space-y-20">
                    <Header number="13" title="Engineering Stack" />
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">Frontend Development</h3>
                            <div className="space-y-2">
                                {["HTML5", "CSS3", "Vanilla JavaScript"].map(t => (
                                    <div key={t} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[24px] text-zinc-300 group hover:bg-white hover:text-black transition-all duration-500">
                                        <span className="text-xl font-light tracking-tight">{t}</span>
                                        <span className="text-[9px] font-mono opacity-40 tracking-[0.2em] uppercase">Verified Component</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 px-6 py-2 border border-zinc-800 rounded-full w-fit">Backend & DevOps</h3>
                            <div className="space-y-2">
                                {["PHP 8.x", "MySQL / MariaDB", "PDO", "Jenkins CI/CD"].map(t => (
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
                            number="14"
                            tag="The Difference"
                            title="The Special Sauce"
                            content="Velvet Vogue isn't a tutorial clone. Every query runs through PDO prepared statements, every password is bcrypt-hashed, every piece of user output is escaped — the kind of security discipline most student PHP projects skip entirely. It ships with its own CI/CD pipeline too: a GitHub push automatically triggers Jenkins, which packages and FTP-deploys the site with zero manual steps."
                        />
                        <Section
                            number="15"
                            tag="Result"
                            title="Final Outcome"
                            content="The final result is a fully working fashion e-commerce platform, built and delivered as part of HND Software Engineering coursework at ESOFT Metro Campus. It demonstrates relational database design, secure PHP development practices, a complete grasp of the customer-to-admin e-commerce lifecycle, and a real automated deployment workflow — without relying on a single framework to do the heavy lifting."
                        />
                    </div>
                </section>

          
                <div className="grid md:grid-cols-1 gap-6">
                    <Link
                        to="https://github.com/kavishkaRash/velvet-vogue-site"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative p-12 rounded-[48px] border border-white/10 bg-white/[0.02] hover:bg-white transition-all duration-700 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 group-hover:text-black/40 uppercase mb-4 transition-colors">Repository</p>
                            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:text-black transition-colors">Velvet Vogue Site</h3>
                        </div>
                        <div className="absolute bottom-10 right-10 text-zinc-800 group-hover:text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </div>
                    </Link>
                </div>

                <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-mono tracking-[0.5em] uppercase text-zinc-600">Case Study 2026</p>
                    <div className="flex gap-12">
                        {["Secure", "Relational", "Automated"].map(f => (
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