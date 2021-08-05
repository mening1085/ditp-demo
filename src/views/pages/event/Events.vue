<template>
  <div>
    <!-- Banner -->
    <Banner />

    <!-- Container -->
    <v-container>
      <v-layout justify-center class="mt-sm-8 mt-2">
        <v-flex lg8 md9 sm12>
          <!-- Category  -->
          <!-- Desktop Size -->
          <v-layout wrap v-if="$vuetify.breakpoint.smAndUp">
            <v-flex
              class="px-2 xs4 mb-4"
              v-for="item in categories.slice(0, 3)"
              :key="item.id"
            >
              <div class="category">
                <v-btn
                  :outlined="item.id !== activeCategory"
                  :color="item.id === activeCategory ? '#0066b3' : '#000'"
                  :dark="item.id === activeCategory"
                  class="text-capitalize font-weight-bold"
                  tile
                  depressed
                  block
                  @click="activeCategory = item.id"
                >
                  {{ item.category_name }}
                </v-btn>
              </div>
            </v-flex>

            <v-flex
              class="px-2 xs3"
              v-for="item in categories.slice(3, 7)"
              :key="item.id"
            >
              <v-btn
                :outlined="item.id !== activeCategory"
                :color="item.id === activeCategory ? '#0066b3' : '#000'"
                :dark="item.id === activeCategory"
                class="text-capitalize font-weight-bold"
                tile
                depressed
                block
                @click="activeCategory = item.id"
              >
                {{ item.category_name }}
              </v-btn>
            </v-flex>
          </v-layout>

          <!-- Mobile Size -->
          <v-sheet v-else>
            <v-slide-group v-model="slide" center-active>
              <v-slide-item
                v-slot="{ toggle }"
                v-for="item in categories"
                :key="item.id"
              >
                <v-layout @click="toggle">
                  <v-flex class="px-2 shrink">
                    <div class="category">
                      <v-btn
                        width="160"
                        :outlined="item.id !== activeCategory"
                        :color="item.id === activeCategory ? '#0066b3' : '#000'"
                        :dark="item.id === activeCategory"
                        class="text-capitalize font-weight-bold"
                        tile
                        depressed
                        block
                        @click="activeCategory = item.id"
                      >
                        {{ item.category_name }}
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!-- End  -->

          <!-- Content Events -->
          <EventCardHorizontal
            v-if="events.length > 0"
            imagePosition="left"
            :title="events[0].event_name"
            :id="events[0].event_id"
            :date="events[0].date"
            :time="events[0].time"
            :image="events[0].thumbnail"
            :subCategory="events[0].sub_categories"
            :eventType="events[0].event_type_name"
            class="mt-6 mt-sm-12 mb-sm-4 mb-10"
          />
          <EventCardHorizontal
            v-if="events.length > 1"
            imagePosition="right"
            :id="events[1].event_id"
            :title="events[1].event_name"
            :date="events[1].date"
            :time="events[1].time"
            :image="events[1].thumbnail"
            :subCategory="events[1].sub_categories"
            :eventType="events[1].event_type_name"
            class="mb-10"
          />
          <!-- End -->
        </v-flex>
      </v-layout>

      <v-row justify="center" class="mb-10" v-if="events.length > 2">
        <v-col
          cols="12"
          md="3"
          sm="6"
          class="mb-2"
          v-for="(event, i) in events.slice(2)"
          :key="i"
        >
          <EventCardVertical
            :id="event.event_id"
            :title="event.event_name"
            :date="event.date"
            :time="event.time"
            :image="event.thumbnail"
            :subCategory="event.sub_categories"
            :eventType="event.event_type_name"
          />
        </v-col>
      </v-row>

      <!-- Button Go to website -->
      <v-layout justify-center mt-6 mb-12>
        <v-flex shrink>
          <a href="https://www.thaitradeusa.com/home/" target="_blank">
            <v-btn
              class="text-capitalize font-cl font-weight-bold"
              outlined
              tile
            >
              Go to Website >
            </v-btn>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EventCardHorizontal from "../../../components/event-card/EventCardHorizontal.vue";
import Banner from "../../layout/Banner.vue";
import events from "../../../json/Events.json";
import EventCardVertical from "../../../components/event-card/EventCardVertical.vue";
export default {
  components: { Banner, EventCardHorizontal, EventCardVertical },
  data() {
    return {
      slide: null,
      activeCategory: 1,
      categories: [
        { id: 1, category_name: "Over All" },
        { id: 2, category_name: "Home & Living" },
        { id: 3, category_name: "Fashion" },
        { id: 4, category_name: "Food & Health" },
        { id: 5, category_name: "Industry Goods" },
        { id: 6, category_name: "Service Trade" },
        { id: 7, category_name: "Others" },
      ],
      events: [
        // {
        //   event_id: 1,
        //   event_name: "The Marche’ by STYLE Bangkok Virtual Trade Fair",
        //   date: "August 19 - 25, 2021 ",
        //   time: "Thailand, UTC+07:00",
        //   location: "Bangkok, Thailand",
        //   view: 200000,
        //   event_type_id: 1,
        //   event_type_name: "Online",

        //   categories: [
        //     { category_id: 2, category_name: "Home & Living" },
        //     { category_id: 1, category_name: "Fashion" },
        //   ],

        //   sub_categories: [
        //     { subCategory_id: 1, subCategory_name: "Furniture" },
        //     { subCategory_id: 2, subCategory_name: "Household Products" },
        //     {
        //       subCategory_id: 3,
        //       subCategory_name: "Gifts, Decorative & Handicrafts",
        //     },
        //     { subCategory_id: 4, subCategory_name: "Toys & Games" },
        //     {
        //       subCategory_id: 5,
        //       subCategory_name: "Stationary & Office Supplies",
        //     },
        //     {
        //       subCategory_id: 6,
        //       subCategory_name: "Traveling & Sporting Goods",
        //     },
        //     { subCategory_id: 7, subCategory_name: "Gems & Jewelry" },
        //     { subCategory_id: 8, subCategory_name: "Textiles" },
        //     { subCategory_id: 9, subCategory_name: "Apparel & Accessory" },
        //     {
        //       subCategory_id: 10,
        //       subCategory_name: "Leather, PVC & Footwear",
        //     },
        //   ],
        //   thumbnail: require("@/assets/images/events/thumbnail/Marche_by_STYLE_Virtual_302.jpeg"),
        // },

        // {
        //   event_id: 2,
        //   event_name: "The Marche’ by STYLE Bangkok Online Business Matching",
        //   date: "August 23 - 25, 2021 ",
        //   time: "Thailand, UTC+07:00",
        //   location: "Bangkok, Thailand",
        //   event_type_id: 1,
        //   event_type_name: "Online",

        //   categories: [
        //     { category_id: 2, category_name: "Home & Living" },
        //     { category_id: 1, category_name: "Fashion" },
        //   ],

        //   sub_categories: [
        //     { subCategory_id: 1, subCategory_name: "Furniture" },
        //     { subCategory_id: 2, subCategory_name: "Household Products" },
        //     {
        //       subCategory_id: 3,
        //       subCategory_name: "Gifts, Decorative & Handicrafts",
        //     },
        //     { subCategory_id: 4, subCategory_name: "Toys & Games" },
        //     {
        //       subCategory_id: 5,
        //       subCategory_name: "Stationary & Office Supplies",
        //     },
        //     {
        //       subCategory_id: 6,
        //       subCategory_name: "Traveling & Sporting Goods",
        //     },
        //     { subCategory_id: 7, subCategory_name: "Gems & Jewelry" },
        //     { subCategory_id: 8, subCategory_name: "Textiles" },
        //     { subCategory_id: 9, subCategory_name: "Apparel & Accessory" },
        //     {
        //       subCategory_id: 10,
        //       subCategory_name: "Leather, PVC & Footwear",
        //     },
        //   ],
        //   thumbnail: require("@/assets/images/events/thumbnail/Marche_by_STYLE_Online_Busi_Matching_302.jpeg"),
        // },

        // {
        //   event_id: 3,
        //   event_name: "The Marche’ by STYLE Bangkok (Lifestyle Fair)",
        //   date: "October - December 2021 ",
        //   time: "Thailand, UTC+07:00",
        //   location: "Bangkok, Thailand",
        //   event_type_id: 2,
        //   event_type_name: "Thailand",

        //   categories: [
        //     { category_id: 2, category_name: "Home & Living" },
        //     { category_id: 1, category_name: "Fashion" },
        //   ],

        //   sub_categories: [
        //     { subCategory_id: 1, subCategory_name: "Furniture" },
        //     { subCategory_id: 2, subCategory_name: "Household Products" },
        //     {
        //       subCategory_id: 3,
        //       subCategory_name: "Gifts, Decorative & Handicrafts",
        //     },
        //     { subCategory_id: 4, subCategory_name: "Toys & Games" },
        //     {
        //       subCategory_id: 5,
        //       subCategory_name: "Stationary & Office Supplies",
        //     },
        //     {
        //       subCategory_id: 6,
        //       subCategory_name: "Traveling & Sporting Goods",
        //     },
        //     { subCategory_id: 7, subCategory_name: "Gems & Jewelry" },
        //     { subCategory_id: 8, subCategory_name: "Textiles" },
        //     { subCategory_id: 9, subCategory_name: "Apparel & Accessory" },
        //     {
        //       subCategory_id: 10,
        //       subCategory_name: "Leather, PVC & Footwear",
        //     },
        //   ],
        //   thumbnail: require("@/assets/images/events/thumbnail/Marche_by_STYLE_Physical_302.jpeg"),
        // },

        {
          event_id: 4,
          event_name:
            "The Marche’ by STYLE Bangkok Virtual Trade Fair and Online Business Matching",
          date: "August 19 - 25, 2021",
          time: "Thailand, UTC+07:00",
          location: "Bangkok, Thailand",
          event_type_id: 1,
          event_type_name: "Online",

          categories: [
            { category_id: 2, category_name: "Home & Living" },
            { category_id: 1, category_name: "Fashion" },
          ],

          sub_categories: [
            { subCategory_id: 1, subCategory_name: "Furniture" },
            { subCategory_id: 2, subCategory_name: "Household Products" },
            {
              subCategory_id: 3,
              subCategory_name: "Gifts, Decorative & Handicrafts",
            },
            { subCategory_id: 4, subCategory_name: "Toys & Games" },
            {
              subCategory_id: 5,
              subCategory_name: "Stationary & Office Supplies",
            },
            {
              subCategory_id: 6,
              subCategory_name: "Traveling & Sporting Goods",
            },
            { subCategory_id: 7, subCategory_name: "Gems & Jewelry" },
            { subCategory_id: 8, subCategory_name: "Textiles" },
            { subCategory_id: 9, subCategory_name: "Apparel & Accessory" },
            {
              subCategory_id: 10,
              subCategory_name: "Leather, PVC & Footwear",
            },
          ],
          thumbnail: require("@/assets/images/events/thumbnail/Marche_by_STYLE_Virtual_302.jpeg"),
        },
      ],
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.active--category {
  background-color: #0066b3;
}
.category {
  color: #000;
}
</style>
