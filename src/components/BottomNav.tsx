import { Home, Bell, Lightbulb, Users, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "reminders", label: "Reminders", icon: Bell },
  { id: "suggestions", label: "Suggestions", icon: Lightbulb },
  { id: "connections", label: "Connections", icon: Users },
  { id: "chat", label: "Chat", icon: MessageCircle },
];

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex items-center justify-around h-16 max-w-screen-xl mx-auto px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-base min-w-[60px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted hover:scale-105"
              )}
            >
              <Icon 
                className={cn(
                  "h-5 w-5 transition-all duration-fast",
                  isActive && "fill-current"
                )} 
              />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
