import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Quote, Lock, Code, Cloud, Database, X } from 'lucide-react';

const services = [
  { id: 1, title: "Cybersecurity Consulting", icon: Lock, color: "text-blue-500" },
  { id: 2, title: "Secure Software Development", icon: Code, color: "text-purple-500" },
  { id: 3, title: "Cloud Services Consulting", icon: Cloud, color: "text-cyan-500" },
  { id: 4, title: "Data Management Consulting", icon: Database, color: "text-green-500" },
];

const reviews = [
  { id: 1, comment: "Forest Consulting Group's cybersecurity solutions significantly improved our data security posture.", company: "AgroColombia Ltda.", serviceId: 1 },
  { id: 2, comment: "Their expertise in secure software development was crucial for modernizing our infrastructure.", company: "Industria Cafetera S.A.", serviceId: 2 },
  { id: 3, comment: "Thanks to their cloud services consulting, we successfully enhanced our scalability and security.", company: "Inversiones Caribean Ltda.", serviceId: 3 },
  { id: 4, comment: "Their innovative approach to data management allowed us to implement robust governance frameworks.", company: "Construcciones Andinas S.A.", serviceId: 4 },
  { id: 5, comment: "The cybersecurity training provided by Forest Consulting Group has empowered our team to better protect our assets.", company: "TechnoVision Corp.", serviceId: 1 },
  { id: 6, comment: "Their secure software development practices have drastically reduced vulnerabilities in our applications.", company: "SoftwarePro Solutions", serviceId: 2 },
  { id: 7, comment: "The cloud migration strategy developed by Forest Consulting Group streamlined our operations significantly.", company: "Global Logistics S.A.", serviceId: 3 },
  { id: 8, comment: "Their data management solutions have helped us achieve compliance with international data protection regulations.", company: "FinanceGuard Institute", serviceId: 4 },
  { id: 9, comment: "Forest Consulting Group's cloud experts helped us optimize our infrastructure and reduce costs.", company: "Nexar S.A.", serviceId: 3 },
  { id: 10, comment: "The Forest Consulting Group team was instrumental in implementing our data loss prevention strategy.", company: "Banco de Occidente", serviceId: 4 },
  { id: 11, comment: "With Forest Consulting Group's cybersecurity services, we were able to quickly respond to a security incident and minimize its impact.", company: "Sura Asset Management", serviceId: 1 },
  { id: 12, comment: "Forest Consulting Group's data governance framework helped us better manage our data assets.", company: "Corporacin Financiera Colombiana S.A.", serviceId: 4 },
  { id: 13, comment: "The Forest Consulting Group team was very knowledgeable and helped us create a secure software development life cycle.", company: "EPM", serviceId: 2 },
  { id: 14, comment: "Forest Consulting Group's cloud experts helped us move our applications to the cloud and improve our scalability.", company: "Colombina S.A.", serviceId: 3 },
  { id: 15, comment: "Their innovative approach to cybersecurity helped us stay ahead of the threats and protect our assets.", company: "Cementos Argos S.A.", serviceId: 1 },
  { id: 16, comment: "The Forest Consulting Group team was very responsive and helped us address a critical security issue.", company: "Banco de Bogot", serviceId: 1 },
  { id: 17, comment: "Forest Consulting Group's data management solutions have helped us improve our customer experience.", company: "Telefnica S.A.", serviceId: 4 },
  { id: 18, comment: "Forest Consulting Group's cloud migration strategy helped us reduce costs and improve our scalability.", company: "Sociedad de Transporte de Medelln S.A.", serviceId: 3 },
];

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
          >
            {children}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToIndex = useCallback((index) => {
    setCurrentIndex(index);
    controls.start({ x: `${-index * 100}%` });
  }, [controls]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % Math.ceil(reviews.length / itemsPerPage);
      goToIndex(nextIndex);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsPerPage, goToIndex]);

  const handleOpenModal = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const selectedService = selectedReview ? services.find(s => s.id === selectedReview.serviceId) : null;

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      const nextIndex = (currentIndex + 1) % Math.ceil(reviews.length / itemsPerPage);
      goToIndex(nextIndex);
    } else if (info.offset.x > swipeThreshold) {
      const prevIndex = (currentIndex - 1 + Math.ceil(reviews.length / itemsPerPage)) % Math.ceil(reviews.length / itemsPerPage);
      goToIndex(prevIndex);
    } else {
      controls.start({ x: `${-currentIndex * 100}%` });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={controls}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`w-full sm:w-1/2 lg:w-1/4 p-2`}
                style={{ flexBasis: `${100 / itemsPerPage}%`, flexShrink: 0 }}
              >
                <ReviewCard
                  review={review}
                  service={services.find(s => s.id === review.serviceId)}
                  onOpenModal={() => handleOpenModal(review)}
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-6">
          {[...Array(Math.ceil(reviews.length / itemsPerPage))].map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                currentIndex === index ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedReview && selectedService && (
          <div className="space-y-6">
            <div className="flex items-center">
              <selectedService.icon className={`${selectedService.color} w-10 h-10 mr-4`} />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedService.title}</h2>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Service Description</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedReview.serviceId === 1 
                  ? "Risk assessment, security measures implementation, and incident response."
                  : selectedReview.serviceId === 2
                  ? "Implementation of secure coding practices, vulnerability assessment, and software governance."
                  : selectedReview.serviceId === 3
                  ? "Cloud security architecture, migration strategy, and cloud governance."
                  : "Data security, privacy compliance, and data governance."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Client Testimonial</h3>
              <blockquote className="italic text-gray-600 dark:text-gray-400 border-l-4 border-green-500 pl-4 py-2 mb-4">
                "{selectedReview.comment}"
              </blockquote>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{selectedReview.company}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

const ReviewCard = ({ review, service, onOpenModal }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer relative overflow-hidden flex flex-col h-full"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={onOpenModal}
  >
    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: service.color }}></div>
    <div className="flex items-center mb-2">
      <service.icon className={`${service.color} w-6 h-6 mr-2`} />
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
    </div>
    <Quote className="text-gray-400 w-6 h-6 mb-2" />
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
      {review.comment.length > 150 ? `${review.comment.slice(0, 150)}...` : review.comment}
    </p>
    <div className="flex items-center justify-between mt-auto">
      <p className="font-semibold text-gray-700 dark:text-gray-300 text-xs">{review.company}</p>
      <span className="text-green-600 dark:text-green-400 text-xs font-semibold">Ver más</span>
    </div>
  </motion.div>
);

export default ReviewsCarousel;