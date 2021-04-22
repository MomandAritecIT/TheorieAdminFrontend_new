import axios from 'axios'

const state = {
    codes: []
};

const getters = {
    allCodes: (state) => state.codes
};

const actions = {
    async fetchCodes({ commit }) {
        const response = await axios.get(
            '/api/code/list'
        );

        commit('SET_CODE', response.data)
    },
    async deleteCode({ commit }, id) {
        await axios.delete(`/api/code/${id}/destroy`);

        commit('REMOVE_CODE', id);
    }
};

const mutations = {
    SET_CODE: (state, codes) => (state.codes = codes),
    NEW_CODE: (state, code) => state.codes.unshift(code),
    REMOVE_CODE: (state, id) => state.codes = state.codes.filter(code => code.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}