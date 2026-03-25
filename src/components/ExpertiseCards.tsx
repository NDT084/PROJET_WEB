import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Factory, FlaskConical, ShieldCheck, Building2, Scale, TrendingUp
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Industrielle",
    description: "Optimisation des lignes de production, réduction des coûts opérationnels et amélioration de la productivité.",
    href: "/services",
  },
  {
    icon: FlaskConical,
    title: "Développement Produits",
    description: "Formulation de recettes, optimisation des coûts matières et industrialisation pour l'agroalimentaire.",
    href: "/expertise-produits",
  },
  {
    icon: ShieldCheck,
    title: "QHSE & Certifications",
    description: "Mise en conformité ISO / HACCP, sécurité industrielle et audits réglementaires.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Projets Industriels",
    description: "Conception et suivi d'usines Greenfield & Brownfield, gestion de projets complexes.",
    href: "/services",
  },
  {
    icon: Scale,
    title: "Expertise Judiciaire",
    description: "Rapports techniques pour tribunaux, analyse de litiges industriels.",
    href: "/services",
  },
  {
    icon: Factory,
    title: "Audit Opérationnel",
    description: "Diagnostic complet de vos opérations avec plan d'action concret et mesurable.",
    href: "/contact",
  },
];

const ExpertiseCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos expertises</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Des solutions sur mesure pour l'industrie africaine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Six domaines d'intervention complémentaires pour transformer vos opérations industrielles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCards;
