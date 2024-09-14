import emailjs from '@emailjs/browser';

// Inicializa EmailJS una vez, quizás en tu componente App principal
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.error('EmailJS Public Key is not set');
    return false;
  }
  emailjs.init(publicKey);
  return true;
};

export const sendEmail = (form) => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateIDConfirm = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRM;
  const templateIDTeam = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_TEAM;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateIDConfirm || !templateIDTeam || !publicKey) {
    console.error('Missing EmailJS configuration');
    return Promise.reject(new Error('Missing EmailJS configuration'));
  }

  return Promise.all([
    emailjs.send(serviceID, templateIDConfirm, form, publicKey),
    emailjs.send(serviceID, templateIDTeam, form, publicKey)
  ])
    .then(([result1, result2]) => {
      console.log('Emails sent successfully');
      return { result1, result2 };
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      throw error;
    });
};
