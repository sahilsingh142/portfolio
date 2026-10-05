import { useEffect, useRef, useState } from 'react'

function Experience({experienceRef}) {

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
            <div ref={experienceRef} className="w-full p-5 pl-[8%] snap-start bg-black cursor-crosshair relative text-white pt-[10%]">

                <div className={`flex w-full h-[30%] pt-8  about-header ${aboutVisible ? "about-show" : ""}`}>
                    <div >
                        <h1 style={{ fontFamily: "'Changa One', sans-serif" }} className="text-8xl sm:text-9xl font-medium text-zinc-800 ">04</h1>
                    </div>

                    <div>
                        <span className="border text-xs rounded-sm font-bold px-3 py-2 tracking-widest">EXPRIENCE</span>
                        <h1 className="text-5xl sm:text-8xl font-black text-zinc-200">WHERE I LEARN TO BUILD</h1>
                    </div>
                </div>

                <div ref={aboutContentRef} className={`flex w-full mt-10 sm:mt-20 ${aboutVisible ? "about-cards-show" : ""}`}>

                    <div className='w-[80%] sm:w-[70%]  border-r-2'>

                        <div className="border-2 border-zinc-200 rounded-sm w-[90%] p-4 about-card" style={{ animationDelay: "0.8s", "--delay": "0.2s" }}>
                            <h1 className='font-bold tracking-wider text-zinc-200'>WEB DEVELOPER</h1>
                            <h2 className='text-sm font-bold tracking-widest text-zinc-400'>MaMo Technolabs</h2>

                            <p className='text-sm font-medium text-zinc-500'> <span className='font-bold text-2xl'>- </span>Worked as a Web Developer Intern at MaMo Technolabs, building web applications using React and Tailwind CSS.</p>
                            <p className='text-sm font-medium text-zinc-500'> <span className='font-bold text-2xl'>- </span>Developed reusable UI components and integrated REST APIs to connect frontend and backend services.</p>
                            <p className='text-sm font-medium text-zinc-500'><span className='font-bold text-2xl'>- </span>Worked on authentication, API handling, debugging, and improving application performance.</p>
                        </div>
                    </div>

                    <div className='pl-5 w-[20%]'>
                        <h1 className='font-bold tracking-widest text-zinc-600 text-[8px] sm:text-base'>SEP 2025 <span> - </span> JAN 2026</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
