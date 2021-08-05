<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <v-layout>
      <!-- :style="
        $vuetify.breakpoint.mdAndUp
          ? 'height: calc(100% - 168.48px)'
          : 'height: calc(100% - 425px)'
      " -->
      <v-flex>
        <router-view />
      </v-flex>
    </v-layout>

    <!-- <v-main
      :style="
        $vuetify.breakpoint.mdAndUp
          ? 'height: calc(100% - 168.48px)'
          : 'height: calc(100% - 425px)'
      "
    >
      <router-view />
    </v-main> -->

    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, Footer },
  created() {
    this.getEvent();
  },
  methods: {
    getEvent() {
      this.$store
        .dispatch("event/getEvent")
        .then((res) => {
          console.log(res);
          this.event = res;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style></style>
