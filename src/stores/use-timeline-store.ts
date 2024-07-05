import { mergeDeep, setIn } from "timm";
import { create } from "zustand";
import { syncTabs } from "zustand-sync-tabs";
import { devtools, persist } from "zustand/middleware";
import { shubNiggurathTimeline } from "~/data/timelines/shub-niggurath";
import type { DeepPartial } from "~/types/deep-partial";
import type { TimelineEvent, TimelineEventData } from "./timeline";

export type State = {
  greateOldOneName: string | null;
  activeEvent: TimelineEvent | null;
  events: Record<TimelineEvent, TimelineEventData>;
};

type Actions = {
  setGreatOldOneName: (name: string | null) => void;
  setActiveEvent: (event: TimelineEvent | null) => void;
  updateEvent: (event: TimelineEvent, data: DeepPartial<TimelineEventData>) => void;
};

export const useTimelineStore = create<State & Actions>()(
  devtools(
    persist(
      syncTabs(
        (set) => ({
          ...shubNiggurathTimeline,
          setGreatOldOneName: (name: string | null) => set({ greateOldOneName: name }),
          setActiveEvent: (event: TimelineEvent | null) => set({ activeEvent: event }),
          updateEvent: (event: TimelineEvent, data: DeepPartial<TimelineEventData>) =>
            set((state) => {
              const eventData = state.events[event];
              return setIn(state, ["events", event], mergeDeep(eventData, data)) as State;
            }),
        }),
        {
          name: "timeline",
        },
      ),
      {
        name: "timeline",
      },
    ),
  ),
);
