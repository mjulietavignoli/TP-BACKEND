import { create } from 'zustand';

export const useTarea = create((set) => ({
  tareaToEdit: null,
  setTareaToEdit: (newTarea) =>
    set({
      tareaToEdit: newTarea,
    }),
  clearTareaToEdit: () =>
    set({
      tareaToEdit: null,
    }),
}));