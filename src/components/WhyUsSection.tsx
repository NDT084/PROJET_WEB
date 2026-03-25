import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  "Expertise terrain en Afrique de l'Ouest et Centrale",
  "Spécialisation niche en agroalimentaire industriel",
  "Résultats mesurables avec KPIs définis à l'avance",
  "Équipe multidisciplinaire et multiculturelle",
  "Transfert de compétences intégré à chaque mission",
  "Accompagnement post-mission garanti",
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pourquoi FIMD EI</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Le partenaire qu'il vous faut
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Dans un marché où les solutions génériques ne fonctionnent pas, nous apportons une expertise profondément ancrée dans les réalités industrielles africaines.
            </p>
            <Button asChild size="lg">
              <Link to="/a-propos">
                En savoir plus
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
