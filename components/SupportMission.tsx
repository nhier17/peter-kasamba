"use client";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const items = [
  {
    title: "Donations",
    desc: "Financial gifts help sustain outreach, discipleship, and local church support.",
    color: "bg-amber-100 text-amber-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-4.5-8-10a8 8 0 0116 0c0 5.5-8 10-8 10z"/></svg>
    ),
  },
  {
    title: "Prayer",
    desc: "Stand with us in prayer for open doors, protection, and transformed hearts.",
    color: "bg-emerald-100 text-emerald-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6a3 3 0 016 0v6a3 3 0 11-6 0V6zM6 6a3 3 0 016 0v6a3 3 0 11-6 0V6z"/></svg>
    ),
  },
  {
    title: "Mission trips",
    desc: "Join field teams serving communities with evangelism and compassion ministries.",
    color: "bg-sky-100 text-sky-800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12h20M12 2l4 8-4 12-4-12 4-8z"/></svg>
    ),
  },
  {
    title: "Partner with us",
    desc: "Churches and organizations can collaborate for long-term mission impact.",
    color: "bg-lime-100 text-lime-800", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 11a4 4 0 118 0v6H8v-6z"/><path d="M2 21h20v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2z"/></svg>
    ),
  },
];

export const SupportMission = () => {
  const root = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.querySelectorAll(".support-card"),
          { y: 30, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
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
    <section id="support" ref={root} className="section-padding">
        <SectionHeader
          eyebrow="Support the Mission"
          title="Join hands to advance the Gospel"
        />

        <div ref={cardsRef} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="support-card card shadow-soft p-5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color} mb-3`}>
                {item.icon}
              </div>
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              <p className="text-slate-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a className="btn-primary inline-flex items-center justify-center" href="#">
            Support the Mission
          </a>
        </div>
    </section>
  );
}
