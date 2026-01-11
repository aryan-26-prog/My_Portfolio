// src/sections/Projects.jsx - FIXED VERSION
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, Star, 
  Zap, Users, ArrowRight, Code
} from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Nexus Dashboard',
      description: 'Enterprise dashboard with real-time 3D data visualization',
      tags: ['React', 'Three.js', 'WebGL', 'D3.js'],
      live: '#',
      github: '#',
      featured: true,
      stats: { users: '10K+', rating: '4.9' }
    },
    {
      title: 'Quantum E-commerce',
      description: 'Immersive 3D shopping with AR visualization',
      tags: ['Next.js', 'WebXR', 'GSAP', 'Stripe'],
      live: '#',
      github: '#',
      featured: true,
      stats: { users: '50K+', rating: '4.8' }
    },
    {
      title: 'Neuro Analytics',
      description: 'AI-powered analytics with 3D neural networks',
      tags: ['TypeScript', 'TensorFlow.js', 'WebGL'],
      live: '#',
      github: '#',
      featured: false,
      stats: { users: '5K+', rating: '4.7' }
    },
    {
      title: 'Orbit Design System',
      description: 'Complete 3D design system with component playground',
      tags: ['React', 'Three.js', 'Storybook', 'Framer'],
      live: '#',
      github: '#',
      featured: false,
      stats: { users: '2K+', rating: '5.0' }
    }
  ];

  return (
    <section id="projects" className="projects-section" style={{ minHeight: '100vh', padding: '120px 10%' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50px',
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              width: '30px',
              height: '2px',
              background: 'linear-gradient(90deg, #00f6ff, transparent)'
            }} />
            <span style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '2px',
              color: '#00f6ff'
            }}>
              PORTFOLIO
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            Featured <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff, #ff2e63)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>Projects</span>
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Immersive digital experiences that push the boundaries of web technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              style={{ 
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  zIndex: '2',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 16px',
                  background: 'linear-gradient(90deg, #ff2e63, #ff6b9d)',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div style={{
                height: '250px',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(45deg, rgba(0, 246, 255, 0.1), rgba(127, 92, 255, 0.1))'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '4rem',
                  color: 'rgba(255, 255, 255, 0.1)',
                  zIndex: '2'
                }}>
                  <Code size={80} />
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '40px' }}>
                {/* Title & Description */}
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '15px',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '30px'
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: '6px 15px',
                        background: 'rgba(0, 246, 255, 0.1)',
                        border: '1px solid rgba(0, 246, 255, 0.2)',
                        borderRadius: '50px',
                        fontSize: '0.85rem'
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
                  alignItems: 'center'
                }}>
                  {/* Stats */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Users size={16} style={{ color: '#00f6ff' }} />
                      <span style={{ fontSize: '0.9rem' }}>{project.stats.users}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Star size={16} style={{ color: '#ffd700' }} />
                      <span style={{ fontSize: '0.9rem' }}>{project.stats.rating}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ 
            padding: '60px', 
            textAlign: 'center',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.05), rgba(127, 92, 255, 0.05))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <h3 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Ready to Build Something{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff, #ff2e63)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>Amazing?</span>
          </h3>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Let's discuss your next immersive digital experience
          </p>
          
          <motion.a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px 50px',
              borderRadius: '50px',
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              color: '#000',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a Project</span>
            <ArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}