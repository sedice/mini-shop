import {
  Button,
  Cell,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Form,
  Field,
  Toast,
} from 'vant';

let localVue;
export default {
  install(Vue) {
    if (localVue === Vue) {
      return;
    }
    localVue = Vue;

    Vue.use(Button)
      .use(Cell)
      .use(Tabbar)
      .use(TabbarItem)
      .use(Swipe)
      .use(SwipeItem)
      .use(Form)
      .use(Field)
      .use(Toast)
      .use(Search);
  },
};
