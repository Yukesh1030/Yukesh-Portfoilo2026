import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aiChatbotImg from '../assets/AI Chatbot.png';
import rationShopImg from '../assets/Ration Shop Management.png';
import realTimeChatImg from '../assets/Real-Time Chat App.png';
import userTrackerImg from '../assets/user-tracker.png';
import resumePdf from '../assets/Yukesh_G_Resume.pdf';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const renderProjectCard = (title, tech, desc, github, delay, img) => (
    <div className="card project-card p-0" data-aos="fade-up" data-aos-delay={delay}>
      <div className="project-img-wrap">
        {img ? (
          <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{width: '100%', height: '100%', background: 'linear-gradient(45deg, #0A0A0A, #00FF88)'}}></div>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <div className="project-tech">{tech}</div>
        <p>{desc}</p>
        <div className="project-links">
          {github && github !== '#' && <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem'}}><FaGithub size={16}/> Code</a>}
          {(!github || github === '#') && <a href="#" className="btn btn-outline disabled" style={{padding: '0.5rem 1rem', pointerEvents: 'none', opacity: 0.5}}><FaGithub size={16}/> N/A</a>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      {/* 1. Hero */}
      <section className="section">
        <div className="container text-center">
          <h1 className="heading-lg" data-aos="zoom-in">My <span>Projects</span></h1>
          <p className="mt-4 text-gray-400" data-aos="fade-up" data-aos-delay="200">
            A showcase of my frontend and AI engineering work.
          </p>
        </div>
      </section>

      {/* 2. Featured Projects */}
      <section className="section about-section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Featured <span>Work</span></h2>
          <div className="projects-grid">
            {renderProjectCard('Fullstack User-Tracker', 'React, Django, REST API, PostgreSQL', 'Full-stack user tracking app with auth, analytics, and admin dashboards.', 'https://github.com/Yukesh1030/user-tracker', 100, userTrackerImg)}
            {renderProjectCard('AI Chatbot', 'Python, RAG, GenAI, Groq API', 'Interactive AI chatbot with real-time responses and session context.', 'https://github.com/Yukesh1030/AI-Bootcamp/tree/main/projects/AI-Chatbot', 200, aiChatbotImg)}
          </div>
        </div>
      </section>

      {/* 3. AI Projects */}
      <section className="section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">AI <span>Projects</span></h2>
          <div className="projects-grid">
            {renderProjectCard('AI Chatbot', 'Python, RAG, GenAI, Groq API', 'Interactive AI chatbot with real-time responses and session context.', 'https://github.com/Yukesh1030/AI-Bootcamp/tree/main/projects/AI-Chatbot', 100, aiChatbotImg)}
          </div>
        </div>
      </section>

      {/* 4. React Projects */}
      <section className="section about-section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">React <span>Projects</span></h2>
          <div className="projects-grid">
            {renderProjectCard('Real-Time Chat App', 'React, Java Sockets, WebSockets', 'Robust client-server architecture supporting private rooms for 50+ concurrent users.', 'https://github.com/Yukesh1030/chat-application', 100, realTimeChatImg)}
            {renderProjectCard('Ration Shop Management', 'React, Java, MySQL', 'Full-stack system with inventory, billing, and optimized queries.', '#', 200, rationShopImg)}
          </div>
        </div>
      </section>

      {/* 5. Case Studies */}
      <section className="section">
        <div className="container">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Case <span>Studies</span></h2>
          <div className="card text-center" data-aos="zoom-in">
            <h3 className="text-accent mb-4">Migrating to AI-Powered Search</h3>
            <p className="mb-4 text-gray-400">How I improved search relevance by 40% using vector databases and LLM embeddings.</p>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Read Documentation</a>
          </div>
        </div>
      </section>

      {/* 6. GitHub Showcase */}
      <section className="section about-section">
        <div className="container text-center">
          <h2 className="heading-md mb-8" data-aos="fade-up">Open Source <span>Contributions</span></h2>
          <a href="https://github.com/Yukesh1030" target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-aos="fade-up" data-aos-delay="100">
            <FaGithub size={20} /> View GitHub Profile
          </a>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section cta-section">
        <div className="container text-center" data-aos="zoom-in">
          <h2>Have a project in mind?</h2>
          <Link to="/contact" className="btn btn-primary mt-4">Let's Talk</Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
