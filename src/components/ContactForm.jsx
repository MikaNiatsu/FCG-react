import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { sendEmail } from '../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({ from_mail: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_mail || formData.from_mail.trim() === '') {
      newErrors.from_mail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_mail)) {
      newErrors.from_mail = 'Email is invalid';
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
          setFormData({ from_mail: '', message: '' });
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
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <label htmlFor="from_mail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
          <input
            type="email"
            id="from_mail"
            name="from_mail"
            value={formData.from_mail}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-green-600 focus:border-green-700 focus:ring focus:ring-green-300 focus:ring-opacity-50 dark:bg-gray-700 dark:border-green-400 dark:text-white transition duration-300 bg-white text-gray-800"
          />
          {errors.from_mail && <p className="mt-1 text-sm text-red-500">{errors.from_mail}</p>}
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
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </motion.button>
      </form>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 ${notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-4 rounded-md shadow-lg flex items-center`}
          >
            <span>{notificationMessage}</span>
            <button onClick={() => setShowNotification(false)} className="ml-2">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
