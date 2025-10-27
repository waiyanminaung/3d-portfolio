export interface Period {
  from: string;
  to: string;
}

export interface Social {
  github: string;
  linkedin: string;
  whatsapp: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Personal {
  tag: string;
  name: string;
  resume: string;
  social: Social;
  contact: Contact;
  profile: string;
  position: string;
  avatar_profile: string;
  profile_blurhash: string;
  avatar_profile_blurhash: string;
}

export interface About {
  paragraphs: string[];
}

export interface SiteMeta {
  title: string;
  description: string;
}

export interface Experience {
  logo: string;
  period: Period;
  company: string;
  position: string;
  logo_blurhash: string;
}

export interface UserData {
  about: About;
  personal: Personal;
  site_meta: SiteMeta;
  experience: Experience[];
}

export type UserContextType =
  | {
      loading: true;
      data: null;
      error: null;
    }
  | {
      loading: false;
      data: UserData;
      error: null;
    }
  | {
      loading: false;
      data: null;
      error: string;
    };
