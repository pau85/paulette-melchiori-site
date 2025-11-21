export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  sidebarBg: string;
  sidebarText: string;
}

export interface Skill {
  name: string;
  level: string;
  experience: string[];
  projects?: string[];
}

export interface Cat {
  name: string;
  birthDate: string;
}

export interface SewingProject {
  id: string;
  filename: string;
  title: string;
  description: string;
  category: string;
  completedDate: string;
  difficulty: string;
  materials: string[];
  size: string;
  forPets?: string[];
  giftFor?: string;
}

export interface ResumeForm {
  name: string;
  email: string;
}

export type Section = 'home' | 'about' | 'skillset' | 'projects' | 'hobbies' | 'recruiters' | 'blog';

export interface BannerSlideProps {
  isActive: boolean;
  onSectionChange: (section: Section) => void;
}

export interface AppState {
  activeSection: Section;
  selectedSkill: string | null;
  showResumeModal: boolean;
  resumeForm: ResumeForm;
  captchaValue: string | null;
  currentTheme: string;
  currentBannerSlide: number;
  bannerPaused: boolean;
}