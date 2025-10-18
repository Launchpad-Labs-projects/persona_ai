import { Activity, TrendingUp, Clock, MapPin, Car, Circle, AlertTriangle, Lightbulb, Bell, X } from "lucide-react";
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

const patternInsights = [
  {
    id: 1,
    text: "You grab coffee before 9am client meetings",
    stat: "80% of the time",
  },
  {
    id: 2,
    text: "You're usually at the gym Tue/Thu at 6am but missed last 2 weeks",
    stat: "Usually 80% consistent",
  },
];

const initialNotifications = [
  {
    id: 1,
    icon: MapPin,
    message: "You have 45 minutes before your next meeting and you're near Powell's Books (on your saved list)",
  },
  {
    id: 2,
    icon: Bell,
    message: "Grocery store closes in 1 hour and you're nearby",
  },
  {
    id: 3,
    icon: Lightbulb,
    message: "Traffic is lighter than usual on your route home - leave now to save 15 minutes",
  },
];

export const DashboardTab = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState(initialNotifications);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-base">
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
              className="bg-card rounded-lg p-4 shadow-md border-l-4 border-l-primary hover:shadow-xl hover:scale-[1.01] transition-all duration-base"
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

      {/* Running Late Detection Section */}
      <div className="bg-[#FEF3C7] rounded-lg p-5 shadow-md border-l-4 border-l-red-500">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">You're running late!</h3>
            <p className="text-sm text-gray-700 mb-4">
              You're running 15 min late to dinner. Book an Uber to arrive on time? Or notify Sarah and Mike?
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 hover:shadow-md transition-all duration-fast shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Book Uber
              </button>
              <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary/5 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Notify Friends
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern Insights Section */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Your Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {patternInsights.map((insight) => (
            <div
              key={insight.id}
              className="bg-card rounded-lg p-5 shadow-md border border-border hover:shadow-xl hover:scale-[1.01] transition-all duration-base"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground mb-2">{insight.text}</p>
                  <p className="text-xs font-semibold text-accent">{insight.stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Notifications Panel */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Recent Suggestions</h3>
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className="bg-muted/50 rounded-lg p-3 border-l-4 border-l-primary shadow-sm hover:shadow-lg transition-all duration-base"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-foreground flex-1">{notification.message}</p>
                  <button
                    onClick={() => dismissNotification(notification.id)}
                    className="p-1 hover:bg-muted rounded transition-all duration-fast flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Dismiss notification"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg hover:scale-[1.01] transition-all duration-base">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Activity</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">24</p>
          <p className="text-sm text-muted-foreground mt-1">Active tasks</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg hover:scale-[1.01] transition-all duration-base">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground">Progress</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">87%</p>
          <p className="text-sm text-muted-foreground mt-1">Completion rate</p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg hover:scale-[1.01] transition-all duration-base">
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

      <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-base">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-fast">
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
