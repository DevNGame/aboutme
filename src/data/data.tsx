import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.png';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

function ageFromDate(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Welcome to my Github Profile`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm India based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Adobe Incorporated</strong> helping build scalable solutions to power products across the Globe.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I play <strong className="text-stone-100">Table Tennis, Badminton and Playstation Games</strong>. I also love to <strong>travel mountains</strong> - see Milky Way (and probably Aurora Borealis one day) and do road trips.
      </p>
    </>
  ),
  actions: [
    {
      href: 'resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
      Icon: EnvelopeIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a senior software engineer with about ${new Date().getFullYear() - 2016} years of experience building scalable backend systems, cloud-native apps, and full-stack solutions. I currently work at Adobe, where I've led projects that power localization platforms, improve search relevance, and orchestrate microservices across a global user base. My work has helped speed up content delivery, boost engagement, and streamline engineering workflows across dozens of teams and products.

I enjoy solving problems that sit at the intersection of scale, usability, and system design. Over the years, I've also gotten deeply involved in leading teams,mentoring, cross-team collaboration, and driving clean, maintainable code across engineering orgs.

Lately, I've been contributing to solutions leveraging Large Language Models(LLMs), Generative AI, and how they can improve developer workflows. I like building things that are practical, performant, and make people's jobs a little easier.`,
  aboutItems: [
    {label: 'Location', text: 'New Delhi, India', Icon: MapIcon},
    {label: 'Age', text: `${ageFromDate(new Date(1993, 8, 1))}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Travelling, Sports', Icon: SparklesIcon},
    {label: 'Study', text: 'Guru Gobind Singh Indraprastha University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Adobe Incorporated', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Scalable System Design',
        level: 10,
      },
      {
        name: 'Microservices',
        level: 9,
      },
      {
        name: 'Spring Boot',
        level: 9,
      }
    ],
  },
  {
    name: 'Generative AI',
    skills: [
      {
        name: 'Agentic Workflows (LangGraph/LangChain)',
        level: 10,
      },
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        level: 9,
      },
      {
        name: 'Generative AI',
        level: 9,
      }
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Deployment (Docker, Kubernetes, ArgoCD)',
        level: 9,
      },
      {
        name: 'Cloud Infrastructure (AWS, GCP)',
        level: 8,
      },
      {
        name: 'Database (SQL/NoSQL)',
        level: 9,
      }
    ],
  },
];

/**
 * Portfolio section
 */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2015',
    location: 'New Delhi, India',
    title: 'Bachelor of Technology in Computer Science',
    content: <p></p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2019 - Present',
    location: 'Adobe Inc., Noida, India',
    title: 'Computer Scientist - II',
    content: (
      <div>
  <li>Architected and delivered end-to-end Brand Localization Platform for Adobe Express UI powered by React,
Microservices, Agentic Workflows using Retrieval-Augmented Generation (RAG), enabling multi-modal
localization at scale across 100+ languages for millions of user interactions.</li>
  <li>Designed, developed, and engineered a platform for orchestrating microservices workflows, integrating Netflix
Conductor, Spring Boot, ReactJS, MySQL, and Apache Kafka. Delivered a robust UI-driven interface
improving task visibility and reducing manual intervention for engineering teams by 60% across
100+ workflows</li>  
  <li>Owned Engineering challenge to enhance Adobe Stock’s search system by introducing geo-based auto-tagging and
relevance algorithms, increased click-through rates by 18% and boosting localized content
discoverability by 25%</li>
  <li>Built a cross-lingual RAG retrieval system that populated the retrieval corpus using semantically similar
translations from multilingual vector databases, achieving over 85% human linguist acceptance rate
through embedding-based similarity matching.</li>
<li>Mentored 5+ junior developers, Championed engineering best practices across teams facilitating
adoption of scalable design principles, clean code standards, improving code quality</li>
  </div>
    ),
  },
  {
    date: 'Dec 2018 - Oct 2019',
    location: 'Kronos Inc., Noida, India',
    title: 'Senior Software Engineer',
    content: (
      <div>
  <li>Developed and enhanced core scheduling modules in a workforce management app (TeleStaff), implementing
role- and designation-based shift exchange logic and rules-driven auto-allocation, improving scheduling
accuracy by 30% and reducing manual overrides by 50%</li>
  <li>Migrated roster interface from legacy JSP-based datagrid to React Tables, leveraging data prefetching, page
hydration, and code splitting to reduce load times by 3x, enhancing responsiveness for 5K+ end users
across multiple departments</li>
  </div>
    ),
  },
    {
    date: 'Feb 2018 - Dec 2018',
    location: 'FarEye India Pvt. Ltd, Noida, India',
    title: 'Senior Software Engineer',
    content: (
      <div>
  <li>Designed and implemented RESTful APIs using Spring Boot and PostgreSQL to orchestrate BPMN
workflows with Camunda and standardized schema mappings through structured data definitions within a
multi-tier microservices architecture</li>
  </div>
    ),
  },
      {
    date: 'Dec 2015 - Feb 2018',
    location: 'Dell Services, Noida, India',
    title: 'Senior Associate 2',
    content: (
      <div>
  <li>Developed robust integrations for the Massachusetts Health Insurance Marketplace to generate
EDI-834 based data driven customer notices in PDF format, integrating with Print Partners’ APIs ensuring
on-time delivery to 100K+ users</li>
<li>Estimated development efforts from RFC documents to support Agile adoption, contributing to on-time project
delivery</li>
  </div>
    ),
  }

];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'Nikhil Ghantudiya',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'I\'d love to talk',
  description: 'Hey there! If you\'ve come this far, you might be interested in getting in touch. I\'d love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'sahil.india1993@gmail.com',
      href: 'mailto:sahil.india1993@gamil.com',
    },
    {
      type: ContactType.Location,
      text: 'New Delhi, India',
      href: 'https://maps.app.goo.gl/yxXZKBBGUbrbzAiM8',
    },
    {
      type: ContactType.Instagram,
      text: '@ssharkist',
      href: 'https://www.instagram.com/ssharkist/',
    },
    {
      type: ContactType.Github,
      text: 'devngame',
      href: 'https://github.com/devngame',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/devngame'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sahilgupta1993/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ssharkist'}
];
