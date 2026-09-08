import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = footerRef.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.footer-col'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            once: true
          },
        }
      );
    }, el);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger after a slight delay to allow the new page content to render and DOM to update
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: About */}
          <div className="footer-col">
            <h4>Yukesh.G</h4>
            <p>Building Intelligent Digital Experiences through frontend development and AI engineering.</p>
            <div className="social-links mt-4">
              <a href="https://github.com/Yukesh1030" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/yukesh-g" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={20} /></a>
              <a href="mailto:yukeshyuki18@gmail.com" className="social-icon"><Mail size={20} /></a>
              <a href="https://x.com/Yukesh_offi" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Me</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-links">
              <a href="mailto:yukeshyuki18@gmail.com"><Mail size={16} /> yukeshyuki18@gmail.com</a>
              <p>Available for freelance opportunities and full-time roles.</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to my newsletter for updates on AI and Frontend dev.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Join</button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yukesh G. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
