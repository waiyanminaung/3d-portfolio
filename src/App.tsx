import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { useAnalytics } from "./hooks/useAnalytics";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { UserProvider } from "./providers/UserProvider";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  useAnalytics({
    mixpanelToken: import.meta.env.VITE_MIXPANEL_TOKEN,
    trackPageViews: true,
    enableAutoTracking: true,
  });

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
