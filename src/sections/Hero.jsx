// src/sections/Hero.jsx
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Code, Zap, Mail, Phone, MapPin, Award, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';
import { StaggerContainer, SlideInLeft, SlideInUp, ScaleIn } from '../components/Animations';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Contact Info based on resume
  const contactInfo = [
    { icon: <Mail size={18} />, text: 'aryandhiman2605@gmail.com', href: 'mailto:aryandhiman2605@gmail.com' },
    { icon: <Phone size={18} />, text: '+91 9805297267', href: 'tel:+919805297267' },
    { icon: <MapPin size={18} />, text: 'Mohali, Punjab', href: '#' },
    { icon: <GraduationCap size={18} />, text: 'CGC Jhanjeri | CGPA: 9.15', href: '#' }
  ];

  // Tech Stack
  const techStack = [
    { icon: <Code />, label: 'React.js', color: '#00f6ff' },
    { icon: <Briefcase />, label: 'Node.js', color: '#7f5cff' },
    { icon: <Sparkles />, label: 'MongoDB', color: '#ff2e63' },
    { icon: <Zap />, label: 'Python', color: '#00f6ff' }
  ];

  // Create floating particles
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.hero-particles');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: ${i % 3 === 0 ? '#00f6ff' : i % 3 === 1 ? '#7f5cff' : '#ff2e63'};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          border-radius: 50%;
          filter: blur(${Math.random() * 2 + 1}px);
          opacity: ${Math.random() * 0.3 + 0.1};
          animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
          animation-delay: ${Math.random() * 5}s;
          z-index: 1;
        `;
        
        container.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="hero-section" 
      style={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="hero-background"
      >
        <div className="hero-gradient" style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(0, 246, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(127, 92, 255, 0.1) 0%, transparent 50%)',
          zIndex: 1
        }} />
      </motion.div>

      {/* Animated Particles */}
      <div className="hero-particles" />

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 10%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <StaggerContainer delay={0.2}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Badge */}
            <SlideInLeft delay={0.2}>
              <motion.div
                className="glass"
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  marginBottom: '30px',
                  borderRadius: '50px',
                  background: 'rgba(0, 246, 255, 0.1)',
                  border: '1px solid rgba(0, 246, 255, 0.2)'
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                    borderRadius: '50%'
                  }}
                />
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  COMPUTER SCIENCE ENGINEERING STUDENT
                </span>
              </motion.div>
            </SlideInLeft>

            {/* Main Heading */}
            <SlideInLeft delay={0.3}>
              <h1 style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '20px'
              }}>
                <span style={{ 
                  color: '#fff',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  Hi, I'm <span className="gradient-text">Aryan Dhiman</span>
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    display: 'block',
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: '600'
                  }}
                >
                  Full-Stack Developer | CSE Undergrad
                </motion.span>
              </h1>
            </SlideInLeft>

            {/* Description */}
            <SlideInLeft delay={0.4}>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                lineHeight: '1.7',
                marginBottom: '30px'
              }}>
                Passionate Computer Science Engineering student with expertise in 
                <strong style={{ color: '#00f6ff' }}> designing, developing, and testing scalable web applications</strong>. 
                Currently pursuing B.Tech at CGC Jhanjeri with <strong style={{ color: '#7f5cff' }}>CGPA 9.15</strong>. 
                Actively seeking Software Engineering Internship opportunities.
              </p>
            </SlideInLeft>

            {/* Contact Info Grid */}
            <SlideInUp delay={0.5}>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '15px',
                marginBottom: '40px'
              }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: 'rgba(0, 246, 255, 0.4)'
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '15px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(127, 92, 255, 0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00f6ff'
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <div style={{ 
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '2px'
                      }}>
                        {info.text}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </SlideInUp>

            {/* CTA Buttons */}
            <SlideInUp delay={0.8}>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '50px' }}>
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(0, 246, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                    color: '#000',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>View My Projects</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="btn btn-secondary"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(0, 246, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    background: 'transparent',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                >
                  <span>Contact Me</span>
                  <ExternalLink size={18} />
                </motion.a>

                <motion.a
                  href="#achievements"
                  className="btn btn-tertiary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    background: 'rgba(255, 46, 99, 0.1)',
                    color: '#ff2e63',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 46, 99, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <Award size={18} />
                  <span>Achievements</span>
                </motion.a>
              </div>
            </SlideInUp>

            {/* Tech Stack */}
            <SlideInUp delay={1}>
              <div style={{ marginTop: '30px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    height: '2px',
                    flex: 1,
                    background: 'linear-gradient(90deg, #00f6ff, transparent)',
                    borderRadius: '1px'
                  }} />
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.6)',
                    whiteSpace: 'nowrap'
                  }}>
                    TECHNICAL EXPERTISE
                  </span>
                  <div style={{
                    height: '2px',
                    flex: 1,
                    background: 'linear-gradient(90deg, transparent, #7f5cff)',
                    borderRadius: '1px'
                  }} />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}
                >
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.label}
                      className="glass card-3d"
                      whileHover={{ 
                        y: -10,
                        scale: 1.05,
                        boxShadow: `0 15px 30px ${tech.color}33`
                      }}
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{
                        padding: '20px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        minWidth: '180px',
                        cursor: 'pointer',
                        border: `1px solid ${tech.color}22`,
                        background: `linear-gradient(135deg, ${tech.color}11, ${tech.color}05)`
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity, 
                          ease: "linear"
                        }}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${tech.color}22, ${tech.color}44)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: tech.color
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <div>
                        <div style={{ 
                          fontWeight: '600',
                          fontSize: '1rem',
                          color: '#fff',
                          marginBottom: '4px'
                        }}>
                          {tech.label}
                        </div>
                        <div style={{ 
                          fontSize: '0.8rem',
                          color: 'rgba(255, 255, 255, 0.5)'
                        }}>
                          Advanced
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </SlideInUp>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}