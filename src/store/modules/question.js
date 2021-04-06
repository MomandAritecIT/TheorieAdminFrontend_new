import axios from 'axios'

const state = {
    questions: []
};

const getters = {
    allQuestions: (state) => state.questions
};

const actions = {
    async fetchQuestions({ commit }, type) {
        const response = await axios.get(
            `/api/question/list/${type}`
        );

        commit('SET_QUESTION', response.data)
    },
    async addQuestion({ commit }, formData) {
        const response = await axios.post(
            '/api/question/store',
            formData
        );

        commit('NEW_QUESTION', response.data);
    },
    async deleteQuestion({ commit }, id, type) {
        await axios.delete(`/api/question/destroy/${id}/${type}`);

        commit('REMOVE_QUESTION', id);
    }
};

const mutations = {
    SET_QUESTION: (state, questions) => (state.questions = questions),
    NEW_QUESTION: (state, question) => state.questions.unshift(question),
    REMOVE_QUESTION: (state, id) => state.questions = state.questions.filter(question => question.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
} 