import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import "firebase/firestore"
import VueYouTubeEmbed from 'vue-youtube-embed'
import FormattedDate from './filters/formattedDate'

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

Vue.filter('formattedDate', FormattedDate)

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

Vue.$db = db

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

        this.$store.dispatch('load_books')

    }
}).$mount('#app')