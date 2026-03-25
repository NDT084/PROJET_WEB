import { motion } from "framer-motion";
import { Search, ClipboardList, Cog, BarChart3, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnostic",
    description: "Analyse approfondie de vos opérations, identification des axes d'amélioration et des quick wins.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Plan d'action",
    description: "Élaboration d'une feuille de route détaillée avec des objectifs mesurables et un planning réaliste.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Mise en œuvre",
    description: "Déploiement des solutions sur le terrain avec vos équipes, transfert de compétences inclus.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Mesure des résultats",
    description: "Suivi des KPIs, ajustements et optimisation continue pour pérenniser les gains obtenus.",
  },
  {
    icon: Handshake,
    step: "05",
    title: "Accompagnement durable",
    description: "Support post-mission, formation des équipes et suivi régulier pour garantir l'autonomie.",
  },
];

const ProcessSection = () => {
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Notre approche</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Un processus éprouvé en 5 étapes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Chaque mission suit une méthodologie rigoureuse pour garantir des résultats concrets et durables.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:py-8 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                  <div className={`flex items-start gap-5 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
                      <step.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">Étape {step.step}</span>
                      <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
