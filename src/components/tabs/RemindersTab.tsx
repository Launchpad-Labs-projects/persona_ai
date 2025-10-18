import { MapPin, Plus, Circle, CheckCircle2, MoreVertical } from "lucide-react";
import { useState } from "react";

interface Reminder {
  id: number;
  text: string;
  location: string;
  distance: string;
  completed: boolean;
}

const initialReminders: Reminder[] = [
  {
    id: 1,
    text: "Pick up prescription",
    location: "Pharmacy",
    distance: "0.5 miles away",
    completed: false,
  },
  {
    id: 2,
    text: "Grab dry cleaning",
    location: "Main St Cleaners",
    distance: "2.3 miles away",
    completed: false,
  },
  {
    id: 3,
    text: "Ask John about the report",
    location: "Office Building",
    distance: "5.2 miles away",
    completed: false,
  },
  {
    id: 4,
    text: "Get groceries",
    location: "Whole Foods",
    distance: "1.1 miles away",
    completed: true,
  },
];

export const RemindersTab = () => {
  const [reminders] = useState(initialReminders);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Location-Based Reminders</h2>
        <p className="text-muted-foreground">Get reminded when you're near important locations</p>
      </div>

      {/* Create Reminder Button */}
      <button className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-fast shadow-md hover:shadow-lg active:scale-95">
        <Plus className="h-5 w-5" />
        Create Reminder
      </button>

      {/* Reminders List */}
      <div className="space-y-3">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            onMouseEnter={() => setHoveredId(reminder.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-xl hover:scale-[1.01] transition-all duration-base cursor-pointer ${
              reminder.completed ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Checkbox/Radio */}
              <div className="pt-0.5">
                {reminder.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>

              {/* Location Pin Icon */}
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              {/* Reminder Content */}
              <div className="flex-1">
                <h3
                  className={`font-bold text-foreground mb-1 ${
                    reminder.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {reminder.text}
                </h3>
                <p
                  className={`text-sm mb-1 ${
                    reminder.completed ? "text-muted-foreground line-through" : "text-muted-foreground"
                  }`}
                >
                  {reminder.location}
                </p>
                <p className="text-xs text-muted-foreground">{reminder.distance}</p>
                
                {/* Status Badge */}
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                      reminder.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {reminder.completed ? "Completed" : "Active"}
                  </span>
                </div>
              </div>

              {/* Three Dots Menu */}
              <button
                className={`p-2 hover:bg-muted rounded-lg transition-opacity duration-fast ${
                  hoveredId === reminder.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
