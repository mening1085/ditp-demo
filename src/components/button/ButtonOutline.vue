<template>
  <v-btn
    class="text-capitalize font-weight-bold font-cl "
    outlined
    :color="color"
    tile
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      ype: String,
      default: "Text",
    },
    color: {
      type: String,
      default: "#000",
    },
  },
};
</script>

<style></style>
