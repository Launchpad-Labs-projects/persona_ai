import { UserPlus, Eye, Calendar, Users, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const connections = [
  {
    id: 1,
    name: "Sarah Chen",
    initials: "SC",
    relationship: "Friend",
    status: "online",
    permissions: ["location", "calendar", "meetups"],
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    initials: "MR",
    relationship: "Colleague",
    status: "offline",
    permissions: ["calendar"],
  },
  {
    id: 3,
    name: "Alex Park",
    initials: "AP",
    relationship: "Family",
    status: "online",
    permissions: ["location", "emergency"],
  },
];

export const ConnectionsTab = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getPermissionIcon = (permission: string) => {
    switch (permission) {
      case "location":
        return { icon: Eye, label: "Location" };
      case "calendar":
        return { icon: Calendar, label: "Calendar" };
      case "meetups":
        return { icon: Users, label: "Meetups" };
      case "emergency":
        return { icon: Eye, label: "Emergency" };
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Connections</h2>
          <p className="text-muted-foreground">Manage friends, family, and colleagues</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 py-3">
          <UserPlus className="h-5 w-5 mr-2" />
          Add Connection
        </Button>
      </div>

      {/* Active Connections Section */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Connected</h3>
        <div className="space-y-3">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="bg-card rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
              onMouseEnter={() => setHoveredId(connection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                    {connection.initials}
                  </AvatarFallback>
                </Avatar>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{connection.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {connection.relationship}
                    </Badge>
                    <div
                      className={`h-2 w-2 rounded-full ${
                        connection.status === "online" ? "bg-green-500" : "bg-muted-foreground/40"
                      }`}
                    />
                  </div>

                  {/* Permission Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {connection.permissions.map((permission) => {
                      const permData = getPermissionIcon(permission);
                      if (!permData) return null;
                      const Icon = permData.icon;
                      return (
                        <div
                          key={permission}
                          className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          <Icon className="h-3 w-3" />
                          <span>{permData.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Menu Icon */}
                {hoveredId === connection.id && (
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <MoreVertical className="h-5 w-5 text-muted-foreground" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
