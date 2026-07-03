import { useEffect, useRef, useState } from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Cursor from "./Component/Cursor";

function Portfolio() {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const skillsRef = useRef(null);
    const projScrollRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: "home", ref: homeRef },
                { id: "about", ref: aboutRef },
                { id: "project", ref: projectRef },
                { id: "contact", ref: contactRef },
            ];

            sections.forEach((section) => {
                const top = section.ref.current.offsetTop;
                const height = section.ref.current.offsetHeight;

                if (
                    window.scrollY >= top - 200 &&
                    window.scrollY < top + height - 200
                ) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">

                <Cursor />

                <Home
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    projectRef={projectRef}
                    contactRef={contactRef}
                    scrollToSection={scrollToSection}
                />

                <About aboutRef={aboutRef} />

                <Skill skillsRef={skillsRef} />

                <Projects projectRef={projectRef} />

                <Contact contactRef={contactRef} />

            </div>
        </>
    )
}

export default Portfolio
