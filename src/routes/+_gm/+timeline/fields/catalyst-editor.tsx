import { SquareIcon, SquareMinusIcon, SquarePlusIcon } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { TimelineCatalystType, type TimelineEvent, TimelineRating } from "~/stores/timeline";
import { useTimelineStore } from "~/stores/use-timeline-store";

type CatalystEditorProps = {
  eventType: TimelineEvent;
  type: TimelineCatalystType;
};

const CATALYST_LABELS = {
  [TimelineCatalystType.Person]: "Person",
  [TimelineCatalystType.Place]: "Place",
  [TimelineCatalystType.Thing]: "Thing",
  [TimelineCatalystType.Foe]: "Foe",
};

const CATALYST_RATING_LABELS = {
  [TimelineRating.Plus]: (
    <span>
      <SquarePlusIcon className="inline" /> Plus
    </span>
  ),
  [TimelineRating.Neutral]: (
    <span>
      <SquareIcon className="inline" /> Neutral
    </span>
  ),
  [TimelineRating.Negative]: (
    <span>
      <SquareMinusIcon className="inline" /> Negative
    </span>
  ),
};

export function CatalystEditor({ eventType, type }: CatalystEditorProps) {
  const catalystStore = useTimelineStore((state) => state.events[eventType].catalysts[type]);
  const updateTimelineEvent = useTimelineStore((state) => state.updateEvent);

  return (
    <div className="flex flex-col gap-4" id={`${eventType}-catalysts-${type}`}>
      <h3 className="font-bold text-xl">{CATALYST_LABELS[type]}</h3>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${eventType}-${type}-rating`}>Rating</Label>
        <Select
          value={catalystStore.rating}
          onValueChange={(rating) => updateTimelineEvent(eventType, { catalysts: { [type]: { rating } } })}
        >
          <SelectTrigger id={`${eventType}-${type}-rating`}>
            {catalystStore.rating ? CATALYST_RATING_LABELS[catalystStore.rating] : "Select Rating"}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={TimelineRating.Plus}>{CATALYST_RATING_LABELS[TimelineRating.Plus]}</SelectItem>
            <SelectItem value={TimelineRating.Neutral}>{CATALYST_RATING_LABELS[TimelineRating.Neutral]}</SelectItem>
            <SelectItem value={TimelineRating.Negative}>{CATALYST_RATING_LABELS[TimelineRating.Negative]}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${eventType}-${type}-public-aspect`}>Public Aspect</Label>
        <Input
          id={`${eventType}-${type}-public-aspect`}
          type="text"
          value={catalystStore.publicAspect}
          onChange={(e) => updateTimelineEvent(eventType, { catalysts: { [type]: { publicAspect: e.target.value } } })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${eventType}-${type}-private-aspect`}>Private Aspect</Label>
        <Input
          id={`${eventType}-${type}-private-aspect`}
          type="text"
          value={catalystStore.privateAspect ?? ""}
          onChange={(e) =>
            updateTimelineEvent(eventType, {
              catalysts: { [type]: { privateAspect: e.target.value === "" ? null : e.target.value } },
            })
          }
        />
      </div>

      <div className="flex items-center gap-2">
        <Switch
          id={`${eventType}-${type}-show-private-aspect`}
          checked={catalystStore.showPrivateAspect}
          onCheckedChange={(showPrivateAspect) =>
            updateTimelineEvent(eventType, { catalysts: { [type]: { showPrivateAspect } } })
          }
        />
        <Label htmlFor={`${eventType}-${type}-show-private-aspect`}>
          {catalystStore.showPrivateAspect ? "Show" : "Hide"} Private Aspect
        </Label>
      </div>
    </div>
  );
}
