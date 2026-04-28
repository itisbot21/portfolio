import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/main.css";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ style: { background: '#0f172a', color: '#e2e8f0', border: '1px solid rgba(56,189,248,0.3)' } }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}