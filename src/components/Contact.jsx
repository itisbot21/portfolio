import { useState } from "react";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Message sent.");
                setForm({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to send. Try again.");
            }
        } catch {
            toast.error("Can't reach server. Email me directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="contact-big">Let's<br />Talk.</h2>

                <div className="contact-grid">
                    <div>
                        <p className="contact-info-text">
                            Have a project in mind or just want to connect?
                            Drop a message and I'll get back to you.
                        </p>
                        <a href="mailto:hestandswhenheseesyou@gmail.com" className="contact-email-link">
                            hestandswhenheseesyou@gmail.com
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row-2">
                            <div>
                                <label className="field-label">Name</label>
                                <input
                                    className="field-input"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="field-label">Email</label>
                                <input
                                    className="field-input"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="field-label">Message</label>
                            <textarea
                                className="field-input"
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's on your mind?"
                                required
                                style={{ resize: 'vertical' }}
                            />
                        </div>

                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? "Sending..." : "Send Message →"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}