import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Contact({ contactRef }) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);


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

    const [aboutVisible, setAboutVisible] = useState(false);
    const aboutContentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (aboutContentRef.current) {
            observer.observe(aboutContentRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={contactRef} className="w-full min-h-screen p-5 pl-[8%] snap-start bg-black cursor-crosshair relative text-white pt-[15%]">

                <div className={`flex w-full h-[30%] about-header ${aboutVisible ? "about-show" : ""}`}>
                    <div >
                        <h1 style={{ fontFamily: "'Changa One', sans-serif" }} className="text-8xl sm:text-9xl font-medium text-zinc-800 ">05</h1>
                    </div>

                    <div>
                        <span className="border text-xs rounded-sm font-bold px-3 py-2 tracking-widest">CONTACT</span>
                        <h1 className="text-5xl sm:text-8xl font-black text-zinc-200">LET'S TURN IDEAS INTO REALITY</h1>
                    </div>
                </div>

                <div ref={aboutContentRef} className={`w-full sm:w-[80%] transition-all duration-2000 ${aboutVisible ? "about-cards-show" : ""}`}>

                    <div className="about-card border-r-2 mt-[10%] border-l-2 border-b-2 border-zinc-500 p-6 sm:p-8 backdrop-blur-sm" style={{ animationDelay: "0.8s", "--delay": "0.2s" }}>

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
                                        <label className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Sarthak Singh"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-4 py-2.5 text-sm text-zinc-300 font-mono placeholder:text-zinc-700
                                                focus:outline-none focus:border-indigo-500 transition-colors duration-300 cursor-none"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">Email</label>
                                        <input
                                            type="email"
                                            placeholder="you@email.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-4 py-2.5 text-sm text-zinc-300 font-mono placeholder:text-zinc-700
                                                focus:outline-none focus:border-indigo-500 transition-colors duration-300 cursor-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">Message</label>
                                    <textarea rows={4}
                                        placeholder="Hey Sahil, I'd love to work with you on..."
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-4 py-2.5 text-sm text-zinc-300 font-mono placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none cursor-none"
                                    />
                                </div>

                                <button onClick={handleSubmit} disabled={sending}
                                    className="group relative w-full py-3 rounded-lg border text-sm duration-300 border-zinc-400 hover:bg-zinc-800 overflow-hidden cursor-none disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-zinc-300">
                                        {sending ? (
                                            <>
                                                <span className="w-3 h-3 border border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <span className="group-hover:translate-x-3 transition-transform duration-300 font-bold">→</span>
                                            </>
                                        )}
                                    </span>
                                </button>

                            </div>
                        )}
                    </div>

                </div>

                <div className="mt-[20%]">
                    <div className="w-fit ml-auto mr-10">

                        <div className="flex justify-between p-2">
                            <a href="https://github.com/sahilsingh142" target="_blank" rel="noopener noreferrer" >
                                <FiGithub size={40} className="text-zinc-300 border-2 p-1 hover:scale-110 duration-300 hover:text-zinc-100" />
                            </a>

                            <a href="https://www.linkedin.com/in/sahil-singh142/" target="_blank" rel="noopener noreferrer" >
                                <FiLinkedin size={40} className="text-zinc-300 border-2 p-1 hover:scale-110 duration-300 hover:text-zinc-100" />
                            </a>
                        </div>

                        <span className="border-t-2 border-zinc-300 font-black text-6xl sm:text-8xl tracking-widest text-zinc-300 block">
                            SAHIL SINGH
                        </span>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
