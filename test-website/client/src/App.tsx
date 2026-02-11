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
            <div className="summer-text text-2xl mb-4">
              Enjoy the vibrant summer vibes with warm colors and animations
            </div>
            <div className="flex gap-4">
              <div className="summer-badge">
                Sun: {new Date().toLocaleTimeString()}
              </div>
              <div className="summer-badge">
                Temp: 75°F
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="summer-card p-6">
                <div className="summer-text text-2xl font-bold mb-4">
                  ☀️ Sunny Vibes
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Feel the warmth and energy of summer with our vibrant theme.
                </p>
                <button className="summer-button px-6 py-3">
                  Explore More
                </button>
              </div>
              <div className="summer-card p-6">
                <div className="summer-text text-2xl font-bold mb-4">
                  🌊 Ocean Breeze
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Cool off with refreshing ocean-inspired colors and animations.
                </p>
                <button className="summer-button px-6 py-3">
                  Dive In
                </button>
              </div>
              <div className="summer-card p-6">
                <div className="summer-text text-2xl font-bold mb-4">
                  🌴 Tropical Paradise
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Escape to a tropical paradise with lush greens and sunny yellows.
                </p>
                <button className="summer-button px-6 py-3">
                  Get Started
                </button>
              </div>
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