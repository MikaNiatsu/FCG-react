import emailjs from 'emailjs-com';

// Initialize EmailJS once, perhaps in your main App component
export const initEmailJS = () => {
  const userID = import.meta.env.REACT_APP_USER_ID;
  if (!userID) {
    console.error('EmailJS User ID is not set');
    return false;
  }
  emailjs.init(userID);
  return true;
};

export const sendEmail = (form) => {
  const serviceID = import.meta.env.REACT_APP_SERVICE_ID;
  const templateIDConfirm = import.meta.env.REACT_APP_TEMPLATE_ID_CONFIRM;
  const templateIDTeam = import.meta.env.REACT_APP_TEMPLATE_ID_TEAM;

  if (!serviceID || !templateIDConfirm || !templateIDTeam) {
    console.error('Missing EmailJS configuration');
    return Promise.reject(new Error('Missing EmailJS configuration'));
  }

  // Create an HTML form from formData
  const formElement = document.createElement('form');
  for (const [key, value] of Object.entries(form)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    formElement.appendChild(input);
  }

  return Promise.all([
    emailjs.sendForm(serviceID, templateIDConfirm, formElement),
    emailjs.sendForm(serviceID, templateIDTeam, formElement)
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
