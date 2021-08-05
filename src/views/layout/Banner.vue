<template>
  <div style="position: relative">
    <!-- Banner -->
    <v-layout
      :class="
        $vuetify.breakpoint.smAndUp
          ? 'btn-control-desktop'
          : 'btn-control-mobile'
      "
    >
      <v-flex
        shrink
        v-for="i in 3"
        :key="i"
        class="d-flex align-end ml-2 mb-n2"
      >
        <v-btn
          width="25"
          height="25"
          fab
          depressed
          :outlined="isActiveCarousel == i - 1 ? false : true"
          :color="isActiveCarousel == i - 1 ? '#fff' : '#fff'"
          small
          @click="handleChange(i - 1)"
        >
          {{ i }}
        </v-btn>
      </v-flex>
    </v-layout>

    <v-carousel
      v-model="currentIndex"
      v-if="$vuetify.breakpoint.smAndUp"
      class="banner-slide"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      cycle
      height="100%"
      @change="handleChange"
    >
      <v-carousel-item v-for="(item, i) in data.banner_events.desktop" :key="i">
        <v-img width="100%" height="100%" max-height="303" :src="item.banner" />
      </v-carousel-item>
    </v-carousel>

    <v-carousel
      v-else
      class="banner-slide"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      cycle
      height="100%"
      @change="handleChange"
    >
      <v-carousel-item v-for="(item, i) in data.banner_events.mobile" :key="i">
        <v-img width="100%" height="100%" max-height="506" :src="item.banner" />
      </v-carousel-item>
    </v-carousel>

    <v-divider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveCarousel: 0,
      currentIndex: 0,
      data: {
        event_name: "Thai Food @home",
        banner_events: {
          desktop: [
            {
              banner: require("../../assets/images/events/banner/Marche_by_STYLE_Online_Busi_Matching_1282.jpeg"),
            },
            {
              banner: require("../../assets/images/events/banner/Marche_by_STYLE_Physical_1282.jpeg"),
            },
            {
              banner: require("../../assets/images/events/banner/Marche_by_STYLE_Virtual_1282.jpeg"),
            },
          ],
          mobile: [
            {
              banner: require("../../assets/images/events/banner/mobile/Marche_by_STYLE_Online_Busi_Matching_375.jpeg"),
            },
            {
              banner: require("../../assets/images/events/banner/mobile/Marche_by_STYLE_Physical_375.jpeg"),
            },
            {
              banner: require("../../assets/images/events/banner/mobile/Marche by STYLE_Virtual_375.jpeg"),
            },
          ],
        },
      },
    };
  },
  methods: {
    handleChange(val) {
      this.currentIndex = val;
      this.isActiveCarousel = val;
    },
  },
};
</script>

<style>
.img-banner {
  width: 100%;
  height: 303px;
  object-fit: cover;
}
.banner-slide .v-carousel__controls {
  justify-content: flex-end !important;
}
.btn-control-desktop {
  position: absolute;
  z-index: 99;
  bottom: 10%;
  right: 2%;
}
.btn-control-mobile {
  position: absolute;
  z-index: 99;
  bottom: 10%;
  right: 2%;
}
</style>
