import type { AnalyticsEvent, AnalyticsProperties } from "@/types/mixpanel";
import mixpanel from "mixpanel-browser";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const initMixpanel = (
  token: string,
  options?: Record<string, unknown>
) => {
  mixpanel.init(token, {
    debug: import.meta.env.DEV,
    track_pageview: true,
    ...options,
  });
};

let gaInitialized = false;

export const initGoogleAnalytics = (measurementId: string) => {
  if (gaInitialized || !measurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  gaInitialized = true;

  if (import.meta.env.DEV) console.log("📊 Google Analytics initialized");
};

export const trackPageView = (path: string, measurementId: string) => {
  if (!gaInitialized || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: measurementId,
  });
};

export const trackConversion = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  if (!gaInitialized || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    page_url: window.location.href,
    timestamp: new Date().toISOString(),
    ...properties,
  });

  if (import.meta.env.DEV) {
    console.log("🎯 GA Conversion Event:", eventName, properties);
  }
};

export const RESUME_URL =
  "https://drive.google.com/file/d/1dHex4mn8qPhK_4nMDhnB0QsdgRRK7RDB/view?usp=sharing";

export const trackResumeDownload = (source: "header" | "footer") => {
  trackConversion("resume_download", {
    campaign_name: "resume_download",
    content_type: "resume",
    link_url: RESUME_URL,
    source,
  });
};

export const trackEvent = (
  eventName: AnalyticsEvent,
  properties?: AnalyticsProperties
) => {
  try {
    const defaultProperties = {
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
    };

    mixpanel.track(eventName, {
      ...defaultProperties,
      ...properties,
    });

    if (gaInitialized && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        ...defaultProperties,
        ...properties,
      });
    }

    if (import.meta.env.DEV) {
      console.log("📊 Analytics Event:", eventName, {
        ...defaultProperties,
        ...properties,
      });
    }
  } catch (error) {
    console.error("Failed to track event:", error);
  }
};

const handleAnalyticsClick = (event: Event) => {
  const target = event.target as HTMLElement;

  if (!target) return;

  const analyticsElement = target.closest("[data-analytics]") as HTMLElement;

  if (!analyticsElement) return;

  const tagName = analyticsElement.tagName;
  const isButtonOrLink = tagName === "BUTTON" || tagName === "A";
  const eventName = analyticsElement.getAttribute("data-analytics");

  if (!isButtonOrLink || !eventName) return;

  trackEvent(eventName, {
    interaction_type: "click",
  });
};

export const initAnalyticsListeners = () => {
  document.removeEventListener("click", handleAnalyticsClick, true);
  document.addEventListener("click", handleAnalyticsClick, true);

  if (import.meta.env.DEV) console.log("📊 Analytics listeners initialized");
};

export const destroyAnalyticsListeners = () => {
  document.removeEventListener("click", handleAnalyticsClick, true);
};
