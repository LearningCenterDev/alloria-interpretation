'use client';
import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let mouseX = 0,
            mouseY = 0;
        let outlineX = 0,
            outlineY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.closest('a') ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('button') ||
                target.classList.contains('custom-hover') ||
                target.closest('.custom-hover')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.closest('a') ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('button') ||
                target.classList.contains('custom-hover') ||
                target.closest('.custom-hover')
            ) {
                setIsHovering(false);
            }
        };

        const animateOutline = () => {
            // faster easing for smoothness
            outlineX += (mouseX - outlineX) * 0.3;
            outlineY += (mouseY - outlineY) * 0.3;

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
            }

            requestAnimationFrame(animateOutline);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        animateOutline();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            {/* Small dot */}
            <div
                ref={cursorDotRef}
                className={`custom-cursor-dot pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2FBF71] transition-[width,height,opacity] duration-300 ease-linear ${isHovering
                    ? 'h-[60px] w-[60px] opacity-50'
                    : 'h-1.5 w-1.5 opacity-100'
                    }`}
            />
            {/* Outline */}
            <div
                ref={cursorOutlineRef}
                className={`custom-cursor-outline pointer-events-none fixed z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#2FBF71] transition-opacity duration-300 ease-linear ${isHovering ? 'opacity-0' : 'opacity-100'
                    }`}
            />
        </>
    );
};
