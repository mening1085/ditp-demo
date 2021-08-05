import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import event from "./modules/Event.Store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event,
  },
  plugins: [createPersistedState()],
});
