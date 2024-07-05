import { createFileRoute } from "@tanstack/react-router";
import Intro from "./intro.mdx";

export const Route = createFileRoute("/_gm/")({
  component: Index,
});

function Index() {
  return (
    <div className="prose lg:prose-xl container py-8">
      <Intro />
    </div>
  );
}
