import { motion } from 'framer-motion';
import { 
  Code, Palette, Cpu, Zap, 
  Server, Database, Cloud, Smartphone,
  GitBranch, Layers, Globe, Terminal
} from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend & 3D',
      color: '#00f6ff',
      icon: <Code />,
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'Three.js / WebGL', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'GSAP / Framer Motion', level: 85 },
        { name: 'Tailwind CSS', level: 87 }
      ]
    },
    {
      title: 'Backend & DevOps',
      color: '#7f5cff',
      icon: <Server />,
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'MongoDB / PostgreSQL', level: 80 },
        { name: 'AWS / Vercel', level: 82 },
        { name: 'Docker / CI/CD', level: 78 },
        { name: 'REST / GraphQL APIs', level: 88 }
      ]
    },
    {
      title: 'Design & Tools',
      color: '#ff2e63',
      icon: <Palette />,
      skills: [
        { name: 'Figma / Adobe Suite', level: 90 },
        { name: 'Blender / Spline', level: 75 },
        { name: 'Git & GitHub', level: 92 },
        { name: 'Webpack / Vite', level: 85 },
        { name: 'UI/UX Principles', level: 88 }
      ]
    }
  ];

  const techStack = [
    'React', 'Three.js', 'TypeScript', 'Next.js', 'Node.js',
    'WebGL', 'GSAP', 'Framer Motion', 'Tailwind', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Redis', 'WebSockets'
  ];

  return (
    <section id="skills" className="skills-section">
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
              TECHNICAL EXPERTISE
            </span>
          </div>
          
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Mastery across the full spectrum of modern web development
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass"
              style={{ 
                padding: '40px',
                borderRadius: '24px'
              }}
              whileHover={{ y: -10 }}
            >
              {/* Category Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                marginBottom: '30px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${category.color}, ${category.color}33)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: category.color
                }}>
                  {category.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
                    {category.title}
                  </h3>
                  <div style={{ 
                    width: '40px', 
                    height: '3px', 
                    background: `linear-gradient(90deg, ${category.color}, transparent)` 
                  }} />
                </div>
              </div>

              {/* Skills List */}
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '25px' }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '10px'
                    }}>
                      <span>{skill.name}</span>
                      <span style={{ fontWeight: '600', color: category.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '60px', borderRadius: '24px' }}
        >
          <h3 style={{ 
            textAlign: 'center', 
            fontSize: '2rem',
            marginBottom: '50px'
          }}>
            <span className="gradient-text">Tech Stack</span> I Work With
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  color: '#00f6ff'
                }}
                style={{
                  padding: '12px 24px',
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
      </div>
    </section>
  );
}