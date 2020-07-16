import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuth: false,
            uid: null,
        }
    },
    mutations: {
        set_user(state, payload) {
            state.user.isAuth = true;
            state.user.uid = payload
        }
    },
    actions: {
        signup({ commit }, payload) {
            commit('set_processing', true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    console.log(user)
                    commit('set_user', user.uid)
                    commit('set_processing', false)
                })
                .catch(function(error) {
                    console.log(error)
                    commit('set_processing', false)
                    commit('set_error', error.message)
                });
        }
    }
}