<template>
  <div>
 
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", { user: (state) => state.user }),
  },
  // async asyncData({ store }) {
  //  await store.dispatch("auth/getCurrentUser");
  // },
  methods: {
    ...mapActions("auth", ["logout", ""]),
  },
};
</script>

<style>
</style>
