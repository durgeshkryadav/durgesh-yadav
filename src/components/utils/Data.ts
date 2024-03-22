export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: "Netflix Clone(Movix)",
    techStack:
      "React, Infinite-Scroll, SCSS, Axios, Tmdb-Api, Redux-Toolkit, Typescript",
    imageUrl: "netflix-clone.PNG",
    href: "https://github.com/DGSH9/react-movix-tmdb-api-movie-database",
  },
  {
    id: 2,
    title: "Developer Connector",
    techStack: "React, Axios, Redux, Bootstarp, NodeJS, ExpressJS, MongoDB",
    imageUrl: "dev-connector.PNG",
    href: "https://github.com/DGSH9/DEVCONNECT",
  },
];

export const moreProjects = [
  {
    id: 1,
    title: "Task Tracker",
    techStack: "React, Axios, Bootstarp, NodeJS, ExpressJS, MySQL",
    icon: "task-tracker.webp",
    href: "https://github.com/DGSH9/task-tracker-mern",
  }
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "HTML, CSS",
    src: "/tech/frontend/htmlcss.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "MUI",
    src: "/tech/frontend/mui.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: "Tailwind",
    src: "/tech/frontend/tailwind.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: "Javascript, Typescript",
    src: "/tech/frontend/jsts.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 5,
    title: "Reactjs",
    src: "/tech/frontend/reactjs.jpg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 6,
    title: "Nextjs 13",
    src: "/tech/frontend/nextjs13.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: "NodeJs",
    src: "/tech/backend/nodejs.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: "ExpressJs",
    src: "/tech/backend/express.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: "MySQL",
    src: "/tech/database/mysql.jpeg",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "MongoDB",
    src: "/tech/database/mongo.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Docker",
    src: "/tech/devops/docker.webp",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: "Kubernetes",
    src: "/tech/devops/k8s.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 80,
  }
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: "Rest API",
    src: "/tech/others/rest.png",
    exp: "1 day ago",
    snippetCount: 1128,
    progress: 90,
  },
];
