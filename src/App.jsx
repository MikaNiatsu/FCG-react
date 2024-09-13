
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Shield, Users, Server, Lock, Code, Cloud, Database, Sun, Moon, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
    {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
  </button>
);

const Header = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about-us", label: "About Us" },
    { to: "services", label: "Services" },
    { to: "clients", label: "Clients" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lg2.png" alt="Forest Consulting Group Logo" className="h-16 w-auto mr-2" />
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-500">Forest Consulting Group</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block py-2 hover:text-green-500 cursor-pointer"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="py-2">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </nav>
      )}
    </header>
  );
};

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
      currentFocus: "Leading the global strategy of Forest Consulting Group and expanding our international operations."
    },
    {
      name: "Ing. David Torres",
      role: "IT Solutions Architect",
      imageUrl: "/david.jpg",
      experience: "12 years in designing secure IT infrastructures",
      certifications: ["TOGAF", "AWS Certified Solutions Architect", "MCSE"],
      education: "Master's in Systems Engineering, MIT",
      currentFocus: "Developing secure hybrid cloud architectures for enterprise clients."
    },
    {
      name: "Ing. Juan Oyola",
      role: "Secure Development Specialist",
      imageUrl: "/juan.jpg",
      experience: "10 years in software development and application security",
      certifications: ["CSSLP", "CEH", "OSCP"],
      education: "PhD in Computer Science, University of California, Berkeley",
      currentFocus: "Leading DevSecOps initiatives and security automation in the development lifecycle."
    },
    {
      name: "Ing. Miguel Linares",
      role: "Director of Cybersecurity",
      imageUrl: "/miguel.jpg",
      experience: "18 years in information security management",
      certifications: ["CISO", "CRISC", "CGEIT"],
      education: "Master's in Information Security, University of London",
      currentFocus: "Directing cyber resilience programs and managing the global SOC."
    },
    {
      name: "Ing. Johan Silva",
      role: "Data Management Specialist",
      imageUrl: "/johan.jpg",
      experience: "8 years in big data analysis and data protection",
      certifications: ["CDPSE", "CIPP/E", "Google Cloud Certified - Professional Data Engineer"],
      education: "Master's in Data Science, Columbia University",
      currentFocus: "Implementing data governance solutions and ensuring compliance with regulations like GDPR and CCPA."
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
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Our Experts</h3>
                <button onClick={toggleExpertsDialog} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experts.map((expert) => (
                  <motion.div
                    key={expert.name}
                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedExpert(expert)}
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
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedExpert.name}</h3>
                <button onClick={() => setSelectedExpert(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <img src={selectedExpert.imageUrl} alt={selectedExpert.name} className="w-32 h-32 rounded-full object-cover" />
                <div>
                  <p className="text-lg font-semibold mb-2">{selectedExpert.role}</p>
                  <p className="mb-2"><strong>Experience:</strong> {selectedExpert.experience}</p>
                  <p className="mb-2"><strong>Certifications:</strong> {selectedExpert.certifications.join(", ")}</p>
                  <p className="mb-2"><strong>Education:</strong> {selectedExpert.education}</p>
                  <p><strong>Current Focus:</strong> {selectedExpert.currentFocus}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center text-white">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')", filter: "brightness(50%) blur(5px)" }}></div>
    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold mb-4">Forest Consulting Group</h1>
      <p className="text-2xl">Planting security and harvesting results</p>
    </div>
  </section>
);

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

const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md flex items-start"
    whileHover={{ scale: 1.03 }}
  >
    <div className="mr-4 text-green-600 dark:text-green-400">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const reviews = [
  {
    id: 1,
    comment: "Forest Consulting Group helped us implement advanced technological solutions that optimized our operational efficiency and improved data security.",
    company: "AgroColombia Ltda.",
    image: "/empresas/AgroColombia.jpg"
  },
  {
    id: 2,
    comment: "The cybersecurity advice from Forest Consulting Group was crucial for modernizing our infrastructure and complying with current regulations.",
    company: "Industria Cafetera S.A.",
    image: "/empresas/IndustriaCafetera.jpg"
  },
  {
    id: 3,
    comment: "Thanks to Forest Consulting Group's expertise, we were able to certify our management systems, opening new opportunities in the digital market.",
    company: "Inversiones Caribean Ltda.",
    image: "/empresas/InversionesCaribe.jpg"
  },
  {
    id: 4,
    comment: "Forest Consulting Group's innovative approach to data management allowed us to solve critical issues and improve our operational efficiency.",
    company: "Construcciones Andinas S.A.",
    image: "/empresas/ConstruccionesAndinas.webp"
  },
  {
    id: 5,
    comment: "Forest Consulting Group conducted a thorough analysis of our IT system, providing valuable insights to optimize our technological strategy.",
    company: "ElectroServicios S.A.",
    image: "/empresas/TecnoServiciosSA.png"
  },
  {
    id: 6,
    comment: "The implementation of cybersecurity solutions by Forest Consulting Group allowed us to protect our digital assets and prevent cyber-attacks.",
    company: "Innovación Caribe",
    image: "/empresas/InnovaCaribe.jpg"
  },
  {
    id: 7,
    comment: "Forest Consulting Group transformed our data protection strategy with their cybersecurity expertise, significantly improving our incident response capability.",
    company: "Servicios del Valle",
    image: "/empresas/ServiciosDelValle.jpg"
  },
  {
    id: 8,
    comment: "Thanks to Forest Consulting Group's advice, we were able to strengthen our defenses against cyber threats and ensure the integrity of our systems.",
    company: "Corporación Verde Olivo",
    image: "/empresas/CorporaVerdeOlivo.png"
  }
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="bg-green-50 dark:bg-green-900 py-12">
      <div className="container mx-auto px-4">
        <div className="relative max-w-md mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <Quote className="text-green-500 w-12 h-12 mb-4" />
                <div className="mb-6 overflow-y-auto max-h-[200px] md:max-h-[150px]">
                  <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">{reviews[currentIndex].comment}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img src={reviews[currentIndex].image} alt={reviews[currentIndex].company} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-green-700 dark:text-green-300">{reviews[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 hidden md:block"
          >
            <ChevronLeft className="text-green-500 w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 hidden md:block"
          >
            <ChevronRight className="text-green-500 w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? 'bg-green-500' : 'bg-green-200 dark:bg-green-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-green-600 focus:border-green-700 focus:ring focus:ring-green-300 focus:ring-opacity-50 dark:bg-gray-700 dark:border-green-400 dark:text-white transition duration-300 bg-white text-gray-800"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-green-600 focus:border-green-700 focus:ring focus:ring-green-300 focus:ring-opacity-50 dark:bg-gray-700 dark:border-green-400 dark:text-white transition duration-300 bg-white text-gray-800"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-green-600 focus:border-green-700 focus:ring focus:ring-green-300 focus:ring-opacity-50 dark:bg-gray-700 dark:border-green-400 dark:text-white transition duration-300 bg-white text-gray-800"
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </motion.div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
        >
          Send
        </motion.button>
      </form>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg flex items-center"
          >
            <span>Message sent successfully!</span>
            <button onClick={() => setShowNotification(false)} className="ml-2">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 z-10`}>
      <StarryBackground isDark={isDark} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <main className="container mx-auto px-4">
        <Section id="about-us" title="About Us" icon={<Shield className="text-green-600" size={24} />}>
          <AboutUs />
        </Section>
        <Carousel />

        <Section id="services" title="Our Services" icon={<Server className="text-green-600" size={24} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="Cybersecurity Consulting"
              description="Risk assessment, security measures implementation, and incident response."
              icon={<Lock size={24} />}
            />
            <ServiceCard
              title="Secure Software Development Consulting"
              description="Software security, software governance, and software governance."
              icon={<Code size={24} />}
            />
            <ServiceCard
              title="Cloud Services Consulting"
              description="Cloud security, cloud governance, and cloud governance."
              icon={<Cloud size={24} />} 
            />
            <ServiceCard
              title="Data Management Consulting"
              description="Data security, data governance, and data governance."
              icon={<Database size={24} />}
            />
          </div>
        </Section>
        <Section id="clients" title="What Our Clients Say" icon={<Users className="text-green-600" size={24} />}>
          <ReviewsCarousel />
        </Section>
        
        <Section id="contact" title="Contact" icon={<Mail className="text-green-600" size={24} />}>
          <ContactForm />
        </Section>
      </main>
      <footer className="bg-gray-800 text-white p-8 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="flex items-center mb-2"><MapPin size={18} className="mr-2" /> Cr 9 No. 53-58 L 108, C.P 11001, Bogota</p>
            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +57 (601) 2345678 </p>
            <p className="flex items-center"><Mail size={18} className="mr-2" /> forestconsultinggroup@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61565530713191" className="hover:text-green-400"><Facebook size={24} /></a>
              <a href="https://x.com/ForestGroup3" className="hover:text-green-400"><Twitter size={24} /></a>
              <a href="https://co.linkedin.com/in/forest-consulting-group-218879327" className="hover:text-green-400"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Forest Consulting Group. All rights reserved. Updated since {`${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</p>
        </div>
      </footer>
    </div>
  );
};  export default App;



const StarryBackground = ({ isDark }) => {
return (
  <div className="fixed inset-0 z-0 pointer-events-none">
    {[...Array(50)].map((_, i) => {
      const size = Math.random() * 3 + 1;
      const delay = Math.random() * 3 + 2;
      return (
        <motion.div
          key={i}
          className={`star ${isDark ? "dark" : "light"}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: isDark ? 0.7 : 0.3,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 1, 0.4, 0],
          }}
          transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            onComplete: () => {
              setTimeout(() => {
                const newTop = `${Math.random() * 100}%`;
                const newLeft = `${Math.random() * 100}%`;
                if (newTop !== this.style.top || newLeft !== this.style.left) {
                  this.style.top = newTop;
                  this.style.left = newLeft;
                }
              }, delay * 1000);
            },
          }}
        ></motion.div>
      );
    })}
  </div>
);
};
