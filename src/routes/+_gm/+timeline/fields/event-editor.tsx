import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { TimelineCatalystType, TimelineEvent } from "~/stores/timeline";
import { useTimelineStore } from "~/stores/use-timeline-store";
import { CatalystEditor } from "./catalyst-editor";

type EventProps = {
  type: TimelineEvent;
};

const EVENT_LABELS = {
  [TimelineEvent.EventOne]: "Event One",
  [TimelineEvent.EventTwo]: "Event Two",
  [TimelineEvent.EventThree]: "Event Three",
  [TimelineEvent.EventFour]: "Event Four",
  [TimelineEvent.RiseOfTheGreatOldOne]: "Rise of the Great Old One",
};

export function EventEditor({ type }: EventProps) {
  const timelineStore = useTimelineStore((state) => state.events[type]);
  const updateTimelineEvent = useTimelineStore((state) => state.updateEvent);

  return (
    <div className="flex flex-col gap-4" id={type}>
      <h2 className="font-bold text-2xl">
        {EVENT_LABELS[type]}

        <div className="ml-4 inline-flex items-center gap-2">
          <Switch
            id={`${type}-event-completed`}
            checked={timelineStore.completed}
            onCheckedChange={() => updateTimelineEvent(type, { completed: !timelineStore.completed })}
          />
          <Label htmlFor={`${type}-event-completed`}>{timelineStore.completed ? "Completed" : "Pending"}</Label>
        </div>
      </h2>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${type}-event-name`}>Name</Label>
        <Input
          id={`${type}-event-name`}
          type="text"
          value={timelineStore.name}
          onChange={(e) => updateTimelineEvent(type, { name: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${type}-event-aspect`}>Aspect</Label>
        <Input
          id={`${type}-event-aspect`}
          type="text"
          value={timelineStore.aspect}
          onChange={(e) => updateTimelineEvent(type, { aspect: e.target.value })}
        />
      </div>

      <CatalystEditor eventType={type} type={TimelineCatalystType.Person} />
      <CatalystEditor eventType={type} type={TimelineCatalystType.Place} />
      <CatalystEditor eventType={type} type={TimelineCatalystType.Thing} />
      <CatalystEditor eventType={type} type={TimelineCatalystType.Foe} />
    </div>
  );
}
