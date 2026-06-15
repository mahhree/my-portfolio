import coffeeCup from '../assets/img/coffee_cup.png';
import coffeeSmallLogo from '../assets/img/coffee_small_logo.png';
import contactImg from '../assets/img/contact_me_img.png';

export const IMAGES = {
  coffeeCup,
  coffeeSmallLogo,
  contactImg,
};

export const PRICES = {
  linkedin: 2.50,
  github: 2.00,
  connect: 3.75,
  email: 3.75,
  project: 4.50,
  skill: 0.75,
  resume: 1.25,
};

export const SKILL_COLORS = [
  '#E8D5B7',
  '#D4E8C2',
  '#D4C8E8',
  '#C8E0E8',
  '#E8C8D4',
  '#E8E4C8',
];

export const skills = [
  { img: coffeeCup, name: 'React & Angular',   desc: 'Full-stack UI development' },
  { img: coffeeCup, name: 'TypeScript & JS',   desc: 'Typed, maintainable code' },
  { img: coffeeCup, name: 'Node.js & Python',  desc: 'Backend APIs & services' },
  { img: coffeeCup, name: 'RESTful APIs',       desc: 'Secure integrations' },
  { img: coffeeCup, name: 'Agile / Scrum',      desc: 'Sprint-based delivery' },
  { img: coffeeCup, name: 'C++ (In Progress)',  desc: 'Systems-level programming' },
];

export const projects = [
  {
    img: coffeeCup,
    bg: '#C8A882',
    title: 'ACH & Remote Deposit',
    subtitle: 'React · Python · RESTful APIs',
    desc: 'Built ACH enrollment and remote deposit capture for business members from the ground up, designing secure RESTful APIs and integrating third-party platforms.',
  },
  {
    img: coffeeCup,
    bg: '#8BAF5A',
    title: 'Digital Banking Platform',
    subtitle: 'Angular · Node.js · TypeScript',
    desc: 'Rebuilt and launched a full digital account opening and online banking experience. Reduced manual internal workflows by approximately 50% across the organization.',
  },
  {
    img: coffeeCup,
    bg: '#9B7CC8',
    title: 'Fraud Prevention System',
    subtitle: 'Node.js · Core Banking Integration',
    desc: 'Developed an automated check deposit hold system integrated directly with the core banking system, reducing fraud by ~70% and cutting manual work by ~40%.',
  },
  {
    img: coffeeCup,
    bg: '#5A9DB5',
    title: 'React Portfolio',
    subtitle: 'React · GitHub Pages',
    desc: 'Personal portfolio project showcasing professional accomplishments, built and maintained on GitHub as a living record of growth as a full-stack engineer.',
  },
];

export function fmt(n) {
  return '$' + n.toFixed(2);
}
