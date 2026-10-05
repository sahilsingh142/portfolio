import { useEffect, useState } from "react"
import { FiMap, FiCode } from "react-icons/fi";

function Home({ homeRef, aboutRef, projectRef, contactRef, scrollToSection, experienceRef, skillsRef, }) {

    const [activeSection, setActiveSection] = useState("home");

    const navItem = "px-1 py-1 sm:px-4 sm:py-2 transition-all duration-300 cursor-none";

    useEffect(() => {
    const sections = [
        { ref: homeRef, name: "home" },
        { ref: aboutRef, name: "about" },
        { ref: skillsRef, name: "skill" },
        { ref: projectRef, name: "project" },
        { ref: experienceRef, name: "experience" },
        { ref: contactRef, name: "contact" },
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const section = sections.find(
                        (item) => item.ref.current === entry.target
                    );

                    if (section) {
                        setActiveSection(section.name);
                    }
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    sections.forEach((section) => {
        if (section.ref.current) {
            observer.observe(section.ref.current);
        }
    });

    return () => observer.disconnect();
}, []);

    return (
        <>
            <div ref={homeRef} className="w-full h-screen relative bg-black text-white p-3 cursor-crosshair">

                <div className="flex justify-center md:justify-between pt-2 ">

                    <div >
                        <h1 className="fixed z-50 font-bold ml-5 text-xl bg-white px-3 py-1 slide-top text-black rounded-xl hidden lg:inline-block" style={{ fontFamily: "var(--edu-font)" }}>Ss</h1>
                    </div>

                    <div className="fixed top-2 sm:right-5 z-50 slide-top border-white/80 bg-white/0.5 backdrop-blur-xl shadow-lg shadow-black/80 px-5 py-2 rounded-full flex gap-2 sm:gap-0 sm:mr-8 sm:font-bold text-[8px] sm:text-[11px] text-zinc-400 tracking-widest">
                        <h1 onClick={() => scrollToSection(homeRef)}
                            className={`${navItem} inline-block ${activeSection === "home" ? "text-zinc-100" : " hover:text-zinc-100 hover:scale-110"}`}>
                            HOME
                        </h1>

                        <h1 onClick={() => scrollToSection(aboutRef)}
                            className={`${navItem} ${activeSection === "about" ? "text-zinc-100" : " hover:text-zinc-100 hover:scale-110"}`}>
                            ABOUT
                        </h1>

                        <h1 onClick={() => scrollToSection(skillsRef)}
                            className={`${navItem} ${activeSection === "skill" ? "text-zinc-100" : " hover:text-zinc-100 hover:scale-110"}`}>
                            SKILL
                        </h1>

                        <h1 onClick={() => scrollToSection(projectRef)}
                            className={`${navItem} ${activeSection === "project" ? "text-zinc-100" : " hover:text-zinc-100 hover:scale-110"}`}>
                            PROJECT
                        </h1>

                        <h1 onClick={() => scrollToSection(experienceRef)}
                            className={`${navItem} ${activeSection === "experience" ? "text-zinc-100" : " hover:text-zinc-100 hover:scale-110"}`}>
                            EXPRIENCE
                        </h1>

                        <h1 onClick={() => scrollToSection(contactRef)}
                            className={`${navItem} ${activeSection === "contact" ? "text-zinc-100" : " hover:text-zinc-100 hover:scale-110"}`}>
                            CONTACT
                        </h1>

                    </div>
                </div>

                <div className="flex flex-col items-center pt-[50%] sm:pt-10">

                    <div className="flex justify-center text-[5.5rem] md:text-[8rem] lg:text-[20rem] font-bold tracking-widest"
                        style={{
                            fontFamily: "'Changa One', sans-serif",
                            perspective: "800px",
                            transform: "scaleX(1.3)"
                        }}>
                        {"S A H I L".split("").map((letter, index) => (
                            <span
                                key={index}
                                className="letter-drop inline-block transition-all duration-300 hover:scale-125 leading-none"
                                style={{ animationDelay: `${0.3 + index * 0.07}s` }}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>


                    <div className="w-full flex justify-end pr-[3%]">
                        <h1 className="text-2xl sm:text-6xl font-bold slide-right text-zinc-300" style={{ fontFamily: "var(--edu-font)" }}>
                            Singh
                        </h1>
                    </div>

                    <div className=" p-5 text-pop">
                        <h1 className="text-zinc-600 tracking-widest font-medium text-[12px] sm:text-[16px] mt-5 sm:mt-0" style={{ transform: "scaleX(1.2)" }}>| BUILD PRODUCATION-GRAD APPLICATION THAT's</h1>
                        <h1 className="text-xl sm:text-3xl italic font-mono tracking-wider pt-3 sm:pt-0">make complexity disappear</h1>
                    </div>

                </div>

                <div className="absolute bottom-0 left-8 right-8 flex justify-between items-end slide-bottom border-b-2 border-zinc-400 py-4">

                    <div>
                        <div className="mb-2 flex  sm:justify-center">
                            <FiMap className="text-xl" />
                        </div>

                        <h1 className="text-xs tracking-widest font-medium">
                            BASED IN UTTAR PRADESH
                        </h1>

                        <div className="flex sm:justify-center">
                            <h1 className="text-xs tracking-widest font-bold text-zinc-500">INDIA</h1>
                        </div>
                    </div>

                    <div className="text-right mb-3">
                        <div className="mb-2 flex justify-end sm:justify-center">
                            <FiCode className="text-xl" />
                        </div>

                        <h1 className="text-xs tracking-widest font-medium">
                            WEB DEVELOPER
                        </h1>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
