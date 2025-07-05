"use client";
import './styles.css';
import React, { useState } from 'react';

const SmartTecWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">
              {/* Replace with your actual logo */}
              <img 
                src="/logo.png" 
                alt="SmartTec Analytics" 
                className="logo-image"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback emoji (hidden by default) */}
              <span className="logo-fallback" style={{display: 'none', fontSize: '20px'}}>🧠</span>
            </div>
            <span className="logo-text">SmartTec Analytics</span>
          </div>
          
          <ul className="nav-menu">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>
            <span className="gradient-text">AI-Powered</span><br />
            Analytics Solutions
          </h1>
          <p>
            Transform your business with intelligent chatbots, Agentic AI, and RAG systems. 
            We create AI solutions that understand your data and provide intelligent responses.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('services')}>
              Explore Services →
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Get Started
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Data Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive AI and data science solutions to drive your business forward</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>Agentic AI</h3>
              <p>Autonomous AI agents that can perform complex tasks and decision-making</p>
              <ul className="service-features">
                <li><span className="check-icon">✓</span> Autonomous Task Execution</li>
                <li><span className="check-icon">✓</span> Multi-Agent Systems</li>
                <li><span className="check-icon">✓</span> Intelligent Automation</li>
                <li><span className="check-icon">✓</span> Decision Making AI</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>Train Chatbots</h3>
              <p>Custom-trained chatbots tailored to your business requirements</p>
              <ul className="service-features">
                <li><span className="check-icon">✓</span> Custom Training Data</li>
                <li><span className="check-icon">✓</span> Domain-Specific Responses</li>
                <li><span className="check-icon">✓</span> Multi-language Support</li>
                <li><span className="check-icon">✓</span> Continuous Learning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>RAG System Chatbots</h3>
              <p>Retrieval-Augmented Generation chatbots for accurate, context-aware responses</p>
              <ul className="service-features">
                <li><span className="check-icon">✓</span> Document Retrieval</li>
                <li><span className="check-icon">✓</span> Knowledge Base Integration</li>
                <li><span className="check-icon">✓</span> Context-Aware Responses</li>
                <li><span className="check-icon">✓</span> Real-time Updates</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h3>Database-Integrated Chatbots</h3>
              <p>AI chatbots that access and analyze your database to provide data-driven answers</p>
              <ul className="service-features">
                <li><span className="check-icon">✓</span> Real-time Data Access</li>
                <li><span className="check-icon">✓</span> SQL Query Generation</li>
                <li><span className="check-icon">✓</span> Data Visualization</li>
                <li><span className="check-icon">✓</span> Business Intelligence</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">👁️</div>
              <h3>Computer Vision</h3>
              <p>Image and video analysis with cutting-edge AI technology</p>
              <ul className="service-features">
                <li><span className="check-icon">✓</span> Object Detection</li>
                <li><span className="check-icon">✓</span> Image Classification</li>
                <li><span className="check-icon">✓</span> Facial Recognition</li>
                <li><span className="check-icon">✓</span> Video Analytics</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Data Analysis</h3>
              <p>Comprehensive data analysis and visualization solutions</p>
              <ul className="service-features">
                <li><span className="check-icon">✓</span> Data Visualization</li>
                <li><span className="check-icon">✓</span> Business Intelligence</li>
                <li><span className="check-icon">✓</span> Reporting Dashboards</li>
                <li><span className="check-icon">✓</span> KPI Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About SmartTec Analytics</h2>
              <p>
                We are a cutting-edge technology company specializing in Agentic AI, intelligent chatbots, 
                RAG systems, and database-integrated AI solutions. Our team of experts creates intelligent 
                conversational AI that transforms how businesses interact with their customers and data.
              </p>
              <p>
                From custom-trained chatbots to autonomous AI agents, we help businesses automate 
                customer service, streamline operations, and unlock insights from their databases 
                using advanced AI and machine learning technologies.
              </p>
              
              <ul className="about-features">
                <li>
                  <span className="star-icon">⭐</span>
                  <span>Expert team with advanced AI/ML expertise</span>
                </li>
                <li>
                  <span className="star-icon">⭐</span>
                  <span>Custom solutions tailored to your business needs</span>
                </li>
                <li>
                  <span className="star-icon">⭐</span>
                  <span>Proven track record of successful implementations</span>
                </li>
              </ul>
            </div>
            
            <div className="about-visual">
              <div className="visual-grid">
                <div className="visual-item">
                  <div className="visual-icon" style={{color: '#06b6d4'}}>🧠</div>
                  <h4>AI Innovation</h4>
                </div>
                <div className="visual-item">
                  <div className="visual-icon" style={{color: '#3b82f6'}}>🗄️</div>
                  <h4>Data Excellence</h4>
                </div>
                <div className="visual-item">
                  <div className="visual-icon" style={{color: '#8b5cf6'}}>👁️</div>
                  <h4>Vision Tech</h4>
                </div>
                <div className="visual-item">
                  <div className="visual-icon" style={{color: '#10b981'}}>📊</div>
                  <h4>Analytics</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Ready to transform your business with AI? Let's discuss your project and create something amazing together.</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <p>Email</p>
                  <p>smarttecanalytics@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <p>Phone</p>
                  <p>+92-3216541361</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <p>Location</p>
                  <p>Global Remote Services</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Ready to Start Your Project?</h3>
              <p>
                Let's discuss how we can help transform your business with AI and machine learning solutions.
              </p>
              
              <button 
                className="email-btn"
                onClick={() => window.open('mailto:smarttecanalytics@gmail.com', '_blank')}
              >
                <span>📧</span>
                <span>Email Us</span>
              </button>
              
              <div className="why-choose">
                <h4>Why Choose SmartTec Analytics?</h4>
                <ul>
                  <li><span className="check-icon">✓</span> Free initial consultation</li>
                  <li><span className="check-icon">✓</span> Custom AI solutions</li>
                  <li><span className="check-icon">✓</span> 24/7 support & maintenance</li>
                  <li><span className="check-icon">✓</span> Scalable solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <div className="logo-icon">
              {/* Footer logo */}
              <img 
                src="/logo.png" 
                alt="SmartTec Analytics" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="logo-fallback" style={{display: 'none', fontSize: '16px'}}>🧠</span>
            </div>
            <span className="logo-text">SmartTec Analytics</span>
          </div>
          <p>Transforming businesses through AI and data science</p>
          <p className="copyright">© 2025 SmartTec Analytics. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default SmartTecWebsite;