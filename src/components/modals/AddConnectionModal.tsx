import { useState } from "react";
import { UserPlus } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";

interface AddConnectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddConnection: (connection: {
    name: string;
    email: string;
    relationship: string;
    permissions: string[];
  }) => void;
}

export const AddConnectionModal = ({
  open,
  onOpenChange,
  onAddConnection,
}: AddConnectionModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("friend");
  const [permissions, setPermissions] = useState<string[]>([]);

  const handlePermissionToggle = (permission: string) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onAddConnection({
        name,
        email,
        relationship,
        permissions,
      });
      // Reset form
      setName("");
      setEmail("");
      setRelationship("friend");
      setPermissions([]);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <UserPlus className="h-5 w-5 text-primary" />
            </div>
            Add Connection
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Sarah Chen"
              className="rounded-lg focus-visible:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email or Phone
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., sarah@example.com"
              className="rounded-lg focus-visible:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="relationship" className="text-sm font-medium">
              Relationship Type
            </Label>
            <Select value={relationship} onValueChange={setRelationship}>
              <SelectTrigger id="relationship" className="rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="colleague">Colleague</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Permissions</Label>
            <div className="space-y-3 pl-1">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="location"
                  checked={permissions.includes("location")}
                  onCheckedChange={() => handlePermissionToggle("location")}
                />
                <Label
                  htmlFor="location"
                  className="text-sm font-normal cursor-pointer"
                >
                  Share Location
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="calendar"
                  checked={permissions.includes("calendar")}
                  onCheckedChange={() => handlePermissionToggle("calendar")}
                />
                <Label
                  htmlFor="calendar"
                  className="text-sm font-normal cursor-pointer"
                >
                  Share Calendar
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="meetups"
                  checked={permissions.includes("meetups")}
                  onCheckedChange={() => handlePermissionToggle("meetups")}
                />
                <Label
                  htmlFor="meetups"
                  className="text-sm font-normal cursor-pointer"
                >
                  Allow Meetup Coordination
                </Label>
              </div>
            </div>
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
              Send Invite
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
