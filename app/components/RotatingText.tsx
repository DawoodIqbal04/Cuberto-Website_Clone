'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CircularText() {
  const rotatingRef = useRef(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    gsap.to(rotatingRef.current, {
      rotate: 360,
      duration: 10,
      ease: 'linear',
      repeat: -1,
    });

    circleRefs.current.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { scale: 1, opacity: 1 },
        {
          scale: 10,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: 'power1.out',
          delay: i * 0.5,
        }
      );
    });
  }, []);

  return (
    <div className="relative w-64 mx-auto h-64 rounded-full">
      <div ref={rotatingRef} className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text
            fill="white"
            fontSize="12"
            letterSpacing="10"
          >
            <textPath href="#circlePath" startOffset="0%">
              PRODUCT · DESIGN · IDENTITY ·
            </textPath>
          </text>
        </svg>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center">
      <div className="relative w-3 h-3 flex items-center justify-center">
        {[0, 1, 2, 3, 4, 5].map((_, i) => (
          <span
            key={i}
            ref={(el) => { circleRefs.current[i] = el; }}
            className="absolute w-full h-full border border-white rounded-full"
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
}
