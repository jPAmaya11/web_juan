import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const socials = [
  { icon: FiGithub,   href: 'https://github.com/jPAmaya11',                      label: 'GitHub'    },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/juan-pablo-amaya-quiroz-793813364',          label: 'LinkedIn'  },
  { icon: FiInstagram,href: 'https://www.instagram.com/juanpiamayaquiroz?igsh=MWZhNXZ6OGdpejU3Zg==',                                   label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/51956584532',                                label: 'WhatsApp'  },
  { icon: FiMail,     href: 'mailto:jamayaquiroz@gmail.com',                            label: 'Email'     },
];

const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10 bg-primary">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="hero" smooth duration={600} className="cursor-pointer">
        <span className="font-heading font-bold text-xl text-white">
          JA<span className="text-accent">.</span>
        </span>
      </Link>

      <p className="text-slate-400 text-sm text-center">
        © {new Date().getFullYear()} Juan Pablo Amaya Quiroz · Lima, Perú
      </p>

      <div className="flex items-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate-400 hover:text-accent transition-colors text-lg"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
