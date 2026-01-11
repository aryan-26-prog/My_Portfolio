// src/sections/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, Award, Book, GraduationCap, Briefcase,
  Code, Database, Cpu, Globe, Users, Clock, CheckCircle,
  Layers, Brain, Sparkles, Zap, Shield, Trophy, Calendar,
  Heart, MapPin, School, Users as TeamIcon, Star, BookOpen
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
    { value: '2023', label: 'Joined B.Tech', icon: <Calendar />, color: '#00f6ff', desc: 'CGC Jhanjeri' }
  ];

  // Hackathon achievements from resume
  const hackathonAchievements = [
    {
      title: 'Smart India Hackathon 2025',
      position: '1st Position',
      level: 'Institute Level',
      icon: <Trophy />,
      color: '#00f6ff'
    },
    {
      title: 'BharatTech-Xperience Hackathon 2.0',
      position: '11th Position',
      level: '250+ Teams | Best Community-Focused Project',
      icon: <Star />,
      color: '#7f5cff'
    },
    {
      title: 'Hackmol 6.0 (NIT Jalandhar)',
      position: '25th Position',
      level: '3000+ Teams',
      icon: <Award />,
      color: '#ff2e63'
    },
    {
      title: 'Build with India (Google Hackathon)',
      position: 'Top 5000 Teams',
      level: 'Selected from 25,000+ teams',
      icon: <Code />,
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
                  PERSONAL PROFILE
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
                <strong style={{ color: '#00f6ff' }}>Computer Science and Engineering undergraduate</strong> currently in 
                2nd year at CGC Jhanjeri, Mohali. Passionate about building scalable web applications 
                that solve real-world problems, with a strong foundation in full-stack development.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '800px',
                lineHeight: '1.6'
              }}>
                Actively participating in hackathons and building projects that focus on social impact, 
                while strengthening my skills in <strong>Data Structures & Algorithms</strong>, 
                <strong>object-oriented programming</strong>, and modern web technologies.
              </p>
            </SlideInLeft>
          </div>

          {/* Academic Stats Grid */}
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
                      Academic Excellence
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
            
            {/* Hackathon Achievements */}
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
                  <Trophy style={{ color: '#ffd700' }} />
                  Hackathon Achievements
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px'
                }}>
                  {hackathonAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                      style={{
                        padding: '25px',
                        background: `linear-gradient(135deg, ${achievement.color}11, ${achievement.color}05)`,
                        border: `1px solid ${achievement.color}22`,
                        borderRadius: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '15px',
                        marginBottom: '15px'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${achievement.color}22, ${achievement.color}44)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: achievement.color
                        }}>
                          {achievement.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ 
                            fontSize: '1.1rem', 
                            fontWeight: '600',
                            color: '#fff',
                            marginBottom: '5px'
                          }}>
                            {achievement.title}
                          </h4>
                          <div style={{ 
                            fontSize: '0.85rem', 
                            color: achievement.color,
                            fontWeight: '500'
                          }}>
                            {achievement.position}
                          </div>
                        </div>
                      </div>
                      <p style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        marginLeft: '65px'
                      }}>
                        {achievement.level}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            {/* Education & Leadership */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr',
              gap: '40px'
            }}>
              
              {/* Education Timeline */}
              <SlideInLeft delay={1}>
                <div className="glass" style={{ 
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid rgba(127, 92, 255, 0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <School style={{ color: '#7f5cff' }} />
                    Education Timeline
                  </h3>
                  
                  <div style={{ position: 'relative' }}>
                    {/* Timeline line */}
                    <div style={{
                      position: 'absolute',
                      left: '30px',
                      top: '0',
                      bottom: '0',
                      width: '2px',
                      background: 'linear-gradient(180deg, #7f5cff, rgba(127, 92, 255, 0.3))',
                      zIndex: 1
                    }} />
                    
                    {[
                      {
                        year: '2023 - Present',
                        title: 'Bachelor of Technology (CSE)',
                        institution: 'Changigarh Group of Colleges, Jhanjeri, Mohali',
                        details: '2nd Year | Current CGPA: 9.15',
                        icon: <GraduationCap />,
                        color: '#7f5cff'
                      },
                      {
                        year: '2021',
                        title: 'Senior Secondary (Class XII)',
                        institution: 'Sunrise Public School, Baruna, HP',
                        details: 'HPBOSE Board | Percentage: 93.6%',
                        icon: <Book />,
                        color: '#ff2e63'
                      },
                      {
                        year: '2019',
                        title: 'Secondary (Class X)',
                        institution: 'Sunrise Public School, Baruna, HP',
                        details: 'HPBOSE Board | Percentage: 100%',
                        icon: <Award />,
                        color: '#00f6ff'
                      }
                    ].map((edu, i) => (
                      <motion.div
                        key={edu.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
                        style={{
                          display: 'flex',
                          gap: '25px',
                          marginBottom: '35px',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {/* Timeline dot */}
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: edu.color,
                          border: '3px solid #0a0a0f',
                          flexShrink: 0,
                          marginTop: '5px',
                          position: 'relative',
                          zIndex: 3
                        }} />
                        
                        <div style={{ flex: 1 }}>
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px',
                            marginBottom: '5px'
                          }}>
                            <div style={{ 
                              color: edu.color,
                              fontSize: '1.2rem'
                            }}>
                              {edu.icon}
                            </div>
                            <h4 style={{ 
                              fontSize: '1.2rem', 
                              fontWeight: '600',
                              color: '#fff'
                            }}>
                              {edu.title}
                            </h4>
                          </div>
                          <div style={{ 
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1rem',
                            fontWeight: '500',
                            marginBottom: '5px',
                            marginLeft: '35px'
                          }}>
                            {edu.institution}
                          </div>
                          <div style={{ 
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.9rem',
                            marginLeft: '35px',
                            marginBottom: '8px'
                          }}>
                            {edu.details}
                          </div>
                          <div style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '5px 15px',
                            background: `rgba(${parseInt(edu.color.slice(1, 3), 16)}, ${parseInt(edu.color.slice(3, 5), 16)}, ${parseInt(edu.color.slice(5, 7), 16)}, 0.1)`,
                            border: `1px solid ${edu.color}33`,
                            borderRadius: '20px',
                            marginLeft: '35px',
                            fontSize: '0.85rem'
                          }}>
                            <Calendar size={12} style={{ color: edu.color }} />
                            <span style={{ color: edu.color, fontWeight: '500' }}>
                              {edu.year}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideInLeft>

              {/* Leadership & Certifications */}
              <SlideInRight delay={1.2}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr',
                  gap: '30px'
                }}>
                  
                  {/* Leadership Experience */}
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
                      <TeamIcon style={{ color: '#00f6ff' }} />
                      Leadership Experience
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: '20px'
                    }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                      >
                        <div style={{ 
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(0, 246, 255, 0.2))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#00f6ff',
                            flexShrink: 0
                          }}>
                            <Users size={20} />
                          </div>
                          <div>
                            <h4 style={{ 
                              fontSize: '1.1rem', 
                              fontWeight: '600',
                              color: '#fff',
                              marginBottom: '5px'
                            }}>
                              Management Lead, Training Advisory Council (TAC)
                            </h4>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: '0.9rem',
                              lineHeight: '1.5'
                            }}>
                              Led planning and execution of technical workshops, placement drives, 
                              and student development initiatives at CGC University.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                      >
                        <div style={{ 
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, rgba(127, 92, 255, 0.1), rgba(127, 92, 255, 0.2))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#7f5cff',
                            flexShrink: 0
                          }}>
                            <Code size={20} />
                          </div>
                          <div>
                            <h4 style={{ 
                              fontSize: '1.1rem', 
                              fontWeight: '600',
                              color: '#fff',
                              marginBottom: '5px'
                            }}>
                              Technical Team Member, D4 Community
                            </h4>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: '0.9rem',
                              lineHeight: '1.5'
                            }}>
                              Contributed to technical planning, development activities, 
                              and collaborative learning initiatives.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="glass" style={{ 
                    padding: '30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 46, 99, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <BookOpen style={{ color: '#ff2e63' }} />
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
                          icon: <Briefcase />
                        },
                        {
                          title: 'Programming Fundamentals using Python – Part 1',
                          issuer: 'Infosys Springboard',
                          icon: <Code />
                        }
                      ].map((cert, i) => (
                        <motion.div
                          key={cert.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px',
                            background: 'rgba(255, 46, 99, 0.05)',
                            borderRadius: '12px'
                          }}
                        >
                          <div style={{
                            color: '#ff2e63',
                            fontSize: '1.2rem'
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
                </div>
              </SlideInRight>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}