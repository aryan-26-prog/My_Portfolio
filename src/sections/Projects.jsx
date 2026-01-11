import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, Star, 
  Zap, Users, ArrowRight, Code,
  ChevronLeft, ChevronRight,
  Globe, Map, Leaf, ShoppingCart
} from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], isMobile ? [5, -5] : [15, -15]);
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [-50, 50] : [-100, 100]);

  const projects = [
    {
      title: 'GamEd: Gamified Environmental Education Platform',
      description: 'Full-stack role-based learning platform for environmental education with interactive modules and real-time user engagement analytics.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      live: '#',
      github: 'https://github.com/aryan-26-prog/GamEd',
      featured: true,
      stats: { performance: '95%', rating: '4.7' },
      color: '#00f6ff',
      icon: <Leaf size={isMobile ? 32 : 48} />
    },
    {
      title: 'Smart Rasoi: AI-Powered Food Redistribution Platform',
      description: 'Real-time platform connecting food donors and NGOs using AI-based image analysis for food quantity and freshness estimation.',
      tags: ['React.js', 'Django REST', 'Google Maps API', 'Python', 'JavaScript'],
      live: '#',
      github: 'https://github.com/aryan-26-prog/RasoiAI',
      featured: true,
      stats: { performance: '92%', rating: '4.8' },
      color: '#7f5cff',
      icon: <ShoppingCart size={isMobile ? 32 : 48} />
    },
    {
      title: 'CivicTrack: Smart Civic Issue Reporting System',
      description: 'Geo-mapped civic issue reporting system with real-time status tracking and admin management for issue verification and resolution.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
      live: '#',
      github: 'https://github.com/aryan-26-prog/Civictrack',
      featured: false,
      stats: { performance: '94%', rating: '4.6' },
      color: '#ff2e63',
      icon: <Map size={isMobile ? 32 : 48} />
    },
    {
      title: 'KKV: Digital Farmer Marketplace',
      description: 'Web-based marketplace enabling direct farmer-to-buyer trade with AI-based plant disease detection and live mandi price updates.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
      live: '#',
      github: 'https://github.com/aryan-26-prog/Kisaan-Krishi-Aur-Vayapaar',
      featured: false,
      stats: { performance: '90%', rating: '4.5' },
      color: '#00f6ff',
      icon: <Globe size={isMobile ? 32 : 48} />
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      style={{ 
        minHeight: '100vh',
        padding: isMobile ? '60px 20px' : '120px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ y }}
        className="parallax-layer layer-2"
      >
        <div style={{
          position: 'absolute',
          width: isMobile ? '150px' : '300px',
          height: isMobile ? '150px' : '300px',
          background: 'linear-gradient(135deg, rgba(127, 92, 255, 0.1), rgba(255, 46, 99, 0.1))',
          bottom: '10%',
          right: '10%',
          filter: 'blur(40px)',
          borderRadius: '50%'
        }} />
      </motion.div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '50px' : '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isMobile ? '8px' : '12px',
              padding: isMobile ? '10px 16px' : '12px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              marginBottom: isMobile ? '20px' : '30px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                width: isMobile ? '16px' : '20px',
                height: isMobile ? '16px' : '20px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f6ff, #7f5cff)'
              }}
            />
            <span style={{
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              fontWeight: '600',
              letterSpacing: isMobile ? '1px' : '2px',
              color: '#00f6ff'
            }}>
              REAL-WORLD PROJECTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: isMobile ? '2rem' : 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: isMobile ? '15px' : '20px'
            }}
          >
            Portfolio <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Full-stack web applications built with modern technologies and real-world impact
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '30px' : '40px',
          marginBottom: isMobile ? '50px' : '80px'
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: isMobile ? -10 : -20,
                transition: { type: "spring", stiffness: 300 }
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass"
              style={{ 
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setActiveProject(i)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    background: 'linear-gradient(90deg, #ff2e63, #ff6b9d)',
                    borderRadius: '50px',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontWeight: '600'
                  }}
                >
                  <Star size={isMobile ? 10 : 12} />
                  Hackathon Winner
                </motion.div>
              )}

              {/* Project Visual */}
              <div
                style={{
                  height: isMobile ? '180px' : '250px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(45deg, ${project.color}22, ${project.color}44)`
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: activeProject === i ? (isMobile ? 1.1 : 1.2) : 1
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: `${project.color}33`,
                    zIndex: 2
                  }}
                >
                  {project.icon}
                </motion.div>
              </div>

              {/* Project Content */}
              <div style={{ padding: isMobile ? '25px' : '40px' }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.3rem' : '1.8rem', 
                  marginBottom: isMobile ? '12px' : '15px',
                  lineHeight: '1.3',
                  color: '#fff'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: isMobile ? '20px' : '25px',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: isMobile ? '8px' : '10px',
                  marginBottom: isMobile ? '25px' : '30px'
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: isMobile ? '6px 12px' : '8px 16px',
                        background: `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.1)`,
                        border: `1px solid ${project.color}33`,
                        borderRadius: '50px',
                        fontSize: isMobile ? '0.75rem' : '0.85rem',
                        cursor: 'default'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats & Actions */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '15px' : '0'
                }}>
                  {/* Stats */}
                  <div style={{ 
                    display: 'flex', 
                    gap: isMobile ? '15px' : '20px',
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: isMobile ? 'space-between' : 'flex-start'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={isMobile ? 14 : 16} style={{ color: project.color }} />
                      <span style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{project.stats.users}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Zap size={isMobile ? 14 : 16} style={{ color: project.color }} />
                      <span style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{project.stats.performance}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={isMobile ? 14 : 16} style={{ color: '#ffd700' }} />
                      <span style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{project.stats.rating}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ 
                    display: 'flex', 
                    gap: isMobile ? '15px' : '10px',
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: isMobile ? 'space-between' : 'flex-end'
                  }}>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        padding: isMobile ? '10px 20px' : '0',
                        background: isMobile ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                        borderRadius: isMobile ? '50px' : '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: 'white',
                        width: isMobile ? 'auto' : '40px',
                        height: isMobile ? 'auto' : '40px'
                      }}
                    >
                      <Eye size={isMobile ? 16 : 18} />
                      {isMobile && <span style={{ marginLeft: '8px' }}>Live Demo</span>}
                    </motion.a>
                    
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        padding: isMobile ? '10px 20px' : '0',
                        background: isMobile ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                        borderRadius: isMobile ? '50px' : '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: 'white',
                        width: isMobile ? 'auto' : '40px',
                        height: isMobile ? 'auto' : '40px'
                      }}
                    >
                      <Github size={isMobile ? 16 : 18} />
                      {isMobile && <span style={{ marginLeft: '8px' }}>GitHub</span>}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="glass"
          style={{ 
            padding: isMobile ? '30px' : '60px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.05), rgba(127, 92, 255, 0.05))',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            marginBottom: isMobile ? '40px' : '80px'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: isMobile ? '1.5rem' : '2.5rem', 
                marginBottom: isMobile ? '15px' : '20px',
                lineHeight: '1.2'
              }}
            >
              Looking for a{' '}
              <span style={{
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Software Engineering Intern?
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                fontSize: isMobile ? '0.95rem' : '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                marginBottom: isMobile ? '25px' : '40px'
              }}
            >
              Let's discuss how I can contribute to your team with my full-stack development skills
            </motion.p>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: '0 0 30px rgba(0, 246, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? '16px 32px' : '20px 50px',
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                border: 'none',
                borderRadius: '50px',
                color: '#000',
                fontSize: isMobile ? '0.95rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none'
              }}
            >
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Contact Me
              </motion.span>
              <ArrowRight size={isMobile ? 18 : 20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}