// src/sections/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, Award, Book, GraduationCap, Briefcase,
  Code, Database, Cpu, Globe, Users, Clock, CheckCircle,
  Layers, Brain, Sparkles, Zap, Shield, Trophy, Calendar,
  Heart, MapPin, School, Users as TeamIcon, Star, BookOpen,
  Building, Rocket, TrendingUp, PieChart, Settings, ExternalLink
} from 'lucide-react';
import { StaggerContainer, SlideInLeft, SlideInRight, FlipCard } from '../components/Animations';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

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

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="section-wrapper"
      style={{ 
        minHeight: '100vh',
        padding: '120px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ rotateX, y }}
        className="parallax-layer layer-1"
      >
        <div className="floating-element" style={{
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(127, 92, 255, 0.1))',
          top: '10%',
          left: '-100px'
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
          <div className="section-header" style={{ marginBottom: '80px' }}>
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
                  animate={{ width: ['30px', '50px', '30px'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                    borderRadius: '1px'
                  }}
                />
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  color: '#00f6ff'
                }}>
                  PROFESSIONAL JOURNEY
                </span>
              </div>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '20px'
              }}>
                About <span className="gradient-text">Aryan Dhiman</span>
              </h2>
            </SlideInLeft>

            <SlideInLeft delay={0.4}>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                <strong style={{ color: '#00f6ff' }}>Computer Science and Engineering undergraduate</strong> with hands-on 
                experience in designing, developing, and testing scalable web applications. Currently pursuing 
                B.Tech at CGC Jhanjeri with a strong academic record and industry-relevant skills.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '800px',
                lineHeight: '1.6'
              }}>
                Actively strengthening <strong>Data Structures & Algorithms</strong>, <strong>object-oriented programming</strong>, 
                and <strong>full-stack web development</strong> while gaining practical experience through internships and leadership roles.
              </p>
            </SlideInLeft>
          </div>

          {/* Academic & Project Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '25px',
            marginBottom: '80px'
          }}>
            {academicStats.map((stat, i) => (
              <FlipCard key={stat.label} delay={0.6 + i * 0.1}>
                <motion.div
                  className="glass card-3d"
                  whileHover={{ 
                    rotateY: 180,
                    transition: { duration: 0.6 }
                  }}
                  style={{
                    padding: '35px 25px',
                    textAlign: 'center',
                    height: '100%',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    border: `1px solid ${stat.color}22`
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
                        width: '60px',
                        height: '60px',
                        margin: '0 auto 20px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        color: stat.color
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      marginBottom: '5px',
                      background: `linear-gradient(90deg, ${stat.color}, ${stat.color}dd)`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ 
                      color: '#fff',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      {stat.label}
                    </div>
                    <div style={{ 
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.9rem'
                    }}>
                      {stat.desc}
                    </div>
                  </motion.div>

                  {/* Back of Card */}
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
                      fontSize: '2.5rem',
                      marginBottom: '15px'
                    }} />
                    <div style={{
                      color: '#fff',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}>
                      {stat.label.includes('CGPA') ? 'Academic Excellence' : 'Project Excellence'}
                    </div>
                  </motion.div>
                </motion.div>
              </FlipCard>
            ))}
          </div>

          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '60px',
            marginBottom: '80px'
          }}>
            
            {/* Industry Experience */}
            <SlideInLeft delay={0.8}>
              <div className="glass" style={{ 
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(0, 246, 255, 0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Building style={{ color: '#00f6ff' }} />
                  Internship Experience & Leadership
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {industryExperience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                      className="glass card-3d"
                      style={{
                        padding: '30px',
                        background: `linear-gradient(135deg, ${exp.color}11, ${exp.color}05)`,
                        border: `1px solid ${exp.color}22`,
                        borderRadius: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Company Header */}
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        gap: '15px',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${exp.color}22, ${exp.color}44)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: exp.color,
                          flexShrink: 0
                        }}>
                          {exp.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            fontSize: '1.3rem', 
                            fontWeight: '700',
                            color: '#fff',
                            marginBottom: '5px',
                            lineHeight: '1.2'
                          }}>
                            {exp.company}
                          </h4>
                          <div style={{ 
                            fontSize: '1rem', 
                            color: exp.color,
                            fontWeight: '600',
                            marginBottom: '5px'
                          }}>
                            {exp.role}
                          </div>
                          <div style={{ 
                            fontSize: '0.85rem', 
                            color: 'rgba(255, 255, 255, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}>
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div style={{ marginBottom: '20px' }}>
                        <h5 style={{ 
                          fontSize: '1rem', 
                          color: 'rgba(255, 255, 255, 0.9)',
                          marginBottom: '12px',
                          fontWeight: '600'
                        }}>
                          Key Contributions:
                        </h5>
                        <ul style={{ 
                          paddingLeft: '20px',
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
                                fontSize: '0.9rem',
                                lineHeight: '1.5',
                                marginBottom: '8px',
                                listStyleType: 'none',
                                position: 'relative'
                              }}
                            >
                              <div style={{
                                position: 'absolute',
                                left: '-15px',
                                top: '8px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: exp.color
                              }} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap',
                          gap: '8px'
                        }}>
                          {exp.tech.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.2 + index * 0.1 + i * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              style={{
                                padding: '6px 12px',
                                background: `rgba(${parseInt(exp.color.slice(1, 3), 16)}, ${parseInt(exp.color.slice(3, 5), 16)}, ${parseInt(exp.color.slice(5, 7), 16)}, 0.15)`,
                                border: `1px solid ${exp.color}33`,
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                color: exp.color,
                                fontWeight: '500'
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: `linear-gradient(45deg, ${exp.color}11, transparent)`,
                          zIndex: 1,
                          pointerEvents: 'none'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            {/* Development Philosophy & Certifications */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr',
              gap: '40px'
            }}>
              
              {/* Development Philosophy */}
              <SlideInLeft delay={1}>
                <div className="glass" style={{ 
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid rgba(127, 92, 255, 0.1)',
                  height: '100%'
                }}>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <Brain style={{ color: '#7f5cff' }} />
                    Development Philosophy
                  </h3>
                  
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '25px'
                  }}>
                    {developmentPhilosophy.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
                        style={{
                          display: 'flex',
                          gap: '15px',
                          alignItems: 'flex-start'
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: item.color
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <h4 style={{ 
                            fontSize: '1.1rem', 
                            fontWeight: '600',
                            color: '#fff',
                            marginBottom: '8px'
                          }}>
                            {item.title}
                          </h4>
                          <p style={{ 
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                          }}>
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideInLeft>

              {/* Certifications & Career Objective */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '30px'
              }}>
                
                {/* Certifications */}
                <SlideInRight delay={1.2}>
                  <div className="glass" style={{ 
                    padding: '30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 246, 255, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <BookOpen style={{ color: '#00f6ff' }} />
                      Certifications
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: '15px'
                    }}>
                      {[
                        {
                          title: 'Technology Job Simulation',
                          issuer: 'Deloitte (Forage)',
                          icon: <Briefcase />,
                          color: '#00f6ff'
                        },
                        {
                          title: 'Programming Fundamentals using Python – Part 1',
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
                          whileHover={{ x: 5 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px',
                            background: `linear-gradient(135deg, ${cert.color}11, ${cert.color}05)`,
                            borderRadius: '12px',
                            border: `1px solid ${cert.color}22`,
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: cert.color,
                            flexShrink: 0
                          }}>
                            {cert.icon}
                          </div>
                          <div>
                            <div style={{ 
                              fontSize: '1rem', 
                              fontWeight: '600',
                              color: '#fff',
                              marginBottom: '3px'
                            }}>
                              {cert.title}
                            </div>
                            <div style={{ 
                              fontSize: '0.85rem', 
                              color: 'rgba(255, 255, 255, 0.6)'
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
                    padding: '30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 46, 99, 0.1)',
                    background: 'linear-gradient(135deg, rgba(255, 46, 99, 0.05), rgba(255, 46, 99, 0.02))'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <Target style={{ color: '#ff2e63' }} />
                      Career Objective
                    </h3>
                    <p style={{ 
                      lineHeight: '1.7', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '20px',
                      fontSize: '0.95rem'
                    }}>
                      Actively seeking a <strong style={{ color: '#ff2e63' }}>Software Engineering Internship</strong> 
                      to apply technical skills, learn from industry professionals, and contribute 
                      to impactful engineering solutions in a dynamic team environment.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap'
                    }}>
                      {['Internship Ready', 'Quick Learner', 'Adaptable', 'Problem Solver', 'Team Player', 'Agile Mindset'].map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          style={{
                            padding: '6px 12px',
                            background: 'rgba(255, 46, 99, 0.1)',
                            border: '1px solid rgba(255, 46, 99, 0.3)',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            color: '#ff2e63',
                            fontWeight: '500'
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
    </section>
  );
}