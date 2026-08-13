import { useEffect } from "react";
import type { AnyRouter } from "@tanstack/react-router";
import {
  initMixpanel,
  initGoogleAnalytics,
  trackPageView,
  initAnalyticsListeners,
  destroyAnalyticsListeners,
} from "../utils/analytics";

interface UseAnalyticsOptions {
  router?: AnyRouter;
  mixpanelToken?: string;
  gaMeasurementId?: string;
  trackPageViews?: boolean;
  enableAutoTracking?: boolean;
}

export const useAnalytics = (options: UseAnalyticsOptions = {}) => {
  const {
    router,
    mixpanelToken,
    gaMeasurementId,
    trackPageViews = true,
    enableAutoTracking = true,
  } = options;

  useEffect(() => {
    if (mixpanelToken) {
      initMixpanel(mixpanelToken);
    }

    if (gaMeasurementId) {
      initGoogleAnalytics(gaMeasurementId);
      trackPageView(window.location.pathname, gaMeasurementId);
    }

    if (enableAutoTracking) {
      initAnalyticsListeners();
    }

    return () => {
      if (enableAutoTracking) {
        destroyAnalyticsListeners();
      }
    };
  }, [mixpanelToken, gaMeasurementId, enableAutoTracking]);

  useEffect(() => {
    if (!router || !trackPageViews || !gaMeasurementId) return;

    return router.subscribe("onResolved", (event) => {
      trackPageView(event.toLocation.pathname, gaMeasurementId);
    });
  }, [router, trackPageViews, gaMeasurementId]);
};

export default useAnalytics;
