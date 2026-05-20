import { motion } from 'framer-motion';

const variants = {
  up:    { hidden: { opacity: 0, y: 30 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    variants={variants[direction]}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
