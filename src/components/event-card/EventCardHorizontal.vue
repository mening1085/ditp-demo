<template>
  <v-row no-gutters justfy="center" align="center">
    <!-- Image -->
    <v-col
      :class="checkPosition !== 'right' ? 'pr-3' : 'pl-3'"
      cols="12"
      sm="6"
      md="6"
      :order="checkPosition === 'left' ? 'first' : 'last'"
      @click="viewDetail(id)"
    >
      <v-img class="event-image" :aspect-ratio="4 / 3" :src="image">
        <v-row class="white--text" no-gutters justfy="end" align="end">
          <v-col cols="12" align="end">
            <img
              v-if="eventType === 'Online'"
              width="34"
              src="@/assets/images/events/type-online.png"
            />
            <img
              v-if="eventType === 'Thailand'"
              width="34"
              src="@/assets/images/events/type-th.png"
            />
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <!-- Description -->
    <v-col
      class="font-14"
      :class="checkPosition === 'right' ? 'pr-3' : 'pl-3'"
      cols="12"
      sm="6"
      md="6"
      :order="checkPosition === 'right' ? 'first' : 'last'"
      :align="checkPosition === 'right' ? 'end' : 'start'"
    >
      <div
        class="event-title font-cl card-title mb-2 mt-4 mt-sm-0"
        @click="viewDetail(id)"
      >
        {{ title }}
      </div>
      <div class="event-date">{{ date }}</div>
      <div class="event-time mb-2">{{ time }}</div>
      <span
        class="event-category font-12"
        v-for="(subCate, i) in subCategory"
        :key="i"
      >
        {{ subCate.subCategory_name }}
        <span v-if="i + 1 != subCategory.length">,</span>
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    id: null,
    title: {
      default: "Example Title",
      type: String,
    },
    date: {
      default: "Example March 31 - April 5, 2022 ",
      type: String,
    },
    time: {
      default: " Example 11:00 – 20:00 UTC+07",
      type: String,
    },
    subCategory: {
      default: null,
      type: Array,
    },
    image: {
      default: "../../assets/images/events/example1.png",
      type: String,
    },
    imagePosition: {
      default: "left",
      type: String,
    },
    eventType: {
      default: "OVERSEA",
      type: String,
    },
  },
  computed: {
    checkPosition() {
      if (
        this.$vuetify.breakpoint.name === "xs" &&
        this.imagePosition === "right"
      ) {
        return "left";
      } else {
        return this.imagePosition;
      }
    },
  },
  methods: {
    // viewDetail(id) {
    //   this.$swal.fire({
    //     title: "Comming Soon!",
    //     text: `Todo: Get Product detail ID ${id} from API`,
    //     confirmButtonColor: "#02B25F",
    //   });
    // },
  },
};
</script>

<style lang="css" scoped></style>
