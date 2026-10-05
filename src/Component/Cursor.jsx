import { useEffect, useRef } from "react";

function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const SPEED = 0.09;

        let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
        let circleX = mouseX, circleY = mouseY;
        let frameId;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            circleX += (mouseX - circleX) * SPEED;
            circleY += (mouseY - circleY) * SPEED;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${circleX}px`;
                cursorRef.current.style.top = `${circleY}px`;
            }
            frameId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", moveCursor);
        animate();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed hidden sm:flex w-10 h-10 bg-white mix-blend-difference rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-9999">
        </div>
    );
}

export default Cursor;