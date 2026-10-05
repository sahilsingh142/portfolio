import { FiMapPin, FiCode, FiBookOpen, FiGlobe } from "react-icons/fi"
import { useEffect, useRef, useState } from "react";

function About({ aboutRef }) {

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
            <div ref={aboutRef} className="w-full p-5 min-h-screen pl-[8%] snap-start bg-black cursor-crosshair overflow-hidden relative text-white pt-[8%]">

                <div className={`flex w-full h-[30%] pt-8 about-header ${aboutVisible ? "about-show" : "" }`}>
                    <div >
                        <h1 style={{ fontFamily: "'Changa One', sans-serif" }} className="text-8xl sm:text-9xl font-medium text-zinc-800 ">01</h1>
                    </div>

                    <div>
                        <span className="border text-xs rounded-sm font-bold px-3 py-2 tracking-widest">ABOUT</span>
                        <h1 className="text-5xl sm:text-8xl font-black text-zinc-200 mt-1 sm:mt-0">WHERE IDEAS BECOME REALITY</h1>
                    </div>
                </div>

                {/* ABOUT CONTENT */}
                <div ref={aboutContentRef}
                    className= {`w-full pr-[8%] flex flex-col lg:flex-row pt-8 gap-10 lg:gap-20 ${aboutVisible ? "about-cards-show" : "" }`}>

                    <div className="w-full lg:w-[30%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

                        <div className="about-card flex items-center gap-4 border-2 border-zinc-400 rounded-sm p-4 bg-zinc-900" style={{animationDelay:"0.7s", "--delay": "0.2s" }}>

                            <div className="border-2 border-zinc-400 rounded-sm p-3 shrink-0 ">
                                <FiMapPin size={20} />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[10px] font-medium tracking-widest text-zinc-500">
                                    LOCATION
                                </span>

                                <span className="text-xs tracking-wide font-bold">
                                    UTTAR PRADESH, INDIA
                                </span>
                            </div>

                        </div>


                        {/* FOCUS */}
                        <div className="about-card flex items-center gap-4 border-2 border-zinc-400 rounded-sm p-4 bg-zinc-900" style={{animationDelay:"1.1s", "--delay": "0.3s" }}>

                            <div className="border-2 border-zinc-400 rounded-sm p-3 shrink-0">
                                <FiCode size={20} />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[10px] font-medium tracking-widest text-zinc-500">
                                    FOCUS
                                </span>

                                <span className="text-xs font-bold tracking-wide">
                                    WEB DEVELOPMENT
                                </span>
                            </div>

                        </div>


                        {/* EDUCATION */}
                        <div className="about-card flex items-center gap-4 border-2 border-zinc-400 rounded-sm p-4 bg-zinc-900" style={{animationDelay:"1.5s", "--delay": "0.4s" }}>

                            <div className="border-2 border-zinc-400 rounded-sm p-3 shrink-0">
                                <FiBookOpen size={20} />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[10px] font-medium tracking-widest text-zinc-500">
                                    EDUCATION
                                </span>

                                <span className="font-bold text-xs tracking-wide">
                                    BACHELOR OF COMPUTER APPLICATIONS
                                </span>
                            </div>

                        </div>


                        {/* LANGUAGES */}
                        <div className="about-card flex items-center gap-4 border-2 border-zinc-400 rounded-sm p-4 bg-zinc-900" style={{animationDelay:"1.9s", "--delay": "0.5s" }}>

                            <div className="border-2 border-zinc-400 rounded-sm p-3 shrink-0">
                                <FiGlobe size={20} />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-[10px] font-medium tracking-widest text-zinc-500">
                                    LANGUAGES
                                </span>

                                <span className="font-bold text-xs tracking-wide">
                                    ENGLISH & HINDI
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className= {`w-full lg:w-[70%] flex flex-col pt-2 ${aboutVisible ? "about-cards-show" : "" }`}>

                        <div className="space-y-6 text-sm md:text-base leading-7 text-zinc-400">

                            <p className="about-card" style={{animationDelay:"0.7s", "--delay": "0.2s" }}> I'm a <span className="font-medium text-zinc-200">Web Developer</span> who enjoys turning ideas into simple,
                                useful and <span className="font-medium text-zinc-200">responsive web experiences</span>. I like working on projects
                                where I can build something from scratch and see it actually come together in the browser.
                            </p>

                            <p className="about-card" style={{animationDelay:"1.1s", "--delay": "0.3s" }}> I mainly work with the <span className="font-medium text-zinc-200">MERN stack</span> — React, Node.js,
                                Express.js and MongoDB. Along with building interfaces, I enjoy working on <span className="font-medium text-zinc-200">REST APIs,
                                    authentication, databases and real-time features</span>, which gives me a better understanding of how a complete web application works.
                            </p>

                            <p className="about-card" style={{animationDelay:"1.5s", "--delay": "0.4s" }}> For me, development isn't only about writing code. A big part of my learning has come from
                                <span className="font-medium text-zinc-200"> debugging errors, </span>solving problems and figuring out why something isn't working.
                                Every project gives me a chance to learn something new and improve the way I build things.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default About