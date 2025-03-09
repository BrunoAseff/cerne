import { create } from "zustand";

interface FormSectionState {
  allCollapsed: boolean;

  sectionStates: Record<string, boolean>;

  registerSection: (id: string, defaultOpen: boolean) => void;

  updateSectionState: (id: string, isOpen: boolean) => void;

  toggleAllSections: () => void;
}

export const useFormSections = create<FormSectionState>((set, get) => ({
  allCollapsed: false,
  sectionStates: {},

  registerSection: (id, defaultOpen) => {
    set((state) => {
      if (state.sectionStates[id] === undefined) {
        return {
          sectionStates: {
            ...state.sectionStates,
            [id]: state.allCollapsed ? false : defaultOpen,
          },
        };
      }
      return state;
    });
  },

  updateSectionState: (id, isOpen) => {
    set((state) => ({
      sectionStates: {
        ...state.sectionStates,
        [id]: isOpen,
      },
    }));
  },

  toggleAllSections: () => {
    const { allCollapsed, sectionStates } = get();
    const newCollapsedState = !allCollapsed;

    const newSectionStates = Object.keys(sectionStates).reduce(
      (acc, id) => {
        acc[id] = !newCollapsedState;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    set({
      allCollapsed: newCollapsedState,
      sectionStates: newSectionStates,
    });
  },
}));
