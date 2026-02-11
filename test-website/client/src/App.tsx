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
            <div className="text-5xl font-bold summer-text mb-12">
              🌞 Welcome to Summer Mode! 🌞
            </div>
            <div className="summer-text text-3xl mb-6">
              Dive into a vibrant summer experience with warm colors, smooth animations, and a tropical vibe
            </div>
            <div className="flex gap-6">
              <div className="summer-badge">
                Sun: {new Date().toLocaleTimeString()}
              </div>
              <div className="summer-badge">
                Temp: 78°F
              </div>
              <div className="summer-badge">
                Location: Tropical Paradise
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <div className="summer-badge">
                  🌴 Lush Greens
                </div>
                <div className="summer-badge">
                  🐙 Ocean Blues
                </div>
                <div className="summer-badge">
                  🌅 Sunny Yellows
                </div>
                <div className="summer-badge">
                  💎 Vibrant Pinks
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="summer-card p-8">
                <div className="summer-text text-3xl font-bold mb-6">
                  ☀️ Sunny Vibes
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  Feel the warmth and energy of summer with our vibrant theme. Perfect for those who love the sun and want to bring that energy to their digital experience.
                </p>
                <button className="summer-button px-8 py-4 text-lg">
                  Explore More
                </button>
              </div>
              <div className="summer-card p-8">
                <div className="summer-text text-3xl font-bold mb-6">
                  🌊 Ocean Breeze
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  Cool off with refreshing ocean-inspired colors and animations. Perfect for those who love the sea and want to bring that refreshing vibe to their digital experience.
                </p>
                <button className="summer-button px-8 py-4 text-lg">
                  Dive In
                </button>
              </div>
              <div className="summer-card p-8">
                <div className="summer-text text-3xl font-bold mb-6">
                  🌴 Tropical Paradise
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  Escape to a tropical paradise with lush greens and sunny yellows. Perfect for those who love the tropics and want to bring that paradise to their digital experience.
                </p>
                <button className="summer-button px-8 py-4 text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 py-12">
            <div className="summer-card p-8">
              <div className="summer-text text-4xl font-bold mb-8">
                🌟 Summer Highlights
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="summer-text text-3xl mb-2">
                    ☀️
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Sunny Vibes
                  </p>
                </div>
                <div className="text-center">
                  <div className="summer-text text-3xl mb-2">
                    🌊
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Ocean Breeze
                  </p>
                </div>
                <div className="text-center">
                  <div className="summer-text text-3xl mb-2">
                    🌴
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Tropical Paradise
                  </p>
                </div>
                <div className="text-center">
                  <div className="summer-text text-3xl mb-2">
                    💎
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Vibrant Pinks
                  </p>
                </div>
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