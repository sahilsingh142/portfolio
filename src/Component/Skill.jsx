import React, { useEffect, useState } from 'react'
import { SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss, SiReact, SiRedux, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiVscodium, SiPostman, SiGit, SiOpenai } from "react-icons/si";

function Skill({skillsRef}) {

    const [skillsVisible, setSkillsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
            { threshold: 0.2 }
        );
        if (skillsRef.current) observer.observe(skillsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                ref={skillsRef}
                className="w-full h-screen snap-start bg-black text-white cursor-crosshair relative overflow-hidden flex justify-center">
                <div className="fixed inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)`,
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="w-[95%] sm:w-[80%]">
                    <div>

                        <div className="pt-5">
                            <h1 className="text-xl font-medium text-neutral-200">My <span className="text-3xl text-indigo-500 font-bold"> Skills</span></h1>
                        </div>

                        {[
                            {
                                label: "LANGUAGE",
                                delay: 0,
                                skills: [
                                    { name: "C", icon: <SiC /> },
                                    { name: "C++", icon: <SiCplusplus /> },
                                    { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
                                ],
                            },
                            {
                                label: "FRONTEND",
                                delay: 1.3,
                                skills: [
                                    { name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
                                    { name: "CSS", icon: <SiCss color="#264de4" /> },
                                    { name: "React", icon: <SiReact color="#61dafb" /> },
                                    { name: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
                                    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
                                ],
                            },
                            {
                                label: "BACKEND",
                                delay: 2.3,
                                skills: [
                                    { name: "Node.js", icon: <SiNodedotjs color="#6cc24a" /> },
                                    { name: "Express.js", icon: <SiExpress /> },
                                    { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
                                ],
                            },
                            {
                                label: "TOOLS",
                                delay: 3.3,
                                skills: [
                                    { name: "VS Code", icon: <SiVscodium color="#007acc" /> },
                                    { name: "Postman", icon: <SiPostman color="#ef5b25" /> },
                                    { name: "Git", icon: <SiGit color="#f05032" /> },
                                    { name: "MongoDB Compass", icon: <SiMongodb color="#4db33d" /> },
                                    { name: "ChatGPT", icon: <SiOpenai /> },
                                    { name: "Claude", icon: <span className="text-indigo-400 font-bold text-sm">✦</span> },
                                ],
                            },
                        ].map(({ label, delay, skills }) => (
                            <div
                                key={label}
                                className={`flex pt-5 transition-all duration-1500 ease-out
                        ${skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: skillsVisible ? `${delay * 0.2}s` : "0s" }}
                            >

                                <div className="w-[40%] pt-2 md:pt-7 lg:pt-10">
                                    <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-mono text-neutral-500 tracking-tight">{label}</h1>
                                </div>

                                {/* Skills */}
                                <div className="w-[60%] flex flex-wrap gap-2 md:gap-4 lg:gap-6 items-center pt-2 md:pt-5 lg:pt-10">
                                    {skills.map(({ name, icon }) => (
                                        <div
                                            key={name}
                                            className="group flex items-center gap-3 md:gap-5 cursor-none px-4 py-2 hover:scale-105 hover:-translate-y-0.5 transition-all duration-400">
                                            <span className="text-xl sm:2xl lg:text-3xl text-neutral-300 group-hover:scale-110 transition-transform duration-400">
                                                {icon}
                                            </span>
                                            <span className="sm:text-xl text-neutral-300 group-hover:text-white transition-colors duration-400">
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
