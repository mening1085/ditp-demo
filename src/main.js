import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./assets/css/main.css";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//! ===> Sweetalert 2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

//! ===> Loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading, {
  color: "#001034",
  width: 150,
  height: 150,
  loader: "bars",
});
Vue.component("loading", Loading);

Vue.mixin({
  methods: {
    viewDetail(id) {
      this.$router.push(`/events/${id}`);
    },
    viewFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
