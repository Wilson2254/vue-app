import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        let flag = this
        firebase.auth().onAuthStateChanged(function(user) {
            flag.$store.dispatch('state_changed', user)
        });
    }
}).$mount('#app')