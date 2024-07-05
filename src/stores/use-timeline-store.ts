import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  greateOldOneName: string | null;
};

type Actions = {
  setGreatOldOneName: (name: string | null) => void;
};

export const useTimelineStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        greateOldOneName: null,
        setGreatOldOneName: (name: string | null) => set({ greateOldOneName: name }),
      })),
      {
        name: "timeline",
      },
    ),
  ),
);
