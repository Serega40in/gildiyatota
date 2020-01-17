import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import firebase from 'firebase';
import 'firebase/firestore'
import VueQuillEditor from 'vue-quill-editor'



// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor )
Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет'
})

Vue.config.productionTip = true

const firebaseConfig = {
  apiKey: "AIzaSyC-cZOVyTZL_KH3z1dSYASAQ1lBMIOuwUE",
  authDomain: "gildiyatota.firebaseapp.com",
  databaseURL: "https://gildiyatota.firebaseio.com",
  projectId: "gildiyatota",
  storageBucket: "gildiyatota.appspot.com",
  messagingSenderId: "119130572656",
  appId: "1:119130572656:web:83d0766fb66da2a0d8f1b5",
  measurementId: "G-WCV6406XZ1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

Vue.$db = db

firebase.analytics()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user)
    });
    this.$store.dispatch('LOAD_ARTICLES')
    this.$store.dispatch('LOAD_USERS')
  }
}).$mount('#app')

