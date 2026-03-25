import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  {
    icon: Target,
    title: "Expertise terrain",
    description: "Nous connaissons les réalités industrielles africaines de l'intérieur. Chaque recommandation est ancrée dans le concret.",
  },
  {
    icon: Eye,
    title: "Approche sur mesure",
    description: "Pas de solution générique. Chaque mission est conçue spécifiquement pour votre contexte et vos objectifs.",
  },
  {
    icon: Users,
    title: "Proximité client",
    description: "Un interlocuteur unique, disponible et engagé. Nous construisons des partenariats durables.",
  },
  {
    icon: CheckCircle,
    title: "Résultats mesurables",
    description: "Chaque intervention se mesure par des KPIs concrets : réduction des coûts, gains de productivité, certifications obtenues.",
  },
];

const APropos = () => {
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">À propos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-foreground mt-3 mb-6">
              Un cabinet ancré dans le terrain industriel africain
            </h1>
            <p className="text-lg text-hero-foreground/70 leading-relaxed">
              FIMD EI est un cabinet de conseil industriel spécialisé, positionné sur un marché de niche en Afrique de l'Ouest et Centrale. Notre mission : rendre l'excellence industrielle accessible à tous les acteurs du continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + text */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutImage}
                alt="Équipe FIMD EI en réunion de travail"
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
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Notre vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous croyons que l'industrie africaine possède un potentiel immense, souvent freiné par un manque d'accompagnement technique de qualité. FIMD EI comble ce vide en apportant une expertise internationale adaptée aux réalités locales.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                De la formulation de bouillons culinaires à la conception d'usines Greenfield, nous intervenons à chaque étape de la chaîne de valeur industrielle avec un objectif unique : créer de la performance durable.
              </p>
              <Button asChild>
                <Link to="/services">
                  Découvrir nos services
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos valeurs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
              Ce qui nous différencie
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <value.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
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

export default APropos;
