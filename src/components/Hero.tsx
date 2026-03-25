import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Installation industrielle moderne en Afrique"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/40" />
      </div>

      {/* Content */}
      <div className="relative container-narrow px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Cabinet de Conseil Industriel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-hero-foreground mb-6 text-balance"
          >
            Améliorer la performance industrielle{" "}
            <span className="text-primary">en Afrique</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-hero-foreground/70 mb-10 max-w-2xl leading-relaxed"
          >
            Nous accompagnons les industriels d'Afrique de l'Ouest et Centrale dans l'optimisation de leurs opérations, le développement de produits et la mise en conformité réglementaire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" variant="hero" className="text-base px-8 py-6">
              <Link to="/contact">
                Demander un diagnostic
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline" className="text-base px-8 py-6">
              <Link to="/services">
                <Play size={18} />
                Découvrir nos services
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "7", label: "Pays couverts" },
              { value: "5", label: "Domaines d'expertise" },
              { value: "100%", label: "Engagement terrain" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-hero-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
