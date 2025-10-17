import { Activity, TrendingUp, Clock, MapPin, Car, Circle } from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  return "Good Evening";
};

const upcomingEvents = [
  {
    id: 1,
    name: "Dinner with Sarah",
    time: "7:00 PM",
    location: "Downtown",
    distance: "30 min drive",
    traffic: "light" as const,
  },
  {
    id: 2,
    name: "Client Meeting",
    time: "3:00 PM",
    location: "Office",
    distance: "15 min drive",
    traffic: "light" as const,
  },
  {
    id: 3,
    name: "Gym Session",
    time: "6:00 AM Tomorrow",
    location: "Fitness Center",
    distance: "10 min drive",
    traffic: "light" as const,
  },
];

const trafficColors = {
  light: "text-green-500",
  moderate: "text-yellow-500",
  heavy: "text-red-500",
};

export const DashboardTab = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="bg-card rounded-xl p-6 shadow-md border border-border">
        <h2 className="text-3xl font-bold text-foreground mb-1">{getGreeting()}</h2>
        <p className="text-muted-foreground mb-3">Hi, Welcome back</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{format(currentTime, "EEEE, MMMM d, yyyy • h:mm:ss a")}</span>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Your Next Events</h3>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-lg p-4 shadow-md border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-fast"
            >
              <h4 className="font-bold text-foreground text-lg mb-3">{event.name}</h4>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Car className="h-4 w-4" />
                    <span>{event.distance}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Circle className={`h-3 w-3 fill-current ${trafficColors[event.traffic]}`} />
                    <span className="text-xs text-muted-foreground capitalize">
                      {event.traffic} traffic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Activity</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">24</p>
          <p className="text-sm text-muted-foreground mt-1">Active tasks</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground">Progress</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">87%</p>
          <p className="text-sm text-muted-foreground mt-1">Completion rate</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Time Saved</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">12h</p>
          <p className="text-sm text-muted-foreground mt-1">This week</p>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-md border border-border">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <p className="text-sm text-foreground flex-1">Activity item {i}</p>
              <span className="text-xs text-muted-foreground">2h ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
