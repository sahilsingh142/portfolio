import React, { useEffect, useRef } from 'react'

function Cursor() {

    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
        };

        window.addEventListener("mousemove", moveCursor);

        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed hidden sm:flex w-10 h-10 bg-white mix-blend-difference rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50">
            </div>
        </>
    )
}

export default Cursor
