import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(error => alert(error));
    }
  };

  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      {/* 1. Hero */}
      <section className="section">
        <div className="container text-center">
          <h1 className="heading-lg" data-aos="fade-down">Contact <span>Me</span></h1>
          <p className="mt-4 text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Let's discuss how we can work together.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards */}
      <section className="section about-section">
        <div className="container grid grid-cols-3">
          <div className="card text-center" data-aos="fade-up" data-aos-delay="100">
            <Mail className="mx-auto text-accent mb-4" size={32} />
            <h3>Email</h3>
            <p className="text-gray-400 mt-2">yukeshyuki18@gmail.com</p>
          </div>
          <div className="card text-center" data-aos="fade-up" data-aos-delay="200">
            <FaLinkedin className="mx-auto text-accent mb-4" size={32} />
            <h3>LinkedIn</h3>
            <p className="text-gray-400 mt-2"><a href="https://www.linkedin.com/in/yukesh-g" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>yukesh-g</a></p>
          </div>
          <div className="card text-center" data-aos="fade-up" data-aos-delay="300">
            <MapPin className="mx-auto text-accent mb-4" size={32} />
            <h3>Location</h3>
            <p className="text-gray-400 mt-2">Salem, Tamil Nadu, India</p>
          </div>
        </div>
      </section>

      {/* 3. Contact Form */}
      <section className="section">
        <div className="container max-w-2xl mx-auto">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Send a <span>Message</span></h2>
          {submitted && <div className="p-4 mb-6 rounded bg-green-900 text-green-100 text-center border border-green-500">Message sent successfully!</div>}
          <form className="card" onSubmit={handleSubmit} data-aos="fade-up" name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <span className="text-red-500 text-sm mt-1 inline-block" style={{color: '#ff4444'}}>{errors.name}</span>}
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <span className="text-red-500 text-sm mt-1 inline-block" style={{color: '#ff4444'}}>{errors.email}</span>}
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                className="form-control" 
                rows="5" 
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm mt-1 inline-block" style={{color: '#ff4444'}}>{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* 4. Social Media */}
      <section className="section about-section">
        <div className="container text-center">
          <h2 className="heading-md mb-8" data-aos="fade-up">Connect <span>Online</span></h2>
          <div className="flex justify-center gap-6" data-aos="zoom-in">
            <a href="https://github.com/Yukesh1030" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '60px', height: '60px'}}><FaGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/yukesh-g" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '60px', height: '60px'}}><FaLinkedin size={28} /></a>
            <a href="https://x.com/Yukesh_offi" target="_blank" rel="noopener noreferrer" className="social-icon" style={{width: '60px', height: '60px'}}><FaTwitter size={28} /></a>
          </div>
        </div>
      </section>

      {/* 5. Availability */}
      <section className="section">
        <div className="container">
          <div className="card text-center max-w-2xl mx-auto" data-aos="flip-up">
            <h3 className="text-accent mb-4">Current Availability</h3>
            <p className="text-xl">Open for Freelance Projects and Full-time Roles.</p>
            <p className="text-gray-400 mt-2">Timezone: IST (GMT+5:30)</p>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="section about-section">
        <div className="container max-w-3xl mx-auto">
          <h2 className="heading-md text-center mb-8" data-aos="fade-up">Frequently Asked <span>Questions</span></h2>
          <div className="flex flex-col gap-4">
            {['Do you take remote work?', 'What is your hourly rate?', 'Are you open to relocation?'].map((q, idx) => (
              <div className="card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <h4 className="text-accent">{q}</h4>
                <p className="mt-2 text-gray-400">Yes, please contact me for more details regarding this query.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section cta-section">
        <div className="container text-center" data-aos="zoom-in">
          <h2>Still have questions?</h2>
          <button className="btn btn-outline mt-4">Read Documentation</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
