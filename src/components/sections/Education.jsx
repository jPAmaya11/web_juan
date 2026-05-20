import AnimatedSection from '../ui/AnimatedSection';
import { FiBook, FiAward } from 'react-icons/fi';
import { education, certifications } from '../../data/education';

const Education = () => (
  <section id="education" className="py-24 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-accent font-mono text-sm mb-2">// formación</p>
        <h2 className="section-heading">Educación &amp; Certificaciones</h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <AnimatedSection direction="left">
          <h3 className="font-heading font-semibold text-white text-lg mb-5 flex items-center gap-2">
            <FiBook className="text-accent" /> Formación Académica
          </h3>
          {education.map((edu, i) => (
            <div key={i} className="card p-6 rounded-2xl hover:border-accent/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiBook size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-base mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-accent text-sm mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400 font-mono">
                    <span>{edu.period}</span>
                    <span className="text-green-400 font-semibold">{edu.status}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection direction="right" delay={0.1}>
          <h3 className="font-heading font-semibold text-white text-lg mb-5 flex items-center gap-2">
            <FiAward className="text-accent" /> Certificaciones
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="card p-4 rounded-xl flex items-center gap-4 hover:border-accent/20 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiAward size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium leading-snug">{cert.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
                </div>
                <span className="text-slate-500 text-xs font-mono shrink-0">{cert.year}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Education;
