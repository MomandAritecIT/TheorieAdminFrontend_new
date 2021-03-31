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

        commit('setQuestions', response.data)
    },
    async addQuestion({ commit }, question) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                question,
                completed: false
            }
        );

        commit('newQuestion', response.data);
    },
    async deleteQuestion({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
        commit('removeQuestion', id);
    }
};

const mutations = {
    setQuestions: (state, questions) => (state.questions = questions),
    newQuestion: (state, question) => state.questions.unshift(question),
    removeQuestion: (state, id) => state.questions = state.questions.filter(question = question.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}