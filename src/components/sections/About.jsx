import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const stats = [
  { value: 1,  label: 'Año de experiencia',    suffix: '+' },
  { value: 6,  label: 'Proyectos completados', suffix: '+' },
  { value: 9,  label: 'Tecnologías dominadas', suffix: '+' },
  { value: 4,  label: 'Certificaciones',       suffix: ''  },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-accent">
      {count}{suffix}
    </span>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-accent font-mono text-sm mb-2">// sobre mí</p>
        <h2 className="section-heading">¿Quién soy?</h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Bio */}
        <AnimatedSection direction="left">
          <div className="space-y-5 text-slate-400 leading-relaxed text-[0.95rem]">
            <p>
              Soy <span className="text-white font-semibold">Juan Pablo Amaya</span>,
              desarrollador web junior y estudiante de{' '}
              <span className="text-accent">Ingeniería de Sistemas Computacionales</span>{' '}
              en Lima, Perú.
            </p>
            <p>
              Actualmente formo parte del equipo de desarrollo de{' '}
              <span className="text-white font-medium">Geatel Telecom</span>, donde desarrollo
              módulos ERP, APIs RESTful con Laravel e interfaces con Vue.js. Además, realizo
              proyectos freelance creando sistemas personalizados según las necesidades de cada
              cliente, participando en todo el proceso: análisis, desarrollo, implementación y
              despliegue.
            </p>
            <p>
              Me gusta construir soluciones funcionales y bien estructuradas, resolver problemas
              reales con tecnología y automatizar procesos que generen impacto. Siempre busco
              aprender, aportar en equipo y crecer como desarrollador full stack.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Lima, Perú 🇵🇪', 'Disponible Full-time', 'Freelance Activo', 'Inglés B1'].map(
              (badge) => (
                <span
                  key={badge}
                  className="bg-accent/10 border border-accent/20 text-accent text-xs px-3 py-1.5 rounded-full font-mono"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection direction="right" delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, suffix }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="card p-6 rounded-2xl text-center hover:border-accent/20 transition-colors"
              >
                <Counter value={value} suffix={suffix} />
                <p className="text-slate-400 text-sm mt-2 leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
