// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Test from "./components/Test";
import prueba from "./components/prueba";
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Test
    },
    {
      path: "/Test",
      component: prueba
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
}).$mount("#app");
