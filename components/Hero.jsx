"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statistics = [
  { value: "58%", description: "Increase in pickup point use" },
  { value: "23%", description: "Decrease in customer phone calls" },
  { value: "27%", description: "Increase in pickup point use" },
  { value: "40%", description: "Decrease in customer phone calls" },
];

function Car() {
  return (
    <svg viewBox="0 0 760 320" role="img" aria-label="Red car in profile">
      <defs>
        <linearGradient id="car-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff6268" />
          <stop offset="0.55" stopColor="#f12e3b" />
          <stop offset="1" stopColor="#ad1024" />
        </linearGradient>
        <linearGradient id="window-tint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d7f4ff" />
          <stop offset="1" stopColor="#72cce8" />
        </linearGradient>
      </defs>
      <path
        d="M71 216c7-25 26-40 58-47l96-21 83-86c16-17 36-25 63-25h109c32 0 56 11 77 34l72 79 51 13c28 7 43 23 46 49l2 24H52z"
        fill="url(#car-paint)"
        stroke="#ff8b8e"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="m250 139 72-72c12-12 27-18 48-18h35v90zm174-90h53c24 0 41 8 57 25l60 65H424z"
        fill="url(#window-tint)"
        stroke="#a5e8fa"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M414 51v93" stroke="#ed424d" strokeWidth="8" />
      <path d="M111 180h39m515 0h32" stroke="#fff1bd" strokeWidth="12" strokeLinecap="round" />
      <path d="M175 218h421" stroke="#ff9b9d" strokeOpacity="0.65" strokeWidth="5" />
      <path d="M61 249h665" stroke="#700f1c" strokeOpacity="0.7" strokeWidth="8" />
      <g className="wheel" transform="translate(204 247)">
        <circle r="57" fill="#111318" stroke="#777d87" strokeWidth="8" />
        <circle r="39" fill="#c9d1d8" stroke="#f4f7fa" strokeWidth="5" />
        <g stroke="#525b63" strokeWidth="5" strokeLinecap="round">
          <path d="M0-33v66M-33 0h66M-23-23l46 46M23-23l-46 46" />
        </g>
        <circle r="11" fill="#f8fbff" stroke="#7b858e" strokeWidth="4" />
      </g>
      <g className="wheel" transform="translate(555 247)">
        <circle r="57" fill="#111318" stroke="#777d87" strokeWidth="8" />
        <circle r="39" fill="#c9d1d8" stroke="#f4f7fa" strokeWidth="5" />
        <g stroke="#525b63" strokeWidth="5" strokeLinecap="round">
          <path d="M0-33v66M-33 0h66M-23-23l46 46M23-23l-46 46" />
        </g>
        <circle r="11" fill="#f8fbff" stroke="#7b858e" strokeWidth="4" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const headline = "WELCOME ITZ FIZZ";

  useEffect(() => {
    const context = gsap.context(() => {
      const loadTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      loadTimeline
        .from(".letter", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
        })
        .from(
          ".stat",
          {
            y: 30,
            opacity: 0,
            duration: 0.65,
            stagger: 0.18,
          },
          "-=0.3",
        )
        .from(
          ".car-wrap",
          {
            opacity: 0,
            duration: 0.9,
          },
          "-=0.2",
        );

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollTimeline
        .fromTo(".car-wrap", { x: "-35vw" }, { x: "55vw", ease: "none" }, 0)
        .to(".wheel", { rotation: 1440, ease: "none" }, 0)
        .to(".car-wrap", { scale: 1.15, ease: "none" }, 0)
        .to(
          ".headline",
          { letterSpacing: "0.9em", opacity: 0.25, ease: "none" },
          0,
        )
        .to(".stat", { y: -60, opacity: 0.2, ease: "none", stagger: 0 }, 0.12);
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero relative h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div className="hero-content relative z-10 mx-auto flex w-full flex-col items-center px-6 text-center">
        <h1 className="headline m-0 font-light">
          {Array.from(headline, (character, index) => (
            <span className="letter inline-block" key={`${character}-${index}`}>
              {character === " " ? "\u00a0" : character}
            </span>
          ))}
        </h1>
        <div className="stats-grid grid w-full grid-cols-2 gap-x-6 gap-y-8 text-left md:grid-cols-4 md:gap-x-10">
          {statistics.map((stat) => (
            <div className="stat" key={`${stat.value}-${stat.description}`}>
              <p className="mb-2 text-3xl font-light leading-none md:text-4xl">{stat.value}</p>
              <p className="max-w-44 text-xs leading-relaxed text-neutral-400 md:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="car-wrap" aria-hidden="true">
        <Car />
      </div>
    </section>
  );
}