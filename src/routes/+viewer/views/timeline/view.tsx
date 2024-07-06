import { TimelineEvent } from "~/stores/timeline";
import { useTimelineStore } from "~/stores/use-timeline-store";
import { EventView } from "./event-view";

export function TimelineView() {
  const timelineStore = useTimelineStore();

  return (
    <div className="grid h-dvh w-full grid-cols-2 grid-rows-[1fr_1fr] gap-4 p-4">
      <EventView eventId={TimelineEvent.EventOne} row="top" col="left" />
      <EventView eventId={TimelineEvent.EventTwo} row="top" col="right" />
      <EventView eventId={TimelineEvent.EventThree} row="bottom" col="left" />
      <EventView eventId={TimelineEvent.EventFour} row="bottom" col="right" />
    </div>
  );
}
