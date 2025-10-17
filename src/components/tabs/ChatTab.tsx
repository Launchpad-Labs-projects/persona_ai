import { Send, Mic, MoreVertical, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    sender: "user",
    text: "Set up dinner with John sometime next week",
    timestamp: "2:30 PM",
  },
  {
    id: 2,
    sender: "persona",
    text: "I found a great slot! How about Thursday 7pm at Bistro Park? I can make the reservation for you. Would you like me to proceed?",
    timestamp: "2:31 PM",
  },
  {
    id: 3,
    sender: "user",
    text: "Perfect, go ahead",
    timestamp: "2:32 PM",
  },
  {
    id: 4,
    sender: "persona",
    text: "Done! I've booked a table for 2 at Bistro Park for Thursday 7pm. Calendar invite sent to both you and John.",
    timestamp: "2:33 PM",
  },
];

export const ChatTab = () => {
  const [messages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle send message
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] animate-fade-in">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Chat with Persona</h2>
          <p className="text-muted-foreground">Your AI coordination assistant</p>
        </div>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <MoreVertical className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 ${
              message.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            {message.sender === "persona" && (
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary">
                  <Sparkles className="h-4 w-4 text-white" />
                </AvatarFallback>
              </Avatar>
            )}

            {message.sender === "user" && (
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="bg-muted text-foreground">
                  U
                </AvatarFallback>
              </Avatar>
            )}

            {/* Message Bubble */}
            <div className="flex flex-col max-w-[75%]">
              <div
                className={`px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl"
                    : "bg-muted text-foreground rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <span
                className={`text-xs text-muted-foreground mt-1 px-1 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input Area */}
      <div className="sticky bottom-0 bg-background pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0"
          >
            <Mic className="h-5 w-5" />
          </Button>

          <div className="flex-1 flex items-center gap-2 bg-muted rounded-lg px-3 py-2 border border-border">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message Persona..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
