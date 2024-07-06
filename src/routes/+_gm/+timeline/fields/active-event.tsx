import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "~/components/ui/select";
import type { TimelineEvent } from "~/stores/timeline";
import { useTimelineStore } from "~/stores/use-timeline-store";

export function ActiveEvent() {
  const store = useTimelineStore((state) => ({
    activeEvent: state.activeEvent,
    setActiveEvent: state.setActiveEvent,
  }));

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="active-event">Active Event</Label>
      <Select
        value={store.activeEvent ?? "none"}
        onValueChange={(event) => store.setActiveEvent(event === "none" ? null : (event as TimelineEvent))}
      >
        <SelectTrigger id="active-event">{store.activeEvent ? store.activeEvent : "No Active Event"}</SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No Active Event</SelectItem>
          <SelectItem value="event-one">Event One</SelectItem>
          <SelectItem value="event-two">Event Two</SelectItem>
          <SelectItem value="event-three">Event Three</SelectItem>
          <SelectItem value="event-four">Event Four</SelectItem>
          <SelectItem value="rise-of-the-great-old-one">Rise of the Great Old One</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
