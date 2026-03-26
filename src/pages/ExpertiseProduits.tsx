import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Beaker,
  DollarSign,
  Gauge,
  ShieldCheck,
  ClipboardList,
  FlaskConical,
  Timer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import expertiseImage from "@/assets/expertise-produits.jpg";

const expertises = [
  {
    icon: Beaker,
    title: "Bouillons culinaires",
    description:
      "Formulation, optimisation organoleptique et industrialisation de bouillons en cubes, poudres et liquides. Expertise éprouvée sur les marchés ouest-africains.",
    scope:
      "Profils goût locaux, adaptation aux matières premières disponibles, contraintes de coût et de stabilité produit.",
  },
  {
    icon: Gauge,
    title: "Boissons industrielles",
    description:
      "Développement et mise à l'échelle de boissons (jus, nectars, boissons aromatisées, boissons nutritionnelles).",
    scope:
      "Stabilité, texture, couleur, conservation, choix des arômes, adaptation aux lignes de production existantes.",
  },
  {
    icon: DollarSign,
    title: "Optimisation de recettes",
    description:
      "Réduction des coûts matières tout en préservant le profil sensoriel et la perception consommateur.",
    scope:
      "Reformulation stratégique, substitution d’ingrédients, optimisation de dosage, travail sur les pertes et surdosages.",
  },
  {
    icon: ShieldCheck,
    title: "Réduction des coûts de production",
    description:
      "Analyse complète de la chaîne de coûts, identification des leviers d’économies et optimisation des rendements.",
    scope:
      "Rendement matières, pertes process, consommations auxiliaires, standardisation des recettes et des procédures.",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "Cadrage & brief produit",
    text: "Clarification des objectifs (goût, coût, positionnement, contraintes process, réglementation) et du cahier des charges.",
  },
  {
    icon: FlaskConical,
    title: "Formulation & prototypes",
    text: "Développement de premières recettes en laboratoire, ajustements organoleptiques et tests de faisabilité.",
  },
  {
    icon: Gauge,
    title: "Essais pilotes & industrialisation",
    text: "Validation sur pilotes ou lignes industrielles, réglage des paramètres process, définition des standards de production.",
  },
  {
    icon: Timer,
    title: "Validation & lancement",
    text: "Suivi des premiers lots, consolidation des données, finalisation des documents techniques et appui au lancement.",
  },
];

const deliverables = [
  "Recettes détaillées et fiches techniques produits",
  "Paramètres process (temps, températures, vitesses, séquences)",
  "Recommandations matières premières et alternatives possibles",
  "Rapports de tests (sensoriels, pilotes, industriels)",
  "Supports pour vos équipes (procédures, check-lists, bonnes pratiques)",
];

const faq = [
  {
    question: "Quels types de produits développez-vous ?",
    answer:
      "Nous intervenons principalement sur les bouillons culinaires, les boissons (jus, nectars, boissons aromatisées), les poudres et préparations agroalimentaires destinées aux marchés africains.",
  },
  {
    question: "À quel moment faire appel à vous ?",
    answer:
      "Lors du lancement d’un nouveau produit, de la reformulation d’une gamme existante, d’un besoin de réduction de coûts ou lorsqu’un produit actuel ne performe pas comme attendu (goût, stabilité, rendement).",
  },
  {
    question: "Pouvez-vous travailler avec nos usines existantes ?",
    answer:
      "Oui, nous intégrons vos lignes, vos contraintes et vos équipes. L’objectif est de trouver la meilleure solution dans votre réalité industrielle, sans tout réinventer.",
  },
  {
    question: "Combien de temps dure un projet type ?",
    answer:
      "Selon la complexité, un projet peut durer de quelques semaines (optimisation ciblée) à plusieurs mois (développement complet avec essais industriels et suivi post-lancement).",
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Expertise produits
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground mt-3 mb-6">
              L&apos;agroalimentaire, notre cœur de métier
            </h1>
            <p className="text-lg text-hero-foreground/70 leading-relaxed">
              Une expertise opérationnelle en formulation et industrialisation de produits agroalimentaires,
              pensée pour les réalités des marchés africains.
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
                Du laboratoire à l&apos;usine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Notre accompagnement couvre l&apos;ensemble du cycle de développement produit :
                cadrage, formulation, essais pilotes et mise en production industrielle à grande échelle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous intégrons les contraintes spécifiques des marchés africains : préférences gustatives locales,
                saisonnalité et disponibilité des matières premières, conditions climatiques, réglementations et
                réalités industrielles des sites de production.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                L&apos;objectif : sécuriser vos lancements et vos reformulations, en garantissant la cohérence entre
                promesse marketing, viabilité industrielle et performance économique.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Discuter de votre projet
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Process & livrables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Notre démarche
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">
                Une méthode structurée pour des produits robustes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous appliquons une démarche claire, du brief à la validation industrielle, pour réduire les risques,
                gagner du temps et capitaliser sur chaque essai. Chaque étape est documentée pour faciliter la
                transmission aux équipes et la reproductibilité des résultats.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-5 rounded-2xl border border-border bg-card"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon size={18} className="text-primary" />
                      <h3 className="text-sm font-semibold text-card-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card h-full flex flex-col"
            >
              <h3 className="text-lg font-heading font-bold text-card-foreground mb-3">
                Ce que vous obtenez concrètement
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Au-delà des idées, vous repartez avec des éléments directement exploitables par vos équipes
                R&amp;D, qualité et production.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button asChild variant="outline" size="sm">
                  <Link to="/contact">
                    Voir comment nous pouvons vous aider
                    <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Expertise cards */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Nos domaines d&apos;intervention produits
            </h2>
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
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-card-foreground">Focus :</span>{" "}
                    {item.scope}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-border pt-12">
            <div className="max-w-3xl mb-8">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Questions fréquentes
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">
                Vous vous posez peut-être ces questions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Chaque projet est spécifique, mais certaines questions reviennent souvent lorsque l&apos;on parle
                de développement et d&apos;optimisation de produits agroalimentaires.
              </p>
            </div>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 md:p-6 rounded-2xl border border-border bg-card"
                >
                  <h3 className="text-sm md:text-base font-semibold text-card-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
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