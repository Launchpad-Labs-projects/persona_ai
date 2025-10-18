import { Lightbulb, Clock, MapPin, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface Suggestion {
  id: number;
  category: string;
  icon: typeof Lightbulb | typeof Clock | typeof MapPin | typeof TrendingUp;
  text: string;
}

const initialSuggestions: Suggestion[] = [
  // Time-Aware Suggestions
  {
    id: 1,
    category: "time",
    icon: Clock,
    text: "You usually hit the gym Tuesday mornings at 6am. Traffic is light. Ready to go?",
  },
  {
    id: 2,
    category: "time",
    icon: Clock,
    text: "Grocery store closes in 1 hour and you're nearby",
  },
  // Location-Based Suggestions
  {
    id: 3,
    category: "location",
    icon: MapPin,
    text: "You have 45 minutes before your next meeting and you're near Powell's Books (on your saved list). 25 min until next meeting.",
  },
  {
    id: 4,
    category: "location",
    icon: MapPin,
    text: "Coffee shop with good wifi 2 blocks away - perfect for your 30 min gap",
  },
  // Pattern Recognition
  {
    id: 5,
    category: "pattern",
    icon: TrendingUp,
    text: "You grab coffee before 9am client meetings 80% of the time—want me to remind you?",
  },
  {
    id: 6,
    category: "pattern",
    icon: TrendingUp,
    text: "You're usually at the gym Tue/Thu at 6am but missed last 2 weeks",
  },
];

export const SuggestionsTab = () => {
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const handleDismiss = (id: number) => {
    setSuggestions(suggestions.filter(s => s.id !== id));
  };

  const handleAccept = (id: number) => {
    handleDismiss(id);
    toast({
      title: "Suggestion accepted!",
      description: "We'll help you coordinate this activity",
    });
  };

  const renderSuggestionCards = (category: string) => {
    return suggestions
      .filter(s => s.category === category)
      .map((suggestion) => {
        const Icon = suggestion.icon;
        return (
          <div
            key={suggestion.id}
            className="bg-card rounded-lg p-4 shadow-md border-l-4 border-l-primary hover:shadow-xl hover:scale-[1.01] transition-all duration-base"
            style={{
              borderImage: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary))) 1",
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-foreground flex-1">{suggestion.text}</p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => handleAccept(suggestion.id)}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 hover:shadow-md transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Accept
              </button>
              <button
                onClick={() => handleDismiss(suggestion.id)}
                className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary/5 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Dismiss
              </button>
            </div>
          </div>
        );
      });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Smart Suggestions</h2>
        <p className="text-muted-foreground">Personalized recommendations based on your patterns</p>
      </div>

      {/* Time-Aware Suggestions */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span>⏰</span> Time-Aware Suggestions
        </h3>
        <div className="space-y-4">
          {renderSuggestionCards("time")}
        </div>
      </div>

      {/* Location-Based Suggestions */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span>📍</span> Location-Based Suggestions
        </h3>
        <div className="space-y-4">
          {renderSuggestionCards("location")}
        </div>
      </div>

      {/* Pattern Recognition */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span>📊</span> Pattern Recognition
        </h3>
        <div className="space-y-4">
          {renderSuggestionCards("pattern")}
        </div>
      </div>
    </div>
  );
};
