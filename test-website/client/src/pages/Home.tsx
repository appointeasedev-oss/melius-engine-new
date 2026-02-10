import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Melius Engine Test</h1>
            <p className="text-sm text-muted-foreground">Autonomous Code Improvement System</p>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Live</Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid gap-6">
          {/* Overview Card */}
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>How Melius Engine improves your code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-2">Analysis</h3>
                  <p className="text-sm text-blue-700">Scans all files and identifies improvement opportunities</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h3 className="font-semibold text-purple-900 mb-2">Execution</h3>
                  <p className="text-sm text-purple-700">Applies changes using AI models with full context</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-green-900 mb-2">Verification</h3>
                  <p className="text-sm text-green-700">Verifies changes and handles errors automatically</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-1">Applied in this cycle</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="w-5 h-5 text-amber-600" />
                  Pending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-1">Tasks in to-do folder</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Errors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground mt-1">Logged in error folder</p>
              </CardContent>
            </Card>
          </div>

          {/* Configuration */}
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Current setup and models</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Free Models</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• arcee-ai/trinity-large-preview:free</li>
                    <li>• liquid/lfm-2.5-1.2b-thinking:free</li>
                    <li>• tngtech/tng-r1t-chimera:free</li>
                    <li>• qwen/qwen3-next-80b-a3b-instruct:free</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Additional Models</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• qwen/qwen3-coder:free</li>
                    <li>• nousresearch/hermes-3-llama-3.1-405b:free</li>
                    <li>• 5 API Keys (fallback support)</li>
                    <li>• Automatic retry on failure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Autonomous multi-folder file analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Intelligent improvement planning with context</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Verification and error handling</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Persistent state and chat history</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Runs every 7 minutes via GitHub Actions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex gap-3 justify-center pt-4">
            <Button size="lg" variant="default">View Logs</Button>
            <Button size="lg" variant="outline">Check Status</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 mt-12">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>Melius Engine • Autonomous Code Improvement System</p>
        </div>
      </footer>
    </div>
  );
}
