import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, DollarSign, Gauge, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import expertiseImage from "@/assets/expertise-produits.jpg";

const expertises = [
  {
    icon: Beaker,
    title: "Bouillons Culinaires",
    description: "Formulation, optimisation organoleptique et industrialisation de bouillons en cubes, poudres et liquides. Expertise reconnue sur les marchés ouest-africains.",
  },
  {
    icon: Gauge,
    title: "Boissons Industrielles",
    description: "Développement et mise à l'échelle de boissons (jus, nectars, eaux aromatisées). Optimisation des process et conformité réglementaire.",
  },
  {
    icon: DollarSign,
    title: "Optimisation Recettes",
    description: "Réduction des coûts matières tout en maintenant les standards de qualité et le profil sensoriel. Reformulation stratégique pour améliorer les marges.",
  },
  {
    icon: ShieldCheck,
    title: "Réduction Coûts Production",
    description: "Analyse complète de la chaîne de coûts, identification des économies potentielles, négociation fournisseurs et optimisation des rendements.",
  },
];

const ExpertiseProduits = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Expertise produits</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground mt-3 mb-6">
              L'agroalimentaire, notre cœur de métier
            </h1>
            <p className="text-lg text-hero-foreground/70 leading-relaxed">
              Une expertise unique en formulation et industrialisation de produits agroalimentaires pour le marché africain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={expertiseImage}
                alt="Ligne de production de bouillons culinaires"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={1280}
                height={720}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Du laboratoire à l'usine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Notre expertise couvre l'ensemble du cycle de développement produit : de la formulation en laboratoire aux essais pilotes, jusqu'à la mise en production industrielle à grande échelle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Spécialisés dans les bouillons culinaires et les boissons, nous maîtrisons les contraintes spécifiques des marchés africains : goûts locaux, disponibilité des matières premières, conditions climatiques et réglementations.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Discuter de votre projet
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Expertise cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertises.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExpertiseProduits;
