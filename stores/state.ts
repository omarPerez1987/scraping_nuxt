import { defineStore } from "pinia";

export const useStateData = defineStore("stateData", {
  state: () => ({
    data: [],
  }),
  getters: {
    getData: (state) => state.data,
  },
  actions: {
    addOrders(data:any) {
      this.data = this.data.concat(data);
      console.log(this.data)
    },
  },
});