<template>
    <div>
        <h3>Add Question:</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="question" placeholder="Question">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "addQuestion",
    data() {
        return {
            question: ''
        }
    },
    methods: {
        ...mapActions(['addQuestion']),
        onSubmit(e) {
            e.preventDefault();
            this.addQuestion(this.question);
        }
    },
}
</script>