import { createFileRoute } from "@tanstack/react-router";
import { GreatOldOne } from "./fields/great-old-one";

export const Route = createFileRoute("/_gm/timeline/")({
  component: Timeline,
});

function Timeline() {
  return (
    <div className="container space-y-4 py-8">
      <h1 className="font-bold text-4xl">Timeline</h1>
      <GreatOldOne />
    </div>
  );
}
