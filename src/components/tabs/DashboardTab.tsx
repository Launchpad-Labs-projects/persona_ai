import { Activity, TrendingUp, Clock } from "lucide-react";

export const DashboardTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Your AI coordination overview</p>
      </div>

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
