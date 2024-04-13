import { create } from "zustand";

export const useTasks = create((set) => ({
    tasks: [],
    setTasks: (tasks) => set({tasks: tasks}),
}));