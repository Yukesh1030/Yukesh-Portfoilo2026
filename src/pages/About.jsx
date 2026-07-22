import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      {/* 1. Hero */}
      <section className="section">
        <div className="container text-center">
          <h1 className="heading-lg" data-aos="fade-up">About <span>Me</span></h1>
          <p className="mt-4 text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Passionate about building intelligent interfaces and bridging the gap between design and AI engineering.
          </p>
        </div>
      </section>

      {/* 2. My Story */}
      <section className="section about-section">
        <div className="container grid grid-cols-2 items-center">
          <div data-aos="fade-right">
            <h2>My <span>Story</span></h2>
            <p className="mt-4 text-gray-400">
              My journey began as a frontend enthusiast crafting beautiful React applications. Driven by curiosity, I expanded my horizon to Artificial Intelligence. Now, I leverage both domains to build intelligent digital experiences that are not only performant but also smart and user-centric.
            </p>
          </div>
          <div className="card" data-aos="fade-left">
            <h3 className="text-accent mb-4">Philosophy</h3>
            <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
          </div>
        </div>
      </section>

      {/* 3. Education */}
      <section className="section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Education</h2>
          <div className="card max-w-2xl mx-auto" data-aos="zoom-in">
            <h3 className="text-accent">B.E. Computer Science and Engineering</h3>
            <p className="mt-2 text-xl">CGPA: 8.01</p>
            <p className="mt-2 text-gray-400">2020 - 2024, Salem, TamilNadu</p>
          </div>
        </div>
      </section>

      {/* 4. Experience */}
      <section className="section about-section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Experience Focus</h2>
          <div className="grid grid-cols-2">
            <div className="card" data-aos="slide-up">
              <h3 className="text-accent">React Frontend Dev</h3>
              <p className="mt-2">Building and optimizing user interfaces, developing responsive components, and integrating APIs.</p>
            </div>
            <div className="card" data-aos="slide-up" data-aos-delay="200">
              <h3 className="text-accent">Full-Stack & AI</h3>
              <p className="mt-2">Experience in full-stack development (Django, Java) and exploring AI technologies (RAG, LLMs).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Core <span>Values</span></h2>
          <div className="grid grid-cols-3">
            {['Innovation', 'Quality', 'Continuous Learning'].map((val, idx) => (
              <div className="card text-center" key={val} data-aos="flip-up" data-aos-delay={idx * 150}>
                <h3 className="text-accent">{val}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Career Timeline */}
      <section className="section about-section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Career <span>Timeline</span></h2>
          <div className="timeline-mini max-w-2xl mx-auto">
            <div className="timeline-item" data-aos="fade-up">
              <span>Dec 2025 - Present</span>
              <h4>React Frontend Developer @ Stackly</h4>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <span>April 2025 - July 2025</span>
              <h4>Process Executive @ PREYFOX TECHNOLOGY</h4>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <span>Feb 2024 - Mar 2024</span>
              <h4>Associate Developer Intern @ Seval Software Solutions</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section cta-section">
        <div className="container text-center" data-aos="zoom-in">
          <h2>Ready to Collaborate?</h2>
          <button className="btn btn-primary mt-4">Get In Touch</button>
        </div>
      </section>
    </div>
  );
};

export default About;
