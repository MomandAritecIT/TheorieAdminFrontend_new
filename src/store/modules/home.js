import axios from 'axios'

const state = {
    questions: []
};

const getters = {
    allQuestions: (state) => state.questions
};

const actions = {
    async fetchQuestions({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );

        commit('SET_QUESTION', response.data)
    },
    async addQuestion({ commit }, question) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                question,
                completed: false
            }
        );

        commit('NEW_QUESTION', response.data);
    },
    async deleteQuestion({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

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