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
                        I build efficient systems using C++ and modern technologies.
                        Focused on problem solving, performance, and clean design.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn">View Projects</button>
                        <button className="btn-outline" onClick={()=>window.open("https://github.com/itisbot21")}>GitHub</button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="hero-right">
                    <div className="glass code-card">
                        <pre>
                            {`// sample.cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
}`}
                        </pre>
                    </div>
                </div>

            </div>
        </section>
    );
}