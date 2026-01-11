import { motion } from 'framer-motion';

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

export const SlideInLeft = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

export const SlideInUp = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.8, delay }
      }
    }}
  >
    {children}
  </motion.div>
);

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
          duration: 0.6,
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