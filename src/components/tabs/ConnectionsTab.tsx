import { Users, UserPlus } from "lucide-react";

export const ConnectionsTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Connections</h2>
          <p className="text-muted-foreground">Your network & collaborators</p>
        </div>
        <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-fast">
          <UserPlus className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card rounded-xl p-5 shadow-md border border-border hover:shadow-lg transition-shadow duration-fast">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Connection {i}</h3>
                <p className="text-sm text-muted-foreground">Role • Team</p>
              </div>
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
