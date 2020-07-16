export default {
    state: {
        processing: false,
        error: null
    },
    mutations: {
        set_processing(state, payload) {
            state.processing = payload;
        },
        set_error(state, payload) {
            state.error = payload;
        },
        clean_error(state) {
            state.error = null;
        },

    },
    getter: {
        getProcessing: (state) => state.processing,
        getError: (state) => state.error,
    },
}