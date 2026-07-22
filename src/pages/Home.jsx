import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import profileImg from '../assets/profile-image.png';
import aboutImg from '../assets/9ae79506c718899f9c11e56dfb826a1e.jpg';
import aiChatbotImg from '../assets/AI Chatbot.png';
import rationShopImg from '../assets/Ration Shop Management.png';
import realTimeChatImg from '../assets/Real-Time Chat App.png';
import userTrackerImg from '../assets/user-tracker.png';
import resumePdf from '../assets/Yukesh_G_Resume.pdf';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const [roleText, setRoleText] = useState('Frontend Developer');
  const roles = ['Frontend Developer', 'AI Engineer', 'React Developer'];

  const handleExploreClick = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        gsap.to(heroRef.current, { scale: 1, opacity: 1, duration: 0.5, delay: 0.8 });
      }
    });

    tl.to(heroRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Role text animation
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % roles.length;
      setRoleText(roles[i]);
    }, 3000);

    // GSAP Hero Animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 });
      gsap.from('.hero-title-part', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power3.out'
      });
      gsap.from('.hero-roles', { opacity: 0, duration: 1, delay: 0.8 });
      gsap.from('.hero-description', { y: 20, opacity: 0, duration: 0.8, delay: 1.0 });
      gsap.fromTo('.hero-cta', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.2 }
      );
      
      // Entrance animation for image container
      gsap.from('.hero-image-container', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'back.out(1.5)'
      });
      
      // Floating profile image
      gsap.to('.hero-image', {
        y: -20,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });
    }, heroRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="home-hero" ref={heroRef}>
        <div className="bg-grid"></div>
        <div className="glow-circle" style={{ top: '20%', right: '10%' }}></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-subtitle">Hi, I'm</span>
            <h1 className="hero-title heading-lg">
              <span className="hero-title-part">Yukesh G</span>
            </h1>
            <div className="hero-roles">
              <span className="role-text">{roleText}</span>
            </div>

            <p className="hero-description">
              Passionate about building scalable web applications and exploring the frontiers of Artificial Intelligence. I blend design with code to create seamless digital experiences.
            </p>
            
            <div className="hero-cta">
              <button className="btn btn-primary explore-btn" onClick={handleExploreClick}>
                Explore Me <ArrowRight size={18} className="explore-icon" />
              </button>
              <a href={resumePdf} download="Yukesh_G_Resume.pdf" className="btn btn-outline">
                Download Resume <Download size={18} />
              </a>
            </div>
            
            <div className="hero-socials">
              <a href="https://github.com/Yukesh1030" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/yukesh-g" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img src={profileImg} alt="Yukesh G" className="hero-image" />
          </div>
        </div>
      </section>

      {/* 2. About Me */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image glass p-4" data-aos="fade-right" style={{ position: 'relative' }}>
             <div className="glow-circle" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px' }}></div>
             <img src={aboutImg} alt="About Yukesh G" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px', position: 'relative', zIndex: 2 }} />
          </div>
          <div className="about-content" data-aos="fade-left">
            <h2>About <span>Me</span></h2>
            <p>I'm a passionate engineer transitioning from 10 months of React experience into AI Engineering. I love solving complex problems and building intelligent digital experiences.</p>
            
            <div className="timeline-mini">
              <div className="timeline-item">
                <span>2020 - 2024</span>
                <h4>B.E. Computer Science and Engineering</h4>
              </div>
              <div className="timeline-item">
                <span>Feb 2024 - Mar 2024</span>
                <h4>Associate Developer Intern</h4>
              </div>
              <div className="timeline-item">
                <span>Dec 2025 - Present</span>
                <h4>React Frontend Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">My <span>Skills</span></h2>
          <div className="skills-grid">
            <div className="card skill-category" data-aos="fade-up" data-aos-delay="100">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="card skill-category" data-aos="fade-up" data-aos-delay="200">
              <h3>Backend</h3>
              <div className="skill-tags">
                {['Java', 'Spring Boot', 'REST APIs', 'MySQL'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="card skill-category" data-aos="fade-up" data-aos-delay="300">
              <h3>AI Stack</h3>
              <div className="skill-tags">
                {['Python', 'LangChain', 'LangGraph', 'CrewAI', 'MCP', 'RAG', 'ChromaDB', 'Prompt Engineering', 'LoRA', 'QLoRA', 'LLMs'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience */}
      <section className="section about-section" id="experience">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Professional <span>Experience</span></h2>
          <div className="experience-timeline">
            {[
              { company: 'Stackly', role: 'React Frontend Developer', duration: 'Dec 2025 - Present' },
              { company: 'PREYFOX TECHNOLOGY', role: 'Process Executive', duration: 'April 2025 - July 2025' },
              { company: 'Seval Software Solutions', role: 'Associate Developer Intern', duration: 'Feb 2024 - Mar 2024' }
            ].map((exp, index) => (
              <div className="exp-card" key={exp.company} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="exp-header">
                  <span className="exp-company">{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                <h4>{exp.role}</h4>
                <p className="mt-4 text-gray-400">Worked on building scalable applications and implementing intuitive user interfaces.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects */}
      <section className="section" id="projects">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Featured <span>Projects</span></h2>
          <div className="projects-grid">
            {[
              { title: 'Fullstack User-Tracker', tech: 'React, Django, PostgreSQL', desc: 'User tracking web app with secure auth, role-based access, and real-time analytics.', github: 'https://github.com/Yukesh1030/user-tracker', live: '#', img: userTrackerImg },
              { title: 'AI Chatbot', tech: 'Python, RAG, GenAI, Groq/OpenAI', desc: 'Interactive AI chatbot with real-time responses and session-based context.', github: 'https://github.com/Yukesh1030/AI-Bootcamp/tree/main/projects/AI-Chatbot', live: '#', img: aiChatbotImg },
              { title: 'Real-Time Chat App', tech: 'React, Java Sockets, WebSockets', desc: 'Robust client-server architecture supporting private rooms for 50+ concurrent users.', github: 'https://github.com/Yukesh1030/chat-application', live: '#', img: realTimeChatImg }
            ].map((project, idx) => (
              <div className="card project-card p-0" key={project.title} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="project-img-wrap">
                  {project.img ? (
                    <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{width: '100%', height: '100%', background: 'linear-gradient(45deg, #0A0A0A, #00FF88)'}}></div>
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">{project.tech}</div>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    {project.github !== '#' && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem'}}><FaGithub size={16}/> Code</a>}
                    {project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{padding: '0.5rem 1rem'}}><ExternalLink size={16}/> Live</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI Journey */}
      <section className="section about-section" id="journey">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">My AI <span>Journey</span></h2>
          <div className="journey-grid">
            {['Python', 'LLMs', 'Prompt Engineering', 'LangChain', 'RAG', 'LangGraph', 'CrewAI', 'Production AI'].map((step, idx) => (
              <div className="journey-card" key={step} data-aos="zoom-in" data-aos-delay={(idx % 4) * 100}>
                <div className="journey-icon-wrap">
                  <span>{idx + 1}</span>
                </div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Certifications */}
      <section className="section" id="certifications">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Certifications & <span>Achievements</span></h2>
          <div className="grid grid-cols-2">
            <div className="card" data-aos="flip-left">
              <h3 className="text-accent mb-2">Hackerrank</h3>
              <p>Certified in Full Stack Development</p>
            </div>
            <div className="card" data-aos="flip-right">
              <h3 className="text-accent mb-2">Research Paper</h3>
              <p>Published innovation paper on AI integrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Career Goals */}
      <section className="section about-section" id="goals">
        <div className="container">
          <div className="goals-grid" data-aos="fade-up">
            <div className="goal-item">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="goal-item">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="goal-item">
              <h3>15+</h3>
              <p>Technologies Mastered</p>
            </div>
            <div className="goal-item">
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="section cta-section">
        <div className="bg-grid"></div>
        <div className="glow-circle" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        <div className="container">
          <h2 data-aos="fade-up">Let's Build Something <span>Amazing</span> Together</h2>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
            <a href={resumePdf} download="Yukesh_G_Resume.pdf" className="btn btn-primary">Hire Me</a>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
