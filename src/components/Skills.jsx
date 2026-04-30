export default function Skills() {
  const skills = [
    { name: "C++", details: ["Memory", "Pointers"] },
    { name: "OOP", details: ["Encapsulation", "Inheritance", "Polymorphism"] },
    { name: "STL", details: ["vector", "map", "set"] },
    { name: "Arrays", details: ["Prefix Sum", "Sliding Window"] },
    { name: "Trees", details: ["DFS", "BFS"] },
    // { name: "Graphs", details: ["DFS", "BFS", "Shortest Path"] },
    { name: "DP", details: ["Memoization", "Tabulation"] },
    // { name: "Git", details: ["Branching", "Commits"] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">

        <div className="skills-top">
          <h2 className="section-heading">Stack</h2>
          {/* <p className="skills-label">02 / Core Tools</p> */}
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-cell" key={i}>
              <span className="main">{s.name}</span>

              <div className="skill-hover">
                {s.details.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}