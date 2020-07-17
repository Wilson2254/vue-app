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
        },
        unset_user(state) {
            state.user = {
                isAuth: false,
                uid: null,
            }
        }
    },
    actions: {
        signup({ commit }, payload) {
            commit('set_processing', true)
            commit('clear_error')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('set_processing', false)
                })
                .catch(function(error) {
                    console.log(error)
                    commit('set_processing', false)
                    commit('set_error', error.message)
                });
        },
        signin({ commit }, payload) {
            commit('set_processing', true)
            commit('clear_error')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('set_processing', false)
                })
                .catch(function(error) {
                    console.log(error)
                    commit('set_processing', false)
                    commit('set_error', error.message)
                });
        },
        state_changed({ commit }, payload) {
            if (payload) {
                commit('set_user', payload.uid)
            } else {
                commit('unset_user')
            }
        }
    },
    getters: {
        isUserAuth: (state) => state.user.isAuth
    }
}