import { motion } from "framer-motion";

const countries = [
  { name: "Sénégal", flag: "🇸🇳" },
  { name: "Guinée", flag: "🇬🇳" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Gambie", flag: "🇬🇲" },
  { name: "Cameroun", flag: "🇨🇲" },
  { name: "Nigeria", flag: "🇳🇬" },
];

const ZonesIntervention = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Présence régionale</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            7 pays en Afrique de l'Ouest et Centrale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une expertise terrain et une connaissance approfondie des marchés industriels africains.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <span className="text-4xl">{country.flag}</span>
              <span className="text-sm font-medium text-foreground text-center">{country.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesIntervention;
