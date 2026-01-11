// src/components/Animations.jsx
import { motion } from 'framer-motion';

// Stagger children animation
export const StaggerContainer = ({ children, delay = 0.2 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      visible: {
        transition: {
          staggerChildren: delay
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// Slide in from left
export const SlideInLeft = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

// Slide in from right
export const SlideInRight = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

// Slide in from bottom
export const SlideInUp = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

// Scale in animation
export const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

// Fade in animation
export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 1, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

// 3D Flip animation
export const FlipCard = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { 
        opacity: 0,
        rotateY: 180
      },
      visible: { 
        opacity: 1,
        rotateY: 0,
        transition: { 
          duration: 0.8,
          delay,
          type: "spring",
          stiffness: 100
        }
      }
    }}
    style={{ transformStyle: "preserve-3d" }}
  >
    {children}
  </motion.div>
);