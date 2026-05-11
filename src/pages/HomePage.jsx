
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../App.css'
import { Toaster } from "react-hot-toast";

export default function HomePage() {
    return (
        <div>

            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <Toaster position="top-right" />

        </div>
    );
}