import { useEffect, useRef, useState } from "react"
import { TypeAnimation } from "react-type-animation";
import mainImg from "../Images/OwnerImg.jpeg";
import { Link } from "react-router-dom";


function Home({ homeRef, aboutRef, projectRef, contactRef, scrollToSection }) {

    const [activeSection, setActiveSection] = useState("home");

    const navItem = "px-1 py-1 sm:px-4 sm:py-2 rounded-3xl border transition-all duration-300 cursor-none hover:scale-95";

    return (
        <>
            <div ref={homeRef} className="w-full h-screen relative bg-black text-white cursor-crosshair snap-start">

                <div className="flex justify-center sm:justify-between pt-2 ">

                    <h1 className="font-bold ml-5 text-2xl text-indigo-500 hidden md:flex">S s</h1>
                    <div className="border border-neutral-500 rounded-4xl px-2 py-2 flex gap-4 sm:gap-10 sm:mr-15 sm:font-bold text-[10px] sm:text-sm text-neutral-300">

                        <h1 onClick={() => scrollToSection(homeRef)}
                            className={`${navItem} inline-block ${activeSection === "home" ? "border border-indigo-500 " : "border border-transparent hover:border-indigo-500"}`}>
                            HOME
                        </h1>

                        <h1 onClick={() => scrollToSection(aboutRef)}
                            className={`${navItem} ${activeSection === "about" ? "text-indigo-500" : "border-transparent hover:border-indigo-500"}`}>
                            ABOUT
                        </h1>

                        <h1 onClick={() => scrollToSection(projectRef)}
                            className={`${navItem} ${activeSection === "project" ? "border-indigo-500" : "border-transparent hover:border-indigo-500"}`}>
                            PROJECT
                        </h1>

                        <h1 onClick={() => scrollToSection(contactRef)}
                            className={`${navItem} ${activeSection === "contact" ? "border-indigo-500" : "border-transparent hover:border-indigo-500"}`}>
                            CONTACT
                        </h1>

                    </div>
                </div>

                <div className="flex justify-center pt-8 sm:pt-15 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[16rem] font-bold font-mono tracking-wider" style={{ perspective: "800px" }}>
                    {"PORTFOLIO".split("").map((letter, index) => (
                        <span
                            key={index}
                            className="letter-drop transition-all duration-300 hover:scale-125 leading-none"
                            style={{ animationDelay: `${0.3 + index * 0.07}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                <div className="sm:hidden flex justify-center mt-10">
                    <img
                        src={mainImg}
                        alt="Sahil Singh"
                        className="w-52 h-52 rounded-full object-cover"
                    />
                </div>

                <div className="px-3 py-2 mt-10 ">
                    <div className="pl-6 flex flex-col slide-left">
                        <span className="text-3xl cursor-none w-[10%]">Hello! I'm</span>
                        <span className="text-4xl font-bold cursor-none w-[14%] text-indigo-500">Sahil Singh</span>
                    </div>

                    <div className="pl-6 w-[50%] pt-3 cursor-none">
                        <TypeAnimation
                            sequence={[
                                "A developer who enjoys building websites that are simple, fast and easy to use.",
                            ]}
                            speed={80}
                            cursor={true}
                            repeat={0}
                            className="tracking-wider lg:hidden"
                        />

                        <TypeAnimation
                            sequence={[
                                "A developer who enjoys building websites that are simple, fast and easy to use. Most of my time is spent learning new technologies, solving problems and turning ideas into projects. I'm always looking for ways to improve my skills and create better digital experiences.",
                            ]}
                            speed={90}
                            cursor={true}
                            repeat={0}
                            className="tracking-wider hidden lg:block"
                        />
                    </div>

                    <div className="flex justify-end pt-8 sm:pt-15">
                        <Link to="/resume">
                            <button className="sm:text-2xl mr-8 font-medium text-indigo-400 cursor-none hover:scale-95 duration-300">Resume</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
