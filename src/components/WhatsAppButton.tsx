import whatsappLogo from "@/assets/whatsapp.svg";

const WHATSAPP_NUMBER = "221782636295";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour FIMD EI, je souhaite en savoir plus sur vos services de conseil industriel."
);

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contacter via WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>
  );
};

export default WhatsAppButton;