import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";

// Router component for handling routes with lazy loading
const Router = () => (
  <Switch>
    <Route path={"/"} component={Home} />
    <Route path={"/404"} component={NotFound} />
    {/* Final fallback route */}
    <Route component={NotFound} />
  </Switch>
);

// Main App component with error boundary, theme provider, and tooltip provider
const App = () => (
  <ErrorBoundary>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;