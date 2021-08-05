<template>
  <v-row no-gutters justfy="center" align="center">
    <!-- Image -->
    <v-col cols="12">
      <v-img
        @click="viewDetail(id)"
        class="event-image"
        :aspect-ratio="4 / 3"
        :src="image"
      >
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
    <v-col cols="12" class="font-14">
      <div class="event-title mt-4 mb-2 font-cl" @click="viewDetail(id)">
        {{ title }}
      </div>
      <div class="event-date">{{ date }}</div>
      <div class="event-time mb-2">{{ time }}</div>
      <span class="event-category" v-for="(subCate, i) in subCategory" :key="i">
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
};
</script>

<style></style>
