import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { DashboardTab } from "@/components/tabs/DashboardTab";
import { RemindersTab } from "@/components/tabs/RemindersTab";
import { SuggestionsTab } from "@/components/tabs/SuggestionsTab";
import { ConnectionsTab } from "@/components/tabs/ConnectionsTab";
import { ChatTab } from "@/components/tabs/ChatTab";
import { FloatingChatWidget } from "@/components/FloatingChatWidget";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "reminders":
        return <RemindersTab />;
      case "suggestions":
        return <SuggestionsTab />;
      case "connections":
        return <ConnectionsTab />;
      case "chat":
        return <ChatTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-card border-b border-border shadow-sm z-40">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Persona MVP</h1>
              <p className="text-xs text-muted-foreground">AI Coordination System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {renderTabContent()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Floating Chat Widget - Available on all tabs */}
      {activeTab !== "chat" && <FloatingChatWidget />}
    </div>
  );
};

export default Index;
