import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const App = () => (
  <ErrorBoundary>
    <ThemeProvider defaultTheme="summer">
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen summer-bg">
          <div className="sun"></div>
          <div className="wave"></div>
          <div className="summer-header">
            <div className="text-4xl font-bold summer-text mb-8">
              Welcome to Summer Mode!
            </div>
          </div>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;