// src/App.jsx
import { lazy, Suspense, useEffect, useState } from 'react'; // useState add kiya
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

// Navigation Indicator - FIXED FOR MOBILE
function NavigationIndicator() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Detect active section on scroll
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // MOBILE VERSION - Bottom bar with small dots
  if (isMobile) {
    return (
      <div 
        className="mobile-nav-indicator"
        style={{
          position: 'fixed',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          padding: '10px 25px',
          background: 'rgba(5, 5, 7, 0.85)',
          borderRadius: '50px',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
        }}
      >
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setActiveSection(section)}
            style={{
              width: '8px',
              height: '8px',
              minWidth: '8px',
              minHeight: '8px',
              borderRadius: '50%',
              background: activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.25)',
              border: activeSection === section ? '1px solid #00f6ff' : '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s ease',
              display: 'block',
              transform: activeSection === section ? 'scale(1.4)' : 'scale(1)',
              cursor: 'pointer',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'scale(1.6)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = activeSection === section ? 'scale(1.4)' : 'scale(1)';
              }
            }}
          >
            {/* Tooltip for mobile (hidden by default) */}
            <span style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.7rem',
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.8)',
              padding: '3px 8px',
              borderRadius: '4px',
              opacity: 0,
              transition: 'opacity 0.3s',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              fontWeight: '500'
            }}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </div>
    );
  }

  // DESKTOP VERSION - Side dots
  return (
    <div 
      className="desktop-nav-indicator"
      style={{
        position: 'fixed',
        right: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px',
        padding: '15px 10px',
        background: 'rgba(5, 5, 7, 0.5)',
        borderRadius: '25px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="nav-dot"
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.2)',
            border: activeSection === section ? '1px solid #00f6ff' : '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease',
            display: 'block',
            position: 'relative',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.6)';
            e.target.style.background = '#00f6ff';
            // Show tooltip
            const tooltip = e.target.querySelector('span');
            if (tooltip) tooltip.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = activeSection === section ? 'scale(1.3)' : 'scale(1)';
            e.target.style.background = activeSection === section ? '#00f6ff' : 'rgba(255, 255, 255, 0.2)';
            // Hide tooltip
            const tooltip = e.target.querySelector('span');
            if (tooltip) tooltip.style.opacity = '0';
          }}
          onClick={() => setActiveSection(section)}
        >
          {/* Tooltip for desktop */}
          <span style={{
            position: 'absolute',
            right: '25px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '0.8rem',
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.9)',
            padding: '4px 10px',
            borderRadius: '6px',
            opacity: 0,
            transition: 'opacity 0.3s',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
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
      
      {/* Floating Background Elements */}
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