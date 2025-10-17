import { Bell, CheckCircle2 } from "lucide-react";

export const RemindersTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Reminders</h2>
        <p className="text-muted-foreground">Never miss important tasks</p>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-card rounded-xl p-5 shadow-md border border-border hover:shadow-lg transition-shadow duration-fast">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Reminder {i}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  This is a placeholder reminder description
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Due: Today at 3:00 PM</span>
                </div>
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-fast">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
