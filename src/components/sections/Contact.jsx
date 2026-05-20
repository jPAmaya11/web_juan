import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import {
  FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/*
  CONFIGURAR EMAILJS:
  1. Crea una cuenta en https://emailjs.com (plan gratuito: 200 emails/mes)
  2. Crea un servicio de email (Gmail recomendado) → anota el Service ID
  3. Crea una plantilla con variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
  4. Copia tu Public Key desde Account > API Keys
  5. Crea el archivo .env en la raíz del proyecto:
       VITE_EMAILJS_SERVICE_ID=service_xxxxxxxx
       VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
       VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
*/
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

const contactInfo = [
  { icon: FiMail,     label: 'Email',      value: 'jamayaquiroz@gmail.com',              href: 'mailto:jamayaquiroz@gmail.com' },
  { icon: FaWhatsapp, label: 'WhatsApp',   value: '+51 956 584 532',                     href: 'https://wa.me/51956584532?text=Hola%20Juan%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte.' },
  { icon: FiLinkedin, label: 'LinkedIn',   value: 'juan-pablo-amaya-quiroz',             href: 'https://linkedin.com/in/juan-pablo-amaya-quiroz' },
  { icon: FiMapPin,   label: 'Ubicación',  value: 'Lima, Perú',                          href: null },
];

const fields = [
  { name: 'from_name',  label: 'Nombre',            type: 'text',  placeholder: 'Tu nombre completo' },
  { name: 'from_email', label: 'Email',             type: 'email', placeholder: 'tu@email.com' },
  { name: 'subject',    label: 'Asunto (opcional)', type: 'text',  placeholder: 'Proyecto freelance, consulta...' },
];

const validate = (data) => {
  const e = {};
  if (!data.from_name.trim())  e.from_name  = 'El nombre es requerido';
  if (!data.from_email.trim()) e.from_email = 'El email es requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) e.from_email = 'Email inválido';
  if (!data.message.trim())    e.message    = 'El mensaje es requerido';
  return e;
};

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [form, setForm]       = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [errors, setErrors]   = useState({});

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-2">// hablemos</p>
          <h2 className="section-heading">Contacto</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <AnimatedSection direction="left">
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              ¿Tienes un proyecto en mente o quieres que trabajemos juntos?
              Escríbeme — estoy disponible para freelance y oportunidades full-time.
            </p>

            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-mono mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: 'https://github.com/juanamayaquiroz', icon: FiGithub, label: 'GitHub' },
                { href: 'https://linkedin.com/in/juan-pablo-amaya-quiroz', icon: FiLinkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
              {fields.map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-slate-400 text-xs font-mono mb-1.5">
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`w-full bg-primary border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors ${
                      errors[name]
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.08] focus:border-accent/50'
                    }`}
                  />
                  {errors[name] && (
                    <p className="text-red-400 text-xs mt-1 font-mono">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-slate-400 text-xs font-mono mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o lo que necesitas..."
                  rows={5}
                  className={`w-full bg-primary border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500/60 focus:border-red-500'
                      : 'border-white/[0.08] focus:border-accent/50'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-accent/20"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <><FiSend size={15} /> Enviar mensaje</>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                >
                  <FiCheckCircle size={15} /> ¡Mensaje enviado! Te responderé pronto.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <FiAlertCircle size={15} /> Error al enviar. Contáctame por WhatsApp.
                </motion.div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
