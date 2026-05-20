import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiLock } from 'react-icons/fi';
import AnimatedSection from '../ui/AnimatedSection';
import { projects } from '../../data/projects';

const categories = ['Todos', 'Empresa', 'Freelance', 'Personal'];

const categoryBadge = {
  Empresa:  'bg-blue-500/10   text-blue-400   border-blue-500/20',
  Freelance:'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Personal: 'bg-violet-500/10 text-violet-400  border-violet-500/20',
};

const ProjectImage = ({ src, alt }) => {
  const [err, setErr] = useState(false);
  return err ? (
    <div className="w-full h-full flex items-center justify-center bg-primary">
      <span className="text-slate-500 text-xs font-mono">Sin preview</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      onError={() => setErr(true)}
    />
  );
};

const Projects = () => {
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-10">
          <p className="text-accent font-mono text-sm mb-2">// trabajos realizados</p>
          <h2 className="section-heading">Proyectos</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-mono px-5 py-2 rounded-full border transition-all ${
                active === cat
                  ? 'bg-accent border-accent text-white'
                  : 'border-white/10 text-slate-400 hover:border-accent/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="card rounded-2xl overflow-hidden flex flex-col hover:border-accent/20 transition-colors group"
              >
                {/* Image */}
                <div className="relative h-44 bg-primary overflow-hidden">
                  <ProjectImage src={p.image} alt={p.title} />
                  <span
                    className={`absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full border ${categoryBadge[p.category]}`}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-white text-base mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-accent/[0.08] text-accent text-[10px] font-mono px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex gap-3 mt-auto pt-1 border-t border-white/[0.04]">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent transition-colors font-mono"
                      >
                        <FiExternalLink size={13} /> Ver demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-slate-600 font-mono cursor-default">
                        <FiLock size={13} /> Privado
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
