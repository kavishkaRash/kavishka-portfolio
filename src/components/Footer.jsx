const Footer = () => {
    return (
        <footer className="bg-slate-950">
            <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto border-t border-slate-900 font-['Inter'] text-sm tracking-wide">
                <div className="flex items-center">
                    <img src="https://res.cloudinary.com/dnjnrgzxs/image/upload/v1775665735/Stylized_K_logo_with_gradients_zndecj.png" alt="logo" className="w-12 h-12 object-cover scale-250"/>
                </div>
                <div className="text-slate-500 mb-6 md:mb-0 text-center">
                    © 2026 Kavishka Rashen. Built with MERN &amp; Intentionality.
                </div>
                <div className="flex gap-6">
                    <a className="text-slate-500 hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer" href="mailto:kavishka.rashen.dev@gmail.com">
                        <span className="material-symbols-outlined" data-icon="mail">mail</span>
                    </a>
                    <a className="text-slate-500 hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kavishka-rashen/">
                        <span className="material-symbols-outlined" data-icon="link">link</span>
                    </a>
                    <a className="text-slate-500 hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100" target="_blank" rel="noopener noreferrer" href="https://github.com/kavishkaRash">
                        <span className="material-symbols-outlined" data-icon="code">code</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;