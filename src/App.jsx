  import React, { useState, useEffect } from 'react';
  import { motion , AnimatePresence} from 'framer-motion';
  import { Link } from 'react-scroll';
  import { Shield, Users, Server, Clock, Lock, Code, Cloud, Database, Sun, Moon, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
  import { X } from 'lucide-react';
  import { Menu} from 'lucide-react';
  import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
  import { Lightbulb } from 'lucide-react';

  const ThemeToggle = ({ isDark, toggleTheme }) => (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
  const Header = ({ isDark, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    const menuItems = [
      { to: "inicio", label: "Inicio" },
      { to: "quienes-somos", label: "Quiénes Somos" },
      { to: "servicios", label: "Servicios" },
      { to: "nuestros-clientes", label: "Clientes" },
      { to: "hitos", label: "Hitos" },
      { to: "expertos", label: "Expertos" },
      { to: "contacto", label: "Contacto" },
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
    return (
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
      
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                className="bg-green-50 dark:bg-green-900 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {id === 1 && (
                  <>
                    <Shield className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-4 text-center text-green-800 dark:text-green-100">
                      Líderes en Ciberseguridad
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Somos una empresa líder en consultoría de TI y ciberseguridad, comprometida con la protección y optimización de la infraestructura digital de nuestros clientes. Nuestra misión es brindar soluciones innovadoras y seguras para enfrentar los desafíos de un mundo tecnológico en constante evolución.
                    </p>
                  </>
                )}
                {id === 2 && (
                  <>
                    <Users className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-4 text-center text-green-800 dark:text-green-100">
                      Equipo de Expertos
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Contamos con un equipo de expertos altamente capacitados que combina conocimientos profundos en tecnologías de la información y estrategias avanzadas de ciberseguridad. Nos especializamos en ofrecer servicios integrales que abarcan desde la evaluación de riesgos y la implementación de medidas de protección hasta la monitorización continua y la respuesta ante incidentes.
                    </p>
                  </>
                )}
                {id === 3 && (
                  <>
                    <Lightbulb className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-4 text-center text-green-800 dark:text-green-100">
                      Soluciones Personalizadas
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      En Forest Consulting Group, entendemos que cada empresa es única y, por lo tanto, personalizamos nuestras soluciones para satisfacer las necesidades específicas de cada cliente. Nuestro enfoque consultivo nos permite trabajar estrechamente con nuestros socios para desarrollar estrategias que no solo protejan sus activos digitales, sino que también optimicen sus operaciones y fomenten la innovación.
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
    const Hero = () => (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')", filter: "brightness(50%) blur(5px)" }}></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Forest Consulting Group</h1>
        <p className="text-2xl">Sembrando seguridad, cosechando resultados</p>
      </div>
    </section>
  );
  const Carousel = () => {
    const events = [
      { title: "Visítanos", description: "Conoce nuestras instalaciones", image: "/carrucel/oficina.webp" },
      { title: "Agenda tu cita", description: "Consulta gratuita de 30 minutos", image: "/carrucel/agenda.jpg" },
      { title: "Webinar gratuito", description: "Ciberseguridad para empresas", image: "/carrucel/webinar.jpg" },
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

  const ExpertCard = ({ name, role, imageUrl }) => (
    <motion.div 
      className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>
    </motion.div>
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

  const Timeline = ({ events }) => {
    return (
      <div className="relative container mx-auto px-4">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="hidden md:block order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center justify-center order-1 bg-green-600 shadow-xl rounded-lg w-8 h-8 md:w-12 md:h-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="mx-auto font-semibold text-sm md:text-lg text-white">{event.year}</h1>
            </motion.div>
            <motion.div
              className="order-1 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md w-full md:w-5/12 px-4 py-4 md:px-6 md:py-4 mt-4 md:mt-0 relative group"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-lg md:text-xl">{event.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300 mb-4">
                {event.description}
              </p>
              <motion.div
                className="relative w-full h-32 md:h-48 overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };
  const reviews = [
    {
      id: 1,
      comment: "Forest Consulting Group nos ayudó a implementar soluciones tecnológicas avanzadas que optimizaron nuestra eficiencia operativa y mejoraron la seguridad de nuestros datos.",
      company: "AgroColombia Ltda.",
      image: "/empresas/AgroColombia.jpg"
    },
    {
      id: 2,
      comment: "La asesoría de Forest Consulting Group en ciberseguridad fue crucial para modernizar nuestra infraestructura y cumplir con las regulaciones vigentes.",
      company: "Industria Cafetera S.A.",
      image: "/empresas/IndustriaCafetera.jpg"
    },
    {
      id: 3,
      comment: "Gracias a la experiencia de Forest Consulting Group, logramos certificar nuestros sistemas de gestión, abriendo nuevas oportunidades en el mercado digital.",
      company: "Inversiones Caribean Ltda.",
      image: "/empresas/InversionesCaribe.jpg"
    },
    {
      id: 4,
      comment: "El enfoque innovador de Forest Consulting Group en la gestión de datos nos permitió resolver problemas críticos y mejorar nuestra eficiencia operativa.",
      company: "Construcciones Andinas S.A.",
      image: "/empresas/ConstruccionesAndinas.webp"
    },
    {
      id: 5,
      comment: "Forest Consulting Group realizó un análisis exhaustivo de nuestro sistema de TI, proporcionándonos insights valiosos para optimizar nuestra estrategia tecnológica.",
      company: "ElectroServicios S.A.",
      image: "/empresas/TecnoServiciosSA.png"
    },
    {
      id: 6,
      comment: "La implementación de soluciones de ciberseguridad por parte de Forest Consulting Group nos permitió proteger nuestros activos digitales y prevenir ataques cibernéticos.",
      company: "Innovación Caribe",
      image: "/empresas/InnovaCaribe.jpg"
    },
    {
      id: 7,
      comment: "Forest Consulting Group transformó nuestra estrategia de protección de datos con su experiencia en ciberseguridad, mejorando significativamente nuestra capacidad de respuesta a incidentes.",
      company: "Servicios del Valle",
      image: "/empresas/ServiciosDelValle.jpg"
    },
    {
      id: 8,
      comment: "Gracias al asesoramiento de Forest Consulting Group, conseguimos fortalecer nuestras defensas contra amenazas cibernéticas y garantizar la integridad de nuestros sistemas.",
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
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
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
          Enviar
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
            <span>Mensaje enviado con éxito!</span>
            <button onClick={() => setShowNotification(false)} className="ml-2">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};  const App = () => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);

    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDark]);

    const hitos = [
      { year: 2010, title: "Fundación", description: "Forest Consulting Group se establece como una start-up de ciberseguridad.", image: "/hitos/ImagenCiberseguridad.webp" },
      { year: 2015, title: "Expansión", description: "Ampliamos nuestros servicios para incluir consultoría en TI y desarrollo de software seguro.", image: "/hitos/it.jpg" },
      { year: 2018, title: "Reconocimiento", description: "Ganamos el premio 'Innovador en Ciberseguridad del Año'.", image: "/hitos/ikusi.jpeg" },
      { year: 2020, title: "Crecimiento Global", description: "Abrimos oficinas en Europa y Asia, expandiendo nuestra presencia internacional.", image: "/hitos/ImagenInstalaciones.jpg" },
      { year: 2023, title: "Liderazgo en IA", description: "Lanzamos nuestra división de Inteligencia Artificial para ciberseguridad.", image: "/hitos/IA-Hito.jpg" }
    ];

    return (
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 z-10`}>
        <StarryBackground isDark={isDark} />
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <main className="container mx-auto px-4">
          <Section id="quienes-somos" title="Quiénes Somos" icon={<Shield className="text-green-600" size={24} />}>
            <AboutUs />
          </Section>
          <Carousel />

          <Section id="servicios" title="Nuestros Servicios" icon={<Server className="text-green-600" size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                title="Consultoría en Ciberseguridad"
                description="Evaluación de riesgos, implementación de medidas de seguridad y respuesta a incidentes."
                icon={<Lock size={24} />}
              />
              <ServiceCard
                title="Desarrollo de Software Seguro"
                description="Diseño y desarrollo de aplicaciones con seguridad integrada desde el inicio."
                icon={<Code size={24} />}
              />
              <ServiceCard
                title="Servicios en la Nube"
                description="Migración segura a la nube y optimización de infraestructuras cloud."
                icon={<Cloud size={24} />} 
              />
              <ServiceCard
                title="Gestión de Datos"
                description="Protección de datos, cumplimiento normativo y análisis de big data."
                icon={<Database size={24} />}
              />
            </div>
          </Section>
          <Section id="nuestros-clientes" title="Lo que Dicen Nuestros Clientes" icon={<Users className="text-green-600" size={24} />}>
            <ReviewsCarousel />
          </Section>
          <Section id="hitos" title="Nuestros Hitos" icon={<Clock className="text-green-600" size={24} />}>
            <Timeline events={hitos} />
          </Section>

          <Section id="expertos" title="Nuestros Expertos" icon={<Users className="text-green-600" size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ExpertCard name="Sebastian Vega" role="CEO de Forest Consulting Group" imageUrl="\vega.jpg" />
              <ExpertCard name="David Torres" role="Arquitecto de Soluciones IT" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Juan Oyola" role="Especialista en Desarrollo Seguro" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Miguel Linares" role="Directora de Ciberseguridad" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Johan Silva" role="Especialista en Gestión de Datos" imageUrl="https://picsum.photos/150/150" />
            </div>
          </Section>

          <Section id="contacto" title="Contacto" icon={<Mail className="text-green-600" size={24} />}>
            <ContactForm />
          </Section>
        </main>
        <footer className="bg-gray-800 text-white p-8 mt-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Forest Consulting Group</h3>
              <p>Sembrando seguridad, cosechando resultados</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="flex items-center mb-2"><MapPin size={18} className="mr-2" /> Cr 9 No. 53-58 L 108, C.P 11001, Bogota</p>
              <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +57 (601) 2345678 </p>
              <p className="flex items-center"><Mail size={18} className="mr-2" /> forestconsultinggroup@gmail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61565530713191" className="hover:text-green-400"><Facebook size={24} /></a>
                <a href="https://x.com/ForestGroup3" className="hover:text-green-400"><Twitter size={24} /></a>
                <a href="https://co.linkedin.com/in/forest-consulting-group-218879327" className="hover:text-green-400"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© 2024 Forest Consulting Group. Todos los derechos reservados.</p>
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
