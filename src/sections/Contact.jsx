import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Github, Twitter, Instagram,
  CheckCircle, Loader
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: <Mail />, title: 'Email', value: 'aryan.dev@creative.com', desc: 'Response within 24 hours' },
    { icon: <Phone />, title: 'Phone', value: '+1 (555) 123-4567', desc: 'Mon-Fri, 9AM-6PM EST' },
    { icon: <MapPin />, title: 'Location', value: 'San Francisco, CA', desc: 'Available Worldwide' }
  ];

  const socialLinks = [
    { icon: <Linkedin />, platform: 'LinkedIn', url: '#' },
    { icon: <Github />, platform: 'GitHub', url: '#' },
    { icon: <Twitter />, platform: 'Twitter', url: '#' },
    { icon: <Instagram />, platform: 'Instagram', url: '#' }
  ];

  return (
    <section id="contact" className="contact-section">
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
              GET IN TOUCH
            </span>
          </div>
          
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Have a project in mind? Let's discuss how we can create 
            something amazing together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '60px', height: 'fit-content' }}
          >
            <h3 style={{ 
              fontSize: '2rem', 
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Mail style={{ color: '#00f6ff' }} />
              Contact Information
            </h3>

            {/* Contact Details */}
            <div style={{ marginBottom: '50px' }}>
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '35px',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(127, 92, 255, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: '#00f6ff'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '5px'
                    }}>
                      {info.title}
                    </div>
                    <div style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      {info.value}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                      {info.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{ marginBottom: '25px', fontSize: '1.3rem' }}>
                Connect With Me
              </h4>
              <div style={{ display: 'flex', gap: '15px' }}>
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
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
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '60px' }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  fontSize: '2.5rem'
                }}>
                  <CheckCircle />
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>
                  Message Sent!
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '30px'
                }}>
                  I'll get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Send style={{ color: '#00f6ff' }} />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '10px',
                      fontWeight: '500'
                    }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '10px',
                      fontWeight: '500'
                    }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div style={{ marginBottom: '40px' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '10px',
                      fontWeight: '500'
                    }}>
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        fontFamily: 'inherit'
                      }}
                      placeholder="Tell me about your project, timeline, and budget..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="spin" style={{ animation: 'rotate 1s linear infinite' }} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginTop: '80px',
            padding: '40px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.9rem'
          }}
        >
          <p>© {new Date().getFullYear()} Aryan Sharma. All rights reserved.</p>
          <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>
            Built with React, Three.js & ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}