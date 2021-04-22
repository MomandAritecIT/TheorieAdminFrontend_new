<template>
  <div>
    <h1>This is the Code page</h1>
    <div v-if="authenticated">
      <div class="codes">
        <div v-for="code in allCodes" :key="code.id" class="question">
          <div>
            id: {{ code.code }} <br />
            Title: {{ code.id }} <br />
            <a @click="deleteCode(code.id)">delete</a>
            <br/><br/>
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
  computed: mapGetters({
    allCodes: "allCodes",
    authenticated: "Auth/authenticated",
  }),
  created() {
    this.fetchCodes();
  },
};
</script>
