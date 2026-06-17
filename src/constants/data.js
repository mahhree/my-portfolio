import coffeeMug from '../assets/img/header-img.gif';
import cafeLogo from '../assets/img/cafeLogo.png';
import cake from '../assets/img/cake.png';
import coffeeBean from '../assets/img/coffeeBean.png';
import muffin from '../assets/img/muffin.png';
import tea from '../assets/img/tea.png';
import utensils from '../assets/img/utensils.png';
import whippedCream from '../assets/img/whippedCream.png';
import frap from '../assets/img/frap.png';
import hot from '../assets/img/hot.png';
import iced from '../assets/img/iced.png';
import toGo from '../assets/img/toGo.png';


export const IMAGES = {
  coffeeMug,
  cafeLogo,
  cake,
  coffeeBean,
  muffin,
  tea,
  utensils,
  whippedCream,
  frap,
  hot,
  iced,
  toGo,
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
  '#edd1a1',
  '#d7fbb8',
  '#d2c0f0',
  '#8dcce1',
  '#edbbce',
  '#ededed',
];

export const skills = [
  { img: cake, name: 'React & Angular',   desc: '' },
  { img: coffeeBean, name: 'TypeScript',   desc: '' },
  { img: muffin, name: 'Node.js & Python',  desc: '' },
  { img: tea, name: 'Agile / Scrum',      desc: '' },
  { img: utensils, name: 'C++ & Java',  desc: '' },
  { img: whippedCream, name: 'Git',       desc: '' },

];

export const projects = [
  {
    img: frap,
    bg: '#C8A882',
    title: 'ACH & Remote Deposit',
    subtitle: 'React · Python · RESTful APIs',
    desc: 'Built ACH enrollment and remote deposit capture for business members from the ground up, designing secure RESTful APIs and integrating third-party platforms.',
  },
  {
    img: hot,
    bg: '#9B7CC8',
    title: 'Remote Deposit Holds System',
    subtitle: 'Angular · TypeScript · Node.js ',
    desc: 'Developed an automated check deposit hold system integrated directly with the core banking system, reducing fraud by ~70% and cutting manual work by ~40%.',
  },
  {
    img: iced,
    bg: '#8BAF5A',
    title: 'Digital Banking Platform',
    subtitle: 'Angular · Node.js · TypeScript',
    desc: 'Rebuilt and launched a full digital account opening and online banking experience. Reduced manual internal workflows by approximately 50% across the organization.',
  },
  {
    img: toGo,
    bg: '#5A9DB5',
    title: 'React Portfolio',
    subtitle: 'React · GitHub Pages',
    desc: 'Personal portfolio project showcasing professional accomplishments, built and maintained on GitHub as a living record of growth as a full-stack engineer.',
  },
];

export function fmt(n) {
  return '$' + n.toFixed(2);
}
