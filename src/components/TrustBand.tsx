import { motion } from "framer-motion";

const certifications = [
  "ISO 9001",
  "ISO 22000",
  "HACCP",
  "BPF/GMP",
  "FSSC 22000",
];

const TrustBand = () => {
  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Normes et certifications que nous maîtrisons
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-lg border border-border bg-card text-sm font-heading font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBand;
