<template>
  <div class="py-2 px-sm-12 px-3" style="border-bottom: 1px solid #E8E8F2">
    <v-layout class="justify-space-between">
      <!-- logo -->
      <v-flex class="xs4">
        <v-img
          @click="$router.push('/events')"
          width="300"
          class="cursor--pointer"
          src="@/assets/images/logo.png"
        ></v-img>
      </v-flex>

      <!-- Search -->
      <v-flex
        v-if="$vuetify.breakpoint.mdAndUp"
        class="xs4 d-flex justify-center align-center"
        style="color: #000"
      >
        <v-layout class="input--search">
          <v-flex class="shrink d-flex align-center">
            <span class="pl-3 pr-1" style="border-right: 1px solid #E8E8F2"
              >Events</span
            >
          </v-flex>
          <v-flex class="d-flex align-center">
            <v-text-field
              flat
              solo
              dense
              hide-details
              v-model="keyword"
              @keyup.enter="onHandleSearch()"
            ></v-text-field>
          </v-flex>
          <v-flex v-if="keyword" class="shrink d-flex align-center pr-2">
            <v-btn
              depressed
              fab
              small
              icon
              width="30"
              height="30"
              color="#fff"
              @click="keyword = ''"
            >
              <v-icon color="#BCBCBC">
                mdi-close-circle-outline
              </v-icon>
            </v-btn>
          </v-flex>
          <v-flex class="shrink d-flex align-center pr-2">
            <v-btn
              depressed
              fab
              small
              width="30"
              height="30"
              color="#fff"
              @click="onHandleSearch()"
            >
              <v-icon color="#000">
                mdi-magnify
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="xs4 d-flex align-center justify-end">
        <v-layout justify-end align-center>
          <!-- Button Register -->
          <!-- <v-flex v-if="$vuetify.breakpoint.smAndUp" shrink>
            <v-btn text depressed tile dark class="px-0">
              <v-img width="100" src="../../assets/images/register.png" />
            </v-btn>
          </v-flex> -->

          <!-- Language -->
          <v-flex
            v-if="$vuetify.breakpoint.smAndUp"
            shrink
            class="d-flex justify-center"
          >
            <v-menu offset-y rounded="0" class="language ma-0 pa-0">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="text-capitalize btn-language  mx-2 pa-0"
                  text
                  color="#000"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ language }}

                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in languageList" :key="index">
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="language = item"
                  >
                    {{ item }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-flex>

          <v-divider
            style="border-color:  #000"
            v-if="$vuetify.breakpoint.smAndUp"
            class=" mr-3"
            vertical
          ></v-divider>

          <!-- Search Mobile Size -->
          <v-flex shrink v-if="$vuetify.breakpoint.smAndDown">
            <v-dialog
              transition="dialog-top-transition"
              v-model="dialog"
              width="90%"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon small fab color="#000" v-bind="attrs" v-on="on">
                  <v-icon color="#0066B3">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Search Event
                </v-card-title>

                <v-card-actions>
                  <v-text-field
                    class="search-mobie"
                    flat
                    outlined
                    dense
                    append-icon="mdi-magnify"
                    color="#000"
                    hide-details
                    v-model="keyword"
                  ></v-text-field>
                </v-card-actions>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#0066B3"
                    tile
                    depressed
                    dark
                    @click="onHandleSearch()"
                  >
                    Search
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>

          <!-- Icon Hamberger -->
          <v-flex shrink>
            <v-btn text small fab color="#000">
              <!-- @click="isOpenMenu = !isOpenMenu" -->

              <img width="25" src="@/assets/images/hamburger2.png" />
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-bottom-sheet
      v-if="$vuetify.breakpoint.mdAndUp"
      v-model="isOpenMenu"
      transition="slide-y-transition"
      hide-overlay
    >
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="isOpenMenu = !isOpenMenu"
        >
          close
        </v-btn>
        <div class="my-3">
          This is a bottom sheet using the inset prop
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="isOpenMenu"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            :class="acctiveMenu === item.name ? 'active--menu' : ''"
            @click="onClickMenu(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider class="mb-2" />
      <v-layout justify-space-around>
        <v-flex
          shrink
          v-for="(lang, l) in languageList"
          :key="l"
          :class="lang === language ? 'active--lang' : ''"
        >
          <v-btn text block @click="language = lang">
            {{ lang }}
          </v-btn>
        </v-flex>
      </v-layout>
      <v-divider class="my-2" />
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    keyword: null,
    dialog: false,
    drawer: false,
    isOpenMenu: false,
    group: null,
    languageList: ["Eng", "Th", "ES"],
    acctiveMenu: "Home",
    language: "Eng",
    menu: [
      { name: "Home", link: "/", icon: "mdi-home" },
      { name: "Event", link: "/events", icon: "mdi-checkerboard" },
    ],
  }),
  computed: {
    styleMenu() {
      return this.sheet
        ? {
            height: "100px",
            opacity: "1",
            transition: "height 1s opacity 3s",
          }
        : {
            height: "0px",
            opacity: "0",
            transition: "height 1s opacity 3s",
          };
    },
  },
  watch: {
    sheet(val) {
      this.style_menu;
      this.opacity = val ? "1" : "0";
      this.height = val ? "100px" : "0px";
    },
  },
  methods: {
    onClickMenu(item) {
      this.acctiveMenu = item.name;
      this.drawer = false;
    },
    onHandleSearch() {
      this.dialog = false;
    },
  },
};
</script>
<style lang="css">
.btn-register {
  background: linear-gradient(95.03deg, #0066b3 0%, #0f1e5f 100%);
}
button.btn-language.text-capitalize.v-btn.v-btn--text.theme--dark.v-size--default:before {
  background-color: #fff !important;
}
@media only screen and (max-width: 600px) {
  .search-mobie i.v-icon.notranslate.mdi.mdi-magnify.theme--light {
    color: #0066b3;
  }
}
@media only screen and (min-width: 600px) {
  .input--search {
    border: 1px solid #000;
  }
  .search--nav .v-input__icon.v-input__icon--append {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .search--nav i.v-icon.notranslate.mdi.mdi-magnify.theme--light {
    color: rgb(8, 5, 5);
  }
  .search--nav
    .v-text-field.v-text-field--solo.v-input--dense
    > .v-input__control {
    border-radius: 21px;
    min-height: 35px;
  }
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot,
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 0 12px;
    padding-top: 0px;
    padding-right: 3px !important;
    padding-bottom: 0px;
    padding-left: 15px !important;
  }
}
.active--menu {
  background-color: #0065b35e;
  color: #fff;
}
.active--lang {
  background-color: #0065b35e;
  color: #fff;
}

.v-dialog__content {
  align-items: center;
  display: unset !important;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 76.48px !important;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
  width: 100%;
  z-index: 6;
  outline: none;
}
.v-dialog {
  box-shadow: unset !important;
}
</style>
