export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">

                {/* LEFT SIDE */}
                <div className="hero-left">
                    <h1>
                        Hi, I'm <span>Kaifi Azam</span>
                    </h1>

                    <p>
                        C++ Developer focused on DSA and system-level problem solving.
                        Building efficient, real-world applications and improving algorithmic performance.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn">View Projects</button>
                        <button className="btn-outline" onClick={() => window.open("https://github.com/itisbot21")}>GitHub</button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="hero-right">
                    <div className="glass code-card">
                        <pre>
                            {`// sample.cpp
                                #include <chatgpt>

int main()
{                                
 std::cout << Hello World!;
}`}
                        </pre>
                    </div>
                </div>

            </div>
        </section>
    );
}