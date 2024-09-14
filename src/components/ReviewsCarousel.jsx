import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Lock, Code, Cloud, Database, X } from 'lucide-react';

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
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
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
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {children}
      </motion.div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200 rounded-full focus:outline-none"
        aria-label="Close"
      >
        <X size={24} />
      </button>
    </motion.div>
  );
};

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);

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

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= reviews.length ? 0 : prevIndex + itemsPerPage));
  }, [itemsPerPage]);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - itemsPerPage : prevIndex - itemsPerPage));
  };

  const handleOpenModal = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const selectedService = selectedReview ? services.find(s => s.id === selectedReview.serviceId) : null;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                width: `${(reviews.length / itemsPerPage) * 100}%`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={`w-full sm:w-1/2 lg:w-1/4 p-2`}
                  style={{ flexBasis: `${100 / itemsPerPage}%` }}
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

          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <ChevronLeft className="text-green-500 w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <ChevronRight className="text-green-500 w-6 h-6" />
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedReview && selectedService && (
          <>
            <div className="flex items-center mb-6">
              <selectedService.icon className={`${selectedService.color} w-8 h-8 mr-3`} />
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{selectedService.title}</h2>
            </div>
            <div className="mb-6">
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
          </>
        )}
      </Modal>
    </div>
  );
};

const ReviewCard = ({ review, service, onOpenModal }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer relative overflow-hidden flex flex-col"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={onOpenModal}
    style={{ minHeight: '200px' }}
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
