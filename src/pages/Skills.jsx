import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const frontendSkills = ['React JS', 'JavaScript', 'HTML', 'CSS'];
  const backendSkills = ['Java', 'Python', 'Django', 'MySQL', 'FastAPI','C','C++',];
  const aiSkills = ['Prompt Engineering', 'RAG', 'LangChain', 'LangGraph', 'ChromaDB', 'CrewAI', 'MCP', 'Fine-Tuning', 'LoRA', 'QLoRA', 'Fine Tuning Llama', 'Production AI'];
  const tools = ['Git'];
  const learning = ['OOP', 'Data Structures & Algorithms', 'Software Testing', 'Agile Development', 'SDLC'];

  const renderTags = (skills) => (
    <div className="skill-tags mt-4">
      {skills.map(skill => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  );

  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      {/* 1. Hero */}
      <section className="section">
        <div className="bg-grid"></div>
        <div className="glow-circle" style={{ top: '20%', right: '10%' }}></div>
        <div className="container text-center">
          <h1 className="heading-lg" data-aos="fade-up">Technical <span>Skills</span></h1>
          <p className="mt-4 text-gray-400" data-aos="fade-up" data-aos-delay="200">
            A comprehensive overview of my technical arsenal.
          </p>
        </div>
      </section>

      {/* 2. Frontend */}
      <section className="section about-section">
        <div className="container">
          <div className="card" data-aos="fade-right">
            <h2>Frontend <span>Development</span></h2>
            {renderTags(frontendSkills)}
          </div>
        </div>
      </section>

      {/* 3. Backend */}
      <section className="section">
        <div className="container">
          <div className="card" data-aos="fade-left">
            <h2>Backend <span>Development</span></h2>
            {renderTags(backendSkills)}
          </div>
        </div>
      </section>

      {/* 4. AI Stack */}
      <section className="section about-section">
        <div className="container">
          <div className="card" data-aos="zoom-in">
            <h2>AI & <span>Machine Learning</span></h2>
            {renderTags(aiSkills)}
          </div>
        </div>
      </section>

      {/* 5. Tools */}
      <section className="section">
        <div className="container">
          <div className="card" data-aos="fade-up">
            <h2>Tools & <span>Platforms</span></h2>
            {renderTags(tools)}
          </div>
        </div>
      </section>

      {/* 6. Currently Learning */}
      <section className="section about-section">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <h2>Core <span>Competencies</span></h2>
            {renderTags(learning)}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section cta-section">
        <div className="container text-center" data-aos="zoom-in">
          <h2>Need these skills for your next project?</h2>
          <button className="btn btn-primary mt-4">Contact Me</button>
        </div>
      </section>
    </div>
  );
};

export default Skills;
