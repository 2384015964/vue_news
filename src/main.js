import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
//引入Vant ui组件
import Vant from "vant";
import "vant/lib/index.css";
//移动端rem适配
import "amfe-flexible";
import "./utils/dayjs";

Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
