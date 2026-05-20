import AnimatedSection from '../ui/AnimatedSection';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experiences } from '../../data/experience';

const typeBadge = {
  Trabajo:   'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Freelance: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const Experience = () => (
  <section id="experience" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-accent font-mono text-sm mb-2">// trayectoria</p>
        <h2 className="section-heading">Experiencia Laboral</h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </AnimatedSection>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-5 top-2 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-[1.1rem] top-6 -translate-x-1/2">
                  <div className="w-3.5 h-3.5 rounded-full bg-accent border-2 border-primary shadow-lg shadow-accent/30" />
                  {exp.current && (
                    <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-accent/40 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="card p-6 rounded-2xl hover:border-accent/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border mb-2 inline-block ${typeBadge[exp.type]}`}
                      >
                        {exp.type}
                      </span>
                      <h3 className="font-heading font-semibold text-white text-lg leading-tight">
                        {exp.role}
                      </h3>
                    </div>
                    {exp.current && (
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 whitespace-nowrap shrink-0">
                        Actualidad
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FiBriefcase size={13} className="text-accent" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} className="text-accent" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={13} className="text-accent" /> {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="text-sm text-slate-400 flex gap-2">
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-accent/[0.08] text-accent text-[10px] font-mono px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
