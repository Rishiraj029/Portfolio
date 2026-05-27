"use client";

import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Intro() {
  return (
    <section id="intro" className="intro" aria-labelledby="intro-heading">
      <div className="intro-grid">
        <div className="intro-copy">
          <p className="intro-eyebrow">Software engineer · Jodhpur, India</p>
          <h1 id="intro-heading" className="hero-name">
            Hi, I&apos;m Rishiraj Singh Rathore.
          </h1>
          <p className="hero-tagline">
            I build full-stack web apps with a focus on clean backends and
            interfaces that are easy to use.
          </p>
          <p className="hero-text">
            I work mainly with the MERN stack — React and Next.js on the front,
            Node and Express on the server, MongoDB for data. I care about
            readable code, solid APIs, and shipping things that actually work.
          </p>
          <p className="hero-location">
            <MapPin size={18} aria-hidden />
            Jodhpur, Rajasthan
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              See my work
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} aria-hidden />
              Get in touch
            </a>
          </div>

          <ul className="stack-row" aria-label="Main technologies">
            <li className="stack-pill">Next.js</li>
            <li className="stack-pill">React</li>
            <li className="stack-pill">Node.js</li>
            <li className="stack-pill">MongoDB</li>
          </ul>
        </div>

        <figure className="photo-card">
          <div className="photo-ring">
            <Image
              src="/portrait.svg"
              alt="Portrait of Rishiraj Singh Rathore"
              width={280}
              height={350}
              className="photo-img"
              priority
            />
          </div>
          <figcaption className="photo-caption">
            B.Tech CSE · graduating 2026
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
