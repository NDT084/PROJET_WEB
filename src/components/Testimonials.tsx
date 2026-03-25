import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "FIMD EI a transformé notre ligne de production de bouillons. En 6 mois, nous avons réduit nos coûts matières de 18% tout en améliorant la qualité gustative de nos produits.",
    name: "Amadou Diallo",
    title: "Directeur Général",
    company: "Groupe Alimentaire Sahel",
    country: "Sénégal",
  },
  {
    quote: "Grâce à l'accompagnement de FIMD EI, nous avons obtenu notre certification HACCP en seulement 4 mois. Leur expertise terrain et leur rigueur méthodologique font toute la différence.",
    name: "Fatou Camara",
    title: "Directrice Qualité",
    company: "West Africa Foods",
    country: "Guinée",
  },
  {
    quote: "Le cabinet nous a accompagnés dans la conception de notre nouvelle usine à Douala. De la faisabilité à la mise en service, chaque étape a été maîtrisée avec professionnalisme.",
    name: "Jean-Pierre Mbarga",
    title: "DAF",
    company: "Cameroun Agri-Business",
    country: "Cameroun",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Témoignages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Ce que disent nos clients
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                scale: index === activeIndex ? 1 : 0.95,
                y: index === activeIndex ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={`${index === activeIndex ? "relative" : "absolute inset-0 pointer-events-none"}`}
            >
              <div className="text-center px-4 md:px-12">
                <Quote size={40} className="text-primary/20 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading text-foreground leading-relaxed mb-8 text-balance">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title} — {testimonial.company}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-8"
                  : "bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
