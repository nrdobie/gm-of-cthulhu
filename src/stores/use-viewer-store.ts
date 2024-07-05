import { create } from "zustand";
import { syncTabs } from "zustand-sync-tabs";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  viewerMode: "timeline" | "location";
};

type Actions = {
  changeViewerMode: (mode: "timeline" | "location") => void;
};

export const useViewerStore = create<State & Actions>()(
  devtools(
    immer(
      syncTabs(
        (set) => ({
          viewerMode: "timeline",
          changeViewerMode: (mode: "timeline" | "location") => set({ viewerMode: mode }),
        }),
        {
          name: "viewer",
        },
      ),
    ),
  ),
);
