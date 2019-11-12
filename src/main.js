import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import messagePlugin from './utils/message.plugin.js';
import Loader from '@/components/app/Loader';
import dateFilter from '@/filters/date.filter.js';
import currencyFilter from '@/filters/currency.filter.js';
import tooltipDirective from '@/directives/tooltip.directive.js';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

const firebaseConfig = {
  apiKey: "AIzaSyBhB1k57HBjjMpFbWxeXEuwOxiwBuN2HXY",
  authDomain: "vue-crm-sy87.firebaseapp.com",
  databaseURL: "https://vue-crm-sy87.firebaseio.com",
  projectId: "vue-crm-sy87",
  storageBucket: "vue-crm-sy87.appspot.com",
  messagingSenderId: "283536392576",
  appId: "1:283536392576:web:a36356a068b00473f00165",
  measurementId: "G-CKR1B2652B"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
