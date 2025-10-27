import { useEffect } from "react";
import {
  initMixpanel,
  initAnalyticsListeners,
  destroyAnalyticsListeners,
} from "../utils/analytics";

interface UseAnalyticsOptions {
  mixpanelToken?: string;
  trackPageViews?: boolean;
  enableAutoTracking?: boolean;
}

export const useAnalytics = (options: UseAnalyticsOptions = {}) => {
  const { mixpanelToken, enableAutoTracking = true } = options;

  useEffect(() => {
    if (mixpanelToken) {
      initMixpanel(mixpanelToken);
    }

    if (enableAutoTracking) {
      initAnalyticsListeners();
    }

    return () => {
      if (enableAutoTracking) {
        destroyAnalyticsListeners();
      }
    };
  }, [mixpanelToken, enableAutoTracking]);
};

export default useAnalytics;
