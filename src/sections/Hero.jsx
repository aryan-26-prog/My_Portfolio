import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Award, ExternalLink, GraduationCap, Github, Linkedin, FileText, Download, Globe } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const contactInfo = [
    { icon: <Mail size={isMobile ? 16 : 18} />, text: 'aryandhiman2605@gmail.com', href: 'mailto:aryandhiman2605@gmail.com' },
    { icon: <Phone size={isMobile ? 16 : 18} />, text: '+91 9805297267', href: 'tel:+919805297267' },
    { icon: <MapPin size={isMobile ? 16 : 18} />, text: 'Mohali, Punjab', href: '#' },
    { icon: <GraduationCap size={isMobile ? 16 : 18} />, text: 'CGC Jhanjeri | CGPA: 9.15', href: '#' }
  ];

  const professionalLinks = [
    { 
      icon: <Github size={isMobile ? 20 : 24} />, 
      label: 'GitHub', 
      href: 'https://github.com/aryan-26-prog', 
      color: '#00f6ff', 
      desc: 'View My Code',
      external: true
    },
    { 
      icon: <Linkedin size={isMobile ? 20 : 24} />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/aryan-dhiman-2605ad', 
      color: '#7f5cff', 
      desc: 'Connect Professionally',
      external: true
    },
    { 
      icon: <FileText size={isMobile ? 20 : 24} />, 
      label: 'Resume', 
      href: '/ARYAN-DHIMAN-RESUME.pdf', 
      color: '#ff2e63', 
      desc: 'Download PDF',
      download: true
    },
    { 
      icon: <Globe size={isMobile ? 20 : 24} />, 
      label: 'Portfolio', 
      href: '#projects', 
      color: '#00f6ff', 
      desc: 'Live Projects',
      external: false
    }
  ];

  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.hero-particles');
      if (!container) return;
      
      container.innerHTML = '';
      const particleCount = isMobile ? 50 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          background: ${i % 3 === 0 ? '#00f6ff' : i % 3 === 1 ? '#7f5cff' : '#ff2e63'};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          border-radius: 50%;
          filter: blur(${Math.random() * 1 + 0.5}px);
          opacity: ${Math.random() * 0.2 + 0.1};
          animation: float ${Math.random() * 8 + 4}s ease-in-out infinite;
          animation-delay: ${Math.random() * 3}s;
          z-index: 1;
        `;
        
        container.appendChild(particle);
      }
    };

    createParticles();
    const resizeHandler = () => createParticles();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [isMobile]);

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
      <motion.div 
        style={{ y, opacity, scale }}
        className="hero-background"
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${isMobile ? '40%' : '30%'} ${isMobile ? '30%' : '20%'}, rgba(0, 246, 255, ${isMobile ? '0.1' : '0.15'}) 0%, transparent 50%), radial-gradient(circle at ${isMobile ? '60%' : '70%'} ${isMobile ? '70%' : '80%'}, rgba(127, 92, 255, ${isMobile ? '0.05' : '0.1'}) 0%, transparent 50%)`,
          zIndex: 1
        }} />
      </motion.div>

      <div className="hero-particles" />

      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile ? '0 20px' : '0 10%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }
              }}
            >
              <motion.div
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '12px',
                  padding: isMobile ? '10px 16px' : '12px 24px',
                  marginBottom: isMobile ? '20px' : '30px',
                  borderRadius: '50px',
                  background: 'rgba(0, 246, 255, 0.1)',
                  border: '1px solid rgba(0, 246, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: isMobile ? '6px' : '8px',
                    height: isMobile ? '6px' : '8px',
                    background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                    borderRadius: '50%'
                  }}
                />
                <span style={{
                  fontSize: isMobile ? '0.75rem' : '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  ASPIRING FULL-STACK DEVELOPER
                </span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.3 }
                }
              }}
            >
              <h1 style={{
                fontSize: isMobile ? '2.2rem' : 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: isMobile ? '15px' : '20px'
              }}>
                <span style={{ 
                  color: '#fff',
                  display: 'block',
                  marginBottom: isMobile ? '8px' : '10px'
                }}>
                  Hi, I'm <span style={{
                    background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>Aryan Dhiman</span>
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    display: 'block',
                    fontSize: isMobile ? '1.3rem' : 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: '600'
                  }}
                >
                  MERN-Stack Developer | CSE Undergrad
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.4 }
                }
              }}
            >
              <p style={{
                fontSize: isMobile ? '1rem' : '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: isMobile ? '100%' : '800px',
                lineHeight: isMobile ? '1.6' : '1.7',
                marginBottom: isMobile ? '25px' : '30px'
              }}>
                Passionate Computer Science Engineering student with expertise in{' '}
                <strong style={{ color: '#00f6ff' }}> designing, developing, and testing scalable web applications</strong>. 
                Currently pursuing B.Tech at CGC Jhanjeri with{' '}
                <strong style={{ color: '#7f5cff' }}>CGPA 9.15</strong>. 
                Actively seeking Software Engineering Internship opportunities.
              </p>
            </motion.div>

            {/* Contact Info Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.5 }
                }
              }}
            >
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: isMobile ? '12px' : '15px',
                marginBottom: isMobile ? '30px' : '40px'
              }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ 
                      scale: isMobile ? 1.02 : 1.05,
                      borderColor: 'rgba(0, 246, 255, 0.4)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '12px' : '15px',
                      padding: isMobile ? '12px 16px' : '15px 20px',
                      borderRadius: isMobile ? '10px' : '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: isMobile ? '35px' : '40px',
                        height: isMobile ? '35px' : '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(127, 92, 255, 0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00f6ff',
                        flexShrink: 0
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ 
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {info.text}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.8 }
                }
              }}
            >
              <div style={{ 
                display: 'flex', 
                gap: isMobile ? '12px' : '20px', 
                flexWrap: 'wrap', 
                marginBottom: isMobile ? '40px' : '50px' 
              }}>
                <motion.a
                  href="#projects"
                  whileHover={{ 
                    scale: isMobile ? 1.02 : 1.05,
                    boxShadow: '0 10px 30px rgba(0, 246, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: isMobile ? '8px' : '10px',
                    padding: isMobile ? '14px 24px' : '15px 30px',
                    borderRadius: isMobile ? '10px' : '12px',
                    background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                    color: '#000',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  <span>View My Projects</span>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown size={isMobile ? 18 : 20} />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  whileHover={{ 
                    scale: isMobile ? 1.02 : 1.05,
                    borderColor: 'rgba(0, 246, 255, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: isMobile ? '8px' : '10px',
                    padding: isMobile ? '14px 24px' : '15px 30px',
                    borderRadius: isMobile ? '10px' : '12px',
                    background: 'transparent',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  <span>Contact Me</span>
                  <ExternalLink size={isMobile ? 16 : 18} />
                </motion.a>

                <motion.a
                  href="#about"
                  whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: isMobile ? '8px' : '10px',
                    padding: isMobile ? '14px 24px' : '15px 30px',
                    borderRadius: isMobile ? '10px' : '12px',
                    background: 'rgba(255, 46, 99, 0.1)',
                    color: '#ff2e63',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 46, 99, 0.3)',
                    cursor: 'pointer',
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  <Award size={isMobile ? 16 : 18} />
                  <span>Achievements</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Professional Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 1 }
                }
              }}
            >
              <div style={{ marginTop: isMobile ? '25px' : '30px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: isMobile ? '10px' : '15px',
                  marginBottom: isMobile ? '15px' : '20px'
                }}>
                  <div style={{
                    height: '1px',
                    flex: 1,
                    background: 'linear-gradient(90deg, #00f6ff, transparent)',
                    borderRadius: '1px'
                  }} />
                  <span style={{
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.6)',
                    whiteSpace: 'nowrap'
                  }}>
                    PROFESSIONAL LINKS
                  </span>
                  <div style={{
                    height: '1px',
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
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: isMobile ? '12px' : '20px'
                  }}
                >
                  {professionalLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      download={link.download}
                      whileHover={{ 
                        y: isMobile ? -5 : -10,
                        scale: isMobile ? 1.02 : 1.05,
                        boxShadow: `0 10px 20px ${link.color}22`
                      }}
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{
                        padding: isMobile ? '16px' : '20px',
                        borderRadius: isMobile ? '12px' : '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '12px' : '15px',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        border: `1px solid ${link.color}22`,
                        background: `linear-gradient(135deg, ${link.color}11, ${link.color}05)`,
                        backdropFilter: 'blur(10px)'
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
                          width: isMobile ? '40px' : '50px',
                          height: isMobile ? '40px' : '50px',
                          borderRadius: isMobile ? '10px' : '12px',
                          background: `linear-gradient(135deg, ${link.color}22, ${link.color}44)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: isMobile ? '1.2rem' : '1.5rem',
                          color: link.color,
                          flexShrink: 0
                        }}
                      >
                        {link.icon}
                      </motion.div>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          fontWeight: '600',
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          color: '#fff',
                          marginBottom: '2px'
                        }}>
                          {link.label}
                        </div>
                        <div style={{ 
                          fontSize: isMobile ? '0.75rem' : '0.85rem',
                          color: 'rgba(255, 255, 255, 0.6)'
                        }}>
                          {link.desc}
                        </div>
                      </div>
                      {link.download && (
                        <Download size={isMobile ? 16 : 18} style={{ 
                          marginLeft: 'auto', 
                          color: link.color,
                          opacity: 0.8,
                          flexShrink: 0
                        }} />
                      )}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}