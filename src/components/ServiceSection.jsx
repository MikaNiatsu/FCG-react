import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Code, Cloud, Database, X, ArrowRight, Check } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200 bg-gray-100 dark:bg-gray-700 rounded-full"
            aria-label="Close"
          >
            <X size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ServiceCard = ({ title, description, icon, image, details }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col relative overflow-hidden"
        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start mb-4">
          <div className="mr-4 text-green-600 dark:text-green-400 text-3xl">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>

        {image && (
          <motion.div
            className="absolute bottom-0 inset-x-0 transition-transform duration-500"
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? 0 : "100%" }}
            style={{ height: '120px', overflow: 'hidden' }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-b-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-colors duration-200 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More Details
              <ArrowRight size={16} className="ml-2" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="space-y-6">
          <motion.div 
            className="flex items-center mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="mr-4 text-green-600 dark:text-green-400 text-4xl bg-green-100 dark:bg-green-900 p-3 rounded-full">
              {icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
          </motion.div>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {details.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Benefits</h3>
            <ul className="space-y-2">
              {details.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Modal>
    </>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Cybersecurity Consulting",
      description: "Risk assessment, security measures implementation, and incident response.",
      icon: <Lock size={24} />,
      image: "/hitos/it.jpg",
      details: {
        features: [
          "Comprehensive risk assessment",
          "Custom security architecture design",
          "Incident response planning",
          "Security awareness training"
        ],
        benefits: [
          "Enhanced protection against cyber threats",
          "Improved regulatory compliance",
          "Reduced risk of data breaches",
          "Increased stakeholder confidence"
        ]
      }
    },
    {
      title: "Secure Software Development Consulting",
      description: "Implementation of secure coding practices, vulnerability assessment, and software governance.",
      icon: <Code size={24} />,
      image: "/hitos/it.jpg",
      details: {
        features: [
          "Secure SDLC implementation",
          "Code review and static analysis",
          "Penetration testing",
          "DevSecOps integration"
        ],
        benefits: [
          "Reduced software vulnerabilities",
          "Faster time-to-market with security built-in",
          "Improved software quality and reliability",
          "Enhanced protection of sensitive data"
        ]
      }
    },
    {
      title: "Cloud Services Consulting",
      description: "Cloud security architecture, migration strategy, and cloud governance.",
      icon: <Cloud size={24} />,
      image: "/hitos/it.jpg",
      details: {
        features: [
          "Cloud security assessment",
          "Secure cloud architecture design",
          "Cloud migration planning",
          "Multi-cloud strategy development"
        ],
        benefits: [
          "Improved scalability and flexibility",
          "Enhanced data protection in the cloud",
          "Optimized cloud costs",
          "Seamless and secure cloud adoption"
        ]
      }
    },
    {
      title: "Data Management Consulting",
      description: "Data security, privacy compliance, and data governance.",
      icon: <Database size={24} />,
      image: "/hitos/it.jpg",
      details: {
        features: [
          "Data classification and mapping",
          "Privacy impact assessments",
          "Data governance framework development",
          "Data lifecycle management"
        ],
        benefits: [
          "Enhanced data privacy and security",
          "Improved regulatory compliance (GDPR, CCPA, etc.)",
          "Better data quality and integrity",
          "Increased trust from customers and partners"
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
