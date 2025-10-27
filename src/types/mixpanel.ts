// Mixpanel type definitions
export interface MixpanelConfig {
  debug?: boolean;
  track_pageview?: boolean;
  persistence?: "localStorage" | "sessionStorage" | "cookie";
  property_blacklist?: string[];
  cookie_name?: string;
  loaded?: (mixpanel: MixpanelInstance) => void;
  [key: string]: unknown;
}

export interface MixpanelPeople {
  set: (properties: Record<string, unknown>) => void;
  increment: (property: string, value?: number) => void;
  append: (property: string, value: unknown) => void;
  union: (property: string, value: unknown[]) => void;
}

export interface MixpanelInstance {
  identify: (userId: string) => void;
  track: (eventName: string, properties?: Record<string, unknown>) => void;
  people: MixpanelPeople;
  reset: () => void;
  get_distinct_id: () => string;
}

declare global {
  interface Window {
    mixpanel?: MixpanelInstance;
  }
}

export type AnalyticsEvent =
  | "Download Resume"
  | "LinkedIn Visit"
  | "GitHub Visit"
  | "Phone Call"
  | "WhatsApp Chat"
  | "Email Click"
  | string;

export interface AnalyticsProperties {
  element_type?: string;
  page_url?: string;
  element_text?: string;
  element_id?: string;
  element_class?: string;
  section?: string;
  category?: string;
  value?: string | number;
  [key: string]: unknown;
}
