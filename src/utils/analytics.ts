import type { AnalyticsEvent, AnalyticsProperties } from "@/types/mixpanel";
import mixpanel from "mixpanel-browser";

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
