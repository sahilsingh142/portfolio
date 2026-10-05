import { useEffect, useRef, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiExpress, SiSocketdotio, SiMongodb, SiMongoose, SiPostman, SiOpenai, SiClaude, } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";

const SkillTip = ({ level, label, color, name }) => (
    <div className="absolute left-1/4 translate-x-1/6 bottom-full mb-3 z-50 pointer-events-none
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                    duration-300 bg-zinc-900 border-2 border-zinc-400 px-2 py-3 w-40 shadow-xl">

        <div className='flex justify-between'>
            <p className="text-[9px] text-zinc-200 tracking-widest mb-1">{name}</p>
            <p className="text-[8px] font-medium text-zinc-200 tracking-widest mb-2">{label}</p>
        </div>

        <div className='border border-zinc-400 px-3 py-1 w-20 ml-1'>
            <p className="text-[8px] text-zinc-500 tracking-widest mb-1">Level</p>
            <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    className={`h-3 flex-1 bg-zinc-700 duration-300 ${i < level ? color : ""}`}
                ></div>
            ))}
        </div>
        </div>

        {/* neeche wala chhota arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-zinc-900 border-r border-b border-zinc-400"></div>
    </div>
);

function Skill({ skillsRef }) {

    const skillStyle = "flex items-center gap-2 px-3 py-2 border border-zinc-300 rounded-sm hover:scale-110 duration-300 group";

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
            <div ref={skillsRef} className="w-full p-5 min-h-screen pl-[8%] snap-start bg-black cursor-crosshair relative text-white pt-[10%]">

                <div className={`flex w-full h-[30%] pt-8 about-header ${aboutVisible ? "about-show" : ""}`}>
                    <div >
                        <h1 style={{ fontFamily: "'Changa One', sans-serif" }} className="text-8xl sm:text-9xl font-medium text-zinc-800 ">02</h1>
                    </div>

                    <div>
                        <span className="border text-xs rounded-sm font-bold px-3 py-2 tracking-widest">SKILL</span>
                        <h1 className="text-5xl sm:text-8xl font-black text-zinc-200">THE STACK BEHIND THE WORK</h1>
                    </div>
                </div>

                <div ref={aboutContentRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 h-auto lg:h-[70%] items-center pt-10 ${aboutVisible ? "about-cards-show" : ""}`}>

                    <div className="flex items-center sm:gap-2 about-card" style={{ animationDelay: "0.8s", "--delay": "0.2s" }}>

                        <div className="w-25 shrink-0 flex justify-center">
                            <span className="-rotate-90 inline-block whitespace-nowrap tracking-wider text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-600" >
                                FRONTEND
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 font-bold text-xs tracking-widest text-zinc-300">
                            <span className={`${skillStyle}`} >
                                <FaHtml5 size={25} className='group-hover:text-orange-300 duration-300' /> HTML
                                <SkillTip level={3} label="Intermediate" color="group-hover:bg-orange-300" name="HTML" />
                            </span>

                            <span className={`${skillStyle}`}>
                                <FaCss3Alt size={25} className='group-hover:text-blue-300 duration-300' /> CSS
                                <SkillTip level={3} label="Intermediate" color="group-hover:bg-blue-300" name="CSS"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <FaJs size={25} className='group-hover:text-yellow-300 duration-300' /> JAVASCRIPT
                                <SkillTip level={3} label="Intermediate" color="group-hover:bg-yellow-300" name="JavaScript"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <FaReact size={25} className='group-hover:text-cyan-300 duration-300' /> REACT
                                <SkillTip level={3} label="Intermediate" color="group-hover:bg-cyan-300" name="React"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiTailwindcss size={25} className='group-hover:text-cyan-400 duration-300' /> TAILWIND CSS
                                <SkillTip level={4} label="Advanced" color="group-hover:bg-cyan-300" name="Tailwind css"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiRedux size={25} className='group-hover:text-purple-300 duration-300' /> REDUX TOOLKIT
                                <SkillTip level={2} label="Medium" color="group-hover:bg-purple-300" name="Redux"/>
                            </span>
                        </div>

                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 about-card" style={{ animationDelay: "1.3s", "--delay": "0.3s" }}>

                        <div className="w-22.5 sm:w-25 shrink-0 flex justify-center">
                            <span className="-rotate-90 inline-block tracking-wider whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-600" >
                                BACKEND
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 font-medium text-xs tracking-widest text-zinc-300 ">
                            <span className={`${skillStyle}`}>
                                <FaNodeJs size={25} className='group-hover:text-green-300 duration-300' /> NODE JS
                                <SkillTip level={2} label="Medium" color="group-hover:bg-green-300" name="Node js"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiExpress size={25} className='group-hover:text-zinc-300 duration-300' /> EXPRESS JS
                                <SkillTip level={3} label="Intermediate" color="group-hover:bg-zinc-200" name="Express js"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiSocketdotio size={25} className='group-hover:text-zinc-100 duration-300' /> SOCKET.IO
                                <SkillTip level={2} label="Medium" color="group-hover:bg-zinc-100" name="Socket.io"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiMongoose size={25} className='group-hover:text-red-300 duration-300' /> MONGOOSE
                                <SkillTip level={2} label="Medium" color="group-hover:bg-red-300" name="Mongoose"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiMongodb size={25} className='group-hover:text-green-400 duration-300' /> MONGODB
                                <SkillTip level={2} label="Medium" color="group-hover:bg-green-300" name="MongoDb"/>
                            </span>
                        </div>

                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 about-card" style={{ animationDelay: "1.8s", "--delay": "0.4s" }}>

                        <div className="w-22.5 sm:w-25 shrink-0 flex justify-center">
                            <span className="-rotate-90 inline-block whitespace-nowrap tracking-wider text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-600">
                                TOOLS
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 font-medium text-xs tracking-widest text-zinc-300">

                            <span className={`${skillStyle}`}>
                                <FaGitAlt size={25} className='group-hover:text-orange-300 duration-300' /> GIT & GITHUB
                                <SkillTip level={2} label="Medium" color="group-hover:bg-orange-300" name="Git & GitHub"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <FaCode size={25} className='group-hover:text-blue-300 duration-300' />VS CODE
                                <SkillTip level={4} label="Advanced" color="group-hover:bg-blue-300" name="Vs Code"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiPostman size={25} className='group-hover:text-orange-300 duration-300' /> POSTMAN
                                <SkillTip level={2} label="Medium" color="group-hover:bg-orange-300" name="Postman"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiMongodb size={25} className='group-hover:text-green-300 duration-300' /> MONGODB COMPASS
                                <SkillTip level={3} label="Intermediate" color="group-hover:bg-green-300" name="Campass"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiOpenai size={25} className='group-hover:text-zinc-100 duration-300' /> CHATGPT
                                <SkillTip level={2} label="Medium" color="group-hover:bg-zinc-100" name="Chatgpt"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <SiClaude size={25} className='group-hover:text-orange-300 duration-300' /> CLAUDE
                                <SkillTip level={2} label="Medium" color="group-hover:bg-orange-300" name="Claude"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <FaLinux size={25} className='group-hover:text-yellow-300 duration-300' /> LINUX
                                <SkillTip level={4} label="Advanced" color="group-hover:bg-yellow-300" name="Linux"/>
                            </span>

                            <span className={`${skillStyle}`}>
                                <FaFileExcel size={25} className='group-hover:text-green-300 duration-300' />EXCEL
                                <SkillTip level={4} label="Advanced" color="group-hover:bg-green-300" name="Excel"/>
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Skill
