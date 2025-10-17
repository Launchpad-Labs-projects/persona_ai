import { Send, Mic, MoreVertical, Sparkles, Volume2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
    sender: "thinking",
    text: "Persona is thinking...",
    timestamp: "",
  },
  {
    id: 4,
    sender: "user",
    text: "Perfect, go ahead",
    timestamp: "2:32 PM",
  },
  {
    id: 5,
    sender: "persona",
    text: "Done! I've booked a table for 2 at Bistro Park for Thursday 7pm. Calendar invite sent to both you and John.",
    timestamp: "2:33 PM",
  },
];

export const ChatTab = () => {
  const [messages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);

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

  const handleMicClick = () => {
    setIsRecording(!isRecording);
  };

  return (
    <TooltipProvider>
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
          {messages.map((message) => {
            // Thinking state message
            if (message.sender === "thinking") {
              return (
                <div key={message.id} className="flex items-end gap-2 flex-row">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary">
                      <Sparkles className="h-4 w-4 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col max-w-[75%]">
                    <div className="px-4 py-3 bg-muted text-muted-foreground rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl">
                      <p className="text-sm italic flex items-center gap-1">
                        {message.text}
                        <span className="inline-flex gap-0.5 ml-1">
                          <span className="w-1 h-1 bg-muted-foreground rounded-full animate-[pulse_1.4s_ease-in-out_0s_infinite]"></span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full animate-[pulse_1.4s_ease-in-out_0.2s_infinite]"></span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full animate-[pulse_1.4s_ease-in-out_0.4s_infinite]"></span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
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
                    className={`px-4 py-3 relative group ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl"
                        : "bg-muted text-foreground rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    
                    {/* TTS Button for Persona messages */}
                    {message.sender === "persona" && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-background/20 rounded"
                            onClick={() => console.log("TTS for message", message.id)}
                          >
                            <Volume2 className="h-3.5 w-3.5 text-primary" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Listen to this message</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                  {message.timestamp && (
                    <span
                      className={`text-xs text-muted-foreground mt-1 px-1 ${
                        message.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {message.timestamp}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat Input Area */}
        <div className="sticky bottom-0 bg-background pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`flex-shrink-0 relative ${
                    isRecording ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""
                  }`}
                  onClick={handleMicClick}
                >
                  <Mic className={`h-5 w-5 ${isRecording ? "text-red-500" : ""}`} />
                  {isRecording && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isRecording ? "Recording..." : "Speak to Persona"}</p>
              </TooltipContent>
            </Tooltip>

            <div className="flex-1 flex items-center gap-2 bg-muted rounded-lg px-3 py-2 border border-border focus-within:border-blue-300 focus-within:shadow-sm transition-all">
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
    </TooltipProvider>
  );
};
