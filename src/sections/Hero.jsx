// src/sections/Hero.jsx
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Code, Zap, Mouse, Briefcase, Target } from 'lucide-react';
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
        alignItems: 'center',
        padding: '0 5%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <StaggerContainer delay={0.2}>
          <div style={{ maxWidth: '800px' }}>
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
                  marginBottom: '40px',
                  borderRadius: '50px'
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
                  CSE UNDERGRAD | FULL-STACK DEVELOPER
                </span>
              </motion.div>
            </SlideInLeft>

            {/* Main Heading */}
            <SlideInLeft delay={0.4}>
              <h1 style={{
                fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '30px'
              }}>
                <span className="gradient-text" style={{ display: 'block' }}>
                  Aryan Dhiman
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  style={{ 
                    color: '#fff',
                    display: 'block',
                    position: 'relative'
                  }}
                >
                  Software Engineering
                  <motion.div
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5 
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '-10px',
                      left: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, transparent, #00f6ff, transparent)',
                      borderRadius: '2px'
                    }}
                  />
                </motion.span>
              </h1>
            </SlideInLeft>

            {/* Description */}
            <SlideInLeft delay={0.6}>
              <p style={{
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                lineHeight: '1.7',
                marginBottom: '50px'
              }}>
                Passionate about <strong style={{ color: '#00f6ff' }}>designing, developing, and testing 
                scalable web applications</strong>. Actively seeking a Software Engineering 
                Internship to learn, grow, and contribute to impactful engineering solutions.
              </p>
            </SlideInLeft>

            {/* Buttons */}
            <SlideInUp delay={0.8}>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    animation: 'pulse 2s infinite'
                  }}
                >
                  <span>View Projects</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Me</span>
                </motion.a>
              </div>
            </SlideInUp>

            {/* Tech Stack */}
            <SlideInUp delay={1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{
                  display: 'flex',
                  gap: '30px',
                  marginTop: '80px',
                  flexWrap: 'wrap'
                }}
              >
                {[
                  { icon: <Code />, label: 'React.js', color: '#00f6ff' },
                  { icon: <Briefcase />, label: 'Node.js', color: '#7f5cff' },
                  { icon: <Target />, label: 'MongoDB', color: '#ff2e63' }
                ].map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    className="glass card-3d"
                    whileHover={{ 
                      y: -20,
                      rotateY: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    animate={{ 
                      y: [0, -10, 0],
                      rotateY: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      padding: '25px',
                      borderRadius: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '15px',
                      minWidth: '140px',
                      cursor: 'pointer'
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: i * 2 
                      }}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${tech.color}22, ${tech.color}44)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: tech.color
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </SlideInUp>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}