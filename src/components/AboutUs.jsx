import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Linkedin } from 'lucide-react';

const AboutUs = () => {
  const [showExpertsDialog, setShowExpertsDialog] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const toggleExpertsDialog = () => setShowExpertsDialog(!showExpertsDialog);

  const experts = [
    {
      name: "Ing. Sebastian Vega",
      role: "CEO of Forest Consulting Group",
      imageUrl: "/vega.jpg",
      experience: "15 years in IT and cybersecurity consulting",
      certifications: ["CISSP", "CISM", "PMP"],
      education: "MBA in Technology Management, Stanford University",
      currentFocus: "Leading the global strategy of Forest Consulting Group and expanding our international operations.",
      linkedin: "https://www.linkedin.com/in/sebast%C3%ADan-vega-baquero-157113329/"
    },
    {
      name: "Ing. David Torres",
      role: "IT Solutions Architect",
      imageUrl: "/david.jpg",
      experience: "12 years in designing secure IT infrastructures",
      certifications: ["TOGAF", "AWS Certified Solutions Architect", "MCSE"],
      education: "Master's in Systems Engineering, MIT",
      currentFocus: "Developing secure hybrid cloud architectures for enterprise clients.",
      linkedin: "http://www.linkedin.com/in/david-torres-lara-0a2530138"
    },
    {
      name: "Ing. Juan Oyola",
      role: "Secure Development Specialist",
      imageUrl: "/juan.jpg",
      experience: "10 years in software development and application security",
      certifications: ["CSSLP", "CEH", "OSCP"],
      education: "PhD in Computer Science, University of California, Berkeley",
      currentFocus: "Leading DevSecOps initiatives and security automation in the development lifecycle.",
      linkedin: "https://www.linkedin.com/in/juan-esteban-oyola-galindo-46258b267/"
    },
    {
      name: "Ing. Miguel Linares",
      role: "Director of Cybersecurity",
      imageUrl: "/miguel.jpg",
      experience: "18 years in information security management",
      certifications: ["CISO", "CRISC", "CGEIT"],
      education: "Master's in Information Security, University of London",
      currentFocus: "Directing cyber resilience programs and managing the global SOC.",
      linkedin: "https://www.linkedin.com/in/miguel-linares-saenz-7a654520b"
    },
    {
      name: "Ing. Johan Silva",
      role: "Data Management Specialist",
      imageUrl: "/johan.jpg",
      experience: "8 years in big data analysis and data protection",
      certifications: ["CDPSE", "CIPP/E", "Google Cloud Certified - Professional Data Engineer"],
      education: "Master's in Data Science, Columbia University",
      currentFocus: "Implementing data governance solutions and ensuring compliance with regulations like GDPR and CCPA.",
      linkedin: "https://www.linkedin.com/in/johan-felipe-silva-cavieles-8133a9240/"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400">Our Mission</h2>
          <p className="text-lg mb-8">
            At Forest Consulting Group, we are dedicated to protecting and optimizing our clients' digital infrastructure. 
            We combine expertise in cybersecurity, secure development, and data management to offer innovative solutions 
            that address the most complex technological challenges.
          </p>
          <motion.button
            onClick={toggleExpertsDialog}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet Our Experts
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showExpertsDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Our Experts</h3>
                <motion.button 
                  onClick={toggleExpertsDialog}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experts.map((expert, index) => (
                  <motion.div
                    key={expert.name}
                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedExpert(expert)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img src={expert.imageUrl} alt={expert.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                    <h4 className="text-lg font-semibold text-center">{expert.name}</h4>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-300">{expert.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedExpert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedExpert.name}</h3>
                <motion.button 
                  onClick={() => setSelectedExpert(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <motion.img 
                  src={selectedExpert.imageUrl} 
                  alt={selectedExpert.name} 
                  className="w-32 h-32 rounded-full object-cover"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                />
                <div className="flex-1">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-lg font-semibold mb-2">{selectedExpert.role}</p>
                    <p className="mb-2"><strong>Experience:</strong> {selectedExpert.experience}</p>
                    <p className="mb-2"><strong>Certifications:</strong> {selectedExpert.certifications.join(", ")}</p>
                    <p className="mb-2"><strong>Education:</strong> {selectedExpert.education}</p>
                    <p className="mb-4"><strong>Current Focus:</strong> {selectedExpert.currentFocus}</p>
                    <a 
                      href={selectedExpert.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600"
                    >
                      <Linkedin className="mr-2" size={20} />
                      Connect on LinkedIn
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;
