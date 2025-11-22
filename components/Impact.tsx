"use client";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const Impact = () => {
  const root = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(
    () => {
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.querySelectorAll("li"),
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: root.current, start: "top 75%" },
          }
        );
      }
    },
    { scope: root }
  );

  return (
    <section ref={root} className="section-padding bg-mission">
        <SectionHeader
          eyebrow="Current Mission Work"
          title="Reaching communities with the Gospel"
        />
        <ul ref={listRef} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="card shadow-soft p-5">
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">{/* icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h4 className="font-semibold text-slate-900">Conducting outreach</h4>
                <p className="text-slate-600 mt-1">Regular visits to villages with prayer, teaching, and practical support.</p>
              </div>
            </div>
          </li>
          <li className="card shadow-soft p-5">
            <div className="flex items-start gap-3">
              <span className="size-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5.5 20 8 13 2 9h7z"/></svg>
              </span>
              <div>
                <h4 className="font-semibold text-slate-900">Evangelism campaigns</h4>
                <p className="text-slate-600 mt-1">Organized Gospel events sharing the hope of Christ to new regions.</p>
              </div>
            </div>
          </li>
        </ul>
    </section>
  );
}
