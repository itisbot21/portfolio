const projects = [
    {
        num: "01",
        name: "Library Management System",
        desc: "CLI-based system built around OOP principles and STL. Handles books, users, and fines — no UI layer, just logic and structure.",
        tags: ["C++", "STL", "OOP"],
        href: "https://github.com/itisbot21",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-heading">Projects</h2>
                <div className="projects-list">
                    {projects.map((p) => (

                        <a key={p.num}
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="project-row"
                            style={{ display: 'grid' }}
                        >
                            <span className="project-num">{p.num}</span>
                            <div>
                                <div className="project-name">{p.name}</div>
                                <p className="project-desc">{p.desc}</p>
                            </div>
                            <div className="project-meta">
                                <div className="project-tags">
                                    {p.tags.map((t) => (
                                        <span className="tag" key={t}>{t}</span>
                                    ))}
                                </div>
                                <span className="project-arrow">↗</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
}