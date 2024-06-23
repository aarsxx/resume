export interface PersonalData {
  summary: Summary;
  birth: Birth;
  contact: Contact;
  experience: Array<Experience>;
  education: Array<Education>;
  skills: Array<Skill>;
  qualifications: Array<Qualification>;
}

export interface Summary {
  name: Name;
  position: string;
  about: string;
}

export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface Birth {
  year: string;
  month: string;
  day: string;
}

export interface Contact {
  email: string;
  phone: string;
  github: string;
  country: string;
  city: string;
}

export interface Experience {
  position: string;
  company: string;
  timeperiod: string;
  description: string;
  website: string;
  activities: Array<string>;
}

export interface Position {
  name: string;
  timeperiod: string;
  description: string;
  projects: Array<Project>;
}

interface Project {
  name: string;
  description: string;
  technics: Array<Technics>;
}

export interface Education {
  name: string;
  degree: string;
  timeperiod: string;
  website: string;
}

export interface Skill {
  category: string;
  description: string;
  contents: Array<SkillContent>;
}

export interface SkillContent {
  name: string;
  experience?: string;
}

export interface Qualification {}

export type Technics =
  | "Java"
  | "Kotlin"
  | "Android"
  | "Node.js"
  | "Express.js"
  | "JavaScript"
  | "TypeScript"
  | "Spring Boot"
  | "Ruby"
  | "Python"
  | "Ruby on Rails"
  | "ReactiveX"
  | "Vue"
  | "React"
  | "C++"
  | "C"
  | "C#"
  | "Kubernetes";


const data = {
  summary: {
    name: {
      first: "Chiajun",
      last: "Wang",
    },
    position: "Android / Frontend Developer",
    about:
      "Have 2+ years work experience of Android and 1+ year work experience of frontend. Familiar with many famous architectures and design patterns, and extremely good at writing clean code.",
  },
  birth: {
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
  },
  contact: {
    email: "ibara1454@gmail.com",
    ***REMOVED***
    ***REMOVED***
    country: "Japan",
    city: "Tokyo",
    github: "ibara1454",
  },
  experience: [
    {
      position: "Frontend Engineer",
      company: "Yahoo Japan Corporation",
      timeperiod: "2020.08 - Present",
      description:
        'Project "Yahoo Mail Web". Worked with a team of about 15 members. Renewed the old "Yahoo Mail" website and refactored the related backend servers.',
      website: "https://about.yahoo.co.jp/",
      activities: [
        "Technology stack: React, Redux, TypeScript, Node.js and Kubernetes",
        "Tech lead",
        "In charge of designing error handling, performance optimizing and difficult tasks",
        "Improved the performance score in Lighthouse over than 200%",
      ],
    },
    {
      position: "Android Engineer",
      company: "Yahoo Japan Corporation",
      timeperiod: "2018.10 - 2020.07",
      description:
        'Project "Yahoo Mail Android". Worked with a team of about 13 members. Developed the "Yahoo Mail" android application and maintained the related backend servers.',
      website: "https://about.yahoo.co.jp/",
      activities: [
        "Technology stack: Java, Kotlin, RxJava, Kotlin Coroutine and Android Architecture Components",
        "Implemented user authentication (OpenID Connect)",
        "Implemented a IMAP client which supports concurrent mode",
      ],
    },
  ],
  experience_details: {
    company: "Yahoo Japan Corporation",
    website: "https://about.yahoo.co.jp/",
    history: [
      {
        timeperiod: "2018.04 - 2018.09",
        description: "新卒入社.",
      },
      {
        timeperiod: "2018.10 - 2020.09",
        description:
          "学生向けの DevRel プロジェクト「Hack U」所属. 学生向けにワークショップ及びハッカソンイベントを企画する業務を担当.",
      },
      {
        timeperiod: "2019.10 - 2020.09",
        description:
          "エンジニア向けの DevRel プロジェクト「Tech Meetup」所属. エンジニア向けに勉強会を企画する業務を担当.",
      },
      {
        timeperiod: "2018.10 - 2020.07",
        tech: [
          "Android",
          "Kotlin",
          "Java",
          "Node.js",
          "Spring Boot",
          "RxJS / RxJava",
        ],
        description:
          "アクティブデバイス数 400 万の「ヤフーメール Android」アプリ及びバックエンドサーバの開発・運用を担当.",
        tasks: [
          "IMAP クライアント作成",
          "認証処理再実装",
          "メールリストリニューアル",
        ],
      },
      {
        timeperiod: "2020.08 - Present",
        tech: ["JavaScript", "TypeScript", "React", "Kubernetes"],
        description:
          "ヤフーメール Web 版の新規 Web コンポーネントの開発 / 技術サポートを担当.",
        tasks: [
          "モダン開発環境構築",
          "React による新規 UI 開発",
          "Kubernetes によるシステム構築",
        ],
      },
    ],
  },
  education: [
    {
      name: "University of Tsukuba",
      degree: "Master of Engineering in Computer Science",
      // degree: "M.Eng. in Computer Science",
      timeperiod: "2016.04 - 2018.03",
      website: "https://www.tsukuba.ac.jp/",
    },
    {
      name: "Fu Jen Catholic University",
      degree: "Bachelor of Science in Mathematics",
      // degree: "B.S. in Mathematics",
      timeperiod: "2007.09 - 2012.06",
      website: "https://www.fju.edu.tw/",
    },
  ],
  skills: [
    {
      category: "Programming Languages / Frameworks",
      description: "Familiar with",
      contents: [
        { name: "JavaScript", experience: "7 years" },
        { name: "TypeScript", experience: "4 years" },
        { name: "Java", experience: "3 years" },
        { name: "Kotlin", experience: "2 years" },
        { name: "Python", experience: "3 years" },
        { name: "Node.js", experience: "4 years" },
        { name: "Kotlin Coroutine" },
        { name: "ReactiveX" },
      ],
    },
    {
      category: "Programming Languages / Frameworks",
      description: "Sufficient",
      contents: [
        { name: "Ruby", experience: "1 year" },
        { name: "C++", experience: "3 years" },
        { name: "C#", experience: "2 years" },
        { name: "Haskell", experience: "2 years" },
        { name: "Express" },
        { name: "Ruby on Rails" },
        { name: "Spring boot" },
      ],
    },
  ],
  qualifications: [
    {
      name: "Certified Kubernetes Administrator",
      img: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
      url: "https://www.credly.com/badges/636db6a0-c6c1-482e-ba22-0e9784fd9538",
    },
  ],
  projects: [
    {
      name: "confluence-markdown-editor-chrome-extension",
      platform: "Vue",
      tags: ["TypeScript", "JavaScript", "Vue"],
      timeperiod: "January 2020",
      description:
        "🖊️ A Chrome extension provides Markdown editor for Atlassian Confluence.",
      url: "https://github.com/ibara1454/confluence-markdown-editor-chrome-extension",
    },
    {
      name: "piano-visualizer",
      platform: "Vue",
      tags: ["TypeScript", "Vue"],
      timeperiod: "August 2020",
      description:
        "🎹 A visualization tool for displaying what you are playing on your MIDI keyboard device.",
      url: "https://github.com/ibara1454/piano-visualizer",
    },
    {
      name: "secure-shared-preferences",
      platform: "Android",
      tags: ["Kotlin", "Android"],
      timeperiod: "May 2020",
      description:
        "🔑 A encrypted SharedPreferences implementation for Android.",
      url: "https://github.com/ibara1454/secure-shared-preferences",
    },
  ],
  hobbies: [
    {
      name: "Video Games",
      iconClass: "fa fa-gamepad",
      url: "https://example.com",
    },
    {
      name: "Drawing",
      iconClass: "fa fa-pencil",
      url: "https://example.com",
    },
  ],
  contributions: [
    {
      name: "best-resume-ever",
      description: "👔 💼 Build fast 🚀 and easy multiple beautiful resumes.",
      url: "https://github.com/salomonelli/best-resume-ever",
    },
  ],
};

export default data as PersonalData;
