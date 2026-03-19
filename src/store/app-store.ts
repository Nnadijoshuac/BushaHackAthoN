import { create } from "zustand";

type AppState = {
  smartSuggestionDismissed: boolean;
  dismissSuggestion: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  smartSuggestionDismissed: false,
  dismissSuggestion: () => set({ smartSuggestionDismissed: true }),
}));
