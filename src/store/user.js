import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuth: false,
            uid: null,
            name: null
        }
    },
    mutations: {
        set_user(state, payload) {
            state.user.isAuth = true;
            state.user.uid = payload
        },
        set_user_name(state, payload) {
            state.user.name = payload;
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
                    firebase.auth().currentUser.updateProfile({ displayName: payload.name })
                        .then(() => commit('set_user_name', payload.name))
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
        signout() {
            firebase.auth().signOut()
        },
        state_changed({ commit, dispatch }, payload) {
            if (payload) {
                commit('set_user', payload.uid)
                commit('set_user_name', payload.displayName)
                dispatch('load_user_data', payload.uid)
            } else {
                commit('unset_user')
            }
        }
    },
    getters: {
        userId: (state) => state.user.uid,
        isUserAuth: (state) => state.user.isAuth
    }
}