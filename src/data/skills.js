import {
  SiPhp,
  SiLaravel,
  SiPython,
  SiMysql,
  SiVuedotjs,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiGithub,
  SiDocker,
  SiSelenium,
  SiPostgresql,
  SiAstro,
} from 'react-icons/si';
import { FiServer, FiMonitor, FiTool, FiLayers, FiCode } from 'react-icons/fi';

export const skillCategories = [
  {
    category: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'REST APIs', icon: FiServer, color: '#6366F1' },
    ],
  },
  {
    category: 'Frontend',
    icon: FiMonitor,
    skills: [
      { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FiCode, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
    ],
  },
  {
    category: 'Herramientas',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#E2E8F0' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    category: 'Conceptos',
    icon: FiLayers,
    skills: [
      { name: 'Web Scraping', icon: FiLayers, color: '#6366F1' },
      { name: 'Multitenancy', icon: FiLayers, color: '#8B5CF6' },
      { name: 'Sistemas ERP', icon: FiLayers, color: '#06B6D4' },
      { name: 'Scrum / Agile', icon: FiLayers, color: '#10B981' },
    ],
  },
];
