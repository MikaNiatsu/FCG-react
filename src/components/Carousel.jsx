import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Carousel = () => {
    const events = [
      { title: "Visit Us", description: "Meet our facilities", image: "/carrucel/oficina.webp" },
      { title: "Schedule an Appointment", description: "Free 30-minute consultation", image: "/carrucel/agenda.jpg" },
      { title: "Free Webinar", description: "Cybersecurity for businesses", image: "/carrucel/webinar.jpg" },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 10000);
      return () => clearInterval(timer);
    }, []);
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastSlide = currentIndex === events.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="container mx-auto px-4 my-16">
        <div className="relative h-96 overflow-hidden rounded-lg shadow-md">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${events[currentIndex].image})`, filter: "brightness(50%)" }}></div>
              <div className="relative z-10 text-center text-white">
                <h2 className="text-4xl font-bold mb-2">{events[currentIndex].title}</h2>
                <p className="text-xl">{events[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
  
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 transition-all duration-300"
            onClick={goToPrevious}
          >
            ❮
          </button>
          <button
            className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 transition-all duration-300"
            onClick={goToNext}
          >
            ❯
          </button>
  
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Carousel;