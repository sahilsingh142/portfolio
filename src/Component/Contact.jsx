import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser";

function Contact({contactRef}) {
    const [contactVisible, setContactVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setContactVisible(true); },
            { threshold: 0.2 }
        );
        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) return;
        setSending(true);
        try {
            await emailjs.send(
                "service_5ytw0fh",
                "template_zqjo9aa",
                { from_name: formData.name, from_email: formData.email, message: formData.message },
                "ASTIzrwftbqp2-84W"
            );
            setSent(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSent(false), 4000);
        } catch (err) {
            console.error(err);
        }
        setSending(false);
    };
    return (
        <>
            <div
                ref={contactRef}
                className="w-full h-screen snap-start bg-black text-white cursor-crosshair relative overflow-hidden flex flex-col justify-center"
            >
                {/* Grid bg */}
                <div className="fixed inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)`,
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">

                    {/* ── LEFT: Info ── */}
                    <div className="lg:w-1/2">

                        <div className={`flex items-center gap-3 mb-4 transition-all duration-1500 ${contactVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                            <span className="w-8 h-px bg-indigo-500" />
                            <span className="text-indigo-400 text-[10px] font-mono tracking-[4px] uppercase">Get In Touch</span>
                        </div>

                        <h2 className={`font-bold font-mono leading-none mb-6 transition-all duration-2000 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.15s" }}>
                            <span className="text-3xl sm:text-5xl text-white">LET'S</span><br />
                            <span className="text-4xl sm:text-7xl text-indigo-400">CONNECT
                                <span className="contact-blink text-indigo-500">.</span>
                            </span>
                        </h2>

                        <p className={`text-zinc-500 font-mono text-sm leading-relaxed mb-8 transition-all duration-1500 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "0.3s" }}>
                            Open to freelance projects, full-time roles,<br />
                            or just a good conversation about tech.
                        </p>

                        {/* Social links */}
                        <div className={`flex flex-col gap-3 transition-all duration-1500 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "0.45s" }}>
                            {[
                                { label: "GitHub", value: "github.com/sahilsingh142", href: "https://github.com/sahilsingh142" },
                                { label: "LinkedIn", value: "linkedin.com/in/sahil-singh142", href: "https://www.linkedin.com/in/sahil-singh142/" },
                                { label: "Email", value: "sahilsingh@gmail.com", href: "mailto:sahilsingh@gmail.com" },
                            ].map(({ label, value, href }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer"
                                    className="group flex items-center gap-3 cursor-none">
                                    <span className="text-zinc-500 font-mono text-[13px] w-16 tracking-widest">{label}</span>
                                    <span className="w-6 h-px bg-zinc-700 group-hover:w-10 group-hover:bg-indigo-500 transition-all duration-300" />
                                    <span className="text-zinc-400 font-mono text-xs group-hover:text-indigo-300 transition-colors duration-300">
                                        {value}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Form ── */}
                    <div className={`lg:w-1/1.5 w-full transition-all duration-2000 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{ transitionDelay: "0.3s" }}>

                        <div className="border border-zinc-800 rounded-2xl p-6 sm:p-8 bg-zinc-900/40 backdrop-blur-sm">

                            {/* Terminal bar */}
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                <span className="ml-3 text-zinc-400 text-[15px] font-mono">message.send()</span>
                            </div>

                            {sent ? (
                                <div className="flex flex-col items-center justify-center py-10 gap-3">
                                    <div className="w-12 h-12 rounded-full border border-green-500/50 flex items-center justify-center text-green-400 text-xl">
                                        ✓
                                    </div>
                                    <p className="text-green-400 font-mono text-sm">Message sent successfully!</p>
                                    <p className="text-zinc-600 font-mono text-xs">I'll get back to you soon.</p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1">
                                            <label className="text-zinc-400 text-[10px] font-mono tracking-widest uppercase mb-1.5 block">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Sahil Singh"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 font-mono placeholder:text-zinc-700
                    focus:outline-none focus:border-indigo-500 transition-colors duration-300 cursor-none"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-zinc-400 text-[10px] font-mono tracking-widest uppercase mb-1.5 block">Email</label>
                                            <input
                                                type="email"
                                                placeholder="you@email.com"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 font-mono placeholder:text-zinc-700
                    focus:outline-none focus:border-indigo-500 transition-colors duration-300 cursor-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-zinc-400 text-[10px] font-mono tracking-widest uppercase mb-1.5 block">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Hey Sahil, I'd love to work with you on..."
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300 font-mono placeholder:text-zinc-700
                  focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none cursor-none"
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={sending}
                                        className="group relative w-full py-3 rounded-lg border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 font-mono text-sm
                                                    hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 overflow-hidden cursor-none
                                                    disabled:opacity-50 disabled:cursor-not-allowed">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {sending ? (
                                                <>
                                                    <span className="w-3 h-3 border border-indigo-400 border-t-transparent rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                                </>
                                            )}
                                        </span>
                                    </button>

                                </div>
                            )}
                        </div>

                        {/* Bottom note */}
                        <p className="text-center text-zinc-500 font-mono text-[10px] mt-4 tracking-widest">
                            ▹ USUALLY REPLIES WITHIN 24 HOURS
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className={`absolute bottom-5 left-0 right-0 text-center transition-all duration-700 ${contactVisible ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDelay: "0.8s" }}>
                    <p className="text-zinc-500 font-mono text-[10px] tracking-widest">
                        © 2025 SAHIL SINGH · BUILT WITH REACT & TAILWIND
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact
