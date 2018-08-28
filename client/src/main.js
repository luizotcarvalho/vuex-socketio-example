import Vue from "vue";
import VueSocketio from "vue-socket.io";

import store from "./store";
import socket from "./socket";
import App from "./App.vue";

Vue.use(VueSocketio, socket, store);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
