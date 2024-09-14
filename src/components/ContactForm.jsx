import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, AlertCircle } from 'lucide-react';
import { sendEmail } from '../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({ from_email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_email || formData.from_email.trim() === '') {
      newErrors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = 'Email is invalid';
    }
    
    if (!formData.message || formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      sendEmail(formData)
        .then(() => {
          setNotificationMessage('Message sent successfully!');
          setNotificationType('success');
          setShowNotification(true);
          setFormData({ from_email: '', message: '' });
        })
        .catch((err) => {
          console.error('Error sending email:', err);
          setNotificationMessage('Failed to send message. Please try again.');
          setNotificationType('error');
          setShowNotification(true);
        })
        .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setShowNotification(false), 5000);
        });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.from_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-300`}
              placeholder="your@email.com"
            />
            {errors.from_email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.from_email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-300`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-4 flex items-center justify-center rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <Send size={20} className="mr-2" />
            )}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 ${
              notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white p-4 rounded-md shadow-lg flex items-center`}
          >
            <span>{notificationMessage}</span>
            <button onClick={() => setShowNotification(false)} className="ml-2 focus:outline-none">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;