import { motion } from 'framer-motion';

const FadeInItem = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    style={{ height: '100%', width: '100%' }}
  >
    {children}
  </motion.div>
);

export default FadeInItem;
