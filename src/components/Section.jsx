import { motion } from 'framer-motion';

const Section = ({ id, title, children, icon }) => (
    <motion.section 
      id={id}
      className="my-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </motion.section>
  );

export default Section;