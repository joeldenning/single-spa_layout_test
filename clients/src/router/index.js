import Vue from "vue";
import VueRouter from "vue-router";
import ClientList from "../components/ClientList.vue";
import Client from "../components/Client.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/clients",
    name: "clients",
    component: ClientList
  },
  {
    path: "/clients/:clientId",
    name: "client",
    component: Client
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
