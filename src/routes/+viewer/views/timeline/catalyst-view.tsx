import { SquareIcon, SquareMinusIcon, SquarePlusIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { TimelineCatalystType, type TimelineEvent, TimelineRating } from "~/stores/timeline";
import { useTimelineStore } from "~/stores/use-timeline-store";

type CatalystViewProps = {
  eventId: TimelineEvent;
  type: TimelineCatalystType;
  align: "left" | "right";
};

const CATALYST_LABELS = {
  [TimelineCatalystType.Person]: "Person",
  [TimelineCatalystType.Place]: "Place",
  [TimelineCatalystType.Thing]: "Thing",
  [TimelineCatalystType.Foe]: "Foe",
};

const CATALYST_ICONS = {
  [TimelineRating.Plus]: <SquarePlusIcon className="h-14 w-14 text-primary" />,
  [TimelineRating.Neutral]: <SquareIcon className="h-14 w-14" />,
  [TimelineRating.Negative]: <SquareMinusIcon className="h-14 w-14 text-destructive" />,
};

export function CatalystView({ eventId, type, align }: CatalystViewProps) {
  const catalyst = useTimelineStore((state) => state.events[eventId].catalysts[type]);

  return (
    <div className={cn("flex gap-2 self-center p-4", align === "right" ? "flex-row-reverse text-right" : "")}>
      {CATALYST_ICONS[catalyst.rating]}
      <div className="flex-1">
        <div className="font-black uppercase">{CATALYST_LABELS[type]}</div>
        <div className="font-bold text-xl">
          {catalyst.publicAspect}{" "}
          {catalyst.showPrivateAspect && catalyst.privateAspect ? (
            <span className="text-primary">({catalyst.privateAspect})</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
