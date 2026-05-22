export const projects = [
  {
    id: 1,
    title: 'NeoCenter — ERP Multitenant Corporativo',
    description:
      'ERP multitenant con Laravel 12, Vue 3 e Inertia.js. Gestiona ventas, campañas y usuarios con permisos por rol (Spatie) y aislamiento de datos por tenant (Stancl/Tenancy).',
    tech: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'Docker', 'Stancl/Tenancy'],
    category: 'Empresa',
    url: 'https://neocenter.geatel-telecom.com/',
    github: null,
    image: '/projects/neocenter.webp',
  },
  {
    id: 2,
    title: 'Neobusiness — ERP/CRM Modular Telecom',
    description:
      'ERP/CRM modular para el sector telecom. Construido con Laravel 12, Vue.js 3 e Inertia.js. Incluye integración con Facebook Graph API, importación masiva de datos y motor de reportes con permisos granulares.',
    tech: ['PHP 8.2', 'Laravel 12', 'Vue.js 3', 'Inertia.js', 'MySQL', 'Facebook API'],
    category: 'Empresa',
    url: 'https://neobusiness.geatel-telecom.com/login',
    github: null,
    image: '/projects/neobusiness.webp',
  },
  {
    id: 3,
    title: 'GEATEL Telecom — Sitio Corporativo',
    description:
      'Sitio corporativo construido con Astro 5 y Tailwind CSS 4. SEO estructurado en JSON-LD, carruseles dinámicos con Owl Carousel y modales con frecuencia controlada por localStorage.',
    tech: ['Astro 5', 'Tailwind CSS 4', 'Owl Carousel', 'SweetAlert2', 'JSON-LD'],
    category: 'Empresa',
    url: 'https://geatel-telecom.com/',
    github: null,
    image: '/projects/geatel.webp',
  },
  {
    id: 4,
    title: 'Educativo Newton — Sistema de Gestión Escolar',
    description:
      'Sistema escolar con Laravel 12, Inertia.js y Vue 3. Gestiona matrículas, control de asistencia y módulo de cobros con exportación a Excel y PDF.',
    tech: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'spatie/permission'],
    category: 'Freelance',
    url: 'https://newtonparaiso.site/login',
    github: null,
    image: '/projects/newton.webp',
  },
  {
    id: 5,
    title: 'GestSaludPE — SaaS de Gestión Clínica',
    description:
      'SaaS multi-tenant con Laravel 12, Vue 3 e Inertia.js. Incluye agenda médica, historial clínico, facturación, caja registradora con auditoría y módulo de marketing segmentado.',
    tech: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'spatie/permission'],
    category: 'Freelance',
    url: 'https://laboratorio.gestsaludpe.com/login',
    github: null,
    image: '/projects/gestsalud.webp',
  },
  {
    id: 6,
    title: 'Nexo — Workspace Colaborativo',
    description:
      'App con Laravel 12, Vue 3 e Inertia.js. Gestión de proyectos y tareas, notas tipo Evernote, reproducción de videos desde Drive y agenda sincronizada con Google Calendar.',
    tech: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'Google Calendar API', 'Google Drive API', 'spatie/permission'],
    category: 'Personal',
    url: null,
    github: null,
    image: '/projects/agendamiento.webp',
  },
];
