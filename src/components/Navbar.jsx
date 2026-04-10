import { useState } from "react";


const Navbar = () => {


    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    return (
        <nav className="fixed top-0 w-full z-50 glass-nav shadow-2xl shadow-cyan-950/20">
            <div className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto font-[Space_Grotesk] tracking-tight">
                <div className="flex items-center  justify-center">
                    <img src="https://res.cloudinary.com/dnjnrgzxs/image/upload/v1775665735/Stylized_K_logo_with_gradients_zndecj.png" alt="logo" className="w-12 h-12 object-cover scale-200" />
                </div>
                <div className="hidden md:flex gap-10 items-center" >

                    <a href="#home"
                        onClick={() => setActive("home")}
                        className={`${active === "home"
                            ? "text-primary border-b border-primary"
                            : "text-slate-400 hover:text-white"
                            } transition-all duration-300`}
                    >
                        Home
                    </a>

                    <a href="#about"
                        onClick={() => setActive("about")}
                        className={`${active === "about"
                            ? "text-primary border-b border-primary"
                            : "text-slate-400 hover:text-white"
                            } transition-all duration-300`}
                    >
                        About
                    </a>

                    <a href="#skills"
                        onClick={() => setActive("skills")}
                        className={`${active === "skills"
                            ? "text-primary border-b border-primary"
                            : "text-slate-400 hover:text-white"
                            } transition-all duration-300`}
                    >
                        Skills
                    </a>


                    <a href="#projects"
                        onClick={() => setActive("projects")}
                        className={`${active === "projects"
                            ? "text-primary border-b border-primary"
                            : "text-slate-400 hover:text-white"
                            } transition-all duration-300`}
                    >
                        Projects
                    </a>

                    <a href="#contact"
                        onClick={() => setActive("contact")}
                        className={`${active === "contact"
                            ? "text-primary border-b border-primary"
                            : "text-slate-400 hover:text-white"
                            } transition-all duration-300`}
                    >
                        Contact
                    </a>

                </div>
                {/* <!-- Mobile Menu Placeholder --> */}
                <div className="md:hidden" onClick={() => { setOpen(!open) }}>
                    <span className="material-symbols-outlined text-primary text-3xl">
                        {open ? "close" : "menu"}
                    </span>
                </div>

                {/* <!-- Mobile Menu --!> */}
                {open && (
                    <div className="absolute right-4 top-full mt-2 w-40 bg-black /90 backdrop-blur-lg p-4 space-y-4 rounded-xl shadow-xl md:hidden">
                        <a href="#home" className="block text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Home</a>
                        <a href="#about" className="block text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">About</a>
                        <a href="#skills" className="block text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Skills</a>
                        <a href="#projects" className="block text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Projects</a>
                        <a href="#contact" className="bblock text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Contact</a>
                    </div>
                )}

            </div>
        </nav >
    )
}

export default Navbar;