import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4 text-green-600 dark:text-green-400 text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>

      {image && (
        <motion.div
          className={`absolute bottom-0 inset-x-0 transition-transform duration-500 ${isHovered ? 'transform translate-y-0' : 'transform translate-y-24'}`}
          style={{ height: '120px', overflow: 'hidden' }} // Ajusta la altura y el desbordamiento
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-b-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
