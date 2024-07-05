import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { ViewerControls } from "./viewer-controls";

export const Route = createFileRoute("/_gm")({
  component: Layout,
});

function Layout() {
  return (
    <>
      <div className="border-border border-b p-2">
        <div className="container flex items-center gap-2">
          <Button variant="ghost" asChild className="font-bold font-handwriting text-2xl [&.active]:text-primary">
            <Link to="/" className="">
              GM of Cthulhu
            </Link>
          </Button>
          <Button variant="ghost" asChild className="[&.active]:text-primary">
            <Link to="/timeline">Timeline</Link>
          </Button>
          <div className="flex-1" />
          <ViewerControls />
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
