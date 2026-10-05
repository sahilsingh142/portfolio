import { useRef } from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Cursor from "./Component/Cursor";
import Experience from "./Component/Experience";

function Portfolio() {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
    const top = ref.current.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: top + 90,
        behavior: "smooth"
    });
};

    return (
        <>
            <div>
                <Cursor />

                <Home
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    projectRef={projectRef}
                    experienceRef={experienceRef}
                    contactRef={contactRef}
                    scrollToSection={scrollToSection}
                />

                <About aboutRef={aboutRef} />

                <Skill skillsRef={skillsRef} />

                <Projects projectRef={projectRef} />

                <Experience experienceRef={experienceRef} />

                <Contact contactRef={contactRef} />
            </div>
        </>

    )
}

export default Portfolio
