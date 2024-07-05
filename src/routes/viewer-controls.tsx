import { Link } from "@tanstack/react-router";
import { EyeIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useViewerStore } from "~/stores/use-viewer-store";

export function ViewerControls() {
  const viewerStore = useViewerStore();

  // TODO: Add Presentation API support

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">
          <EyeIcon /> Viewer
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Viewer Mode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={viewerStore.viewerMode}
          onValueChange={(mode) =>
            mode === "timeline" || mode === "location" ? viewerStore.changeViewerMode(mode) : null
          }
        >
          <DropdownMenuRadioItem value="timeline">Timeline</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="location">Location</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/viewer" target="_blank">
            Open Viewer in a new tab
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
