import Vue from 'vue'
let defaultUserData = {
    books: {

    },
    words: {}
}
export default {

    state: {
        userData: defaultUserData
    },
    mutations: {
        set_user_data(state, payload) {
            // state.userData = payload
            Vue.set(state, 'userData', payload)
        },
        add_user_book(state, payload) {
            Vue.set(state.userData.books, payload.bookId, payload.book)
        },
        add_user_book_part(state, payload) {
            Vue.set(state.userData.books[payload.bookId].parts, payload.partId, { addedDate: payload.timestamp })
        },
        update_user_book_part_last_opened_date(state, payload) {
            Vue.set(state.userData.books[payload.bookId].parts[payload.partId], 'lastOpenedDate', payload.timestamp)
        },
        update_user_book_part_finish_info(state, payload) {
            Vue.set(state.userData.books[payload.bookId].parts[payload.partId], 'finishedDate', payload.timestamp)
            Vue.set(state.userData.books[payload.bookId].parts[payload.partId], 'rating', payload.rating)
        },

    },
    actions: {
        load_user_data({ commit }, payload) {
            commit('set_processing', true)
            let userDataRef = Vue.$db.collection('userData').doc(payload)
            userDataRef.get()
                .then((data) => {
                    let userData = data.exists ? data.data() : defaultUserData

                    if (!userData.books)
                        userData.books = {}

                    commit('set_user_data', userData)
                    commit('set_processing', false)
                })
                .catch(() => {
                    commit('set_processing', false)
                })
        },
        add_user_book({ commit, getters }, payload) {
            commit('set_processing', true)

            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let book = {
                addedDate: new Date(),
                parts: {}
            }

            userDataRef.set({
                    books: {
                        [payload]: book
                    }
                }, { merge: true })
                .then(() => {
                    commit('add_user_book', { bookId: payload, book: book })
                    commit('set_processing', false)
                }).catch(() => {
                    commit('set_processing', false)
                })
        },
        update_user_book_stats({ commit, getters }, payload) {
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let timestamp = new Date()
            if (!getters.userData.books[payload.bookId].parts[payload.partId]) {
                userDataRef.update({
                        [`books.${payload.bookId}.parts.${payload.partId}.addedDate`]: timestamp
                    })
                    .then(() => commit('add_user_book_part', { bookId: payload.bookId, partId: payload.partId, timestamp: timestamp }))
            }

            userDataRef.update({
                [`books.${payload.bookId}.parts.${payload.partId}.lastOpenedDate`]: timestamp

            }).then(() => commit('update_user_book_part_last_opened_date', { bookId: payload.bookId, partId: payload.partId, timestamp: timestamp }))
        },
        finish_user_book_part({ commit, getters }, payload) {
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let timestamp = new Date()
            userDataRef.update({
                [`books.${payload.bookId}.parts.${payload.partId}.finishedDate`]: timestamp,
                [`books.${payload.bookId}.parts.${payload.partId}.rating`]: payload.rating


            }).then(() => commit('update_user_book_part_finish_info', { bookId: payload.bookId, partId: payload.partId, timestamp: timestamp, rating: payload.rating }))
        }
    },
    getters: {
        userData: (state) => state.userData
    }

}