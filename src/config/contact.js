export const contact = {
  phone: { display: "010 3659 5279", href: "+201036595279" },
  whatsapp: { display: "011 2784 6533", href: "201127846533" },
  email: "alkhwlyhasan777@gmail.com",
};

export const whatsappUrl = (message = "Hello Hassan, I would like to discuss a project.") =>
  `https://wa.me/${contact.whatsapp.href}?text=${encodeURIComponent(message)}`;
