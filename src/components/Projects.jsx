export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>

                <div className="projects">
                    <div className="glass card">
                        <h3 style={{ marginBottom: "10px" }}>Library Management System</h3>
                        <p style={{ opacity: 0.75, marginBottom: "15px" }}>
                            Built a CLI system to manage book issuing and returns using OOP and STL in C++.
                            Supports multiple users, due dates, and fine calculation.
                        </p>
                        <a href="https://github.com/itisbot21" target="_blank" rel="noreferrer"
                            style={{ color: "#38bdf8", fontSize: "0.85rem" }}>
                            View on GitHub →
                        </a>
                    </div>

                    {/* Add your next project here */}
                </div>
            </div>
        </section>
    );
}