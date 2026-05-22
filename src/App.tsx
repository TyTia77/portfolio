// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import HoverAnimate from "./components/hoverAnimate";
import Projects from "./components/projects";

import portraitImg from "./assets/Subject.png";

// import "./App.css";

// import Image from "next/image";
// import Link from "next/link";
// import { useArray } from "toolkit";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "React",
  "Redux",
  "Git",
  "Next.js",
  "Tailwind CSS",
];

function App() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 font-mono">
      {/* Hero */}
      <section className="grid grid-cols-[1fr_180px] gap-8 items-start mb-20 text-left">
        <div className="animate__animated animate__bounceInLeft">
          <p className="animate__animated animate__flash animate__infinite animate__slower text-xs uppercase tracking-widest text-red-400 mb-4">
            Available for work
          </p>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight mb-5">
            Frontend dev &<br />
            <em className="italic text-gray-400">creative coder</em>
          </h1>
          <p className="text-sm leading-relaxed text-gray-500 max-w-sm mb-6">
            Over 5 years experience. Based in Sydney, focused on clean code and
            considered design.
            {/* Over 5 years experience i build thoughtful interfaces and interactive experiences. Based in Sydney,
            focused on clean code and considered design. */}
          </p>
          {/* <Link
            href="#work"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest border-b border-gray-300 pb-0.5 hover:border-gray-900 transition-colors"
          >
            View my work →
          </Link> */}
        </div>

        {/* Photo */}
        <div className="relative animate__animated animate__bounceInRight">
          <div className="w-[180px] h-[220px] rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
            {/* <Image
              loading="eager"
              src="/images/Subject.png"
              alt="Your name"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            /> */}
            <img
              src={portraitImg}
              alt="Your name"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-3 -right-3 bg-white border border-gray-100 rounded-lg px-2.5 py-1 text-lg text-gray-900 tracking-wide">
            Ty Tia
          </span>
        </div>
      </section>

      {/* Skills */}
      <section
        className="animate__animated animate__fadeIn animate__slower mb-16"
        id="about"
      >
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="hover:cursor-default py-1">
              <HoverAnimate key={skill} animation="jello">
                <span
                  key={skill}
                  className="text-xs tracking-wide px-3 py-1.5 border border-gray-200 rounded-full text-gray-500"
                >
                  {skill}
                </span>
              </HoverAnimate>
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        className="animate__animated animate__fadeIn animate__slower mb-16"
        id="work"
      >
        <SectionLabel>Projects</SectionLabel>

        <Projects />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-gray-100 pt-8 flex items-center justify-between"
      >
        <p className="font-serif text-2xl font-light italic text-gray-700">
          Let's work together
        </p>
        <div className="flex gap-6">
          {[
            { label: "Email", href: "mailto:tytia77@gmail.com" },
            { label: "GitHub", href: "https://github.com/TyTia77" },
            // { label: "CV", href: "/cv.pdf" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
              target={
                href.startsWith("http") || href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs uppercase tracking-widest text-gray-300">
        {children}
      </span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

export default App;
