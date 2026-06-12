const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-24 hero-mesh relative overflow-hidden" id="home">


            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(#00daf3 1px, transparent 1px), linear-gradient(90deg, #00daf3 1px, transparent 1px)", backgroundSize: "60px 60px", }}></div>
            <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                <div className="z-10 animate-slide-fade-left">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="font-label text-primary tracking-[0.2em] font-bold uppercase text-[10px]">Ready for New Challenges</span>
                    </div>

                    <h1 className="font-headline text-7xl md:text-[7.5rem] font-bold tracking-tighter leading-[0.8] mb-8">
                        <span className="text-white block opacity-90 text-5xl md:text-6xl mb-4 font-light tracking-tight">Hi, I'm</span>
                        <span className="text-gradient-premium drop-shadow-[0_0_15px_rgba(0,218,243,0.2)] block">Kavishka Rashen</span>
                    </h1>

                    <p className="font-headline text-2xl md:text-3xl text-on-surface-variant font-light mb-12 max-w-xl leading-snug tracking-wide">
                        Full Stack & DevOps Engineer. <span className="text-white font-medium border-b border-primary/30">Architecting high-performance logic</span> <span className="text-primary/80">into seamless digital journeys.</span>
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a className="group bg-primary text-on-primary px-10 py-5 rounded-md font-bold text-lg hover:shadow-[0_0_40px_rgba(0,218,243,0.5)] hover:bg-cyan-300 transition-all duration-300 flex items-center gap-3 overflow-hidden relative" href="#projects">
                            <span className="relative z-10 flex items-center gap-3">
                                Explore Work
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </a>
                        <a className="group bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 flex items-center gap-3" target="_blank" rel="noopener noreferrer" href="https://github.com/kavishkaRash" >
                            GitHub
                            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform" data-icon="code">code</span>
                        </a>
                    </div>

                </div>
                <div className="relative lg:h-[750px]flex items-center justify-center animate-slideRight">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 rounded-full hero-glow-sphere animate-pulse-slow"></div>
                    <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                    <div class="relative w-full max-w-lg aspect-square group"></div>

                    <div class="absolute -inset-6 border border-primary/20 rounded-2xl transition-all duration-700 group-hover:border-primary/50 group-hover:scale-[1.04] group-hover:bg-primary/2"></div>
                    <div class="absolute -inset-px group border border-outline-variant/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <img alt="Kavishka's Workspace" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 brightness-[0.8] group-hover:brightness-100" data-alt="Futuristic software developer workspace with neon cyan lights, multiple computer monitors displaying code, and a clean minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv6UM2LbrTAJ45B75DKv3urrfdftM7LbdavuDPFHCIiisHAHT19l7yrOLln6fbb8aIlA40vS6UO8hD_haZJsl9lYC6dlTkC-_ZRoXjNJJE9Xk-Wu5UYO-XeRA7OMjWNdciIFlS_gtAbuAkju3xh35gNRAJ-PjkJsyVN_KPZfIwfp5V7Boh__unsMRaQluj_I9uanAggaLULAz2uYOVVNgRPVBhcWIN4dIYra-RNMp6apROajwQNLaWw432xToYh4Da9iAmlvMlkMPA" />
                        <div class="absolute inset-0 bg-liner-to-t from-[#0a0e14] via-transparent to-transparent opacity-90"></div>
                    </div>


                    <div className="absolute -bottom-8 -right-4 lg:-right-16 z-20">
                        <div className="bg-surface-container/80 backdrop-blur-2xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                <p class="text-[10px] font-label text-primary/80 uppercase tracking-[0.25em] font-black">Architecture Stack</p>
                            </div>
                            <p class="font-headline font-bold text-white text-xl tracking-tight">React • Node.js • Docker • AWS</p>

                        </div>
                    </div>

                </div>
            </div>

            <a class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-on-surface-variant/60 hover:text-primary transition-all duration-500 group" href="#about">
                <span class="text-[10px] uppercase tracking-[0.4em] font-bold group-hover:tracking-[0.5em] transition-all">Scroll to Explore</span>
                <div class="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1.5 group-hover:border-primary/40">
                    <div class="w-1 h-1.5 bg-primary rounded-full animate-scroll"></div>

                </div>

            </a>

        </section>
    );
};

export default Hero;