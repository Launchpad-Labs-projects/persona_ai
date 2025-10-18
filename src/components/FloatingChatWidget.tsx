import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatTab } from "./tabs/ChatTab";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount] = useState(2); // Mock unread count

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300",
          "bg-gradient-to-br from-primary to-secondary",
          "flex items-center justify-center",
          "hover:scale-110 active:scale-95",
          "bottom-4 right-4 md:bottom-6 md:right-6",
          isOpen && "rotate-0"
        )}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
        
        {/* Notification Badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat Panel Overlay */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Panel */}
          <div
            className={cn(
              "fixed z-40 bg-background shadow-2xl",
              "transition-all duration-300 ease-out",
              // Mobile: slide from bottom, full width
              "bottom-0 left-0 right-0 rounded-t-2xl",
              "max-h-[85vh] h-[85vh]",
              // Desktop: slide from right, fixed width
              "md:bottom-24 md:right-6 md:left-auto",
              "md:w-96 md:h-[600px] md:rounded-2xl",
              "border border-border",
              isOpen ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-[120%]"
            )}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card/50 backdrop-blur-sm rounded-t-2xl md:rounded-t-2xl">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Chat with Persona</h3>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="h-[calc(100%-4rem)] overflow-hidden p-4">
              <ChatTab />
            </div>
          </div>
        </>
      )}
    </>
  );
};
