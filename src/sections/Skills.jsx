// src/sections/Skills.jsx - UPDATED BASED ON RESUME WITH 3D EFFECTS
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, Palette, Cpu, Zap, 
  Server, Database, Cloud, Smartphone,
  GitBranch, Layers, Globe, Terminal,
  Sparkles, TrendingUp, Settings, TestTube,
  Send
} from 'lucide-react';
import { StaggerContainer, SlideInLeft, SlideInRight } from '../components/Animations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const categories = {
    frontend: {
      title: 'Frontend Development',
      color: '#00f6ff',
      icon: <Code />,
      skills: [
        { name: 'React.js', level: 88, icon: <Code /> },
        { name: 'HTML5 / CSS3', level: 92, icon: <Palette /> },
        { name: 'JavaScript', level: 90, icon: <Cpu /> },
        { name: 'Tailwind CSS', level: 85, icon: <Smartphone /> },
        { name: 'Responsive Design', level: 82, icon: <Sparkles /> }
      ]
    },
    backend: {
      title: 'Backend & Database',
      color: '#7f5cff',
      icon: <Server />,
      skills: [
        { name: 'Node.js / Express', level: 85, icon: <Server /> },
        { name: 'Python / Django', level: 80, icon: <Settings /> }, 
        { name: 'MongoDB', level: 82, icon: <Database /> },
        { name: 'RESTful APIs', level: 88, icon: <Globe /> },
        { name: 'Authentication (JWT)', level: 78, icon: <Terminal /> }
      ]
    },
    programming: {
      title: 'Programming & Tools',
      color: '#ff2e63',
      icon: <Cpu />,
      skills: [
        { name: 'C++ / Java', level: 85, icon: <Cpu /> },
        { name: 'Python', level: 87, icon: <Code /> },
        { name: 'Git & GitHub', level: 90, icon: <GitBranch /> },
        { name: 'DSA', level: 88, icon: <Layers /> },
        { name: 'Postman', level: 75, icon: <Send /> }
      ]
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="skills" 
      className="section-wrapper"
      style={{ 
        minHeight: '100vh',
        padding: '120px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <motion.div 
        style={{ rotate, x }}
        className="parallax-layer layer-3"
      >
        <div className="floating-element" style={{
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(255, 46, 99, 0.1))',
          top: '50%',
          left: '10%'
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
            <SlideInLeft>
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
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
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
                  TECHNICAL EXPERTISE
                </span>
              </div>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <h2 style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '20px'
              }}>
                Skills & <span className="gradient-text">Proficiency</span>
              </h2>
            </SlideInLeft>

            <SlideInLeft delay={0.4}>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Strengthening Full-stack development  with focus on scalable web applications
              </p>
            </SlideInLeft>
          </div>

          {/* 3D Skill Sphere */}
          <div style={{ 
            position: 'relative', 
            height: '300px',
            marginBottom: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <motion.div
              animate={{ 
                rotateY: 360,
                rotateX: [0, 30, 0]
              }}
              transition={{
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 10, repeat: Infinity }
              }}
              style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                transformStyle: 'preserve-3d'
              }}
            >
              {Object.values(categories).map((category, i) => (
                <motion.div
                  key={category.title}
                  animate={{ 
                    rotateY: i * 120,
                    rotateX: 60
                  }}
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(135deg, ${category.color}22, ${category.color}44)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: category.color,
                    border: `2px solid ${category.color}55`,
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.2, z: 50 }}
                  onClick={() => setActiveCategory(Object.keys(categories)[i])}
                >
                  {category.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Category Selector */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }}>
            {Object.entries(categories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  background: activeCategory === key ? 
                    `linear-gradient(135deg, ${category.color}, ${category.color}dd)` : 
                    'rgba(255, 255, 255, 0.05)',
                  borderColor: activeCategory === key ? category.color : 'rgba(255, 255, 255, 0.2)'
                }}
                style={{
                  padding: '15px 30px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ color: category.color }}>{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Visualization */}
          <div style={{ marginBottom: '80px' }}>
            <SlideInRight delay={0.6}>
              <div className="glass" style={{ padding: '50px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px',
                  marginBottom: '40px'
                }}>
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${categories[activeCategory].color}22, ${categories[activeCategory].color}44)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      color: categories[activeCategory].color
                    }}
                  >
                    {categories[activeCategory].icon}
                  </motion.div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      marginBottom: '5px',
                      color: categories[activeCategory].color
                    }}>
                      {categories[activeCategory].title}
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Hands-on experience with modern web technologies
                    </p>
                  </div>
                </div>

                {/* Skills Progress Bars */}
                <div>
                  {categories[activeCategory].skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      viewport={{ once: true }}
                      style={{ marginBottom: '30px' }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '15px'
                        }}>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            style={{ 
                              color: categories[activeCategory].color,
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span style={{ 
                            fontSize: '1.1rem',
                            fontWeight: '500'
                          }}>
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          style={{ 
                            fontWeight: '700',
                            fontSize: '1.1rem',
                            background: `linear-gradient(90deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}dd)`,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div style={{
                        height: '10px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 1.2 + i * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}bb)`,
                            borderRadius: '5px',
                            position: 'relative'
                          }}
                        >
                          <motion.div
                            animate={{ 
                              left: ['0%', '100%', '0%']
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.2
                            }}
                            style={{
                              position: 'absolute',
                              top: 0,
                              width: '30%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                              borderRadius: '5px'
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Tech Stack Cloud */}
          <SlideInLeft delay={1}>
            <motion.div
              whileHover={{ y: -10 }}
              className="glass"
              style={{ 
                padding: '60px',
                textAlign: 'center'
              }}
            >
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}>
                <TrendingUp style={{ color: '#00f6ff' }} />
                <span className="gradient-text">Technology Stack</span>
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                {[
                  'React.js', 'Node.js', 'Express.js', 'JavaScript', 'Python',
                  'MongoDB', 'Django REST', 'HTML5', 'CSS3', 'Git',
                  'Postman', 'Google Maps API', 'Socket.IO', 'JWT', 'PHP'
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 1.2 + i * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      color: '#00f6ff',
                      boxShadow: '0 10px 20px rgba(0, 246, 255, 0.2)'
                    }}
                    style={{
                      padding: '12px 25px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '50px',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      cursor: 'default',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </SlideInLeft>
        </StaggerContainer>
      </div>
    </section>
  );
}