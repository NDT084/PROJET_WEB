import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  FlaskConical,
  ShieldCheck,
  Building2,
  Scale,
  ArrowRight,
  Factory,
  Clock,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Industrielle",
    priority: "HAUTE",
    description:
      "Optimisation des lignes de production, réduction des coûts opérationnels et amélioration de la productivité.",
    details: [
      "Diagnostic complet des processus de production",
      "Identification et élimination des goulots d'étranglement",
      "Mise en place d'indicateurs de performance (KPIs)",
      "Formation des équipes aux méthodes Lean Manufacturing",
      "Suivi post-mission et mesure des résultats",
    ],
    audience: "Usines en phase de croissance, sites multi-lignes, unités avec forte pression sur les coûts.",
    when:
      "Lorsque les marges se dégradent, que les délais ne sont plus tenus, ou que les équipes sont en surcharge constante.",
    deliverables:
      "Rapport de diagnostic, plan d’actions priorisé, tableaux de bord de performance, recommandations d’organisation.",
  },
  {
    icon: FlaskConical,
    title: "Développement Produits",
    priority: "HAUTE",
    description:
      "Formulation de recettes bouillons & boissons, optimisation des coûts matières et industrialisation.",
    details: [
      "Formulation et reformulation de recettes industrielles",
      "Optimisation des coûts matières premières",
      "Tests pilotes et mise à l'échelle industrielle",
      "Analyse sensorielle et panels consommateurs",
      "Documentation technique et fiches produits",
    ],
    audience:
      "Industries agroalimentaires, fabricants de bouillons, boissons, poudres, concentrés et ingrédients.",
    when:
      "Lors du lancement d’un nouveau produit, de la reformulation d’une gamme existante ou de la recherche d’économies matières.",
    deliverables:
      "Dossiers techniques, fiches recettes, protocoles de tests, recommandations d’industrialisation.",
  },
  {
    icon: ShieldCheck,
    title: "QHSE & Certifications",
    priority: "HAUTE",
    description:
      "Mise en conformité ISO / HACCP, sécurité industrielle et audits réglementaires.",
    details: [
      "Audit de conformité et gap analysis",
      "Mise en place de systèmes HACCP",
      "Préparation aux certifications ISO 22000 / 9001",
      "Formation QHSE des équipes opérationnelles",
      "Accompagnement lors des audits de certification",
    ],
    audience:
      "Sites soumis à fortes exigences réglementaires, exportateurs, acteurs de la grande distribution et de la sous-traitance.",
    when:
      "Avant un audit de certification, lors d’un changement de réglementation ou après un incident qualité/sécurité.",
    deliverables:
      "Plan de mise en conformité, procédures QHSE, supports de formation, accompagnement sur audits.",
  },
  {
    icon: Building2,
    title: "Projets Industriels",
    priority: "MOYENNE",
    description:
      "Conception et suivi d'usines Greenfield & Brownfield, gestion de projets complexes.",
    details: [
      "Études de faisabilité technico-économiques",
      "Conception d'usines et dimensionnement des équipements",
      "Supervision de la construction et mise en service",
      "Gestion de projet et coordination des parties prenantes",
      "Optimisation des layouts et flux de production",
    ],
    audience:
      "Investisseurs, directions industrielles, bureaux d’études, entreprises en phase d’extension ou de relocalisation.",
    when:
      "Avant tout investissement majeur, extension de capacité, modernisation d’atelier ou changement de technologies.",
    deliverables:
      "Études de faisabilité, notes de calcul, plans de flux, planning projet, rapports d’avancement.",
  },
  {
    icon: Scale,
    title: "Expertise Judiciaire",
    priority: "MOYENNE",
    description:
      "Rapports techniques pour tribunaux, analyse de litiges industriels.",
    details: [
      "Expertises techniques contradictoires",
      "Rapports d'expertise pour les juridictions",
      "Évaluation des dommages industriels",
      "Médiation technique entre parties",
      "Conseil pré-contentieux industriel",
    ],
    audience:
      "Cabinets d’avocats, compagnies d’assurance, tribunaux, directions générales impliquées dans un litige.",
    when:
      "En cas de sinistre, de défaut majeur, de conflit entre partenaires industriels ou de contentieux contractuel.",
    deliverables:
      "Rapports d’expertise, conclusions techniques, éléments de preuve, recommandations de résolution.",
  },
];

const highlights = [
  {
    title: "Une approche orientée terrain",
    description:
      "Nous partons de vos contraintes réelles pour proposer des solutions applicables rapidement, sans complexifier vos opérations.",
  },
  {
    title: "Des résultats mesurables",
    description:
      "Chaque mission est cadrée avec des indicateurs clairs pour suivre l’impact sur la performance, la qualité et les coûts.",
  },
  {
    title: "Un accompagnement de bout en bout",
    description:
      "De l’audit initial au suivi post-mission, nous restons engagés à vos côtés pour sécuriser la mise en œuvre.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnostic",
    text: "Analyse du contexte, des enjeux, des données existantes et visite terrain des installations.",
  },
  {
    number: "02",
    title: "Plan d’action",
    text: "Co-construction d’un plan pragmatique, priorisé selon l’impact et les ressources disponibles.",
  },
  {
    number: "03",
    title: "Mise en œuvre",
    text: "Accompagnement des équipes, animation d’ateliers, suivi de l’avancement et ajustements opérationnels.",
  },
  {
    number: "04",
    title: "Suivi & pérennisation",
    text: "Mesure des résultats, transfert de compétences, recommandations pour la suite.",
  },
];

const sectors = [
  {
    icon: Factory,
    name: "Agroalimentaire & boissons",
    description:
      "Usines de bouillons, boissons, produits laitiers, ingrédients, poudres et préparations culinaires.",
  },
  {
    icon: Factory,
    name: "Industrie de process",
    description:
      "Chimie légère, formulation, conditionnement, industries de transformation.",
  },
  {
    icon: Factory,
    name: "PME industrielles",
    description:
      "Sites en croissance souhaitant structurer leurs opérations et se préparer à l’export ou aux certifications.",
  },
];

const faqs = [
  {
    question: "Quel type d’entreprise accompagnez-vous ?",
    answer:
      "Nous accompagnons principalement des sites industriels (PME, ETI, grands groupes) dans les secteurs agroalimentaire, boissons, ingrédients et industries de process.",
  },
  {
    question: "Quelle est la durée typique d’une mission ?",
    answer:
      "Selon le périmètre, une mission peut aller de quelques jours (audit ciblé) à plusieurs mois (projet global avec mise en œuvre et suivi).",
  },
  {
    question: "Intervenez-vous à l’international ?",
    answer:
      "Oui, nous intervenons sur différents pays, avec une expérience particulière sur les environnements africains et les marchés émergents.",
  },
  {
    question: "Comment se déroule le premier contact ?",
    answer:
      "Nous commençons par un échange pour comprendre votre contexte et vos enjeux, puis nous vous proposons un cadrage de mission adapté.",
  },
];

const Services = () => {
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
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground mt-3 mb-6">
              Des solutions complètes pour l&apos;industrie
            </h1>
            <p className="text-lg text-hero-foreground/70 leading-relaxed">
              Cinq domaines d&apos;expertise complémentaires pour accompagner votre transformation industrielle,
              de l&apos;audit initial à la certification finale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valeur ajoutée & démarche */}
      <section className="section-padding bg-background">
        <div className="container-narrow px-6 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Notre valeur ajoutée
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Une approche pensée pour produire des résultats concrets
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous combinons expertise technique, expérience de terrain et vision stratégique pour sécuriser vos projets,
              améliorer la performance et faire monter vos équipes en compétences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <span className="text-primary font-bold text-sm">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-card-foreground mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 xl:grid-cols-5 gap-8 p-8 md:p-12 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="xl:col-span-2 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <service.icon size={24} className="text-primary" />
                      </div>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                          service.priority === "HAUTE"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        Priorité {service.priority.toLowerCase()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <span className="font-semibold text-card-foreground">
                        Pour qui :{" "}
                      </span>
                      <span>{service.audience}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-card-foreground">
                        Quand intervenir :{" "}
                      </span>
                      <span>{service.when}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-card-foreground">
                        Livrables :{" "}
                      </span>
                      <span>{service.deliverables}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit">
                    <Link to="/contact">
                      Discuter de ce besoin
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="xl:col-span-3">
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs & mode d'intervention */}
      <section className="section-padding bg-muted/40">
        <div className="container-narrow px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Où nous intervenons
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Des expertises adaptées à vos réalités industrielles
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nous accompagnons différents types de sites industriels, des PME en structuration
              jusqu&apos;aux unités de grande capacité, en tenant compte des contraintes locales,
              réglementaires et marché.
            </p>
            <div className="space-y-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3 p-4 rounded-2xl bg-card border border-border"
                >
                  <div className="mt-1">
                    <sector.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground mb-1">
                      {sector.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border space-y-6"
          >
            <div className="flex items-center gap-3">
              <Clock className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-card-foreground">
                Un mode d&apos;intervention flexible
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Selon vos besoins, nous pouvons intervenir en mission courte très ciblée,
              en accompagnement projet sur plusieurs mois, ou en appui ponctuel lors de moments
              clés (audit, démarrage d&apos;usine, lancement produit...).
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Missions sur site et accompagnement à distance</li>
              <li>• Animation d&apos;ateliers et formations opérationnelles</li>
              <li>• Reporting régulier et points d&apos;étape avec la direction</li>
              <li>• Coordination avec vos partenaires techniques et institutionnels</li>
            </ul>
            <Button asChild size="sm" className="mt-2">
              <Link to="/contact">
                Échanger sur votre contexte
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="text-primary" size={20} />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Questions fréquentes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Foire aux questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Quelques réponses aux questions les plus fréquentes. Nous restons disponibles
              pour échanger sur votre situation spécifique et construire une mission sur mesure.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
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
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;