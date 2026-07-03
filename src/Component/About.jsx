import React, { useEffect, useState } from 'react'
import linkedin from "../Images/linkedin.png";
import github from "../Images/github.png";
import mainImg from "../Images/OwnerImg.jpeg";

function About({aboutRef}) {
    const [aboutVisible, setAboutVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAboutVisible(true);
            },
            { threshold: 0.3 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                ref={aboutRef}
                className="w-full h-screen snap-start bg-black flex items-center cursor-crosshair overflow-hidden relative">

                <div className="w-full lg:w-1/2 flex flex-col pl-10 lg:pl-20 pr-10 text-white z-10">

                    <div className={`flex items-center gap-3 mb-4 transition-all duration-2000 ease-out ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <span className="w-8 h-0.5 bg-indigo-400" />
                        <span className="text-indigo-400 text-sm tracking-widest uppercase font-mono">Who I Am</span>
                    </div>

                    <h1 className={`text-6xl font-bold leading-tight mb-6 transition-all duration-2000 ease-out delay-150 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        About <span className="text-indigo-400">Me</span>
                        <span className="cursor-blink text-indigo-400">|</span>
                    </h1>

                    {[
                        "Hey! I'm Sahil Singh — a frontend developer by profession, a problem-solver by nature.",
                        "I build clean, responsive, and visually engaging web experiences using React, Tailwind CSS, and JavaScript — one component at a time.",
                        "I believe great design and great code go hand in hand. When I'm not pushing pixels or debugging at 2am, I'm probably exploring new tech, sipping chai, or thinking about the next big idea.",
                    ].map((line, i) => (
                        <p key={i}
                            className={`text-gray-400 font-mono text-sm leading-relaxed mb-3 transition-all duration-2000 ease-out${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: aboutVisible ? `${300 + i * 150}ms` : "0ms" }}>
                            <span className="text-indigo-500 mr-2">▹</span>{line}
                        </p>
                    ))}

                    <div className="flex gap-5 mt-8">
                        {[
                            { src: github, alt: "github", href: "https://github.com/sahilsingh142", delay: 700 },
                            { src: linkedin, alt: "linkedin", href: "https://www.linkedin.com/in/sahil-singh142/", delay: 850 },
                        ].map(({ src, alt, href, delay }) => (
                            <a key={alt} href={href} target="_blank" rel="noreferrer"
                                className={`group relative transition-all duration-1500 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: aboutVisible ? `${delay}ms` : "0ms" }}>
                                <img
                                    src={src}
                                    alt={alt}
                                    className="w-10 h-10 object-cover relative z-10 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-1/2 lg:flex items-center justify-center z-10 hidden">
                    <div className={`relative transition-all duration-1000 ease-out ${aboutVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-20 scale-90"}`}
                        style={{ transitionDelay: "200ms" }}>

                        <div className="spin-slow absolute inset-0 m-auto w-80 h-80 rounded-full border-2 border-dashed border-indigo-500 opacity-30"
                            style={{ top: "-8px", left: "-8px", width: "calc(100% + 16px)", height: "calc(100% + 16px)" }}
                        />

                        <div className="pulse-ring absolute inset-0 rounded-full border-2 border-indigo-400 opacity-40"
                            style={{ borderRadius: "72% 48% 56% 64% / 70% 54% 66% 50%" }}
                        />

                        <div className="float-anim group relative cursor-none">
                            <img
                                src={mainImg}
                                alt="Sahil Singh"
                                className="w-72 h-72 object-cover transition-all duration-1000 group-hover:scale-105"
                                style={{ borderRadius: "72% 48% 56% 64% / 70% 54% 66% 50%", border: "3px solid #6366f1", boxShadow: "0 0 40px rgba(99,102,241,0.3)", }}
                            />
                        </div>

                        <div className={`absolute -top-4 -right-6 bg-indigo-600 text-white text-xs font-mono px-3 py-1 rounded-full transition-all duration-700 delay-700 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Open to work
                        </div>

                        <div className={`absolute -bottom-4 -left-6 bg-black border border-indigo-500 text-indigo-300 text-xs font-mono px-3 py-1 rounded-full transition-all duration-700 delay-900 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            React · JS · Express
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About