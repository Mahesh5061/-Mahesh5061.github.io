"use client";

import { useEffect, useRef } from "react";

const skills = [
  "C#",
  ".NET",
  "Optimizely",
  "React",
  "Next.js",
  "Python",
  "SQL",
  "Azure",
];

export default function SkillsOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const rotation = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      rotation.current += delta * 0.3;

      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-64 h-64 mt-10">

      {/* ✅ FIXED CENTER (does NOT rotate) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold shadow">
          Skills
        </div>
      </div>

      {/* 🔄 ROTATING OUTER RING */}
      <div ref={orbitRef} className="absolute inset-0">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;

          return (
            <div
              key={skill}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <div
                className="bg-gray-100 px-3 py-1 rounded-full text-sm shadow"
                style={{
                  transform: `translateY(-7rem) rotate(-${angle}deg)`,
                }}
              >
                {skill}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
