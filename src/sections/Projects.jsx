// src/sections/Projects.jsx - WITH ADVANCED ANIMATIONS
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, Star, 
  Zap, Users, ArrowRight, Code,
  ChevronLeft, ChevronRight, Maximize2
} from 'lucide-react';
import { StaggerContainer, SlideInUp, ScaleIn } from '../components/Animations';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const projects = [
    {
      title: 'Nexus Dashboard',
      description: 'Enterprise dashboard with real-time 3D data visualization and interactive charts',
      tags: ['React', 'Three.js', 'WebGL', 'D3.js', 'Node.js'],
      live: '#',
      github: '#',
      featured: true,
      stats: { users: '10K+', performance: '99%', rating: '4.9' },
      color: '#00f6ff'
    },
    {
      title: 'Quantum E-commerce',
      description: 'Immersive 3D shopping experience with AR product visualization',
      tags: ['Next.js', 'WebXR', 'GSAP', 'Stripe', 'Redis'],
      live: '#',
      github: '#',
      featured: true,
      stats: { users: '50K+', performance: '98%', rating: '4.8' },
      color: '#7f5cff'
    },
    {
      title: 'Neuro Analytics',
      description: 'AI-powered analytics platform with interactive 3D neural networks',
      tags: ['TypeScript', 'TensorFlow.js', 'WebGL', 'Python', 'FastAPI'],
      live: '#',
      github: '#',
      featured: false,
      stats: { users: '5K+', performance: '97%', rating: '4.7' },
      color: '#ff2e63'
    },
    {
      title: 'Orbit Design System',
      description: 'Complete 3D design system with interactive component playground',
      tags: ['React', 'Three.js', 'Storybook', 'Framer', 'Webpack'],
      live: '#',
      github: '#',
      featured: false,
      stats: { users: '2K+', performance: '100%', rating: '5.0' },
      color: '#00f6ff'
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
      className="section-wrapper"
      style={{ 
        minHeight: '100vh',
        padding: '120px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="parallax-layer layer-2"
      >
        <div className="floating-element" style={{
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(127, 92, 255, 0.1), rgba(255, 46, 99, 0.1))',
          bottom: '10%',
          right: '10%'
        }} />
      </motion.div>

      <div className="container" style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <StaggerContainer delay={0.2}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <SlideInUp>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                marginBottom: '30px'
              }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00f6ff, #7f5cff)'
                  }}
                />
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  color: '#00f6ff'
                }}>
                  FEATURED WORK
                </span>
              </div>
            </SlideInUp>

            <SlideInUp delay={0.2}>
              <h2 style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '20px'
              }}>
                Recent <span className="gradient-text">Projects</span>
              </h2>
            </SlideInUp>

            <SlideInUp delay={0.4}>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Immersive digital experiences that push the boundaries of web technology
              </p>
            </SlideInUp>
          </div>

          {/* Project Carousel */}
          <div style={{ position: 'relative', marginBottom: '80px' }}>
            {/* Navigation Buttons */}
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <ChevronLeft />
            </motion.button>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <ChevronRight />
            </motion.button>

            {/* Projects Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50, rotateY: 180 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -20,
                    rotateY: activeProject === i ? 0 : 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  animate={{ 
                    scale: activeProject === i ? 1.05 : 1,
                    zIndex: activeProject === i ? 10 : 1
                  }}
                  onClick={() => setActiveProject(i)}
                  className="glass card-3d"
                  style={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '8px 16px',
                        background: 'linear-gradient(90deg, #ff2e63, #ff6b9d)',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      <Star size={12} />
                      Featured
                    </motion.div>
                  )}

                  {/* Project Visual */}
                  <motion.div
                    animate={{ 
                      background: `linear-gradient(45deg, ${project.color}22, ${project.color}44)`
                    }}
                    style={{
                      height: '250px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: activeProject === i ? 360 : 0,
                        scale: activeProject === i ? 1.2 : 1
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '4rem',
                        color: `${project.color}33`,
                        zIndex: 2
                      }}
                    >
                      <Code size={80} />
                    </motion.div>

                    {/* Animated Grid Overlay */}
                    <motion.div
                      animate={{ 
                        opacity: activeProject === i ? 0.3 : 0.1
                      }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `linear-gradient(${project.color}22 1px, transparent 1px),
                                         linear-gradient(90deg, ${project.color}22 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        zIndex: 1
                      }}
                    />
                  </motion.div>

                  {/* Project Content */}
                  <div style={{ padding: '40px' }}>
                    <motion.h3
                      animate={{ color: activeProject === i ? project.color : '#fff' }}
                      style={{ 
                        fontSize: '1.8rem', 
                        marginBottom: '15px',
                        lineHeight: '1.3'
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: '1.6',
                      marginBottom: '25px'
                    }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '30px'
                      }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + i * 0.1 + tagIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          style={{
                            padding: '8px 16px',
                            background: `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.1)`,
                            border: `1px solid ${project.color}33`,
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            cursor: 'default'
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Stats & Actions */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        style={{ display: 'flex', gap: '20px' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Users size={16} style={{ color: project.color }} />
                          <span style={{ fontSize: '0.9rem' }}>{project.stats.users}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Zap size={16} style={{ color: project.color }} />
                          <span style={{ fontSize: '0.9rem' }}>{project.stats.performance}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Star size={16} style={{ color: '#ffd700' }} />
                          <span style={{ fontSize: '0.9rem' }}>{project.stats.rating}</span>
                        </div>
                      </motion.div>

                      {/* Actions */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                        style={{ display: 'flex', gap: '10px' }}
                      >
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: 'white'
                          }}
                        >
                          <Eye size={18} />
                        </motion.a>
                        
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: 'white'
                          }}
                        >
                          <Github size={18} />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(45deg, ${project.color}11, transparent)`,
                      zIndex: 3,
                      pointerEvents: 'none'
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Project Indicator */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px',
              marginTop: '40px'
            }}>
              {projects.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  animate={{ 
                    scale: activeProject === i ? 1.2 : 1,
                    background: activeProject === i ? '#00f6ff' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <ScaleIn delay={1.2}>
            <motion.div
              whileHover={{ y: -10 }}
              className="glass"
              style={{ 
                padding: '60px', 
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.05), rgba(127, 92, 255, 0.05))',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
                style={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-100px',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(0, 246, 255, 0.1), transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 1
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}
                >
                  Ready to Build{' '}
                  <motion.span
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(0, 246, 255, 0.5)',
                        '0 0 20px rgba(0, 246, 255, 0.8)',
                        '0 0 10px rgba(0, 246, 255, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="gradient-text"
                  >
                    Something Amazing?
                  </motion.span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    lineHeight: '1.6'
                  }}
                >
                  Let's discuss your next immersive digital experience
                </motion.p>
                
                <motion.a
                  href="#contact"
                  className="btn btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 246, 255, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: '20px 50px' }}
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Start a Project
                  </motion.span>
                  <ArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </ScaleIn>
        </StaggerContainer>
      </div>
    </section>
  );
}