import { useEffect, useRef, useState } from 'react'
import resumeProject from "../Images/resume project.png";
import chatApplication from "../Images/chat app.png";
import hospital from "../Images/hospital.png"
import { FiX } from 'react-icons/fi';

function Projects({ projectRef }) {

    const [aboutVisible, setAboutVisible] = useState(false);
    const [fullImg, setFullImg] = useState(null);
    const aboutContentRef = useRef(null);
    const hoverTimer = useRef(null);

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
            <div ref={projectRef} className="w-full p-5 min-h-screen pl-[8%] snap-start bg-black cursor-crosshair relative text-white pt-[10%]">

                <div className={`flex w-full h-[30%] pt-8 about-header ${aboutVisible ? "about-show" : ""}`}>
                    <div >
                        <h1 style={{ fontFamily: "'Changa One', sans-serif" }} className="text-8xl sm:text-9xl font-medium text-zinc-800 ">03</h1>
                    </div>

                    <div>
                        <span className="border text-xs rounded-sm font-bold px-3 py-2 tracking-widest">PROJECT</span>
                        <h1 className="text-5xl sm:text-8xl font-black text-zinc-200">WHERE CODE BECOME REAL</h1>
                    </div>
                </div>

                <div ref={aboutContentRef} className={`w-full h-[72%] flex gap-3 overflow-x-auto relative z-10 mt-15 ${aboutVisible ? "project-cards-show" : ""}`}>

                    <div className="w-full sm:w-[60%] lg:w-[40%] bg-neutral-900 rounded-xl h-full  flex justify-center shrink-0 project-card" style={{ animationDelay: "0.5s", "--delay": "0.2s" }}>
                        <div className="w-[90%] pt-6 pb-6 flex flex-col">

                            <div className="flex items-start">
                                <h1 className="text-3xl font-bold text-neutral-400 font-mono border-4 border-zinc-400 p-1">01</h1>
                                <div>
                                    <h1 className="text-4xl font-bold font-mono text-neutral-100 m-4 tracking-wider">Resume Builder</h1>
                                </div>
                            </div>

                            <div className="flex justify-center pt-10">
                                <img
                                    src={resumeProject}
                                    alt="Resume Builder"
                                    onMouseEnter={() => {
                                        hoverTimer.current = setTimeout(() => {
                                            setFullImg({
                                                src: resumeProject,
                                                title: "Resume Builder"
                                            });
                                        }, 900);
                                    }}
                                    onMouseLeave={() => {
                                        clearTimeout(hoverTimer.current);
                                    }}
                                    className="w-95 h-60 rounded-md shadow-sm shadow-zinc-300 hover:scale-105 duration-300"
                                />
                            </div>

                            <div className="pt-5 tracking-wider">
                                <div className="flex gap-2 flex-wrap mt-3">
                                    {["React", "Tailwind CSS", "Redux Toolkit", "Express.js", "Mongoose", "Jwt Authentication"].map(tag => (
                                        <span key={tag} className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" w-full sm:w-[60%] lg:w-[40%] h-full border-r bg-neutral-900 rounded-xl border-neutral-800 flex justify-center shrink-0 project-card" style={{ animationDelay: "1s", "--delay": "0.3s" }}>
                        <div className="w-[90%] pt-6 pb-6 flex flex-col">

                            <div className="flex items-start">
                                <h1 className="text-3xl font-bold text-neutral-400 font-mono border-4 border-zinc-400 p-1">02</h1>
                                <div>
                                    <h1 className="text-4xl font-bold font-mono text-neutral-100 m-4 tracking-wider">BookNest</h1>
                                </div>
                            </div>

                            <div className="flex justify-center pt-10">
                                <img
                                    src={hospital}
                                    alt="BookNest"
                                    onMouseEnter={() => {
                                        hoverTimer.current = setTimeout(() => {
                                            setFullImg({
                                                src: hospital,
                                                title: "BookNest"
                                            });
                                        }, 800);
                                    }}
                                    onMouseLeave={() => {
                                        clearTimeout(hoverTimer.current);
                                    }}
                                    className="w-95 h-60 rounded-md shadow-sm shadow-zinc-300 hover:scale-105 duration-300"
                                />
                            </div>

                            <div className="pt-5 tracking-wider">
                                <div className="flex gap-1.5 flex-wrap mt-3">
                                    {["React", "Tailwind CSS", "Express.js", "Mongoose", "Socket.io", "Cookies", "Notification Alert"].map(tag => (
                                        <span key={tag} className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full sm:w-[60%] lg:w-[40%] h-full border-r bg-neutral-900 rounded-xl border-neutral-800 flex justify-center shrink-0 project-card" style={{ animationDelay: "1.5s", "--delay": "0.4s" }}>
                        <div className="w-[90%] pt-6 pb-6 flex flex-col">

                            <div className="flex items-start">
                                <h1 className="text-3xl font-bold text-neutral-400 font-mono border-4 border-zinc-400 p-1">03</h1>
                                <div>
                                    <h1 className="text-4xl font-bold font-mono text-neutral-100 m-4 tracking-wider">Chat Application</h1>
                                </div>
                            </div>

                            <div className="flex justify-center pt-10">
                                <img
                                    src={chatApplication}
                                    alt="Chat Application"
                                    onMouseEnter={() => {
                                        hoverTimer.current = setTimeout(() => {
                                            setFullImg({
                                                src: chatApplication,
                                                title: "Chat Application"
                                            });
                                        }, 800);
                                    }}
                                    onMouseLeave={() => {
                                        clearTimeout(hoverTimer.current);
                                    }}
                                    className="w-95 h-60 rounded-md shadow-sm shadow-zinc-300 hover:scale-105 duration-300"
                                />
                            </div>

                            <div className="pt-5 tracking-wider">
                                <div className="flex gap-1.5 flex-wrap mt-3">
                                    {["React", "Tailwind CSS", "Express.js", "Mongoose", "Socket.io", "Authentication",].map(tag => (
                                        <span key={tag} className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {fullImg && (
                    <div
                        onMouseLeave={() => setFullImg(null)}
                        className="full-overlay fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center"
                    >
                        <button onClick={() => setFullImg(null)}
                            className="full-close absolute bottom-5 text-white text-3xl hover:text-zinc-400 duration-300" >
                            <FiX size={35} className='font-bold border-2 border-zinc-200 rounded-full' />
                        </button>

                        <h1 className="full-title text-5xl sm:text-7xl font-black font-mono text-zinc-100 mb-3">
                            {fullImg.title}
                        </h1>

                        <div className="full-line h-1 bg-zinc-200 mb-8"></div>

                        <img
                            src={fullImg.src}
                            alt={fullImg.title}
                            className="full-img max-h-[60vh] max-w-[80vw] rounded-xl shadow-2xl shadow-zinc-700/50"
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default Projects
