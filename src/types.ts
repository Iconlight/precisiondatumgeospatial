export type NavItem = {
  id: string;
  label: string;
  href?: string;
  isHome?: boolean;
};

export type SurveyCapability = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  image: string;
  badge?: string;
};

export type ProjectInquiry = {
  projectType: string;
  county: string;
  siteSize: string;
  details: string;
  name: string;
  phone: string;
  email: string;
};
