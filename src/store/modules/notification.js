const state = {
    error: "",
    success: ""
};

const getters = {
    GET_ERROR: (state) => state.error,
    GET_SUCCESS: (state) => state.success
};

const actions = {
    SET_ERROR: ({ commit }, errorMsg) => {
        commit("POST_ERROR", errorMsg)
    },
    SET_SUCCESS: ({ commit }, successMsg) => {
        commit("POST_SUCCESS", successMsg)
    }
};

const mutations = {
    POST_ERROR: (state, payload) => {
        state.error = payload;
        setTimeout(() => { state.error = "" }, 4000);
    },
    POST_SUCCESS: (state, payload) => {
        state.success = payload;
        setTimeout(() => { state.success = "" }, 4000);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}