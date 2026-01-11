import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Github, Calendar,
  CheckCircle, Loader,
  User, MessageSquare, FileText,
  Briefcase, GraduationCap, Code,
  Instagram
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', inquiryType: '' });
    }, 3000);
  };

  // Contact information - Updated with resume data
  const contactInfo = [
    { 
      icon: <Mail />, 
      title: 'Email', 
      value: 'aryandhiman2605@gmail.com', 
      desc: 'Response within 24 hours',
      color: '#00f6ff',
      link: 'mailto:aryandhiman2605@gmail.com'
    },
    { 
      icon: <Phone />, 
      title: 'Phone', 
      value: '+91 9805297267', 
      desc: 'Available for calls',
      color: '#7f5cff',
      link: 'tel:+919805297267'
    },
    { 
      icon: <MapPin />, 
      title: 'Location', 
      value: 'Mohali, Punjab', 
      desc: 'Pursuing B.Tech at CGC',
      color: '#ff2e63'
    }
  ];

  // Social links - Updated with resume data
  const socialLinks = [
    { 
      icon: <Linkedin />, 
      platform: 'LinkedIn', 
      url: 'https://linkedin.com/in/aryan-dhiman-2605ad', 
      color: '#0077B5',
      label: 'Connect professionally'
    },
    { 
      icon: <Github />, 
      platform: 'GitHub', 
      url: 'https://github.com/aryan-26-prog', 
      color: '#FFFFFF',
      label: 'View projects'
    },
    { 
      icon: <Instagram />, 
      platform: 'Instagram', 
      url: 'https://www.instagram.com/aryandhiman_01', 
      color: '#FFFFFF',
      label: 'View projects'
    }
  ];

  // Inquiry types - Updated for internship seeker
  const inquiryTypes = [
    { icon: <Briefcase />, label: 'Internship Opportunity', value: 'internship' },
    { icon: <GraduationCap />, label: 'Project Collaboration', value: 'collaboration' },
    { icon: <Code />, label: 'Technical Discussion', value: 'technical' },
    { icon: <MessageSquare />, label: 'General Inquiry', value: 'general' }
  ];

  // Floating particles effect
  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById('contact-particles');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: ${i % 3 === 0 ? '#00f6ff' : i % 3 === 1 ? '#7f5cff' : '#ff2e63'};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          border-radius: 50%;
          filter: blur(1px);
          opacity: ${Math.random() * 0.2 + 0.1};
          animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
          animation-delay: ${Math.random() * 5}s;
          z-index: 1;
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
    return () => {
      const container = document.getElementById('contact-particles');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section id="contact" className="contact-section" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 5%',
      minHeight: '100vh'
    }}>
      
      {/* Background Particles */}
      <div id="contact-particles" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 246, 255, 0.1), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50px',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div style={{
              width: '6px',
              height: '6px',
              background: '#00f6ff',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '2px',
              color: '#00f6ff'
            }}>
              GET IN TOUCH
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '20px'
            }}
          >
            Let's{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Build Together
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Seeking software engineering internship opportunities to contribute, learn and grow.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '60px'
        }}>
          
          {/* On Mobile: Single Column */}
          {/* On Desktop: Two Columns */}
          <style>{`
            @media (min-width: 1024px) {
              .contact-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 60px !important;
              }
            }
          `}</style>

          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px'
          }}>
            
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass"
              style={{ 
                padding: '40px',
                borderRadius: '20px'
              }}
            >
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <User style={{ color: '#00f6ff' }} />
                Contact Information
              </h3>

              {/* Contact Details */}
              <div style={{ marginBottom: '40px' }}>
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link ? '_blank' : '_self'}
                    rel={info.link ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '16px',
                      marginBottom: '15px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: `rgba(${parseInt(info.color.slice(1, 3), 16)}, ${parseInt(info.color.slice(3, 5), 16)}, ${parseInt(info.color.slice(5, 7), 16)}, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: info.color,
                      flexShrink: 0
                    }}>
                      {info.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '0.85rem', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '4px',
                        fontWeight: '500'
                      }}>
                        {info.title}
                      </div>
                      <div style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: '600',
                        marginBottom: '4px',
                        color: '#fff'
                      }}>
                        {info.value}
                      </div>
                      <div style={{ 
                        fontSize: '0.85rem', 
                        color: 'rgba(255, 255, 255, 0.5)'
                      }}>
                        {info.desc}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{ 
                  marginBottom: '20px', 
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Code size={20} style={{ color: '#00f6ff' }} />
                  Connect with Me
                </h4>
                <div style={{ 
                  display: 'flex', 
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '15px'
                }}>
                  Looking for software engineering internship opportunities in web development
                </p>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass"
              style={{ 
                padding: '40px',
                borderRadius: '20px'
              }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    style={{ 
                      textAlign: 'center', 
                      padding: '40px 20px'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 25px',
                        fontSize: '2.5rem'
                      }}
                    >
                      <CheckCircle />
                    </motion.div>
                    
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      marginBottom: '15px',
                      background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                      Message Sent!
                    </h3>
                    
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '30px',
                      fontSize: '1.1rem'
                    }}>
                      I'll review your message and get back to you soon regarding internship opportunities.
                    </p>
                    
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '15px 30px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50px',
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <Send size={18} />
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      marginBottom: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <Send style={{ color: '#00f6ff' }} />
                      Contact for Opportunities
                    </h3>

                    {/* Inquiry Type Selection */}
                    <div style={{ marginBottom: '30px' }}>
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '12px',
                        marginBottom: '25px'
                      }}>
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({...formData, inquiryType: type.value})}
                            style={{
                              padding: '15px',
                              background: formData.inquiryType === type.value 
                                ? 'rgba(0, 246, 255, 0.1)' 
                                : 'rgba(255, 255, 255, 0.05)',
                              border: formData.inquiryType === type.value 
                                ? '1px solid #00f6ff' 
                                : '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '12px',
                              color: 'white',
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '8px',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <div style={{ 
                              fontSize: '1.5rem',
                              color: formData.inquiryType === type.value ? '#00f6ff' : 'rgba(255, 255, 255, 0.7)'
                            }}>
                              {type.icon}
                            </div>
                            <div style={{ 
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              textAlign: 'center'
                            }}>
                              {type.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Name Input */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px',
                          fontWeight: '500',
                          fontSize: '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <User size={16} />
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          onFocus={() => setActiveInput('name')}
                          onBlur={() => setActiveInput(null)}
                          required
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: activeInput === 'name' 
                              ? '1px solid #00f6ff' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Email Input */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px',
                          fontWeight: '500',
                          fontSize: '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <Mail size={16} />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          onFocus={() => setActiveInput('email')}
                          onBlur={() => setActiveInput(null)}
                          required
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: activeInput === 'email' 
                              ? '1px solid #00f6ff' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          placeholder="your.company@example.com"
                        />
                      </div>

                      {/* Message Input */}
                      <div style={{ marginBottom: '30px' }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px',
                          fontWeight: '500',
                          fontSize: '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <FileText size={16} />
                          Your Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          onFocus={() => setActiveInput('message')}
                          onBlur={() => setActiveInput(null)}
                          required
                          rows="5"
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: activeInput === 'message' 
                              ? '1px solid #00f6ff' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            resize: 'vertical',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            minHeight: '120px'
                          }}
                          placeholder="Tell me about your company and the internship opportunity..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          width: '100%',
                          padding: '18px',
                          background: isSubmitting 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                          border: 'none',
                          borderRadius: '12px',
                          color: isSubmitting ? 'rgba(255, 255, 255, 0.7)' : '#000',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '12px',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Loader size={20} />
                            </motion.div>
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Internship Inquiry</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass"
          style={{ 
            padding: '40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.05), rgba(127, 92, 255, 0.05))',
            borderRadius: '20px',
            marginBottom: '40px'
          }}
        >
          <h3 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '15px'
          }}>
            Ready to discuss{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Internship Opportunities</span>?
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '25px',
            maxWidth: '500px',
            margin: '0 auto 25px'
          }}>
            2nd year CSE student with hands-on experience in full-stack web development
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            justifyContent: 'center',
            flexWrap: 'wrap' 
          }}>
            <motion.a
              href="mailto:aryandhiman2605@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                border: 'none',
                borderRadius: '50px',
                color: '#000',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none'
              }}
            >
              <Mail size={20} />
              <span>Email Resume</span>
            </motion.a>
            
            <motion.button
              onClick={() => {
                // Simulate schedule meeting
                window.open('https://calendly.com', '_blank');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Calendar size={20} />
              <span>Schedule Meeting</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            padding: '30px 20px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p>© {new Date().getFullYear()} Aryan Dhiman. All rights reserved.</p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: '8px', fontSize: '0.85rem' }}
          >
            Built with React, Node.js & MongoDB | Actively seeking Summer 2026 internships
          </motion.p>
          <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            CGC Jhanjeri, Mohali | CGPA: 9.15
          </p>
        </motion.div>
      </div>
    </section>
  );
}