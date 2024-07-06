import { createFileRoute } from "@tanstack/react-router";
import { useViewerStore } from "~/stores/use-viewer-store";
import { LocationView } from "./views/location/view";
import { TimelineView } from "./views/timeline/view";

export const Route = createFileRoute("/viewer/")({
  component: Viewer,
});

function Viewer() {
  const viewerStore = useViewerStore();

  return (
    <div className="dark bg-background text-foreground">
      {viewerStore.viewerMode === "timeline" ? <TimelineView /> : <LocationView />}
    </div>
  );
}
