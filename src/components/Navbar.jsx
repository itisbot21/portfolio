import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-logo">Kaifi<span>.</span></div>

          {/* Desktop links */}
          <div className="navbar-links desktop-links">
            <a href="#about">About</a>
            {/* <a href="#skills">Skills</a> */}
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/itisbot21" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>

          {/* Hamburger button */}
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={open ? "ham-line open" : "ham-line"} />
            <span className={open ? "ham-line open" : "ham-line"} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="mobile-menu">
          <a href="#about" onClick={close}>About</a>
          {/* <a href="#skills" onClick={close}>Skills</a> */}
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a href="https://github.com/itisbot21" target="_blank" rel="noreferrer" onClick={close}>GitHub ↗</a>
        </div>
      )}
    </>
  );
}