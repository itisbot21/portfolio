export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg-text">C++</div>

            <div className="container">
                <p className="hero-eyebrow fade-up d1">C++ Developer — Systems & Algorithms</p>

                <h1 className="hero-title fade-up d2">
                    Kaifi
                    <em>Azam</em>
                </h1>

                <div className="hero-bottom fade-up d3">
                    {/* <p className="hero-desc">
                        Focused on data structures, algorithms, and system-level problem solving. 
                    </p> */}
                    <div className="hero-actions">
                        <button
                            className="btn-primary"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Work
                        </button>
                        <a href="https://github.com/itisbot21" target="_blank" rel="noreferrer" className="btn-ghost">
                            GitHub →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}