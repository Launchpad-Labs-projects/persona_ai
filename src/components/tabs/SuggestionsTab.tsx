import { Lightbulb, ArrowRight } from "lucide-react";

export const SuggestionsTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Suggestions</h2>
        <p className="text-muted-foreground">AI-powered recommendations</p>
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gradient-to-br from-card to-muted rounded-xl p-5 shadow-md border border-border hover:shadow-lg transition-all duration-fast">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Lightbulb className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  AI Suggestion {i}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Based on your recent activity, we recommend taking action on this task to improve efficiency.
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-fast">
                  View details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
