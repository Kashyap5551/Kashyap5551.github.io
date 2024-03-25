import {
  meta,
  shopify,
  starbucks,
  tesla,
  moodys,
  allenfort,
  genieailogo,
  inzone,
} from "../assets/images";
import {
  postgressql,
  docker,
  kubernetes,
  aws,
  postman,
  mysql,
  python,
  java,
  redis,
  azure,
  gcp,
  kafka,
  bash,
  cplusplus,
  jira,
  spring,
  circleci,
  terraform,
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
  linkedin,
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
  arrow,
  contact,
  resume,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: postgressql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerization",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "Container Orchestration",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Cloud",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "API Development",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Database",
  },
  {
    imageUrl: azure,
    name: "Azure",
    type: "Cloud",
  },
  {
    imageUrl: gcp,
    name: "GCP",
    type: "Cloud",
  },
  {
    imageUrl: kafka,
    name: "Apache Kafka",
    type: "Messaging",
  },
  {
    imageUrl: bash,
    name: "Bash",
    type: "Scripting",
  },
  {
    imageUrl: cplusplus,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Project Management",
  },
  {
    imageUrl: spring,
    name: "Spring",
    type: "Backend",
  },
  {
    imageUrl: circleci,
    name: "CircleCI",
    type: "CI/CD",
  },
  {
    imageUrl: terraform,
    name: "Terraform",
    type: "Infrastructure as Code",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Inzone Supplements",
    icon: inzone,
    iconBg: "#C0C0C0",
    date: "July 2023 - Present",
    points: [
      "Led the development of a Next.js e-commerce platform, boosting user experience with 40% faster page loads and scaling to 10,000 monthly active users.",
      "Integrated Redis caching with MongoDB, slashing database load and speeding up read operations by 30%, enhancing system responsiveness.",
      "Implemented Next.js Auth and Stripe API integration, cutting transaction times by 32%, for smoother customer experiences.",
      "Designed a Payload CRM admin dashboard, improving administrative efficiency and enabling real-time monitoring of user activity and sales",
      "Managed AWS Amplify and Cloudfront deployments, achieving 99.9% uptime and reducing infrastructure costs by 22% during traffic peaks.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Allenfort Inc",
    icon: allenfort,
    iconBg: "#C7E1F1",
    date: "August 2021 - Present",
    points: [
      "Orchestrated full-cycle development initiatives using a diverse tech stack, achieving a notable 20% increase in client satisfaction ratings.",
      "Engineered cost-efficient AWS infrastructures for various clients, reducing operational expenses by 15% and enhancing system scalability.",
      "Successfully delivered custom solutions to 8 clients, with ongoing projects focused on optimizing cloud architecture for improved performance and reliability.",
      "Coordinated with multidisciplinary teams to seamlessly execute 12 software releases, consistently exceeding project timelines and client expectations.",
      "Independently developed micro-SaaS projects, contributing to company growth and diversifying revenue streams.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Moody's Analytics",
    icon: moodys,
    iconBg: "#1B95E1",
    date: "June 2022 - August 2022",
    points: [
      "Contributed to a Java Spring Boot-based enterprise application for the Canadian Securities Institute, generating $19.3 million in revenue, involving extensive collaboration with stakeholders and product owners.",
      "Developed scalable REST APIs using the Spring framework, reducing response times by 30% and significantly improving data processing speeds.",
      "Integrated Okta SSO OAuth into enterprise software, achieving a fivefold decrease in login times and substantially boosting security measures.",
      "Applied CI/CD practices, engaged in pull requests, code reviews, and agile development cycles, alongside using JIRA for project management and RestAssured for comprehensive testing, enhancing software reliability and team efficiency.",
    ],
  },

  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Kashyap5551",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kashyap-patel-65045315b/",
  },
];

export const projects = [
  {
    iconUrl: genieailogo,
    theme: "btn-back-blue",
    name: "GenieAI",
    description:
      "SaaS GenieAI: Next.js app with React, Tailwind, Prisma, Stripe. Clerk Auth, AI tools, responsive design, form validation, subscription model. Demo of route handling, direct DB access, layout reuse.",
    link: "https://genie-ai-saas.vercel.app/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "Work in Progress",
    description: "",
    link: "https://github.com/kashyap5551",
  },
];
//   {
//     iconUrl: threads,
//     theme: "btn-back-green",
//     name: "Full Stack Threads Clone",
//     description:
//       'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//     link: "https://github.com/adrianhajdin/threads",
//   },
//   {
//     iconUrl: car,
//     theme: "btn-back-blue",
//     name: "Car Finding App",
//     description:
//       "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
//     link: "https://github.com/adrianhajdin/project_next13_car_showcase",
//   },
//   {
//     iconUrl: snapgram,
//     theme: "btn-back-pink",
//     name: "Full Stack Instagram Clone",
//     description:
//       "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
//     link: "https://github.com/adrianhajdin/social_media_app",
//   },
//   {
//     iconUrl: estate,
//     theme: "btn-back-black",
//     name: "Real-Estate Application",
//     description:
//       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
//     link: "https://github.com/adrianhajdin/projects_realestate",
//   },
//   {
//     iconUrl: summiz,
//     theme: "btn-back-yellow",
//     name: "AI Summarizer Application",
//     description:
//       "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
//     link: "https://github.com/adrianhajdin/project_ai_summarizer",
//   },
// ];
