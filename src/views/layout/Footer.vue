<template>
  <div>
    <v-card color="#555E7D" flat tile>
      <v-layout>
        <v-flex sm1 xs3 style="background-color: #A40802; height: 5px"></v-flex>
        <v-flex sm1 xs3 style="background-color: #0066B3; height: 5px"></v-flex>
        <v-flex
          sm10
          xs6
          style="background-color: #E2E2E2; height: 5px"
        ></v-flex>
      </v-layout>

      <!-- Menu bar footer -->
      <v-layout
        wrap
        justify-space-between
        class="px-8 pt-8 pt-md-4 mb-6 px-md-4 d-flex align-center"
      >
        <v-flex xs12 md4 mb-6 class="d-flex align-center">
          <v-layout v-if="$vuetify.breakpoint.mdAndUp" justify-start>
            <v-flex shrink v-for="(item, i) in menu" :key="i">
              <a :href="item.link" target="_blank" style="color: #fff">
                <span
                  :style="
                    i + 1 != menu.length ? 'border-right: 1px solid #fff' : ''
                  "
                  class="font-12 mr-2 pr-2 footer-menu"
                >
                  {{ item.name }}
                </span>
              </a>
            </v-flex>
          </v-layout>
          <v-layout wrap v-else>
            <v-flex xs12 v-for="(item, i) in menu" :key="i">
              <a :href="item.link" target="_blank" style="color: #fff">
                <span class="font-14 mr-2 pr-2 footer-menu">
                  {{ item.name }}
                </span>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 md4 class="mb-6 d-flex align-center">
          <v-layout :justify-center="$vuetify.breakpoint.mdAndUp">
            <v-flex
              class="mx-md-2 mr-4"
              shrink
              v-for="(item, i) in social"
              :key="'social' + i"
            >
              <a :href="item.link" target="_blank" class="link-social">
                <i class="font-26" :class="'fab ' + item.icon"></i>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          md4
          class="font-weight-bold font-12 d-flex align-cente justify-md-end justify-start"
          style="color: #fff"
        >
          DITP | ThaiTradeFair.com
        </v-flex>
      </v-layout>

      <v-divider />

      <div class="py-3 white--text pl-8 pl-md-3 font-12">
        © 2020 by ThaiTradeUSA.com
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Home",
          link: "https://www.thaitradeusa.com/home/",
        },
        {
          name: "Exporter Directory",
          link: "https://www.thaitradeusa.com/home/?page_id=65",
        },
        {
          name: "Trade Events",
          link: "https://www.thaitradeusa.com/home/?page_id=256",
        },
        {
          name: "News",
          link: "https://www.thaitradeusa.com/home/?page_id=48",
        },
        {
          name: "FAQ",
          link: "https://www.thaitradeusa.com/home/?page_id=88",
        },
        {
          name: "About",
          link: "https://www.thaitradeusa.com/home/?page_id=193",
        },
        {
          name: "Contact",
          link: "https://www.thaitradeusa.com/home/?page_id=38",
        },
      ],
      social: [
        {
          icon: "fa-facebook",
          link: "https://facebook.com/thaitradeusa",
        },
        {
          icon: "fa-instagram",
          link: "https://www.instagram.com/thaitrade_usa/",
        },
        {
          icon: "fa-youtube",
          link: "https://www.youtube.com/c/ThaiTradeUSA",
        },
        {
          icon: "fa-twitter",
          link: "https://twitter.com/thaitrade_usa",
        },
        {
          icon: "fa-tiktok",
          link: "https://www.tiktok.com/@anythingthai",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.footer {
  background-color: #304055;
}
.footer-menu:hover {
  text-decoration: underline;
}
.link-social {
  color: #fff;
}
.link-social:hover {
  color: #e2e2e2;
}
</style>
