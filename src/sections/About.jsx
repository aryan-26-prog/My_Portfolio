// src/sections/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Target, Award, Book, GraduationCap, Briefcase,
  Code, Database, Cpu, Globe, Users, Clock, CheckCircle,
  Layers, Brain, Sparkles, Zap, Shield, Trophy, Calendar,
  Heart, MapPin, School, Users as TeamIcon, Star, BookOpen,
  Building, Rocket, TrendingUp, PieChart, Settings, ExternalLink,
  ChevronDown, ChevronUp, Smartphone, Tablet, Monitor
} from 'lucide-react';
import { StaggerContainer, SlideInLeft, SlideInRight, FlipCard } from '../components/Animations';

export default function About() {
  const containerRef = useRef(null);
  const [activeExperience, setActiveExperience] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Academic stats from resume
  const academicStats = [
    { value: '9.15', label: 'Current CGPA', icon: <GraduationCap />, color: '#00f6ff', desc: 'B.Tech CSE, 2nd Year' },
    { value: '100%', label: 'Class X Score', icon: <Award />, color: '#7f5cff', desc: 'HPBOSE Board' },
    { value: '93.6%', label: 'Class XII Score', icon: <Book />, color: '#ff2e63', desc: 'HPBOSE Board' },
    { value: '5+', label: 'Major Projects', icon: <Rocket />, color: '#00f6ff', desc: 'Full-Stack Apps' }
  ];

  // Industry Experience
  const industryExperience = [
    {
      id: 1,
      company: 'Codveda Technologies',
      role: 'Frontend Developer Intern',
      period: 'July 2025 – August 2025',
      achievements: [
        'Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js',
        'Improved UI performance and cross-device responsiveness through optimized components',
        'Followed software engineering best practices for clean, maintainable code'
      ],
      tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      color: '#00f6ff',
      icon: <Code />
    },
    {
      id: 2,
      company: 'Training Advisory Council (TAC)',
      role: 'Management Lead',
      period: 'Ongoing',
      achievements: [
        'Led planning and execution of technical workshops',
        'Managed placement drives and student development initiatives',
        'Organized skill development programs at CGC University'
      ],
      tech: ['Leadership', 'Event Management', 'Team Coordination'],
      color: '#ff2e63',
      icon: <TrendingUp />
    },
    {
      id: 3,
      company: 'D4 Community',
      role: 'Technical Team Member',
      period: 'Ongoing',
      achievements: [
        'Contributed to technical planning and development activities',
        'Participated in collaborative learning initiatives',
        'Worked on team-based technical projects'
      ],
      tech: ['Team Collaboration', 'Technical Planning', 'Development'],
      color: '#7f5cff',
      icon: <Users />
    }
  ];

  // Development Philosophy
  const developmentPhilosophy = [
    {
      title: 'Real-World Impact',
      description: 'Building projects that address actual societal and environmental challenges',
      icon: <Target />,
      color: '#00f6ff'
    },
    {
      title: 'Software Engineering Best Practices',
      description: 'Follow clean code principles and maintainable architecture for scalable applications',
      icon: <Shield />,
      color: '#7f5cff'
    },
    {
      title: 'Team Collaboration',
      description: 'Experience in agile development and team-based project environments',
      icon: <Users />,
      color: '#ff2e63'
    },
    {
      title: 'Performance Optimization',
      description: 'Focus on optimized components and responsive design for better user experience',
      icon: <Zap />,
      color: '#00f6ff'
    }
  ];

  // Responsive breakpoint checker
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="about-section"
      style={{ 
        minHeight: '100vh',
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 10%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Background (Mobile Optimized) */}
      <motion.div 
        style={{ y, opacity }}
        className="about-background"
      >
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: 'clamp(200px, 80vw, 500px)',
          height: 'clamp(200px, 80vw, 500px)',
          background: 'radial-gradient(circle, rgba(0, 246, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: 'clamp(200px, 80vw, 500px)',
          height: 'clamp(200px, 80vw, 500px)',
          background: 'radial-gradient(circle, rgba(127, 92, 255, 0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          zIndex: 1
        }} />
      </motion.div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        width: '100%'
      }}>
        <StaggerContainer delay={0.2}>
          {/* Section Header */}
          <div style={{ 
            marginBottom: 'clamp(40px, 8vw, 80px)',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <SlideInLeft>
              <motion.div
                className="glass"
                whileHover={{ scale: 1.02 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: 'clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  marginBottom: 'clamp(20px, 4vw, 30px)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.div
                  animate={{ width: ['20px', '40px', '20px'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                    borderRadius: '1px',
                    minWidth: '20px'
                  }}
                />
                <span style={{
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  fontWeight: '600',
                  letterSpacing: 'clamp(1px, 0.5vw, 2px)',
                  color: '#00f6ff',
                  whiteSpace: 'nowrap'
                }}>
                  PROFESSIONAL JOURNEY
                </span>
              </motion.div>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: 'clamp(15px, 3vw, 20px)',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                About <span style={{
                  background: 'linear-gradient(90deg, #00f6ff, #7f5cff, #ff2e63)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>Aryan Dhiman</span>
              </h2>
            </SlideInLeft>

            <SlideInLeft delay={0.4}>
              <div style={{
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                lineHeight: '1.6',
                marginBottom: 'clamp(15px, 3vw, 20px)',
                textAlign: isMobile ? 'center' : 'left',
                margin: isMobile ? '0 auto' : '0'
              }}>
                <strong style={{ color: '#00f6ff' }}>Computer Science and Engineering undergraduate</strong> with hands-on 
                experience in designing, developing, and testing scalable web applications.
              </div>
              <div style={{
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '800px',
                lineHeight: '1.6',
                textAlign: isMobile ? 'center' : 'left',
                margin: isMobile ? '0 auto' : '0'
              }}>
                Actively strengthening <strong style={{ color: '#7f5cff' }}>Data Structures & Algorithms</strong>, 
                <strong style={{ color: '#00f6ff' }}> object-oriented programming</strong>, and 
                <strong style={{ color: '#ff2e63' }}> full-stack web development</strong> through practical experience.
              </div>
            </SlideInLeft>
          </div>

          {/* Academic & Project Stats Grid - Mobile Responsive */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'clamp(15px, 3vw, 25px)',
            marginBottom: 'clamp(40px, 8vw, 80px)'
          }}>
            {academicStats.map((stat, i) => (
              <FlipCard key={stat.label} delay={0.6 + i * 0.1}>
                <motion.div
                  className="glass"
                  whileHover={{ 
                    scale: isMobile ? 1.02 : 1.05,
                    rotateY: isMobile ? 0 : 180
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: 'clamp(20px, 4vw, 35px) clamp(15px, 3vw, 25px)',
                    textAlign: 'center',
                    height: '100%',
                    cursor: 'pointer',
                    borderRadius: 'clamp(15px, 3vw, 20px)',
                    border: `1px solid ${stat.color}22`,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: isMobile ? 'auto' : '200px'
                  }}
                >
                  {/* Front of Card */}
                  <motion.div
                    style={{ position: 'relative', height: '100%' }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{
                        width: 'clamp(40px, 8vw, 60px)',
                        height: 'clamp(40px, 8vw, 60px)',
                        margin: '0 auto clamp(15px, 3vw, 20px)',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        color: stat.color
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div style={{
                      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                      fontWeight: '700',
                      marginBottom: 'clamp(3px, 1vw, 5px)',
                      background: `linear-gradient(90deg, ${stat.color}, ${stat.color}dd)`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      lineHeight: '1'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ 
                      color: '#fff',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                      fontWeight: '600',
                      marginBottom: 'clamp(5px, 1vw, 8px)',
                      lineHeight: '1.2'
                    }}>
                      {stat.label}
                    </div>
                    <div style={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                      lineHeight: '1.4'
                    }}>
                      {stat.desc}
                    </div>
                  </motion.div>

                  {/* Back of Card (Desktop only) */}
                  {!isMobile && (
                    <motion.div
                      initial={{ opacity: 0, rotateY: 180 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${stat.color}11, ${stat.color}22)`,
                        borderRadius: '20px',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <Sparkles style={{ 
                        color: stat.color, 
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        marginBottom: '15px'
                      }} />
                      <div style={{
                        color: '#fff',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                        fontWeight: '600',
                        textAlign: 'center',
                        lineHeight: '1.2'
                      }}>
                        {stat.label.includes('CGPA') ? 'Academic Excellence' : 'Project Excellence'}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </FlipCard>
            ))}
          </div>

          {/* Mobile Experience Toggle */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass"
              style={{
                padding: '20px',
                borderRadius: '16px',
                marginBottom: '30px',
                background: 'rgba(0, 246, 255, 0.05)',
                border: '1px solid rgba(0, 246, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '10px 0',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Building style={{ color: '#00f6ff' }} />
                  Experience & Leadership
                </span>
                {isMobileMenuOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
            </motion.div>
          )}

          {/* Main Content Grid - Responsive */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr',
            gap: 'clamp(30px, 6vw, 60px)',
            marginBottom: 'clamp(40px, 8vw, 80px)'
          }}>
            
            {/* Industry Experience - Mobile Accordion / Desktop Grid */}
            <SlideInLeft delay={0.8}>
              <div className="glass" style={{ 
                padding: isMobile ? '20px' : 'clamp(30px, 5vw, 40px)',
                borderRadius: 'clamp(15px, 3vw, 20px)',
                border: '1px solid rgba(0, 246, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                display: (isMobile && !isMobileMenuOpen) ? 'none' : 'block'
              }}>
                <h3 style={{ 
                  fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', 
                  marginBottom: 'clamp(20px, 4vw, 30px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(8px, 2vw, 12px)',
                  color: '#fff'
                }}>
                  <Building style={{ color: '#00f6ff' }} />
                  Internship Experience & Leadership
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'clamp(15px, 3vw, 25px)'
                }}>
                  {industryExperience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      whileHover={isMobile ? {} : { y: -8, transition: { type: "spring", stiffness: 300 } }}
                      whileTap={{ scale: 0.98 }}
                      className="glass"
                      onClick={() => isMobile && setActiveExperience(activeExperience === exp.id ? null : exp.id)}
                      style={{
                        padding: 'clamp(20px, 3vw, 30px)',
                        background: `linear-gradient(135deg, ${exp.color}11, ${exp.color}05)`,
                        border: `1px solid ${exp.color}22`,
                        borderRadius: 'clamp(12px, 2vw, 16px)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {/* Company Header */}
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        gap: 'clamp(12px, 2vw, 15px)',
                        marginBottom: 'clamp(15px, 3vw, 20px)'
                      }}>
                        <div style={{
                          width: 'clamp(40px, 8vw, 50px)',
                          height: 'clamp(40px, 8vw, 50px)',
                          borderRadius: 'clamp(8px, 2vw, 12px)',
                          background: `linear-gradient(135deg, ${exp.color}22, ${exp.color}44)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                          color: exp.color,
                          flexShrink: 0
                        }}>
                          {exp.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
                            fontWeight: '700',
                            color: '#fff',
                            marginBottom: 'clamp(3px, 1vw, 5px)',
                            lineHeight: '1.2'
                          }}>
                            {exp.company}
                          </h4>
                          <div style={{ 
                            fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', 
                            color: exp.color,
                            fontWeight: '600',
                            marginBottom: 'clamp(3px, 1vw, 5px)'
                          }}>
                            {exp.role}
                          </div>
                          <div style={{ 
                            fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
                            color: 'rgba(255, 255, 255, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}>
                            <Calendar size={isMobile ? 10 : 12} />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Achievements (Collapsible on Mobile) */}
                      <div style={{ 
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        display: isMobile && activeExperience !== exp.id ? 'none' : 'block'
                      }}>
                        <h5 style={{ 
                          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                          color: 'rgba(255, 255, 255, 0.9)',
                          marginBottom: 'clamp(8px, 2vw, 12px)',
                          fontWeight: '600'
                        }}>
                          Key Contributions:
                        </h5>
                        <ul style={{ 
                          paddingLeft: 'clamp(16px, 3vw, 20px)',
                          margin: 0
                        }}>
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.1 + i * 0.05 }}
                              style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                                lineHeight: '1.5',
                                marginBottom: 'clamp(6px, 1.5vw, 8px)',
                                listStyleType: 'none',
                                position: 'relative'
                              }}
                            >
                              <div style={{
                                position: 'absolute',
                                left: '-12px',
                                top: '8px',
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: exp.color
                              }} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack (Collapsible on Mobile) */}
                      <div style={{
                        display: isMobile && activeExperience !== exp.id ? 'none' : 'block'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap',
                          gap: 'clamp(5px, 1.5vw, 8px)'
                        }}>
                          {exp.tech.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.2 + index * 0.1 + i * 0.05 }}
                              whileHover={{ scale: isMobile ? 1 : 1.1, y: isMobile ? 0 : -2 }}
                              style={{
                                padding: 'clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)',
                                background: `rgba(${parseInt(exp.color.slice(1, 3), 16)}, ${parseInt(exp.color.slice(3, 5), 16)}, ${parseInt(exp.color.slice(5, 7), 16)}, 0.15)`,
                                border: `1px solid ${exp.color}33`,
                                borderRadius: '20px',
                                fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                                color: exp.color,
                                fontWeight: '500',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Expand/Collapse Indicator */}
                      {isMobile && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '15px',
                          color: exp.color,
                          fontSize: '0.8rem',
                          gap: '5px'
                        }}>
                          {activeExperience === exp.id ? (
                            <>
                              <ChevronUp size={14} />
                              <span>Tap to collapse</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown size={14} />
                              <span>Tap to expand</span>
                            </>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            {/* Development Philosophy & Certifications - Stack on Mobile */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 'clamp(20px, 4vw, 40px)'
            }}>
              
              {/* Development Philosophy */}
              <SlideInLeft delay={1}>
                <div className="glass" style={{ 
                  padding: 'clamp(25px, 4vw, 40px)',
                  borderRadius: 'clamp(15px, 3vw, 20px)',
                  border: '1px solid rgba(127, 92, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  height: isMobile ? 'auto' : '100%'
                }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', 
                    marginBottom: 'clamp(20px, 4vw, 30px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(8px, 2vw, 12px)',
                    color: '#fff'
                  }}>
                    <Brain style={{ color: '#7f5cff' }} />
                    Development Philosophy
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: 'clamp(15px, 3vw, 25px)'
                  }}>
                    {developmentPhilosophy.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
                        whileHover={isMobile ? {} : { scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: 'flex',
                          flexDirection: isMobile ? 'row' : 'column',
                          gap: 'clamp(12px, 2vw, 15px)',
                          alignItems: isMobile ? 'flex-start' : 'center',
                          padding: 'clamp(15px, 3vw, 20px)',
                          background: `linear-gradient(135deg, ${item.color}11, ${item.color}05)`,
                          border: `1px solid ${item.color}22`,
                          borderRadius: 'clamp(12px, 2vw, 16px)',
                          textAlign: isMobile ? 'left' : 'center'
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: isMobile ? 0 : 360, scale: isMobile ? 1 : 1.1 }}
                          transition={{ duration: 0.6 }}
                          style={{
                            width: 'clamp(40px, 8vw, 45px)',
                            height: 'clamp(40px, 8vw, 45px)',
                            borderRadius: 'clamp(8px, 2vw, 12px)',
                            background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: item.color,
                            fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', 
                            fontWeight: '600',
                            color: '#fff',
                            marginBottom: 'clamp(5px, 1vw, 8px)',
                            lineHeight: '1.2'
                          }}>
                            {item.title}
                          </h4>
                          <p style={{ 
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
                            lineHeight: '1.5',
                            margin: 0
                          }}>
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideInLeft>

              {/* Certifications & Career Objective - Stack on Mobile */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: 'clamp(20px, 4vw, 30px)'
              }}>
                
                {/* Certifications */}
                <SlideInRight delay={1.2}>
                  <div className="glass" style={{ 
                    padding: 'clamp(20px, 3vw, 30px)',
                    borderRadius: 'clamp(15px, 3vw, 20px)',
                    border: '1px solid rgba(0, 246, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{ 
                      fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', 
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(8px, 2vw, 12px)',
                      color: '#fff'
                    }}>
                      <BookOpen style={{ color: '#00f6ff' }} />
                      Certifications
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: 'clamp(12px, 2vw, 15px)'
                    }}>
                      {[
                        {
                          title: 'Technology Job Simulation',
                          issuer: 'Deloitte (Forage)',
                          icon: <Briefcase />,
                          color: '#00f6ff'
                        },
                        {
                          title: 'Python Fundamentals',
                          issuer: 'Infosys Springboard',
                          icon: <Code />,
                          color: '#7f5cff'
                        }
                      ].map((cert, i) => (
                        <motion.div
                          key={cert.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.3 + i * 0.1, duration: 0.6 }}
                          whileHover={isMobile ? {} : { x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'clamp(12px, 2vw, 15px)',
                            padding: 'clamp(12px, 2vw, 15px)',
                            background: `linear-gradient(135deg, ${cert.color}11, ${cert.color}05)`,
                            borderRadius: 'clamp(10px, 2vw, 12px)',
                            border: `1px solid ${cert.color}22`,
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{
                            width: 'clamp(35px, 7vw, 40px)',
                            height: 'clamp(35px, 7vw, 40px)',
                            borderRadius: 'clamp(8px, 2vw, 10px)',
                            background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: cert.color,
                            flexShrink: 0,
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
                          }}>
                            {cert.icon}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ 
                              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                              fontWeight: '600',
                              color: '#fff',
                              marginBottom: '3px',
                              wordBreak: 'break-word'
                            }}>
                              {cert.title}
                            </div>
                            <div style={{ 
                              fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
                              color: 'rgba(255, 255, 255, 0.6)',
                              wordBreak: 'break-word'
                            }}>
                              {cert.issuer}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SlideInRight>

                {/* Career Objective */}
                <SlideInRight delay={1.4}>
                  <div className="glass" style={{ 
                    padding: 'clamp(20px, 3vw, 30px)',
                    borderRadius: 'clamp(15px, 3vw, 20px)',
                    border: '1px solid rgba(255, 46, 99, 0.1)',
                    background: 'linear-gradient(135deg, rgba(255, 46, 99, 0.05), rgba(255, 46, 99, 0.02))',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{ 
                      fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', 
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(8px, 2vw, 12px)',
                      color: '#fff'
                    }}>
                      <Target style={{ color: '#ff2e63' }} />
                      Career Objective
                    </h3>
                    <p style={{ 
                      lineHeight: '1.6', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: 'clamp(15px, 3vw, 20px)',
                      fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
                    }}>
                      Seeking a <strong style={{ color: '#ff2e63' }}>Software Engineering Internship</strong> 
                      to apply skills, learn from professionals, and contribute 
                      to impactful solutions in a dynamic team.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: 'clamp(6px, 1.5vw, 10px)',
                      flexWrap: 'wrap'
                    }}>
                      {['Internship Ready', 'Quick Learner', 'Adaptable', 'Problem Solver'].map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                          whileHover={{ scale: isMobile ? 1 : 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: 'clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)',
                            background: 'rgba(255, 46, 99, 0.1)',
                            border: '1px solid rgba(255, 46, 99, 0.3)',
                            borderRadius: '20px',
                            fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                            color: '#ff2e63',
                            fontWeight: '500',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </SlideInRight>
              </div>
            </div>
          </div>
        </StaggerContainer>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .glass {
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }
          
          /* Improve touch targets */
          button, 
          .clickable {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better scroll on mobile */
          .about-section {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        @media (max-width: 480px) {
          .section-header h2 {
            font-size: 1.8rem !important;
          }
          
          .stats-grid {
            gap: 12px !important;
          }
        }
        
        /* Prevent text selection on mobile */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}