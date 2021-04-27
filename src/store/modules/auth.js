import axios from 'axios'

const state = {
    token: null,
};

const getters = {
    authenticated: (state) => state.token
};

const actions = {
    async login({ dispatch }, credentials) {
        const response = await axios.post(
            '/api/auth/login',
            credentials
        );

        return dispatch('attempt', response.data.access_token);
    },
    async attempt({ commit }, token) {
        if (token) commit('SET_TOKEN', token);
        if (!state.token) return;

        try {
            await axios.get('/api/auth/check');
        } catch (e) {
            commit('SET_TOKEN', null);
        }
    },
    async logout({ commit }) {
        const response = await axios.post('/api/auth/logout').then((response) => {
            commit('SET_TOKEN', null);

            return response.data.success;
        });

        return response;
    }
};

const mutations = {
    SET_TOKEN: (state, token) => state.token = token
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}