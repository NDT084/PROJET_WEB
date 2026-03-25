import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  { value: 15, suffix: "+", label: "Années d'expérience", description: "dans l'industrie agroalimentaire africaine" },
  { value: 7, suffix: "", label: "Pays couverts", description: "en Afrique de l'Ouest et Centrale" },
  { value: 50, suffix: "+", label: "Missions réalisées", description: "pour des industriels de premier plan" },
  { value: 98, suffix: "%", label: "Taux de satisfaction", description: "de nos clients partenaires" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-hero">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos résultats</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-hero-foreground mt-3 mb-4">
            Des chiffres qui parlent
          </h2>
          <p className="text-hero-foreground/60 max-w-2xl mx-auto text-lg">
            Notre engagement se mesure par des résultats concrets et durables.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl border border-hero-foreground/10 bg-hero-foreground/5"
            >
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold text-hero-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-hero-foreground/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
