import { MessageCircle, Send } from "lucide-react";

export const ChatTab = () => {
  return (
    <div className="space-y-6 animate-fade-in h-full flex flex-col">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Chat</h2>
        <p className="text-muted-foreground">AI assistant conversation</p>
      </div>

      <div className="flex-1 bg-card rounded-xl shadow-md border border-border p-4 space-y-4 overflow-y-auto">
        {[
          { type: "ai", message: "Hello! How can I help you today?" },
          { type: "user", message: "Can you summarize my tasks?" },
          { type: "ai", message: "Of course! You have 24 active tasks with 87% completion rate." },
        ].map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-4 ${
                msg.type === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl shadow-md border border-border p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-muted rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-fast">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
