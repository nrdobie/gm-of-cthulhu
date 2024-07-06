import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useTimelineStore } from "~/stores/use-timeline-store";

export function GreatOldOne() {
  const store = useTimelineStore((state) => ({
    greateOldOneName: state.greatOldOneName,
    setGreatOldOneName: state.setGreatOldOneName,
  }));

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="great-old-one-name">Great Old One Name</Label>
      <Input
        id="great-old-one-name"
        type="text"
        value={store.greateOldOneName ?? ""}
        onChange={(e) => store.setGreatOldOneName(e.target.value)}
      />
    </div>
  );
}
