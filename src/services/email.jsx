import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(
      new Error("Email service is not configured. Check the EmailJS environment variables.")
    );
  }

  return emailjs.sendForm(serviceId, templateId, form, publicKey);
};
