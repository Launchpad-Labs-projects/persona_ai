import { useState } from "react";
import { X, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateReminderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateReminder: (reminder: { text: string; location: string; distance: string }) => void;
}

export const CreateReminderModal = ({
  open,
  onOpenChange,
  onCreateReminder,
}: CreateReminderModalProps) => {
  const [reminderText, setReminderText] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("0.5");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reminderText && location) {
      onCreateReminder({
        text: reminderText,
        location,
        distance: `${distance} miles away`,
      });
      // Reset form
      setReminderText("");
      setLocation("");
      setDistance("0.5");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            Create Location Reminder
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="space-y-2">
            <Label htmlFor="reminder-text" className="text-sm font-medium">
              Reminder
            </Label>
            <Input
              id="reminder-text"
              value={reminderText}
              onChange={(e) => setReminderText(e.target.value)}
              placeholder="e.g., Pick up prescription"
              className="rounded-lg focus-visible:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Whole Foods on Main St"
              className="rounded-lg focus-visible:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="distance" className="text-sm font-medium">
              Proximity Distance
            </Label>
            <Select value={distance} onValueChange={setDistance}>
              <SelectTrigger id="distance" className="rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.25">0.25 miles</SelectItem>
                <SelectItem value="0.5">0.5 miles</SelectItem>
                <SelectItem value="1">1 mile</SelectItem>
                <SelectItem value="2">2 miles</SelectItem>
                <SelectItem value="5">5 miles</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-lg"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
            >
              Create Reminder
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
