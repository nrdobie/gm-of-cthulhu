import { cn } from "~/lib/utils";
import { TimelineCatalystType, type TimelineEvent } from "~/stores/timeline";
import { useTimelineStore } from "~/stores/use-timeline-store";
import { CatalystView } from "./catalyst-view";

type EventViewProps = {
  eventId: TimelineEvent;
  row: "top" | "bottom";
  col: "left" | "right";
};

export function EventView({ eventId, row, col }: EventViewProps) {
  const event = useTimelineStore((state) => state.events[eventId]);
  const activeEvent = useTimelineStore((state) => state.activeEvent);

  return (
    <div
      className={cn(
        "grid min-h-0 min-w-0 border-primary",
        row === "top"
          ? "grid-rows-[[aspect]_2.5rem_repeat(4,1fr)] border-b-4"
          : "grid-rows-[repeat(4,1fr)_[aspect]_2.5rem] border-t-4",
        col === "left" ? "grid-cols-[[name]_3rem_1fr] border-r-4" : "grid-cols-[1fr_[name]_3rem] border-l-4",
        activeEvent === eventId ? "bg-accent" : "",
        event.completed ? "opacity-50" : "",
      )}
    >
      <h2
        className={cn(
          "col-[name] row-span-full bg-primary py-4 text-center font-bold text-2xl text-primary-foreground uppercase leading-[3rem] [writing-mode:vertical-rl]",
          col === "left" ? "rotate-180" : "",
          activeEvent === eventId ? "bg-accent-foreground text-accent" : "",
          event.completed ? "[text-decoration:line-through]" : "",
        )}
      >
        {event.name}
      </h2>
      <p
        className={cn(
          "row-[aspect] bg-primary px-4 font-semibold text-2xl text-primary-foreground leading-[2.5rem]",
          col === "right" ? "text-right" : "",
        )}
      >
        {event.aspect}
      </p>

      <CatalystView eventId={eventId} type={TimelineCatalystType.Person} align={col} />
      <CatalystView eventId={eventId} type={TimelineCatalystType.Place} align={col} />
      <CatalystView eventId={eventId} type={TimelineCatalystType.Thing} align={col} />
      <CatalystView eventId={eventId} type={TimelineCatalystType.Foe} align={col} />
    </div>
  );
}
