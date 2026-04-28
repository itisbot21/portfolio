export default function Skills() {
    const skills = ["C++", "DSA", "STL", "OOP", "Git", "HTML", "CSS", "JavaScript"];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2>Skills</h2>

                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <span key={i}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}