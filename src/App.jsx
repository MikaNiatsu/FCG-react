import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, MapPin, Phone, Server, Shield, Twitter, Users, Code, Cloud, Sun, Moon, Database, Lock } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import ServicesSection from './components/ServiceSection';
import ReviewsCarousel from './components/ReviewsCarousel';
import ContactForm from './components/ContactForm';
import { initEmailJS } from './services/emailService';

initEmailJS();

const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
    {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
  </button>
);

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
        <Section id="services" title="Our Services" icon={<Server className="text-green-600" size={24} />}>
          <ServicesSection />
        </Section>
        <Section id="clients" title="What Our Clients Say" icon={<Users className="text-green-600" size={24} />}>
          <ReviewsCarousel />
        </Section>
        <Section id="contact" title="Get in Touch" icon={<Mail className="text-green-600" size={24} />}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            <div className="md:w-1/2">
              <Carousel />
            </div>
          </div>
        </Section>
      </main>
      <footer className="bg-gray-800 text-white p-8 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> +57 (601) 2345678 </p>
            <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> forestconsultinggroup@gmail.com</p>
            <p className="flex items-center"><MapPin size={18} className="mr-2" /> Bogotá, Colombia</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about-us" className="hover:text-green-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors duration-300">Services</a></li>
              <li><a href="#clients" className="hover:text-green-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61565530713191" className="hover:text-green-400 transition-colors duration-300"><Facebook size={24} /></a>
              <a href="https://x.com/ForestGroup3" className="hover:text-green-400 transition-colors duration-300"><Twitter size={24} /></a>
              <a href="https://co.linkedin.com/in/forest-consulting-group-218879327" className="hover:text-green-400 transition-colors duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Forest Consulting Group. All rights reserved. Updated since {`${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

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
