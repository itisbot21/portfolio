export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="glass contact-box">
                    <h2>Contact Me</h2>
                    <p className="contact-sub">
                        Have a project or just want to connect? Drop a message.
                    </p>

                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>

                        <button type="submit" className="btn">
                            Send Message
                        </button>
                    </form>

                    <div className="contact-extra">
                        <p>or reach me at:</p>
                        <p style={{ color: "#38bdf8" }}>hestandswhenheseesyou@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}