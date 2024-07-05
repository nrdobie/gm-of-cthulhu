import { createFileRoute } from "@tanstack/react-router";
import { useViewerStore } from "~/stores/use-viewer-store";

export const Route = createFileRoute("/viewer")({
  component: Viewer,
});

function Viewer() {
  const viewerStore = useViewerStore();

  return (
    <div className="grid min-h-dvh place-items-center bg-primary text-primary-foreground">
      <h1 className="font-bold font-handwriting text-9xl">Viewer Mode: {viewerStore.viewerMode}</h1>
    </div>
  );
}
