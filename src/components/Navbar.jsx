export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-logo">Kaifi<span>.</span></div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/itisbot21" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </nav>
  );
}