import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import dateFilter from './filter/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyAhyy8AjAZM0GZArh35xADmQ1ogN-9V24I',
  authDomain: 'crm-system-c1d01.firebaseapp.com',
  projectId: 'crm-system-c1d01',
  storageBucket: 'crm-system-c1d01.appspot.com',
  messagingSenderId: '650215692625',
  appId: '1:650215692625:web:803a108468f5df3d65db70',
  measurementId: 'G-FQDD9Y878K'
})
let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
