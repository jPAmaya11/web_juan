import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { FiCode, FiServer, FiDatabase, FiTool, FiGlobe, FiUser } from 'react-icons/fi';

const services = [
  {
    icon: FiGlobe,
    title: 'Páginas Web Corporativas',
    description:
      'Diseño y desarrollo de landing pages, sitios corporativos y portales responsivos, optimizados para SEO y velocidad.',
    tags: ['HTML/CSS', 'Vue.js', 'Laravel'],
  },
  {
    icon: FiCode,
    title: 'Aplicaciones Web Full-Stack',
    description:
      'Desarrollo completo de aplicaciones web: backend robusto con Laravel + interfaces modernas e interactivas con Vue.js.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
  },
  {
    icon: FiDatabase,
    title: 'Sistemas de Gestión (ERP)',
    description:
      'Construcción de sistemas a medida para colegios, clínicas, empresas y plataformas multitenancy con control de roles y permisos.',
    tags: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    icon: FiServer,
    title: 'APIs RESTful & Backend',
    description:
      'Diseño e implementación de APIs seguras y escalables para integración entre servicios, apps móviles y plataformas externas.',
    tags: ['Laravel', 'REST', 'PHP'],
  },
  {
    icon: FiTool,
    title: 'Web Scraping & Automatización',
    description:
      'Automatización de extracción y procesamiento de datos con Python y Selenium para reportes, integraciones y flujos de trabajo.',
    tags: ['Python', 'Selenium', 'Automatización'],
  },
  {
    icon: FiUser,
    title: 'Freelance a tu Medida',
    description:
      'Gestión autónoma del proyecto de inicio a fin: levantamiento de requerimientos, desarrollo, pruebas y entrega. Sin intermediarios.',
    tags: ['Scrum', 'Agile', 'Full-cycle'],
  },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-accent font-mono text-sm mb-2">// lo que ofrezco</p>
        <h2 className="section-heading">Servicios</h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              className="card p-6 rounded-2xl flex flex-col h-full hover:border-accent/25 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center text-accent mb-5 transition-colors">
                <s.icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-white text-base mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-accent/[0.08] text-accent text-[10px] font-mono px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
