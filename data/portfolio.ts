/**
 * portfolio.ts
 *
 * Single source of truth for all portfolio content.
 * All data strictly adheres to provided resume, project specs, and open-source contributions.
 */

// ─────────────────────────────────────────────
// PERSONAL
// ─────────────────────────────────────────────
export const personal = {
  name: "MUKKU RAGHAVENDRA",
  displayName: "M. Raghavendra",
  firstName: "Raghavendra",
  location: "Hyderabad, India",
  email: "m.raghavendra331@gmail.com",
  resumeUrl: "/resume.pdf",
  tagline:
    "Building practical solutions through code, exploring new technologies, and turning ideas into meaningful digital experiences.",
  roles: ["Student Developer", "Tech Enthusiast", "Open Source Contributor"],
  availableForOpportunities: true,
};

// ─────────────────────────────────────────────
// SOCIAL PROFILES
// ─────────────────────────────────────────────
export const profiles = {
  github: "https://github.com/RAGHU1242",
  linkedin: "https://www.linkedin.com/in/mukku-raghavendra-18aa79290",
  leetcode: "https://leetcode.com/u/m_raghavendra/",
  hackerrank: "https://www.hackerrank.com/profile/m_raghavendra331",
  codechef: "https://www.codechef.com/users/m_raghu_1242",
};

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export type ProjectCategory =
  | "All"
  | "Web"
  | "Mobile"
  | "AI/ML"
  | "IoT"
  | "Open Source"
  | "Other";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web" | "Mobile" | "AI/ML" | "IoT" | "Open Source" | "Other";
  year: string;
  description: string;
  contributions: string[];
  technologies: string[];
  github: string;
  liveDemo: string;
  featured: boolean;
  teamMembers?: string[];
  details?: {
    componentsUsed?: string[];
    workingPrinciples?: string[];
    keyFeatures?: string[];
    futureScope?: string[];
    conclusion?: string;
  };
}

export const projects: Project[] = [
  {
    id: "smart-pill-dispenser",
    title: "Smart Pill Dispenser",
    subtitle: "IoT Healthcare & Medication Reminder Device",
    category: "IoT",
    year: "2024",
    description:
      "An IoT-based automated pill dispensing system designed to ensure accurate and timely medication intake for elderly patients and individuals with chronic conditions.",
    contributions: [
      "Integrated DS3231 RTC module for real-time medication schedule tracking",
      "Programmed servo motor trigger mechanism for automated pill dispensing",
      "Implemented IR sensor logic to detect user presence and activate targeted alerts",
      "Designed 16x2 I2C LCD reminder display and buzzer alert system",
      "Collaborated on circuit integration, power distribution, and Arduino C firmware",
    ],
    technologies: [
      "Arduino UNO",
      "Embedded C",
      "DS3231 RTC",
      "IR Sensor",
      "Servo Motor",
      "16x2 LCD I2C",
      "Buzzer",
      "Arduino IDE",
    ],
    github: "https://github.com/RAGHU1242/Smart-Pill-Dispenser",
    liveDemo: "",
    featured: true,
    teamMembers: [
      "J. Mithun – 23911A1227",
      "K. Vivek – 23911A1235",
      "M. Raghavendra – 23911A1242",
      "S. Bharathkumar – 23911A1254",
    ],
    details: {
      componentsUsed: [
        "Arduino Uno microcontroller",
        "DS3231 Real-Time Clock (RTC) module",
        "16x2 LCD with I2C interface",
        "Infrared (IR) proximity sensor",
        "Micro servo motor mechanism",
        "Piezo buzzer audio indicator",
        "Regulated power supply unit",
      ],
      workingPrinciples: [
        "RTC module maintains real-time clock continuously even during minor power interruptions",
        "At predefined schedule intervals, Arduino triggers servo rotation to dispense prescribed dosage",
        "IR sensor monitors user proximity before disengaging alerts",
        "LCD displays patient reminder information alongside audio buzzer alert",
      ],
      keyFeatures: [
        "Automated pill dispensing at accurate predefined times",
        "Real-time clock synchronization",
        "User presence detection via infrared",
        "Dual audio + visual notification system",
        "Low-cost, portable and accessible hardware design",
      ],
      futureScope: [
        "Mobile companion app integration via Bluetooth / Wi-Fi",
        "Cloud-based dosage logging and caregiver dashboard",
        "Rechargeable battery backup integration",
        "Multi-compartment dispensing for complex prescriptions",
      ],
      conclusion:
        "This project ensures patients never miss medication, improves healthcare outcomes, and provides peace of mind for caregivers by combining IoT, embedded systems, and automation.",
    },
  },
  {
    id: "agrigo",
    title: "AgriGo",
    subtitle: "Rural Agriculture & Machinery Service Platform",
    category: "Mobile",
    year: "2025",
    description:
      "An Android application platform connecting farmers with drivers, machinery, and agricultural labour to streamline rural service coordination and logistics.",
    contributions: [
      "Implemented Firebase Authentication for secure farmer and driver onboarding",
      "Integrated Google Maps API for live GPS tracking and route navigation",
      "Engineered OTP-based verification for cargo pickup and delivery security",
      "Designed clean XML user interfaces for all primary application screens",
      "Authored project architecture documentation and workflow diagrams",
    ],
    technologies: [
      "Java",
      "Android SDK",
      "Firebase Auth",
      "Firebase Realtime DB",
      "Google Maps API",
      "XML",
    ],
    github: "https://github.com/RAGHU1242/AgriGo",
    liveDemo: "",
    featured: true,
  },
  {
    id: "trip-planner",
    title: "YourTripPlanner",
    subtitle: "AI-Powered Travel Discovery & Itinerary Website",
    category: "Web",
    year: "2025",
    description:
      "A comprehensive travel discovery and planning web platform helping users explore popular Indian tourist destinations with AI-assisted travel recommendations.",
    contributions: [
      "Designed responsive UI layout and destination discovery filtering components",
      "Implemented travel assistant interaction layer using Google Gemini 2.0 Flash",
      "Built expense tracking and destination breakdown visual interface",
      "Resolved responsive layout issues across desktop, tablet, and mobile views",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Node.js",
      "Express",
      "Google Gemini API",
      "Vercel",
    ],
    github: "https://github.com/RAGHU1242/trip-planner",
    liveDemo: "",
    featured: false,
  },
  {
    id: "sachiva",
    title: "Sachiva",
    subtitle: "Business & IT Solutions Platform",
    category: "Web",
    year: "2025",
    description:
      "A modern professional web solutions platform for businesses offering custom web development, cybersecurity, IT setups, and home services.",
    contributions: [
      "Designed pages and implemented responsive layouts from provided mockups",
      "Fixed UI styling errors and improved cross-browser compatibility",
      "Structured service catalogue components for IT and home services",
    ],
    technologies: ["HTML5", "SCSS", "CSS3", "JavaScript", "Vercel"],
    github: "https://github.com/RAGHU1242/sachiva",
    liveDemo: "",
    featured: false,
  },
  {
    id: "habit-heat",
    title: "Habit Heat",
    subtitle: "Gamified Habit Tracker & Analytics",
    category: "Web",
    year: "2025",
    description:
      "A feature-rich habit tracking application with streak counting, analytics dashboards, gamification mechanics, and mood tracking.",
    contributions: [
      "Implemented UI screens and analytics components from provided designs",
      "Made small functional improvements to streak calculation and state flow",
      "Enhanced mobile responsiveness and dark mode contrast",
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/RAGHU1242/Habitheat",
    liveDemo: "",
    featured: false,
  },
  {
    id: "adventurers-guild",
    title: "Adventurers Guild",
    subtitle: "Gamified Learning & Digital Quests Platform",
    category: "Open Source",
    year: "2025",
    description:
      "A community-driven platform focused on gamified learning where students become Guild Adventurers, earn XP, and progress through merit quests.",
    contributions: [
      "Fixed UI layout issues across guild quest and leaderboard screens",
      "Resolved small front-end bugs in quest progress rendering",
      "Improved responsive behavior on mobile and tablet viewports",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "React.js"],
    github: "https://github.com/RAGHU1242/Adventurers-Guild",
    liveDemo: "",
    featured: false,
  },
  {
    id: "pouranik",
    title: "Pouranik",
    subtitle: "Digital Library & Reading Community",
    category: "Open Source",
    year: "2025",
    description:
      "A digital library and reading community platform for discovering books, joining reading circles, tracking reading goals, and sharing thoughts.",
    contributions: [
      "Helped with styling, book card layouts, and typography hierarchy",
      "Fixed UI design errors and improved reading circle viewports",
      "Resolved small navigation bugs",
    ],
    technologies: ["React.js", "JavaScript", "CSS3"],
    github: "https://github.com/RAGHU1242/Pouranik",
    liveDemo: "",
    featured: false,
  },
  {
    id: "skillcraft-suite",
    title: "SkillCraft Web Suite",
    subtitle: "Web Development Internship Applications",
    category: "Web",
    year: "2024",
    description:
      "A collection of practical frontend web applications built as part of internship training modules.",
    contributions: [
      "Built responsive landing page optimized for desktop, tablet, and mobile (Task 1)",
      "Implemented stopwatch web application with start, pause, reset, and lap features (Task 2)",
      "Developed interactive Tic-Tac-Toe game supporting PvP and PvC modes (Task 3)",
      "Created cloud-themed To-Do web app with add, edit, and completion status (Task 4)",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/RAGHU1242",
    liveDemo: "",
    featured: false,
  },
  {
    id: "nxtgen",
    title: "NXTGEN Web Design",
    subtitle: "Page Implementation from Visual Specifications",
    category: "Web",
    year: "2024",
    description:
      "Frontend implementation of modern web pages built accurately from provided design mockups and visual specifications.",
    contributions: [
      "Designed pages and built pixel-accurate layouts using Tailwind CSS and HTML/CSS",
      "Integrated responsive breakpoints for tablet and mobile devices",
      "Optimized DOM structure and asset loading",
    ],
    technologies: ["HTML5", "Tailwind CSS", "CSS3", "JavaScript"],
    github: "https://github.com/RAGHU1242/NXTGEN",
    liveDemo: "",
    featured: false,
  },
  {
    id: "runner-game",
    title: "Unity Runner Game",
    subtitle: "2D/3D Obstacle Runner Game",
    category: "Other",
    year: "2024",
    description:
      "An endless runner arcade game developed in Unity featuring player physics, dynamic obstacle generation, and score tracking.",
    contributions: [
      "Developed player controller, jump mechanics, and collision detection",
      "Programmed endless obstacle spawning and progressive difficulty curve",
      "Implemented score HUD and game-over state transitions in C#",
    ],
    technologies: ["Unity", "C#", "Unity Physics"],
    github: "https://github.com/RAGHU1242/Runner-Game",
    liveDemo: "",
    featured: false,
  },
];

// ─────────────────────────────────────────────
// TECHNICAL SKILLS
// Authoritative skills provided in resume & briefs.
// ─────────────────────────────────────────────
export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    id: "database",
    label: "Database & Backend",
    skills: ["MySQL", "Firebase"],
  },
  {
    id: "appdev",
    label: "Application Development",
    skills: ["Android SDK", "Firebase", "Google Maps API"],
  },
  {
    id: "core",
    label: "Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },
  {
    id: "uiux",
    label: "UI/UX",
    skills: ["Figma"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Qlik Analytics",
      "Arduino IDE",
    ],
  },
];

// ─────────────────────────────────────────────
// OPEN SOURCE & EXPERIENCE
// ─────────────────────────────────────────────
export const openSource = {
  gssoc: {
    name: "GirlScript Summer of Code",
    shortName: "GSSoC '25",
    roles: ["Campus Ambassador", "Open Source Contributor"],
    duration: "Jul – Oct 2025",
    stats: {
      prsMerged: 29,
      points: 189,
      rank: 86,
      totalContributors: "3,421+",
      ambassadorRank: "Top 30",
      peersOnboarded: "50+",
    },
    highlights: [
      "29 merged pull requests across multiple open-source repositories",
      "189 contribution points — Ranked #86 among 3,421+ contributors",
      "Selected among Top 30 Campus Ambassadors nationally",
      "Organized an online info-meet for VJIT students",
      "Helped onboard 50+ peers into open-source contribution",
    ],
  },
  hacktoberfest: {
    name: "Hacktoberfest 2025",
    organizer: "DigitalOcean",
    role: "Super Contributor • DigitalOcean",
    year: "2025",
    stats: {
      prsMerged: 6,
    },
    highlights: [
      "6 meaningful pull requests merged across open-source repositories",
      "Earned Super Contributor recognition from DigitalOcean",
      "Earned Holopin badges and digital rewards",
    ],
  },
};

// ─────────────────────────────────────────────
// LEADERSHIP
// ─────────────────────────────────────────────
export const leadership = [
  {
    id: "dss",
    organization: "Developers Student Society, VJIT",
    role: "Non-Tech Member",
    since: "Oct 2025 – Present",
    contributions: [
      "Assisted in organizing technical workshops and hands-on coding sessions",
      "Helped coordinate CSI State Convention 2.0 paper presentation",
      "Supported technical and community events involving 100+ student participants",
    ],
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
export interface EducationItem {
  id: string;
  institution: string;
  shortName: string;
  qualification: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  description: string;
  isPrimary: boolean;
}

export const educationList: EducationItem[] = [
  {
    id: "vjit",
    institution: "Vidya Jyothi Institute of Technology (VJIT)",
    shortName: "VJIT",
    qualification: "B.Tech – Information Technology",
    degree: "Bachelor of Technology in Information Technology",
    period: "Jul 2023 – Present",
    grade: "CGPA: 8.45",
    location: "Hyderabad, India",
    description:
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Operating Systems.",
    isPrimary: true,
  },
  {
    id: "royal-junior-college",
    institution: "Royal Junior College",
    shortName: "Royal JC",
    qualification: "Intermediate (MPC) – TSBIE",
    degree: "Senior Secondary Education (Mathematics, Physics, Chemistry)",
    period: "Jun 2021 – Mar 2023",
    grade: "Score: 97%",
    location: "Hyderabad, India",
    description:
      "Comprehensive intermediate study in Mathematics, Physics, and Chemistry under Telangana State Board of Intermediate Education.",
    isPrimary: false,
  },
  {
    id: "krishnaveni",
    institution: "Krishnaveni Talent School",
    shortName: "Krishnaveni School",
    qualification: "Class X – SSC",
    degree: "Secondary School Certificate",
    period: "May 2020 – May 2021",
    grade: "CGPA: 9.2",
    location: "Hyderabad, India",
    description:
      "Secondary school education with distinction across mathematics, science, and computer fundamentals.",
    isPrimary: false,
  },
];

// ─────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────
export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  category: "competition" | "award" | "badge" | "milestone";
}

export const achievements: Achievement[] = [
  {
    id: "innoquest",
    title: "4th Place (Special Prize)",
    subtitle: "InnoQuest 2025 Hackathon",
    description:
      "Secured 4th place and a special prize at the InnoQuest 2025 hackathon organized with Microsoft Azure & Reskilll.",
    icon: "🏆",
    category: "competition",
  },
  {
    id: "cyberonix",
    title: "5th Place",
    subtitle: "CYBERONIX Level 1 Cybersecurity",
    description:
      "Achieved 5th place in the CYBERONIX Level 1 Cybersecurity national competition.",
    icon: "🔐",
    category: "competition",
  },
  {
    id: "algobharat",
    title: "November Topper",
    subtitle: "AlgoBharat AlgoGitSquad",
    description:
      "Topped the AlgoBharat AlgoGitSquad competitive coding leaderboard for November.",
    icon: "⚡",
    category: "award",
  },
  {
    id: "leetcode",
    title: "LeetCode 50-Day Badges",
    subtitle: "400 Problems Solved",
    description:
      "Earned 50-day streak badges and solved 400+ problems across competitive programming platforms.",
    icon: "🎯",
    category: "milestone",
  },
  {
    id: "google-cloud",
    title: "Google Cloud / GenAI Study Jams",
    subtitle: "Top Performer in College",
    description:
      "Ranked among top performers in the college cohort for Google Cloud and GenAI Study Jams.",
    icon: "☁️",
    category: "badge",
  },
];

// ─────────────────────────────────────────────
// CODING PROFILES
// ─────────────────────────────────────────────
export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "m_raghavendra",
    url: profiles.leetcode,
  },
  {
    platform: "HackerRank",
    username: "m_raghavendra331",
    url: profiles.hackerrank,
  },
  {
    platform: "CodeChef",
    username: "m_raghu_1242",
    url: profiles.codechef,
  },
];
