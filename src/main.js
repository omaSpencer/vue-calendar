import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyBBOxpX_48O4occauNGkRGjHGTLWAZvc4A',
  authDomain: 'vue-calendar-d0134.firebaseapp.com',
  databaseURL: 'https://vue-calendar-d0134.firebaseio.com',
  projectId: 'vue-calendar-d0134',
  storageBucket: 'vue-calendar-d0134.appspot.com',
  messagingSenderId: '598864424228',
  appId: '1:598864424228:web:e39d77ff1f6d11d101d7b1',
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
