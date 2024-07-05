import { createFileRoute } from "@tanstack/react-router";
import { TimelineEvent } from "~/stores/timeline";
import { EventEditor } from "./fields/event-editor";
import { GreatOldOne } from "./fields/great-old-one";
import { TableOfContents } from "./table-of-contents";

export const Route = createFileRoute("/_gm/timeline/")({
  component: Timeline,
});

function Timeline() {
  return (
    <div className="container grid grid-cols-[280px_1fr] gap-8 py-8">
      <h1 className="col-span-full font-bold text-4xl">Timeline</h1>
      <TableOfContents />
      <div className="space-y-16">
        <GreatOldOne />
        <EventEditor type={TimelineEvent.EventOne} />
        <EventEditor type={TimelineEvent.EventTwo} />
        <EventEditor type={TimelineEvent.EventThree} />
        <EventEditor type={TimelineEvent.EventFour} />
        <EventEditor type={TimelineEvent.RiseOfTheGreatOldOne} />
      </div>
    </div>
  );
}
