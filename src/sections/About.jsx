// src/sections/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  User, Target, Award, Globe, 
  Code, Palette, Cpu, Zap,
  Rocket, Layers, Brain, Sparkles
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

  const stats = [
    { value: '50+', label: 'Projects', icon: <Rocket />, color: '#00f6ff' },
    { value: '3+', label: 'Years Experience', icon: <Award />, color: '#7f5cff' },
    { value: '100%', label: 'Client Satisfaction', icon: <Target />, color: '#ff2e63' },
    { value: 'Global', label: 'Remote Work', icon: <Globe />, color: '#00f6ff' }
  ];

  const timeline = [
    { year: '2024', title: 'Lead 3D Developer', company: 'MetaLab', desc: 'Enterprise WebGL solutions' },
    { year: '2023', title: 'Frontend Architect', company: 'Google', desc: 'Next-gen web experiences' },
    { year: '2022', title: 'Creative Developer', company: 'Apple', desc: '3D interactive interfaces' },
    { year: '2021', title: 'WebGL Specialist', company: 'Netflix', desc: 'Cinematic web animations' }
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
      {/* Animated Background Elements */}
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
                  ABOUT ME
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
                Building The <span className="gradient-text">Future</span> of Web
              </h2>
            </SlideInLeft>

            <SlideInLeft delay={0.4}>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                lineHeight: '1.6'
              }}>
                Transforming ideas into immersive digital experiences through 
                cutting-edge technology and creative innovation.
              </p>
            </SlideInLeft>
          </div>

          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '60px',
            marginBottom: '80px'
          }}>
            {/* Left Column - Bio */}
            <div>
              <SlideInLeft delay={0.6}>
                <div className="glass" style={{ 
                  padding: '50px',
                  marginBottom: '40px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px',
                    marginBottom: '30px'
                  }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem'
                      }}
                    >
                      <User />
                    </motion.div>
                    <div>
                      <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>Aryan Sharma</h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Senior 3D Web Developer
                      </p>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.8', 
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '30px'
                    }}
                  >
                    With over <strong style={{ color: '#00f6ff' }}>3 years</strong> of expertise in 
                    creating immersive web experiences, I blend cutting-edge 3D technology 
                    with elegant UI design to build digital products that captivate and convert.
                  </motion.p>

                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {['React', 'Three.js', 'WebGL', 'TypeScript', 'GSAP', 'Framer'].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        style={{
                          padding: '10px 20px',
                          background: 'rgba(0, 246, 255, 0.1)',
                          border: '1px solid rgba(0, 246, 255, 0.2)',
                          borderRadius: '50px',
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SlideInLeft>
            </div>

            {/* Right Column - Stats */}
            <div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '30px',
                marginBottom: '40px'
              }}>
                {stats.map((stat, i) => (
                  <FlipCard key={stat.label} delay={0.6 + i * 0.1}>
                    <motion.div
                      className="glass card-3d"
                      whileHover={{ 
                        rotateY: 180,
                        transition: { duration: 0.6 }
                      }}
                      style={{
                        padding: '40px 30px',
                        textAlign: 'center',
                        height: '100%',
                        cursor: 'pointer'
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
                          marginBottom: '10px',
                          background: `linear-gradient(90deg, ${stat.color}, ${stat.color}dd)`,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent'
                        }}>
                          {stat.value}
                        </div>
                        <div style={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.9rem'
                        }}>
                          {stat.label}
                        </div>
                      </motion.div>

                      {/* Back of Card - Revealed on Hover */}
                      <motion.div
                        initial={{ opacity: 0, rotateY: 180 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          padding: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${stat.color}11, ${stat.color}22)`,
                          borderRadius: '20px',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <Sparkles style={{ color: stat.color, fontSize: '2rem' }} />
                      </motion.div>
                    </motion.div>
                  </FlipCard>
                ))}
              </div>

              {/* Philosophy Card */}
              <SlideInRight delay={1}>
                <div className="glass" style={{ padding: '40px' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <Brain style={{ color: '#00f6ff' }} />
                    Development Philosophy
                  </h3>
                  <p style={{ 
                    lineHeight: '1.8', 
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '25px'
                  }}>
                    I believe in creating web experiences that are not just visually 
                    impressive but also performant, accessible, and user-focused.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap'
                    }}
                  >
                    {['Innovation', 'Performance', 'Design', 'Accessibility'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        style={{
                          padding: '10px 20px',
                          background: 'rgba(0, 246, 255, 0.1)',
                          border: '1px solid rgba(0, 246, 255, 0.2)',
                          borderRadius: '50px',
                          fontSize: '0.9rem'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </SlideInRight>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <SlideInLeft delay={1.2}>
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '50px',
                textAlign: 'center'
              }}>
                Professional <span className="gradient-text">Journey</span>
              </h3>
            </SlideInLeft>

            <div style={{ 
              position: 'relative',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {/* Timeline Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 1.4 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: 'linear-gradient(to bottom, transparent, #00f6ff, #7f5cff, transparent)',
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }}
              />

              {/* Timeline Items */}
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + i * 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'relative',
                    marginBottom: '60px',
                    width: i % 2 === 0 ? '45%' : '55%',
                    marginLeft: i % 2 === 0 ? '0' : '45%',
                    zIndex: 2
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass"
                    style={{ padding: '30px' }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '20px',
                      marginBottom: '15px'
                    }}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '1.2rem',
                          color: 'black'
                        }}
                      >
                        {item.year}
                      </motion.div>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>
                          {item.title}
                        </h4>
                        <div style={{ 
                          color: '#00f6ff',
                          fontWeight: '600',
                          marginBottom: '5px'
                        }}>
                          {item.company}
                        </div>
                      </div>
                    </div>
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: '1.6'
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* Timeline Dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    style={{
                      position: 'absolute',
                      top: '30px',
                      [i % 2 === 0 ? 'right' : 'left']: '-25px',
                      width: '20px',
                      height: '20px',
                      background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                      borderRadius: '50%',
                      border: '4px solid #050507',
                      zIndex: 3
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}