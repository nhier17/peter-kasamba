"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function SectionHeader({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}) {
  const root = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const words = titleRef.current?.querySelectorAll("span.word");
      if (words && words.length) {
        gsap.set(words, { yPercent: 120, opacity: 0 });
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.8,
          stagger: 0.05,
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
          },
        });
      }
    },
    { scope: root }
  );

  const renderSplit = (text: string) => {
    return text.split(" ").map((w, i) => (
      <span key={i} className="inline-block overflow-hidden align-top">
        <span className="word inline-block will-change-transform">{w}&nbsp;</span>
      </span>
    ));
  };

  return (
    <div ref={root} className={`w-full ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <div className="text-amber-700/80 tracking-wide uppercase text-xs sm:text-sm font-semibold mb-2">
          {eyebrow}
        </div>
      )}
      <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
        {renderSplit(title)}
      </h2>
    </div>
  );
}
