import { defineStore } from "pinia";

export const useStateData = defineStore("stateData", {
  state: () => ({
    data: [],
    open: false,
  }),
  getters: {
    getData: (state) => state.data,
  },
  actions: {
    addOrders(data: any) {
      this.data = this.data.concat(data);
    },
    setOpen(isOpen: boolean) {
      this.open = isOpen;
    },
  },
});
