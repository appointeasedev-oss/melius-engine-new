import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

// Christmas Header component
const ChristmasHeader = () => (
  <header className="christmas-header text-center py-8 mb-8">
    <h1 className="text-4xl font-bold christmas-text mb-4">Merry Christmas! 🎄</h1>
    <p className="text-xl opacity-90">Happy Holidays from our team!</p>
  </header>
);

// Router component for handling routes
const Router = () => (
  <>
    <ChristmasHeader />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  </>
);

// Main App component with error boundary, theme provider, and tooltip provider
const App = () => (
  <ErrorBoundary>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <div className="christmas-bg min-h-screen">
          <Router />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;