export default function LuxGlowCaseStudy() {
  return (
    <div className="min-h-screen bg-[#020202] text-zinc-200 font-sans selection:bg-zinc-500/30">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-16 space-y-40">

        <section className="relative z-10 space-y-12 pt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <span className="h-[1px] w-12 bg-zinc-800 group-hover:w-20 group-hover:bg-zinc-400 transition-all duration-700" />
              <p className="uppercase tracking-[0.5em] text-[11px] font-bold text-zinc-500">
                Full Stack Case Study
              </p>
            </div>
            <h1 className="text-7xl lg:text-[10rem] font-bold tracking-tighter leading-[0.8] text-white">
              LuxGlow<span className="text-zinc-600">.</span>
            </h1>
          </div>

          <p className="text-2xl lg:text-3xl text-zinc-400 max-w-4xl leading-snug font-light tracking-tight">
            A luxury skincare e-commerce platform built with modern full-stack
            technologies, scalable architecture, and a production-ready business management system.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-6 py-2.5 rounded-full border border-white/5 bg-white/[0.02] text-[11px] uppercase tracking-widest font-semibold backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        
        <div className="space-y-32">
          {[
            {
              num: "01",
              title: "The Idea Behind LuxGlow",
              body: "LuxGlow was created as a concept for a modern luxury skincare e-commerce platform. The goal was to build something that feels like a real commercial product, not just a student project with proper UX, scalable backend architecture, secure authentication, and a complete admin management system."
            },
            {
              num: "02",
              title: "The Problem I Wanted to Solve",
              body: "Most e-commerce templates are either too basic or not scalable. Common issues include poor admin management, weak authentication systems, unoptimized UI performance, and lack of real-world architecture. LuxGlow was designed to solve these gaps using a complete full-stack architecture."
            },
            {
              num: "03",
              title: "How I Built It",
              body: "I started by designing a clean luxury-style UI using React and Tailwind CSS. Then I developed the backend using Node.js and Express with a modular architecture structure for better scalability and maintainability. MongoDB was used to manage flexible product, user, and order data. Finally, I implemented JWT-based authentication to securely separate admin and customer roles."
            }
          ].map((item) => (
            <Section key={item.num} number={item.num} title={item.title} content={item.body} />
          ))}
        </div>

        {/* Architecture Grid */}
        <section className="space-y-16">
          <Header number="04" title="Core System Architecture" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Frontend" description="React-based UI architecture with reusable components and hooks." />
            <Card title="Backend" description="Express + Node.js REST API with modular architecture." />
            <Card title="Database" description="MongoDB for flexible product, user, and order management." />
            <Card title="Deployment" description="Netlify, Render, and Supabase cloud infrastructure." />
          </div>
        </section>

        <section className="space-y-16">
          <Header number="05" title="Authentication & Security" />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ul className="space-y-6">
                {[
                  "Google Login integration",
                  "Email & Password authentication",
                  "OTP verification flow",
                  "JWT-based session handling",
                  "Protected admin routes",
                  "Role-based access control"
                ].map((item, i) => (
                  <li key={i} className="group flex items-center gap-6 text-zinc-400 hover:text-white transition-all duration-300">
                    <span className="text-[10px] font-mono text-zinc-700">/ 0{i + 1}</span>
                    <span className="text-xl font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-square lg:aspect-video bg-gradient-to-tr from-white/[0.03] to-transparent border border-white/5 rounded-[60px] flex flex-col items-center justify-center backdrop-blur-2xl p-12 text-center group">
               <div className="w-12 h-12 rounded-full border border-zinc-700 mb-6 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-700">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
               </div>
               <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">Encrypted System Active</span>
            </div>
          </div>
        </section>

        
        <section className="space-y-16">
          <Header number="06" title="API Communication" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Axios" description="Used for authentication requests, fetching products, order handling, and dashboard updates." />
            <Card title="React Router DOM" description="Handles dynamic navigation, protected routes, and SPA architecture." />
            <Card title="REST APIs" description="Structured API communication between frontend and backend services." />
            <Card title="useEffect" description="Dynamic data fetching and synchronization with backend state." />
          </div>
        </section>

        {/* Flow */}
        <section className="space-y-16">
          <Header number="07" title="Customer Experience Flow" />
          <div className="p-16 border border-white/5 rounded-[50px] bg-[#080808]">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12">
              {[
                "Browse luxury products",
                "Add items to shopping cart",
                "Place secure orders",
                "Track real-time status",
                "Seamless SPA navigation"
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-[10px] font-mono text-zinc-600">
                    {i + 1}
                  </div>
                  <p className="text-zinc-200 font-medium text-sm leading-tight uppercase tracking-widest">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="space-y-16">
          <Header number="08" title="Admin Dashboard" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Revenue" description="Analytics & performance." />
            <Card title="Users" description="Platform activity monitoring." />
            <Card title="Inventory" description="Dynamic product management." />
            <Card title="Orders" description="Lifecycle management." />
          </div>
        </section>

        {/* Features Grid */}
        <section className="space-y-16">
          <Header number="9" title="Advanced Features" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-[30px]">
            {[
                "Toast Notifications", "React Icons", "Nodemailer",
                "Google Auth", "OTP Logic", "RBAC System"
            ].map((text) => (
                <div key={text} className="p-8 bg-[#020202] hover:bg-zinc-900/40 transition-colors flex items-center justify-center text-center">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest leading-tight">{text}</p>
                </div>
            ))}
          </div>
        </section>

        {/* Middleware & Infrastructure */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <Header number="10" title="Backend Layers" />
            <div className="space-y-4">
               {["JWT Middleware", "CORS Policy", "JSON Parsing"].map((item) => (
                 <div key={item} className="p-8 rounded-[30px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <h4 className="text-white font-semibold mb-2">{item}</h4>
                    <div className="w-10 h-[1px] bg-zinc-700" />
                 </div>
               ))}
            </div>
          </div>
          <div className="space-y-12">
            <Header number="11" title="Infrastructure" />
            <div className="space-y-4">
               {["Netlify CDN", "Render API", "Supabase Storage"].map((item) => (
                 <div key={item} className="p-8 rounded-[30px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <h4 className="text-white font-semibold mb-2">{item}</h4>
                    <div className="w-10 h-[1px] bg-zinc-700" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Tech Stack List */}
        <section className="space-y-16">
          <Header number="12" title="Engineering Stack" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 pl-4 border-l border-zinc-800">Frontend</h3>
              <div className="space-y-2">
                {["React", "Tailwind CSS", "Axios", "Framer Motion"].map(t => (
                  <div key={t} className="flex items-center justify-between p-4 bg-white/[0.01] rounded-xl text-zinc-300 group hover:bg-white/5 transition-all">
                    <span>{t}</span>
                    <span className="text-[9px] font-mono opacity-0 group-hover:opacity-40 tracking-widest transition-opacity uppercase">Verified Component</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 pl-4 border-l border-zinc-800">Backend</h3>
              <div className="space-y-2">
                {["Node.js", "Express.js", "MongoDB", "JWT"].map(t => (
                  <div key={t} className="flex items-center justify-between p-4 bg-white/[0.01] rounded-xl text-zinc-300 group hover:bg-white/5 transition-all">
                    <span>{t}</span>
                    <span className="text-[9px] font-mono opacity-0 group-hover:opacity-40 tracking-widest transition-opacity uppercase">System Protocol</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-20 py-40 border-t border-white/5 text-center">
          <Section
            number="13"
            title="The Special Sauce"
            content="LuxGlow is not just an e-commerce website. It is a complete business management system with secure authentication, admin dashboard control, real-time order tracking, scalable backend architecture, and cloud-based deployment infrastructure."
          />
          <div className="max-w-4xl mx-auto">
             <Section
                number="14"
                title="Final Outcome"
                content="The final result feels more like a real startup product than a basic portfolio project. It demonstrates full-stack engineering ability, system architecture thinking, secure authentication implementation, scalable backend planning, and production-level development mindset."
              />
          </div>
        </section>

        <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
            
            <div className="flex gap-8">
               <span className="text-[10px] font-mono tracking-widest uppercase">Secure</span>
               <span className="text-[10px] font-mono tracking-widest uppercase">Scalable</span>
               <span className="text-[10px] font-mono tracking-widest uppercase">Modern</span>
            </div>
        </footer>
      </div>
    </div>
  );
}

function Header({ number, title }) {
    return (
        <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-zinc-600 tracking-widest uppercase">{number} /</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white">{title}</h2>
        </div>
    )
}

function Section({ number, title, content }) {
  return (
    <section className="space-y-10 group">
      <div className="space-y-4">
        <span className="font-mono text-xs text-zinc-600 tracking-[0.4em] uppercase block group-hover:text-zinc-400 transition-colors duration-500">{number} / Narrative</span>
        <h2 className="text-5xl font-bold tracking-tighter text-white transition-all duration-700">{title}</h2>
      </div>
      <p className="text-zinc-400 leading-relaxed text-2xl max-w-5xl font-light tracking-tight">
        {content}
      </p>
    </section>
  );
}

function Card({ title, description }) {
  return (
    <div className="group relative bg-white/[0.015] border border-white/[0.05] rounded-[40px] p-10 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 overflow-hidden">
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-500">{title}</h3>
        <p className="text-zinc-500 group-hover:text-zinc-400 leading-relaxed text-base transition-colors duration-500">{description}</p>
      </div>
      <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.05] transition-all duration-700" />
    </div>
  );
}