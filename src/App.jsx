// src/App.jsx
import { lazy, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import './styles/style.css';

// Lazy load components
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

// 3D Background Component with Particles
function ThreeDBackground() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#00f6ff" intensity={0.8} />
      <pointLight position={[-10, -10, 10]} color="#7f5cff" intensity={0.6} />
      
      {/* Floating 3D Shapes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 1, 0]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color="#00f6ff" 
            wireframe 
            transparent 
            opacity={0.1}
            emissive="#00f6ff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2, -1, 0]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial 
            color="#7f5cff" 
            wireframe 
            transparent 
            opacity={0.1}
            emissive="#7f5cff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: 'rgba(255, 255, 255, 0.1)',
      zIndex: 1000
    }}>
      <div 
        id="scroll-progress"
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
          width: '0%',
          transition: 'width 0.1s ease'
        }}
      />
    </div>
  );
}

// Optimized Navigation Indicator for Mobile
function NavigationIndicator() {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  const [isMobile, setIsMobile] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track active section for mobile
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Navigation - Horizontal at bottom
  if (isMobile) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: '8px',
        background: 'rgba(5, 5, 7, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        padding: '10px 15px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}>
        {sections.map((section, i) => (
          <a
            key={section}
            href={`#${section}`}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.15)',
              border: activeSection === section ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(section);
              if (element) {
                window.scrollTo({
                  top: element.offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(1.5)';
              e.currentTarget.style.background = '#7f5cff';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.15)';
            }}
          >
            {/* Tooltip for mobile - appears on long press */}
            <span style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              fontSize: '0.7rem',
              background: 'rgba(5, 5, 7, 0.9)',
              padding: '4px 8px',
              borderRadius: '4px',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
        
        {/* Mobile menu toggle for labels */}
        <button
          onClick={() => setShowLabels(!showLabels)}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '10px',
            fontSize: '0.8rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'rgba(0, 246, 255, 0.2)';
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {showLabels ? '−' : '+'}
        </button>
        
        {/* Labels for mobile when toggled */}
        {showLabels && (
          <div style={{
            position: 'absolute',
            bottom: '70px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(5, 5, 7, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            minWidth: '120px'
          }}>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                style={{
                  color: activeSection === section ? '#00f6ff' : 'white',
                  fontSize: '0.85rem',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  background: activeSection === section ? 'rgba(0, 246, 255, 0.1)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowLabels(false);
                  const element = document.getElementById(section);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.3)'
                }} />
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop Navigation - Original vertical on right side
  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.5)';
            e.target.style.background = activeSection === section ? '#00f6ff' : '#7f5cff';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <span style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            fontSize: '0.8rem',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            background: 'rgba(5, 5, 7, 0.9)',
            padding: '4px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        </a>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <ThreeDBackground />
      <ScrollProgress />
      <NavigationIndicator />
      
      {/* Floating Background Elements - Adjusted for mobile */}
      <div className="floating-element floating-1" />
      <div className="floating-element floating-2" />
      <div className="floating-element floating-3" />
      
      <Suspense fallback={
        <div style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050507',
          color: 'white',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '3px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #00f6ff',
            borderRadius: '50%',
            animation: 'rotate 1s linear infinite'
          }} />
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Loading Immersive Experience...
          </p>
        </div>
      }>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;