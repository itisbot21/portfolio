import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://portfolio-backend-g9ae.onrender.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (data.success) {
                alert("Message sent!");
            } else {
                alert("Failed to send message");
            }
        } catch (err) {
            alert("Error connecting to server");
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
                        <input onChange={handleChange} type="text" placeholder="Your Name" required />
                        <input onChange={handleChange} type="email" placeholder="Your Email" required />
                        <textarea onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>

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