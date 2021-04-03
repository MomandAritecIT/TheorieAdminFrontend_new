<template>
  <div class="home">
    <h1>This is the Code page</h1>
    <div v-if="authenticated">
      <div class="questions">
        <div v-for="code in allCodes" :key="code.id" class="question">
          <div>
            id: {{ code.code }} <br />
            Title: {{ code.id }}
            <a @click="deleteCode(code.id)">delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchCodes", "deleteCode"]),
  },
  computed: mapGetters(["allCodes", "authenticated"]),
  created() {
    this.fetchCodes();
  },
};
</script>
