<template>
  <div class="fill-height">Test</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    if (this.$route.params.id) {
      this.getEvent(this.$route.params.id);
    } else {
      this.$router.push({ name: "Home" });
    }
  },
  computed:{
      ...mapState({
          event: (state) => state.event.selectedEvent
      })
  },
  methods: {
    getEvent(id) {
      this.$store
        .dispatch("event/getEvent",{id: id})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style>
</style>