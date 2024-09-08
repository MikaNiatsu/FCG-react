  import React, { useState, useEffect } from 'react';
  import { motion , AnimatePresence} from 'framer-motion';
  import { Link } from 'react-scroll';
  import { Shield, Users, Server, Clock, Lock, Code, Cloud, Database, Sun, Moon, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
  import { X } from 'lucide-react';
  const ThemeToggle = ({ isDark, toggleTheme }) => (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
const Header = ({ isDark, toggleTheme }) => (
  <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 sticky top-0 z-50 shadow-md">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/path/to/your/logo.png" alt="Forest Consulting Group Logo" className="h-8 w-auto mr-2" />
        <h1 className="text-xl md:text-2xl font-bold">Forest Consulting Group</h1>
      </div>
      <nav className="flex flex-wrap justify-center items-center space-x-2 md:space-x-4">
        <Link to="inicio" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer text-sm md:text-base">Inicio</Link>
        <Link to="quienes-somos" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer text-sm md:text-base">Quiénes Somos</Link>
        <Link to="servicios" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer text-sm md:text-base">Servicios</Link>
        <Link to="hitos" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer text-sm md:text-base">Hitos</Link>
        <Link to="expertos" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer text-sm md:text-base">Expertos</Link>
        <Link to="contacto" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer text-sm md:text-base">Contacto</Link>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </nav>
    </div>
  </header>
);   const Hero = () => (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')", filter: "brightness(50%) blur(5px)" }}></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Forest Consulting Group</h1>
        <p className="text-2xl">Protegiendo el futuro digital</p>
      </div>
    </section>
  );
  const Carousel = () => {
    const events = [
      { title: "Visítanos", description: "Conoce nuestras instalaciones", image: "https://picsum.photos/1920/1080?random=1" },
      { title: "Agenda tu cita", description: "Consulta gratuita de 30 minutos", image: "https://picsum.photos/1920/1080?random=2" },
      { title: "Webinar gratuito", description: "Ciberseguridad para empresas", image: "https://picsum.photos/1920/1080?random=3" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 5000);
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

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 transition-all duration-300"
            onClick={goToPrevious}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 transition-all duration-300"
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
      <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
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

  const Timeline = ({ events }) => (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="order-1 w-5/12"></div>
          <motion.div
            className="z-20 flex items-center justify-center order-1 bg-green-600 shadow-xl rounded-lg px-3 py-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="mx-auto font-semibold text-lg text-white">{event.year}</h1>
          </motion.div>
          <motion.div
            className="order-1 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md w-5/12 px-6 py-4 relative group"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{event.title}</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300">
              {event.description}
            </p>
            <motion.img
              src={event.image}
              alt={event.title}
              className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-48 h-32 object-cover rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

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
      { year: 2010, title: "Fundación", description: "Forest Consulting Group se establece como una start-up de ciberseguridad.", image: "https://picsum.photos/200/150?random=1" },
      { year: 2015, title: "Expansión", description: "Ampliamos nuestros servicios para incluir consultoría en TI y desarrollo de software seguro.", image: "https://picsum.photos/200/150?random=2" },
      { year: 2018, title: "Reconocimiento", description: "Ganamos el premio 'Innovador en Ciberseguridad del Año'.", image: "https://picsum.photos/200/150?random=3" },
      { year: 2020, title: "Crecimiento Global", description: "Abrimos oficinas en Europa y Asia, expandiendo nuestra presencia internacional.", image: "https://picsum.photos/200/150?random=4" },
      { year: 2023, title: "Liderazgo en IA", description: "Lanzamos nuestra división de Inteligencia Artificial para ciberseguridad.", image: "https://picsum.photos/200/150?random=5" }
    ];

    return (
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 z-10`}>
        <StarryBackground isDark={isDark} />
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <main className="container mx-auto px-4">
          <Section id="quienes-somos" title="Quiénes Somos" icon={<Shield className="text-green-600" size={24} />}>
            <p className="text-lg">Forest Consulting Group es líder en consultoría de TI y ciberseguridad. Nos dedicamos a proteger y optimizar la infraestructura digital de nuestros clientes, ofreciendo soluciones innovadoras y seguras en un mundo tecnológico en constante evolución.</p>
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

          <Section id="hitos" title="Nuestros Hitos" icon={<Clock className="text-green-600" size={24} />}>
            <Timeline events={hitos} />
          </Section>

          <Section id="expertos" title="Nuestros Expertos" icon={<Users className="text-green-600" size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ExpertCard name="Ana Silva" role="Directora de Ciberseguridad" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Carlos Robles" role="Arquitecto de Soluciones Cloud" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Elena Martínez" role="Especialista en Desarrollo Seguro" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Javier González" role="Especialista en Inteligencia Artificial" imageUrl="https://picsum.photos/150/150" />
              <ExpertCard name="Laura Fernández" role="Especialista en Gestión de Datos" imageUrl="https://picsum.photos/150/150" />
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
              <p>Protegiendo el futuro digital</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="flex items-center mb-2"><MapPin size={18} className="mr-2" /> 123 Calle Tecnología, Ciudad</p>
              <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +1 234 567 890</p>
              <p className="flex items-center"><Mail size={18} className="mr-2" /> info@forestconsulting.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400"><Facebook size={24} /></a>
                <a href="#" className="hover:text-green-400"><Twitter size={24} /></a>
                <a href="#" className="hover:text-green-400"><Linkedin size={24} /></a>
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
