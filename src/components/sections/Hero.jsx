import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const roles = [
  'Full-Stack Developer Junior',
  'Experiencia en PHP & Laravel',
  'Apasionado por Vue.js & Python',
  'Disponible para Freelance',
];

const socials = [
  { icon: FiGithub,    href: 'https://github.com/jPAmaya11',               label: 'GitHub'    },
  { icon: FiLinkedin,  href: 'https://www.linkedin.com/in/juan-pablo-amaya-quiroz-793813364',  label: 'LinkedIn'  },
  { icon: FiInstagram, href: 'https://www.instagram.com/juanpiamayaquiroz?igsh=MWZhNXZ6OGdpejU3Zg==',                            label: 'Instagram' },
  { icon: FaWhatsapp,  href: 'https://wa.me/51956584532',                         label: 'WhatsApp'  },
  { icon: FiMail,      href: 'mailto:jamayaquiroz@gmail.com',                     label: 'Email'     },
];

const Hero = () => {
  const [roleIndex, setRoleIndex]  = useState(0);
  const [displayed, setDisplayed]  = useState('');
  const [deleting, setDeleting]    = useState(false);
  const [charIndex, setCharIndex]  = useState(0);
  const [photoErr, setPhotoErr]    = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!deleting && charIndex < current.length) {
      t = setTimeout(() => setCharIndex((i) => i + 1), 65);
    } else if (!deleting && charIndex === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      t = setTimeout(() => setCharIndex((i) => i - 1), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] bg-indigo-700/[0.06] rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs px-4 py-1.5 rounded-full mb-7 font-mono">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Disponible para proyectos
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-tight mb-5">
            Hola, soy <br />
            <span className="text-accent">Juan Pablo</span>
            <br />
            <span className="text-slate-400">Amaya Quiroz</span>
          </h1>

          {/* Typewriter */}
          <div className="h-8 mb-7 flex items-center">
            <p className="font-mono text-sm md:text-[0.95rem] text-slate-400">
              <span className="text-accent-light mr-1">&gt;</span>
              {displayed}
              <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 align-middle animate-pulse" />
            </p>
          </div>

          <p className="text-slate-400 text-[0.95rem] leading-relaxed mb-9 max-w-lg">
            Desarrollador web con experiencia en sistemas ERP, APIs RESTful y proyectos
            freelance. Cursando el 9° ciclo de Ingeniería de Sistemas en la UPN — Lima, Perú.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link to="projects" smooth duration={600} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer shadow-lg shadow-accent/20"
              >
                Ver Proyectos
              </motion.button>
            </Link>
            <a href="/cv-juan-pablo-amaya-quiroz.pdf" download>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/10 hover:border-accent/50 text-slate-400 hover:text-accent font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                Descargar CV
              </motion.button>
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                className="text-slate-400 hover:text-accent transition-colors text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl scale-110" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border border-dashed border-accent/20"
            />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent/30 bg-secondary flex items-center justify-center">
              {!photoErr ? (
                <img
                  src="/foto-perfil.webp"
                  alt="Juan Pablo Amaya Quiroz"
                  className="w-full h-full object-cover"
                  onError={() => setPhotoErr(true)}
                />
              ) : (
                <span className="font-heading font-bold text-7xl text-accent select-none">JA</span>
              )}
            </div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 bg-secondary border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-mono text-accent shadow-xl"
            >
              &lt;/dev&gt;
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link to="about" smooth duration={600} offset={-70} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-accent transition-colors"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">scroll</span>
            <FiArrowDown size={14} />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
