import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { skillCategories } from '../../data/skills';

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-accent font-mono text-sm mb-2">// stack técnico</p>
        <h2 className="section-heading">Tecnologías &amp; Herramientas</h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map(({ category, icon: CatIcon, skills }, i) => (
          <AnimatedSection key={category} delay={i * 0.1}>
            <div className="card p-6 rounded-2xl h-full hover:border-accent/20 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <CatIcon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex items-center gap-2 bg-primary border border-white/[0.06] hover:border-accent/30 rounded-lg px-3 py-2 transition-all cursor-default"
                  >
                    <Icon style={{ color }} size={15} />
                    <span className="font-mono text-xs text-slate-400">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
