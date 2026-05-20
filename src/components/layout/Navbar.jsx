import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Inicio',      to: 'hero' },
  { label: 'Sobre mí',   to: 'about' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Proyectos',  to: 'projects' },
  { label: 'Experiencia',to: 'experience' },
  { label: 'Educación',  to: 'education' },
  { label: 'Servicios',  to: 'services' },
  { label: 'Contacto',   to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/90 backdrop-blur-md border-b border-white/[0.06] py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer select-none">
          <span className="font-heading font-bold text-xl text-white tracking-tight">
            JA<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                spy
                activeClass="!text-accent"
                className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CV button + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/cv-juan-pablo-amaya-quiroz.pdf"
            download
            className="hidden lg:block text-sm font-semibold bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg transition-colors"
          >
            Descargar CV
          </a>
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-secondary/95 backdrop-blur-md border-t border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-70}
                  className="py-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/cv-juan-pablo-amaya-quiroz.pdf"
                download
                className="mt-3 text-center text-sm font-semibold bg-accent hover:bg-accent-light text-white px-4 py-2.5 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
