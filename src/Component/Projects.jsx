import React, { useEffect, useRef, useState } from 'react'
import resumeProject from "../Images/resume project.png";
import chatApplication from "../Images/chat app.png";
import hospital from "../Images/hospital.png"

function Projects({projectRef}) {

    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    const handleProjScroll = () => {
        const el = projScrollRef.current;
        if (!el) return;
        const cardWidth = el.clientWidth * 0.4; // 40% width matches card
        const index = Math.round(el.scrollLeft / cardWidth);
        setActiveProjectIndex(index);
    };

    const [projectVisible, setProjectVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setProjectVisible(true); },
            { threshold: 0.2 }
        );
        if (projectRef.current) observer.observe(projectRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={projectRef} className="w-full h-screen snap-start bg-black text-white cursor-crosshair relative overflow-hidden">

                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)`,
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="w-full h-[28%] flex items-end justify-between px-5 sm:px-10 relative z-10">
                    <div>
                        <span className={`block text-indigo-400 text-xs font-mono tracking-[4px] uppercase transition-all duration-700 ease-out ${projectVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
                            Selected Work
                        </span>

                        <h1 className="text-6xl sm:text-7xl font-bold font-mono mb-10 flex overflow-hidden">
                            {"PROJECTS".split("").map((letter, i) => (
                                <span
                                    key={i}
                                    className="inline-block transition-all duration-1500 ease-out"
                                    style={{
                                        opacity: projectVisible ? 1 : 0,
                                        transform: projectVisible ? "translateY(0)" : "translateY(-60px)",
                                        transitionDelay: projectVisible ? `${0.15 + i * 0.04}s` : "0s",
                                    }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </h1>
                    </div>

                    <p className={`hidden sm:block text-zinc-600 text-xs font-mono tracking-widest mb-10 transition-all duration-1500 ease-out ${projectVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                        style={{ transitionDelay: "0.8s" }}>
                        SCROLL TO EXPLORE →
                    </p>
                </div>

                <div
                    onScroll={handleProjScroll}
                    className="proj-scroll w-full h-[72%] border-t border-neutral-800 flex gap-3 overflow-x-auto relative z-10">

                    {/* Project 01 */}
                    <div className="proj-card w-full sm:w-[60%] lg:w-[40%] bg-neutral-900 rounded-xl h-full border-r border-neutral-800 flex justify-center shrink-0">
                        <div className="w-[90%] pt-6 pb-6 flex flex-col">

                            <div className="flex justify-between items-start">
                                <h1 className="text-5xl font-bold text-neutral-500 font-mono">01</h1>
                                <div className="text-right">
                                    <h1 className="text-xl font-medium text-neutral-100">Resume Builder</h1>
                                    <span className="text-indigo-400 text-[10px] font-mono border border-indigo-500/50 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        WEB APP
                                    </span>
                                </div>
                            </div>

                            <div className="pt-8 tracking-wider">
                                <h1 className="text-xl font-medium text-zinc-300">Tools and Features</h1>
                                <div className="flex gap-1.5 flex-wrap mt-3">
                                    {["React", "Tailwind CSS", "Redux Toolkit", "Express.js", "Mongoose", "Jwt Authentication"].map(tag => (
                                        <span key={tag} className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center pt-15">
                                <img
                                    src={resumeProject}
                                    alt="Resume Maker"
                                    className="w-90 h-60 rounded-xl hover:scale-105 duration-300"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Project 02 */}
                    <div className="proj-card w-full sm:w-[40%] h-full border-r bg-neutral-900 rounded-xl border-neutral-800 flex justify-center shrink-0">
                        <div className="w-[90%] pt-6 pb-6 flex flex-col">

                            <div className="flex justify-between items-start">
                                <h1 className="text-5xl font-bold text-neutral-500 font-mono">02</h1>
                                <div className="text-right">
                                    <h1 className="text-xl font-medium text-neutral-100">Hospital Management</h1>
                                    <span className="text-indigo-400 text-[10px] font-mono border border-indigo-500/50 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        Group Proj
                                    </span>
                                </div>
                            </div>

                            <div className="pt-8 tracking-wider">
                                <h1 className="text-xl font-medium text-zinc-300">Tools and Features</h1>
                                <div className="flex gap-1.5 flex-wrap mt-3">
                                    {["React", "Tailwind CSS", "Express.js", "Mongoose"].map(tag => (
                                        <span key={tag} className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center pt-15">
                                <img
                                    src={hospital}
                                    alt="Hospital Management"
                                    className="w-90 h-60 rounded-xl hover:scale-105 duration-300"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="proj-card w-full sm:w-[40%] h-full border-r bg-neutral-900 rounded-xl border-neutral-800 flex justify-center shrink-0">
                        <div className="w-[90%] pt-6 pb-6 flex flex-col">

                            <div className="flex justify-between items-start">
                                <h1 className="text-5xl font-bold text-neutral-500 font-mono">03</h1>
                                <div className="text-right">
                                    <h1 className="text-xl font-medium text-neutral-100">Chat Application</h1>
                                    <span className="text-indigo-400 text-[10px] font-mono border border-indigo-500/50 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        REALTIME
                                    </span>
                                </div>
                            </div>

                            <div className="pt-8 tracking-wider">
                                <h1 className="text-xl font-medium text-zinc-300">Tools and Features</h1>
                                <div className="flex gap-1.5 flex-wrap mt-3">
                                    {["React", "Tailwind CSS", "Socket.io", "Express.js", "Mongoose", "Jwt Authentication"].map(tag => (
                                        <span key={tag} className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center pt-15">
                                <img
                                    src={chatApplication}
                                    alt="Chat Application"
                                    className="w-90 h-60 rounded-xl hover:scale-105 duration-300"
                                />
                            </div>

                        </div>
                    </div>

                    {/* More soon end card */}
                    <div className="proj-card min-w-[50%] sm:min-w-[20%] h-full flex items-center justify-center shrink-0">
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-600 text-xl mx-auto mb-3">
                                →
                            </div>
                            <span className="text-zinc-600 text-[11px] font-mono">more soon</span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects
