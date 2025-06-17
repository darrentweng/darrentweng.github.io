interface Contact {
  address: string;
  email: string;
  phone: string;
  web: {
    title: string,
    url: string
  }
}

interface SocialLink {
  name: string;
  url: string;
}

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
  description: string;
}

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  shortDescription: string;
  description: string;
  url: string;
  skills?: string[]; // Optional skills array
}

interface Certificate {
  title: string;
  description: string;
  date: string;
  url: string;
  certificationId: string;
}

interface Reference {
  title: string;
  name: string;
  contact: Contact;
}

interface Project {
  title: string;
  description: string;
  url?: string;
  technologies: string[];
}

interface Course {
  title: string;
  institution: string;
  date: string;
  url?: string;
}

interface TestEntry {
  title: string;
  score: string;
  date: string;
  institution: string;
  details?: string[];
}

export interface CVData {
  name: string;
  profession: string;
  profileImage: string;
  contact: Contact;
  socialLinks: SocialLink[];
  profile: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: Project[];
  courses: Course[];
  certificates: Certificate[];
  references: Reference[];
  skills: string[];
  languages: { [key: string]: number };
  interests: { [key: string]: string };
  tests: TestEntry[];
}
