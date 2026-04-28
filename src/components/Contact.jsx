import { useState } from "react";
import toast from "react-hot-toast";
import.meta.env.VITE_API_URL

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Message sent successfully!");
                setForm({ name: "", email: "", message: "" }); // reset form
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (err) {
            toast.error("Cannot connect to server. Try emailing directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="glass contact-box">
                    <h2>Contact Me</h2>
                    <p className="contact-sub">
                        Have a project or just want to connect? Drop a message.
                    </p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            onChange={handleChange}
                            value={form.name}
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            aria-label="Your Name"
                            required
                        />
                        <input
                            onChange={handleChange}
                            value={form.email}
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            aria-label="Your Email"
                            required
                        />
                        <textarea
                            onChange={handleChange}
                            value={form.message}
                            name="message"
                            placeholder="Your Message"
                            aria-label="Your Message"
                            rows="5"
                            required
                        />

                        <button type="submit" className="btn" disabled={loading}
                            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                            {loading ? "Sending..." : "Send Message"}
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