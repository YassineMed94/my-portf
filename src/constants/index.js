import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi, 
  coverhunt,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'edu',
    title: 'Education',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'graphql',
    icon: graphql,
  },
  
  {
    name: 'git',
    icon: git,
  },
 
];

const experiences = [
  {
    title: 'Co-OP Front-End Developer',
    company_name: 'Rewize Ai',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2024 - May 2024',
  },
  {
    title: 'Junior Front-end Developer (Wordpress)',
    company_name: 'Atlesec',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2021 - Dec 2023',
  },
  {
    title: 'Technology Assistant',
    company_name: 'Etradif',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Nov 2019 - Feb 2020',
  },
  
 
];
const educations = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Ironhack Bootcamp Madrid',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2023 - Feb 2024',
  },
  {
    title: 'Technician Specialized in IT Development',
    company_name: 'MIAGE Casablanca Officielle',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2017 - Jul 2019',
  },
  {
    title: 'Master in tourisme',
    company_name: 'Universidad de valencia',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Feb 2022 - Oct 2022',
  },
 
];

const projects = [
  {
    id: 'project-1',
    name: 'ET_PH ',
    description: 'A Fullstack Ecommerce website with full Crud functions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/orgs/ecommerce-app-tech/repositories',
    demo: 'https://ecommerce-tech-app.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Recipe-Finder',
    description:
      'A React js recipe app with full crud.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/recipe-finder-react/recipe',
    demo: 'https://project-recipe-finder.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Apple Ihone Website Clone',
    description: 'iphone web Page clone with React js with animation ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/YassineMed94/apple-iphone',
    demo: 'https://appleiphone-clone.netlify.app',
  },
  {
    id: 'project-4',
    name: 'Volti Electric',
    description: `A single-page Javascript Electric motocycle.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/YassineMed94/volti-electric',
    demo: 'https://volti-electric.netlify.app/',
  },
  
];

export { services, technologies, experiences, projects, educations };
