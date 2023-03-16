import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFave: false },
      { id: 2, title: "play Gloomhaven", isFave: true },
    ],
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFave);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFave ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
        return state.tasks.length;
    }
  },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        }
    }
});
