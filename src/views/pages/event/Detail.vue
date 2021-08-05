<template>
  <div class="">
    <!-- Title -->
    <v-layout
      justify-start
      class="con-title-detail"
      :style="$vuetify.breakpoint.mdAndUp ? 'background: #f9f9f9;' : ''"
    >
      <v-flex>
        <div
          class="my-1 my-sm-10"
          :class="
            $vuetify.breakpoint.smAndUp ? 'title-detail' : 'title-detail-mobile'
          "
        >
          <v-layout justify-center class="container pb-0">
            <v-flex>
              {{ event.event_name }}
            </v-flex>
          </v-layout>
          <v-layout
            justify-start
            class="container pb-0"
            v-if="$vuetify.breakpoint.smAndUp"
          >
            <v-flex shrink>
              <v-btn text depressed large tile dark class="px-0">
                <v-img width="170" src="../../../assets/images/register.png" />
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>

    <!-- Detail -->
    <div
      :style="$vuetify.breakpoint.mdAndUp && 'background: #f9f9f9;'"
      :class="$vuetify.breakpoint.mdAndUp ? 'bg-detail' : ''"
    >
      <v-layout justify-center class="con-detail container">
        <v-flex>
          <v-row no-gutters justfy="center">
            <!-- Image -->
            <v-col
              order="2"
              order-md="1"
              cols="12"
              sm="12"
              md="6"
              style="position: relative"
            >
              <div style="position: absolute; top:0; left:0;  width: 100%">
                <v-img
                  width="100%"
                  v-if="$vuetify.breakpoint.mdAndUp"
                  lazy-src="https://picsum.photos/id/11/10/6"
                  :aspect-ratio="1"
                  :src="event.cover_image"
                />
              </div>
            </v-col>

            <!-- Description -->
            <v-col
              order="1"
              order-md="2"
              class="pl-sm-6 pl-0"
              cols="12"
              sm="12"
              md="6"
            >
              <v-row no-gutters>
                <v-col
                  cols="12"
                  order="last"
                  order-sm="first"
                  class=" mt-3 mb-3 my-sm-0"
                >
                  <!-- category -->
                  <v-layout v-if="event.categories.length > 0">
                    <v-flex
                      class="shrink mr-2"
                      v-for="item in event.categories"
                      :key="item.id"
                    >
                      <ButtonOutline :text="item.category_name" />
                    </v-flex>
                  </v-layout>
                </v-col>

                <v-col cols="12">
                  <div class="my-4 font-14" style="color: #6A6A6A">
                    <!-- date -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802">
                        mdi-calendar-blank
                      </v-icon>
                      {{ event.date }}
                    </div>
                    <!-- time -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802">
                        mdi-clock-outline
                      </v-icon>
                      {{ event.time }}
                    </div>
                    <!-- location -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802">
                        mdi-map-marker-outline
                      </v-icon>
                      {{ event.location }}
                    </div>
                    <!-- view -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802">
                        mdi-eye-outline
                      </v-icon>
                      {{ viewFormatter(event.view) }}
                    </div>
                  </div>
                </v-col>

                <v-col cols="12">
                  <!-- Sub Category -->
                  <v-layout wrap v-if="event.sub_categories.length > 0">
                    <v-flex
                      class="shrink text-uppercase font-weight-bold d-flex align-center font-14"
                      style="line-height: 30px;"
                      v-for="(item, i) in event.sub_categories"
                      :key="i"
                    >
                      {{ item.subCategory_name }}
                      <v-divider
                        v-if="i + 1 !== event.sub_categories.length"
                        style="border-color: #000"
                        vertical
                        class="mx-2"
                      ></v-divider>
                    </v-flex>
                  </v-layout>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </div>

    <v-layout justify-center class="con-detail container">
      <v-flex>
        <v-row no-gutters justfy="center">
          <!-- Image -->
          <v-col order="2" order-md="1" cols="12" sm="12" md="6"> </v-col>

          <!-- Description -->
          <v-col
            order="1"
            order-md="2"
            class="pl-sm-6 pl-0"
            cols="12"
            sm="12"
            md="6"
          >
            <div
              v-if="$vuetify.breakpoint.mdAndUp"
              class="font-14"
              style="width:100%"
              v-html="event.about_event"
            ></div>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>

    <!-- Detail -->
    <div
      style="display: none"
      :class="$vuetify.breakpoint.mdAndUp ? 'bg-detail' : ''"
    >
      <v-layout justify-center class="con-detail container">
        <v-flex>
          <v-row no-gutters justfy="center">
            <!-- Image -->
            <v-col order="2" order-md="1" cols="12" sm="12" md="6">
              <v-img
                v-if="$vuetify.breakpoint.mdAndUp"
                lazy-src="https://picsum.photos/id/11/10/6"
                :aspect-ratio="1"
                :src="event.cover_image"
              />
            </v-col>

            <!-- Description -->
            <v-col
              order="1"
              order-md="2"
              class="pl-sm-6 pl-0"
              cols="12"
              sm="12"
              md="6"
            >
              <v-row no-gutters>
                <v-col
                  cols="12"
                  order="last"
                  order-sm="first"
                  class=" mt-3 mb-3 my-sm-0"
                >
                  <!-- category -->
                  <v-layout v-if="event.categories.length > 0">
                    <v-flex
                      class="shrink mr-2"
                      v-for="item in event.categories"
                      :key="item.id"
                    >
                      <ButtonOutline :text="item.category_name" />
                    </v-flex>
                  </v-layout>
                </v-col>

                <v-col cols="12">
                  <div class="my-4 font-14">
                    <!-- date -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802"
                        >mdi-calendar-blank</v-icon
                      >
                      {{ event.date }}
                    </div>
                    <!-- time -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802"
                        >mdi-clock-outline</v-icon
                      >
                      {{ event.time }}
                    </div>
                    <!-- location -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802"
                        >mdi-map-marker-outline</v-icon
                      >
                      {{ event.location }}
                    </div>
                    <!-- view -->
                    <div class="d-flex align-center mb-1">
                      <v-icon class="mr-2" color="#A40802"
                        >mdi-eye-outline</v-icon
                      >
                      {{ viewFormatter(event.view) }}
                    </div>
                  </div>
                </v-col>

                <v-col cols="12">
                  <!-- Sub Category -->
                  <v-layout wrap v-if="event.sub_categories.length > 0">
                    <v-flex
                      class="shrink text-uppercase font-weight-bold d-flex align-center font-14"
                      style="line-height: 30px;"
                      v-for="(item, i) in event.sub_categories"
                      :key="i"
                    >
                      {{ item.subCategory_name }}
                      <v-divider
                        v-if="i + 1 !== event.sub_categories.length"
                        style="border-color: #000"
                        vertical
                        class="mx-2"
                      ></v-divider>
                    </v-flex>
                  </v-layout>
                </v-col>
              </v-row>

              <div
                v-if="$vuetify.breakpoint.mdAndUp"
                class="mt-12 font-14"
                style="width:100%"
                v-html="event.about_event"
              ></div>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </div>

    <v-img
      v-if="$vuetify.breakpoint.smAndDown"
      class="ma-0 pa-0"
      lazy-src="https://picsum.photos/id/11/10/6"
      :aspect-ratio="1"
      :src="event.cover_image"
    />

    <div
      v-if="$vuetify.breakpoint.smAndDown"
      class="mt-6 font-14 container"
      style="width:100%"
      v-html="event.about_event"
    ></div>

    <!-- Banner Detail -->
    <v-layout mt-6 mt-sm-12>
      <v-flex>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          height="auto"
          width="100%"
          cover
          :src="event.banner_detail"
        ></v-img>
      </v-flex>
    </v-layout>

    <!-- Description Event -->
    <v-layout wrap justify-center class="mt-12 detail-event container">
      <v-flex xs12 sm12 md6 pr-0 pr-md-3>
        <div v-html="event.description_left"></div>
      </v-flex>
      <v-flex xs12 sm12 md6 pl-0 pl-md-3>
        <div v-html="event.description_right"></div>
      </v-flex>
    </v-layout>

    <v-divider
      v-if="$vuetify.breakpoint.smAndUp"
      class="mt-12 container"
    ></v-divider>

    <!-- MEET TRADE PARTNERS -->
    <v-layout justify-center>
      <v-flex class="partner">
        <v-layout class="container mb-4 mb-sm-0">
          <v-flex
            shrink
            :style="
              $vuetify.breakpoint.smAndUp
                ? 'font-size: 48px;'
                : 'font-size: 36px;'
            "
            style="font-family: ChulabhornLikitDisplay;"
          >
            <div>MEET TRADE</div>
            <div style="line-height: 20px">PARTNERS</div>
          </v-flex>
          <template
            v-if="
              event.meet_trade_partners.length > 0 &&
                $vuetify.breakpoint.smAndUp
            "
          >
            <v-flex
              shrink
              v-for="i in checkLength(event.meet_trade_partners.length)"
              :key="i"
              class="d-flex align-end ml-2 mb-n2"
            >
              <v-btn
                width="25"
                height="25"
                fab
                depressed
                :outlined="isActiveCarousel == i - 1 ? false : true"
                :dark="isActiveCarousel == i - 1 ? true : false"
                :color="isActiveCarousel == i - 1 ? '#a40802' : '#000'"
                small
                @click="handleChange(i - 1)"
              >
                {{ i }}
              </v-btn>
            </v-flex>
          </template>
        </v-layout>

        <div v-if="$vuetify.breakpoint.smAndUp">
          <v-carousel
            v-model="currentIndex"
            show-arrows
            hide-delimiters
            delimiter-icon="mdi-minus"
            cycle
            hide-delimiter-background
            height="auto"
            @change="handleChange"
            v-if="event.meet_trade_partners.length > 0"
          >
            <template v-slot:prev="{ on, attrs }">
              <v-icon
                style="background-color: #fff"
                large
                color="#E2E2E2"
                v-bind="attrs"
                v-on="on"
              >
                mdi-chevron-left
              </v-icon>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-icon
                style="background-color: #fff"
                large
                color="#E2E2E2"
                v-bind="attrs"
                v-on="on"
              >
                mdi-chevron-right
              </v-icon>
            </template>
            <v-carousel-item
              v-for="n in checkLength(event.meet_trade_partners.length)"
              :key="n"
            >
              <v-layout class="container" wrap>
                <v-flex
                  xs4
                  class="pa-3 mb-4"
                  v-for="(item, i) in event.meet_trade_partners.slice(
                    n * 6 - 6,
                    n * 6
                  )"
                  :key="i"
                >
                  <v-card flat tile>
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      :aspect-ratio="1.77 / 1"
                      :src="item.thumbnail"
                      alt=""
                    />
                    <div class="font-weight-bold font-14 mt-3 mb-2">
                      {{ item.partner_name }}
                    </div>
                    <div>
                      <span class="event-category font-14">
                        {{ item.sub_category }}
                      </span>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </div>

        <div v-else>
          <v-layout wrap class="container">
            <v-flex
              xs12
              mb-2
              v-for="(item, i) in event.meet_trade_partners.slice(0, 3)"
              :key="i"
            >
              <v-card flat tile>
                <v-layout>
                  <v-flex xs3>
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      :aspect-ratio="1"
                      :src="item.thumbnail"
                      alt=""
                    />
                  </v-flex>
                  <v-flex xs9 class="px-3">
                    <div class="font-weight-bold font-14 mt-3 mb-2">
                      {{ item.partner_name }}
                    </div>
                    <div>
                      <span class="event-category font-14">
                        {{ item.sub_category }}
                      </span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-card>

              <v-divider v-if="i + 1 != 3" class="my-3" />
            </v-flex>
          </v-layout>
        </div>

        <div class=" text-center" v-if="event.meet_trade_partners.length == 0">
          Data not found!
        </div>

        <div
          class="d-flex justify-center"
          v-if="event.meet_trade_partners.length > 0"
        >
          <v-btn
            outlined
            tile
            class="font-weight-bold text-capitalize"
            color="#0066B3"
            >See More</v-btn
          >
        </div>
      </v-flex>
    </v-layout>

    <!-- RELATED NEWS -->
    <v-layout wrap mt-12>
      <v-flex xs12 sm7 style="background-color: #555E7D">
        <div
          :style="$vuetify.breakpoint.smAndUp ? 'padding-left: 15%' : ''"
          class="pr-sm-10  my-12 container"
        >
          <div class="releted-1">RELATED</div>
          <div class="releted-2">NEWS</div>

          <v-layout
            v-if="$vuetify.breakpoint.smAndUp"
            wrap
            mt-6
            style="color: #fff"
          >
            <v-flex xs12 v-for="(news, rn) in event.related_news" :key="rn">
              <v-layout class="d-flex align-start">
                <v-flex xs2>
                  <a :href="news.link" target="_blank">
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      :src="news.thumbnail"
                      aspect-ratio="1"
                    ></v-img>
                  </a>
                </v-flex>
                <v-flex xs10 pl-6 class="font-14">
                  <div class="title-news font-weight-bold">
                    <a class="link-news" :href="news.link" target="_blank">
                      {{ news.title }}
                    </a>
                  </div>
                  <div>{{ news.author }}</div>
                  <div>{{ news.company }}</div>
                  <div>{{ news.date }}</div>
                </v-flex>
              </v-layout>
              <v-divider
                v-if="event.related_news.length != rn + 1"
                style="border-color: #fff"
                class="my-8"
              />
            </v-flex>
          </v-layout>

          <v-layout v-else mt-6>
            <v-flex>
              <v-carousel
                :show-arrows="false"
                hide-delimiter-background
                hide-delimiters
                v-model="newsSlide"
                height="auto"
                @change="changeNews"
              >
                <v-carousel-item
                  v-for="(news, i) in event.related_news"
                  :key="'mb-' + i"
                >
                  <v-layout class="d-flex align-center">
                    <v-flex xs4>
                      <a :href="news.link" target="_blank">
                        <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          :src="news.thumbnail"
                          aspect-ratio="1"
                        ></v-img>
                      </a>
                    </v-flex>
                    <v-flex xs8 pl-6 class="font-14">
                      <div class="title-news-mobile font-weight-bold">
                        <a class="link-news" :href="news.link" target="_blank">
                          {{ news.title }}
                        </a>
                      </div>
                      <div class="mt-4" style="color: #fff">
                        {{ news.date }}
                      </div>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>

              <v-layout justify-center mt-12>
                <v-flex
                  shrink
                  v-for="i in event.related_news.length"
                  :key="i"
                  class="d-flex align-end ml-2 mb-n2"
                >
                  <v-btn
                    width="8"
                    height="8"
                    fab
                    depressed
                    :outlined="isActiveCarouselNews == i - 1 ? false : true"
                    :color="isActiveCarouselNews == i - 1 ? '#fff' : '#fff'"
                    small
                    @click="changeNews(i - 1)"
                  >
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>

          <div
            class="mt-12 d-flex "
            :class="
              $vuetify.breakpoint.smAndUp ? 'justify-end' : 'justify-center'
            "
          >
            <a
              href="https://www.thaitradeusa.com/home/?page_id=48"
              target="_blank"
            >
              <v-btn
                outlined
                tile
                class="font-weight-bold text-capitalize"
                color="#fff"
              >
                See More
              </v-btn>
            </a>
          </div>
        </div>
      </v-flex>

      <v-flex xs12 sm5 style="background-color: #F9F9F9;">
        <div
          class="pl-sm-12 pr-sm-10 my-12 container"
          :style="$vuetify.breakpoint.smAndUp ? 'padding-right: 7%' : ''"
        >
          <div class="releted-event-1">RELATED</div>
          <div class="releted-event-2">EVENTS</div>

          <v-layout
            v-if="$vuetify.breakpoint.smAndUp"
            wrap
            mt-6
            style="color: #000"
          >
            <v-flex xs12 v-for="(item, re) in event.related_events" :key="re">
              <div class="font-14">
                <!-- <span class="event-title" @click="onClick(item.event_id)"> -->
                <span class="event-title"> - {{ item.event_name }} </span>
              </div>
              <div v-if="item.date" class="font-12">{{ item.date }}</div>
              <div v-if="item.time" class="font-12">{{ item.time }}</div>
              <div v-if="item.location" class="font-12">
                {{ item.location }}
              </div>
              <v-divider
                v-if="event.related_events.length != re + 1"
                style="border-color: #E2E2E2"
                class="my-3"
              />
            </v-flex>
          </v-layout>

          <v-layout v-else mt-6>
            <v-flex>
              <v-carousel
                :show-arrows="false"
                hide-delimiter-background
                hide-delimiters
                v-model="eventSlide"
                height="100"
                @change="changeEvent"
              >
                <v-carousel-item
                  v-for="(item, re) in event.related_events"
                  :key="'mb-event-' + re"
                >
                  <v-layout class="d-flex align-center">
                    <v-flex class="font-14">
                      <div class="font-weight-bold" style="color: #000">
                        <a
                          style="color: #000"
                          :href="item.link"
                          target="_blank"
                        >
                          {{ item.event_name }}
                        </a>
                      </div>
                      <div class="mt-4">
                        {{ item.date }}
                      </div>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>

              <v-layout justify-center mt-12>
                <v-flex
                  shrink
                  v-for="i in event.related_events.length"
                  :key="i"
                  class="d-flex align-end ml-2 mb-n2"
                >
                  <v-btn
                    width="8"
                    height="8"
                    fab
                    depressed
                    :outlined="isActiveCarouselEvent == i - 1 ? false : true"
                    :color="
                      isActiveCarouselEvent == i - 1 ? '#0066B3 ' : '#0066B3 '
                    "
                    small
                    @click="changeEvent(i - 1)"
                  >
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>

          <div
            class="d-flex mt-12"
            :class="
              $vuetify.breakpoint.smAndUp ? 'justify-end' : 'justify-center'
            "
          >
            <v-btn
              outlined
              tile
              class="font-weight-bold text-capitalize"
              color="#0066B3"
              @click="$router.push('/events')"
            >
              See More
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <!-- CONTACT THAI TRADE CENTER -->
    <v-layout wrap class="mt-6 mt-sm-12 container">
      <v-flex xs12 md6 pr-sm-6>
        <div
          class="contact-title"
          :class="$vuetify.breakpoint.xs ? 'text-center' : ''"
        >
          CONTACT THAI TRADE CENTER
        </div>

        <div
          :class="$vuetify.breakpoint.xs ? 'text-center' : ''"
          class="mb-6 mt-3 font-13"
          style="color: #A40802"
        >
          For attendee pre-registration or exhibitor applications, please
          contact your regional Thai Trade Center
        </div>

        <!-- Group 1 -->
        <div
          class="font-13"
          v-for="(item, i) in event.contacts.group1"
          :key="'group1' + i"
        >
          <span class=" font-weight-bold">{{ item.city }}</span>
          {{ item.location }} Tel. {{ item.tel }} | Fax
          {{ item.fax }}
          <a href="">
            {{ item.email }}
          </a>
        </div>

        <div class="line-dot my-4"></div>

        <!-- Group 2 -->
        <div
          class="font-13"
          v-for="(item, i) in event.contacts.group2"
          :key="'group2' + i"
        >
          <span class=" font-weight-bold">{{ item.city }}</span>
          {{ item.location }} Tel. {{ item.tel }} | Fax
          {{ item.fax }}
          <a href="">
            {{ item.email }}
          </a>
        </div>

        <div class="line-dot my-4"></div>

        <!-- Group 3 -->
        <div
          class="font-13"
          v-for="(item, i) in event.contacts.group3"
          :key="'group3' + i"
        >
          <span class=" font-weight-bold">{{ item.city }}</span>
          {{ item.location }} Tel. {{ item.tel }} | Fax
          {{ item.fax }}
          <a href="">
            {{ item.email }}
          </a>
        </div>
      </v-flex>

      <v-flex shrink v-if="$vuetify.breakpoint.smAndUp">
        <v-divider vertical />
      </v-flex>
      <v-flex xs12 class="px-12 mt-12" v-else>
        <v-divider style="border-bottom: 1px solid #000;" />
      </v-flex>

      <v-flex xs12 md6 pl-md-6 mt-12 mt-md-0>
        <div class="font-24 font-cl font-weight-bold">
          One response to "{{ event.event_name }}"
        </div>

        <div class="font-14 mt-4 mt-sm-0" style="color: #0066B3">
          <span class=" font-weight-bold">Leave a Reply:</span> Your email
          address will not be published. Required fields are marked *
        </div>

        <v-form ref="form" class="my-6" v-model="valid" lazy-validation>
          <v-layout wrap>
            <v-flex xs12 sm5 pr-sm-3>
              <label class="font-12 font-weight-bold" for="Name">Name*</label>
              <v-text-field
                outlined
                dense
                v-model="form.ame"
                :rules="nameRules"
                placeholder="Name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm7>
              <label class="font-12 font-weight-bold" for="Name">Email*</label>
              <v-text-field
                outlined
                dense
                v-model="form.email"
                :rules="emailRules"
                placeholder="Email"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <label class="font-12 font-weight-bold" for="Name">Website</label>
              <v-text-field
                outlined
                dense
                v-model="form.website"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <label class="font-12 font-weight-bold" for="Name">Comment</label>
              <v-textarea
                outlined
                dense
                placeholder="Comment"
                v-model="form.comment"
              ></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout justify-space-between class="d-flex align-center">
            <v-flex xs6>
              <v-btn
                tile
                :disabled="!valid"
                color="#0066B3"
                depressed
                class="text-capitalize font-weight-bold font-14"
                :dark="valid"
                @click="validate"
              >
                Post Comment
              </v-btn>
            </v-flex>

            <v-flex xs6 class="d-flex justify-end">
              <span style="opacity: 0.5" class="font-13">
                Your email address will not be published.
              </span>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>

    <v-layout class="container">
      <v-flex>
        <div class="comments mb-4">Comment List</div>
        <div class="comment-list">
          <v-card
            color="#F9F9F9"
            :class="comments.length > 1 ? 'mb-3' : ''"
            class="pa-4"
            flat
            v-for="(comment, i) in comments"
            :key="i"
          >
            <div style="color: #0066B3" class="font-13 mb-2">
              {{ comment.date }}
            </div>
            <div class="font-13">{{ comment.comment }}</div>
          </v-card>
        </div>
      </v-flex>
    </v-layout>

    <!-- Button Go to website -->
    <v-layout justify-center mt-6 mb-12 mt-md-12>
      <v-flex shrink>
        <a href="https://www.thaitradeusa.com/home/" target="_blank">
          <v-btn
            class="text-capitalize font-weight-bold font-cl "
            outlined
            tile
          >
            Go to Website >
          </v-btn>
        </a>
      </v-flex>
    </v-layout>

    <!-- navbar footer -->
    <div class="navbar-footer" v-if="$vuetify.breakpoint.xs">
      <v-layout justify-space-between class="d-flex align-center">
        <v-flex
          xs12
          class="d-flex pa-3 justify-center register-bar align-center "
        >
          <v-btn class="text-capitalize" block color="#fff" depressed tile>
            <i class="font-24 fas fa-user-plus mr-3"></i>
            <span class="font-24">Register</span>
          </v-btn>
        </v-flex>
        <v-flex shrink>
          <v-btn color="#000" width="69" height="60" depressed tile>
            <i class="far fa-envelope font-30" style="color: #fff"></i>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import ButtonOutline from "../../../components/button/ButtonOutline.vue";

export default {
  components: { ButtonOutline },
  data() {
    return {
      valid: true,
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      form: {
        name: "",
        email: "",
        website: "",
        comment: "",
      },
      comments: [
        {
          name: "John",
          email: "john@do.com",
          website: "",
          date: "Thu Aug 05 2021 15:07:45 GMT+0700 (Indochina Time)",
          comment:
            "in line at niche market opportunities at the most comprehensive lifestyle trade show in Asia – STYLE Bangkok in March 2021 at Bangkok International Trade & Exhibition Centre.",
        },
      ],
      event: null,
      currentIndex: 0,
      isActiveCarousel: 0,
      newsSlide: 0,
      isActiveCarouselNews: 0,
      eventSlide: 0,
      isActiveCarouselEvent: 0,
      events: [
        {
          event_id: 1,
          event_name: "The Marche’ by STYLE Bangkok Virtual Trade Fair",
          date: "August 19 - 25, 2021 ",
          time: "Thailand, UTC+07:00",
          location: "Bangkok, Thailand",
          view: 200000,
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

          about_event:
            "As a subsitutional project for the rescheduled STYLE Bangkok - an international lifestyle and fashion trade fair, this brainchild of the Department of International Trade Promotion (DITP), Thailand's Ministry of Commerce aimed at supporting Thai manufacturers and exporters of lifestyle and fashion products to meet and strengthen trade bonds with business partners worldwide during the outbreak. The Marche’ by STYLE Bangkok encompasses an online and offline activity providing global and local buyers and ample opportunity to source for quality products from more than 120 Thai selected exporters. 		",

          description_left:
            '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthaitradeusa%2Fvideos%2F343419027397940%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>		',

          description_right:
            '"<strong>Virtual Trade Fair (VTF)</strong> <br /> features over 120 selected Thai exporters of lifestyle and fashion products offering a splendid array of lifestyle and fashion products in six categories; Fashion & Leather, Gifts & Premium, Houseware, Furniture, Wellness, Home Decor. "',

          cover_image: require("@/assets/images/events/cover/Marche_by_STYLE_Virtual_467.jpeg"),
          banner_detail: require("@/assets/images/events/banner-detail/MarchebySTYLE_Virtual_1280.jpeg"),

          meet_trade_partners: [
            {
              partner_name: "BY BOON COMPANION CO., LTD.",
              sub_category: "Apparel & Accessory",
              thumbnail: require("../../../assets/images/events/partners/BY BOON COMPANION CO., LTD..jpg"),
            },
            {
              partner_name: "CHAANG OCARINA & CERAMIC",
              sub_category: "Gifts, Decorative, Handicrafts",
              thumbnail: require("../../../assets/images/events/partners/CHAANG OCARINA & CERAMIC.jpeg"),
            },
            {
              partner_name: "BATHROOM DESIGN I-SPA CO., LTD.",
              sub_category: "Household Products",
              thumbnail: require("../../../assets/images/events/partners/BATHROOM DESIGN I-SPA CO., LTD..jpg"),
            },
            {
              partner_name: "ABLE INTERIOR WORKSHOP CO., LTD.",
              sub_category: "Furniture",
              thumbnail: require("../../../assets/images/events/partners/ABLE INTERIOR WORKSHOP CO., LTD..jpg"),
            },
            {
              partner_name: "FLOW",
              sub_category: "Gems & Jewelry",
              thumbnail: require("../../../assets/images/events/partners/FLOW.jpeg"),
            },
            {
              partner_name: "NATURE LIFE HERB",
              sub_category: "Beauty & Personal Care",
              thumbnail: require("../../../assets/images/events/partners/NATURE LIFE HERB.jpeg"),
            },
          ],
          related_news: [
            {
              title:
                "A glimpse of something BIG coming your way - The Marché by Style Bangkok Fair",
              author: "Thai Trade Center Los Angeles",
              company: "Thai Trade Center, Los Angeles",
              date: "August 2, 2021",
              thumbnail:
                "https://www.thaitradeusa.com/home/wp-content/uploads/2021/08/Marche%E2%80%99-by-STYLE-Bangkok_650.jpg",
              link: "https://www.thaitradeusa.com/home/?p=19361",
            },
          ],
          related_events: [
            {
              event_id: 2,
              event_name:
                "The Marche’ by STYLE Bangkok Online Business Matching",
              date: "August 23 - 25, 2021 ",
              time: "Thailand, UTC+07:00",
              location: "Bangkok, Thailand",
            },
            {
              event_id: 3,
              event_name: "The Marche’ by STYLE Bangkok (Lifestyle Fair)",
              date: "October - December 2021 ",
              time: "Thailand, UTC+07:00",
              location: "Bangkok, Thailand",
            },
          ],
          contacts: {
            group1: [
              {
                city: "New York",
                location: "1359 Broadway, Suite 1530 New York, NY 10018",
                tel: "212 482 0077",
                fax: "212 482 1177",
                email: "info@thaitradeny.com",
              },
              {
                city: "LOS ANGELES",
                location:
                  "611 N. Larchmont Blvd 3rd Floor Los Angeles, CA 90004",
                tel: "323 466 9645",
                fax: "323 466 1559",
                email: "ttclausa@att.net,ttcla@live.com",
              },
              {
                city: "CHICAGO",
                location: "700 N. Rush Street, 2nd Floor Chicago, IL 60611",
                tel: "312 787 3388",
                fax: "312 787 9733",
                email: "ttcc@thaitradechicago.com",
              },
              {
                city: "MIAMI",
                location: "6100 Blue Lagoon Drive Suite 100 Miami, FL 33126",
                tel: "786 388 7888",
                fax: "786 388 7999",
                email: "ttcmiami@earthlink.net",
              },
            ],
            group2: [
              {
                city: "TORONTO",
                location:
                  "80 Bloor Street West, Suite 401 Toronto Ontario M5S 2V1, Canada",
                tel: "1 416 921 5400",
                fax: "1 416 921 7545",
                email: "toronto@thaitrade.ca",
              },
              {
                city: "VANCOUVER",
                location: "1009-1166 Alberni Street Vancouver, BC. V6E 3Z3",
                tel: "1 604 687 6400",
                fax: "1 604 683 6775",
                email: "ttcvan@telus.net",
              },
            ],
            group3: [
              {
                city: "MEXICO",
                location:
                  "Gauss 9, No. 102-B, 1st Floor Col. Anzures, Miguel Hidalgo Mexico, D.F. 11590",
                tel: "001 5255 5557 5418",
                fax: "001 5255 5580 4214",
                email: "thaitcmexico@gmail.com",
              },
            ],
          },
        },

        {
          event_id: 2,
          event_name: "The Marche’ by STYLE Bangkok Online Business Matching",
          date: "August 23 - 25, 2021 ",
          time: "Thailand, UTC+07:00",
          location: "Bangkok, Thailand",
          view: 200000,
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

          about_event:
            "As a subsitutional project for the rescheduled STYLE Bangkok - an international lifestyle and fashion trade fair, this brainchild of the Department of International Trade Promotion (DITP), Thailand's Ministry of Commerce aimed at supporting Thai manufacturers and exporters of lifestyle and fashion products to meet and strengthen trade bonds with business partners worldwide during the outbreak. <strong>The Marche’ by STYLE Bangkok</strong> encompasses an online and offline activity providing global and local buyers and ample opportunity to source for quality products from more than 120 Thai selected exporters. ",

          description_left:
            '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthaitradeusa%2Fvideos%2F343419027397940%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',

          description_right:
            "Featuring 6 categories with over 50 sub-categories of lifestyle and fashion products; Fashion & Leather, Gifts & Premium, Houseware, Furniture, Wellness, Home Decor.",

          thumbnail: require("@/assets/images/events/thumbnail/Marche_by_STYLE_Online_Busi_Matching_302.jpeg"),
          cover_image: require("@/assets/images/events/cover/Marche_by_STYLE_Online_Busi_Matching_467.jpeg"),
          banner_detail: require("@/assets/images/events/banner-detail/Marche_by_STYLE_Online_Busi_Matching1280.jpeg"),

          meet_trade_partners: [
            {
              partner_name: "YJ APPAREL LTD., PART.",
              sub_category: "Apparel & Accessory",
              thumbnail: require("../../../assets/images/events/partners/YJ APPAREL LTD., PART.jpg"),
            },
            {
              partner_name: "THAI TOGETHER CO., LTD.",
              sub_category: "Gifts, Decorative, Handicrafts",
              thumbnail: require("../../../assets/images/events/partners/THAI TOGETHER CO., LTD..jpg"),
            },
            {
              partner_name: "THAI SOOJUNG GLASS CO., LTD.",
              sub_category: "Household Products",
              thumbnail: require("../../../assets/images/events/partners/THAI SOOJUNG GLASS CO., LTD..jpg"),
            },
            {
              partner_name: "TRUE SUCCESS MEDICAL SUPPLY CO., LTD.",
              sub_category: "Household Products",
              thumbnail: require("../../../assets/images/events/partners/TRUE SUCCESS MEDICAL SUPPLY CO., LTD..png"),
            },
            {
              partner_name: "YARNNAKARN CO., LTD.",
              sub_category: "Gifts, Decorative, Handicrafts",
              thumbnail: require("../../../assets/images/events/partners/YARNNAKARN.jpeg"),
            },
            {
              partner_name: "UP2HERB CO., LTD.",
              sub_category: "Beauty & Personal Care",
              thumbnail: require("../../../assets/images/events/partners/UP2HERB CO., LTD..jpg"),
            },
          ],
          related_news: [
            {
              title:
                "A glimpse of something BIG coming your way - The Marché by Style Bangkok Fair",
              author: "Thai Trade Center Los Angeles",
              company: "Thai Trade Center, Los Angeles",
              date: "August 2, 2021",
              thumbnail:
                "https://www.thaitradeusa.com/home/wp-content/uploads/2021/08/Marche%E2%80%99-by-STYLE-Bangkok_650.jpg",
              link: "https://www.thaitradeusa.com/home/?p=19361",
            },
          ],
          related_events: [
            {
              event_id: 1,
              event_name: "The Marche’ by STYLE Bangkok Virtual Trade Fair",
              date: "August 19 - 25, 2021 ",
              time: "Thailand, UTC+07:00",
              location: "Bangkok, Thailand",
            },
            {
              event_id: 3,
              event_name: "The Marche’ by STYLE Bangkok (Lifestyle Fair)",
              date: "October - December 2021 ",
              time: "Thailand, UTC+07:00",
              location: "Bangkok, Thailand",
            },
          ],
          contacts: {
            group1: [
              {
                city: "New York",
                location: "1359 Broadway, Suite 1530 New York, NY 10018",
                tel: "212 482 0077",
                fax: "212 482 1177",
                email: "info@thaitradeny.com",
              },
              {
                city: "LOS ANGELES",
                location:
                  "611 N. Larchmont Blvd 3rd Floor Los Angeles, CA 90004",
                tel: "323 466 9645",
                fax: "323 466 1559",
                email: "ttclausa@att.net,ttcla@live.com",
              },
              {
                city: "CHICAGO",
                location: "700 N. Rush Street, 2nd Floor Chicago, IL 60611",
                tel: "312 787 3388",
                fax: "312 787 9733",
                email: "ttcc@thaitradechicago.com",
              },
              {
                city: "MIAMI",
                location: "6100 Blue Lagoon Drive Suite 100 Miami, FL 33126",
                tel: "786 388 7888",
                fax: "786 388 7999",
                email: "ttcmiami@earthlink.net",
              },
            ],
            group2: [
              {
                city: "TORONTO",
                location:
                  "80 Bloor Street West, Suite 401 Toronto Ontario M5S 2V1, Canada",
                tel: "1 416 921 5400",
                fax: "1 416 921 7545",
                email: "toronto@thaitrade.ca",
              },
              {
                city: "VANCOUVER",
                location: "1009-1166 Alberni Street Vancouver, BC. V6E 3Z3",
                tel: "1 604 687 6400",
                fax: "1 604 683 6775",
                email: "ttcvan@telus.net",
              },
            ],
            group3: [
              {
                city: "MEXICO",
                location:
                  "Gauss 9, No. 102-B, 1st Floor Col. Anzures, Miguel Hidalgo Mexico, D.F. 11590",
                tel: "001 5255 5557 5418",
                fax: "001 5255 5580 4214",
                email: "thaitcmexico@gmail.com",
              },
            ],
          },
        },

        {
          event_id: 3,
          event_name: "The Marche’ by STYLE Bangkok (Lifestyle Fair)",
          date: "October - December 2021 ",
          time: "Thailand, UTC+07:00",
          location: "Bangkok, Thailand",
          view: 20000,
          event_type_id: 2,
          event_type_name: "Thailand",

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

          about_event:
            "<h1><strong>About STYLE Bangkok </strong></h1> <br/> STYLE Bangkok is an international trade fair that offers all sorts of lifestyle products. Gathering the latest products that shape tomorrow's trends from gifts, home decor, furniture to fashion and more.",

          description_left:
            '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthaitradeusa%2Fvideos%2F343419027397940%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',

          description_right:
            "For more information about Thai lifestyle and fashion products, please contact Thai Trade Center near you or visit www.stylebangkokfair.com and www.stayinstylebangkok.com",

          cover_image: require("@/assets/images/events/cover/Marche_by_STYLE_Physical_467.jpeg"),
          banner_detail: require("@/assets/images/events/banner-detail/Marche by STYLE_Physical_1280.jpeg"),

          meet_trade_partners: [
            // {
            //   partner_name: "YJ APPAREL LTD., PART.",
            //   sub_category: "Apparel & Accessory",
            //   thumbnail: require("../../../assets/images/events/partners/YJ APPAREL LTD., PART.jpg"),
            // },
            // {
            //   partner_name: "THAI TOGETHER CO., LTD.",
            //   sub_category: "Gifts, Decorative, Handicrafts",
            //   thumbnail: require("../../../assets/images/events/partners/THAI TOGETHER CO., LTD..jpg"),
            // },
            // {
            //   partner_name: "THAI SOOJUNG GLASS CO., LTD.",
            //   sub_category: "Household Products",
            //   thumbnail: require("../../../assets/images/events/partners/THAI SOOJUNG GLASS CO., LTD..jpg"),
            // },
            // {
            //   partner_name: "TRUE SUCCESS MEDICAL SUPPLY CO., LTD.",
            //   sub_category: "Household Products",
            //   thumbnail: require("../../../assets/images/events/partners/TRUE SUCCESS MEDICAL SUPPLY CO., LTD..png"),
            // },
            // {
            //   partner_name: "YARNNAKARN CO., LTD.",
            //   sub_category: "Gifts, Decorative, Handicrafts",
            //   thumbnail: require("../../../assets/images/events/partners/YARNNAKARN.jpeg"),
            // },
            // {
            //   partner_name: "UP2HERB CO., LTD.",
            //   sub_category: "Beauty & Personal Care",
            //   thumbnail: require("../../../assets/images/events/partners/UP2HERB CO., LTD..jpg"),
            // },
          ],
          related_news: [
            {
              title:
                "A glimpse of something BIG coming your way - The Marché by Style Bangkok Fair",
              author: "Thai Trade Center Los Angeles",
              company: "Thai Trade Center, Los Angeles",
              date: "August 2, 2021",
              thumbnail:
                "https://www.thaitradeusa.com/home/wp-content/uploads/2021/08/Marche%E2%80%99-by-STYLE-Bangkok_650.jpg",
              link: "https://www.thaitradeusa.com/home/?p=19361",
            },
          ],
          related_events: [
            {
              event_id: 1,
              event_name: "The Marche’ by STYLE Bangkok Virtual Trade Fair",
              date: "August 19 - 25, 2021 ",
              time: "Thailand, UTC+07:00",
              location: "Bangkok, Thailand",
            },
            {
              event_id: 2,
              event_name:
                "The Marche’ by STYLE Bangkok Online Business Matching",
              date: "August 23 - 25, 2021 ",
              time: "Thailand, UTC+07:00",
              location: "Bangkok, Thailand",
            },
          ],
          contacts: {
            group1: [
              {
                city: "New York",
                location: "1359 Broadway, Suite 1530 New York, NY 10018",
                tel: "212 482 0077",
                fax: "212 482 1177",
                email: "info@thaitradeny.com",
              },
              {
                city: "LOS ANGELES",
                location:
                  "611 N. Larchmont Blvd 3rd Floor Los Angeles, CA 90004",
                tel: "323 466 9645",
                fax: "323 466 1559",
                email: "ttclausa@att.net,ttcla@live.com",
              },
              {
                city: "CHICAGO",
                location: "700 N. Rush Street, 2nd Floor Chicago, IL 60611",
                tel: "312 787 3388",
                fax: "312 787 9733",
                email: "ttcc@thaitradechicago.com",
              },
              {
                city: "MIAMI",
                location: "6100 Blue Lagoon Drive Suite 100 Miami, FL 33126",
                tel: "786 388 7888",
                fax: "786 388 7999",
                email: "ttcmiami@earthlink.net",
              },
            ],
            group2: [
              {
                city: "TORONTO",
                location:
                  "80 Bloor Street West, Suite 401 Toronto Ontario M5S 2V1, Canada",
                tel: "1 416 921 5400",
                fax: "1 416 921 7545",
                email: "toronto@thaitrade.ca",
              },
              {
                city: "VANCOUVER",
                location: "1009-1166 Alberni Street Vancouver, BC. V6E 3Z3",
                tel: "1 604 687 6400",
                fax: "1 604 683 6775",
                email: "ttcvan@telus.net",
              },
            ],
            group3: [
              {
                city: "MEXICO",
                location:
                  "Gauss 9, No. 102-B, 1st Floor Col. Anzures, Miguel Hidalgo Mexico, D.F. 11590",
                tel: "001 5255 5557 5418",
                fax: "001 5255 5580 4214",
                email: "thaitcmexico@gmail.com",
              },
            ],
          },
        },

        {
          event_id: 4,
          event_name:
            "The Marche’ by STYLE Bangkok Virtual Trade Fair and Online Business Matching",
          date: "August 19 - 25, 2021",
          time: "Thailand, UTC+07:00",
          location: "Bangkok, Thailand",
          view: 200000,
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

          cover_image: require("@/assets/images/events/cover/Marche_by_STYLE_Virtual_467.jpeg"),
          banner_detail: require("@/assets/images/events/banner-detail/Marche by STYLE_1280x358.jpeg"),

          about_event:
            "<h1><strong>STYLE Bangkok</strong></h1> <br /> As a subsitutional project for the rescheduled STYLE Bangkok - an international lifestyle and fashion trade fair, this brainchild of the Department of International Trade Promotion (DITP), Thailand's Ministry of Commerce aimed at supporting Thai manufacturers and exporters of lifestyle and fashion products to meet and strengthen trade bonds with business partners worldwide during the outbreak. The Marche’ by STYLE Bangkok encompasses an online and offline activity providing global and local buyers and ample opportunity to source for quality products from more than 120 Thai selected exporters in six categories; Fashion & Leather, Gifts & Premium, Houseware, Furniture, Wellness, Home Decor. 		",

          description_left:
            '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthaitradeusa%2Fvideos%2F343419027397940%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',

          description_right:
            "From August 23 through August 25th 2021, the DITP is offering The Marché by STYLE Bangkok' Online Business Matching (a FREE Service), providing global buyers an ample opportunity to source for quality Thai products, and seamlessly conduct business without traveling. To view a list of exhibitors, click HERE (hyperlink: https://www.thaitradeusa.com/home/wp-content/uploads/2021/08/E-Directory-The-Marche-by-STYLE-Bangkok_Aug-2021.pdf). The registration deadline is Thursday, August 12, 2021.		",

          meet_trade_partners: [
            {
              partner_name: "BY BOON COMPANION CO., LTD.",
              sub_category: "Apparel & Accessory",
              thumbnail: require("../../../assets/images/events/partners/BY BOON COMPANION CO., LTD..jpg"),
            },
            {
              partner_name: "CHAANG OCARINA & CERAMIC",
              sub_category: "Gifts, Decorative, Handicrafts",
              thumbnail: require("../../../assets/images/events/partners/CHAANG OCARINA & CERAMIC.jpeg"),
            },
            {
              partner_name: "BATHROOM DESIGN I-SPA CO., LTD.",
              sub_category: "Household Products",
              thumbnail: require("../../../assets/images/events/partners/BATHROOM DESIGN I-SPA CO., LTD..jpg"),
            },
            {
              partner_name: "ABLE INTERIOR WORKSHOP CO., LTD.",
              sub_category: "Furniture",
              thumbnail: require("../../../assets/images/events/partners/ABLE INTERIOR WORKSHOP CO., LTD..jpg"),
            },
            {
              partner_name: "FLOW",
              sub_category: "Gems & Jewelry",
              thumbnail: require("../../../assets/images/events/partners/FLOW.jpeg"),
            },
            {
              partner_name: "NATURE LIFE HERB",
              sub_category: "Beauty & Personal Care",
              thumbnail: require("../../../assets/images/events/partners/NATURE LIFE HERB.jpeg"),
            },
          ],
          related_news: [
            {
              title:
                "A glimpse of something BIG coming your way - The Marché by Style Bangkok Fair",
              author: "Thai Trade Center Los Angeles",
              company: "Thai Trade Center, Los Angeles",
              date: "August 2, 2021",
              thumbnail:
                "https://www.thaitradeusa.com/home/wp-content/uploads/2021/08/Marche%E2%80%99-by-STYLE-Bangkok_650.jpg",
              link: "https://www.thaitradeusa.com/home/?p=19361",
            },
          ],

          related_events: [
            {
              event_id: 2,
              event_name:
                "The Marche’ by STYLE Bangkok Online Business Matching",
              date: "August 23-25, 2021 : Online",
              time: "",
              location: "",
            },
            {
              event_id: 3,
              event_name:
                "The Marche’ by STYLE Bangkok (Lifestyle Fair - Physical)",
              date:
                "Oct - Dec 2021 (the schedule is subject to change in response to the Covid-19 situation)",
              time: "",
              location: "",
            },
          ],
          contacts: {
            group1: [
              {
                city: "New York",
                location: "1359 Broadway, Suite 1530 New York, NY 10018",
                tel: "212 482 0077",
                fax: "212 482 1177",
                email: "info@thaitradeny.com",
              },
              {
                city: "LOS ANGELES",
                location:
                  "611 N. Larchmont Blvd 3rd Floor Los Angeles, CA 90004",
                tel: "323 466 9645",
                fax: "323 466 1559",
                email: "ttclausa@att.net,ttcla@live.com",
              },
              {
                city: "CHICAGO",
                location: "700 N. Rush Street, 2nd Floor Chicago, IL 60611",
                tel: "312 787 3388",
                fax: "312 787 9733",
                email: "ttcc@thaitradechicago.com",
              },
              {
                city: "MIAMI",
                location: "6100 Blue Lagoon Drive Suite 100 Miami, FL 33126",
                tel: "786 388 7888",
                fax: "786 388 7999",
                email: "ttcmiami@earthlink.net",
              },
            ],
            group2: [
              {
                city: "TORONTO",
                location:
                  "80 Bloor Street West, Suite 401 Toronto Ontario M5S 2V1, Canada",
                tel: "1 416 921 5400",
                fax: "1 416 921 7545",
                email: "toronto@thaitrade.ca",
              },
              {
                city: "VANCOUVER",
                location: "1009-1166 Alberni Street Vancouver, BC. V6E 3Z3",
                tel: "1 604 687 6400",
                fax: "1 604 683 6775",
                email: "ttcvan@telus.net",
              },
            ],
            group3: [
              {
                city: "MEXICO",
                location:
                  "Gauss 9, No. 102-B, 1st Floor Col. Anzures, Miguel Hidalgo Mexico, D.F. 11590",
                tel: "001 5255 5557 5418",
                fax: "001 5255 5580 4214",
                email: "thaitcmexico@gmail.com",
              },
            ],
          },
        },
      ],
    };
  },
  created() {
    this.event = this.events.find(
      (event) => event.event_id === +this.$route.params.id
    );
    window.scrollTo(0, 0);
  },

  methods: {
    handleChange(val) {
      this.currentIndex = val;
      this.isActiveCarousel = val;
    },
    changeNews(val) {
      this.newsSlide = val;
      this.isActiveCarouselNews = val;
    },
    changeEvent(val) {
      this.eventSlide = val;
      this.isActiveCarouselEvent = val;
    },
    checkLength(length) {
      return length > 0
        ? (length % 6 == 0 ? 0 : 1) + Math.floor(length / 6)
        : 1;
    },
    openNews(link) {
      window.open(link.link, "_blank");
    },
    onClick(id) {
      this.$router.push(`/events/${id}`);
      window.location.reload();
      window.scrollTo(0, 0);
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.comments.push({
          name: this.form.name,
          email: this.form.email,
          website: this.form.website,
          date: new Date(),
          comment: this.form.comment,
        });
        this.$swal.fire({
          title: "Post Comment Successfully",
          confirmButtonColor: "#0066B3",
        });
      }
      console.log(this.$refs.form.validate());
    },
  },
};
</script>

<style lang="scss">
.con-title-detail {
  .title-detail {
    font-family: "ChulabhornLikitDisplay";
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 100%;
    // padding-bottom: 12%;
  }

  .title-detail-mobile {
    font-family: "ChulabhornLikitDisplay";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    // padding-bottom: 10rem;
  }
}
.comment-list {
  max-height: 250px;
  overflow-y: scroll;
}

.comment-list::-webkit-scrollbar {
  width: 4px;
}
.comment-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.comment-list::-webkit-scrollbar-thumb {
  background-color: #938e94;
  outline: 4px solid #938e94;
}
.partner {
  .v-window__prev,
  .v-window__next {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    position: absolute;
    margin: 0 5rem;
    top: 45% !important;
    z-index: 1;
  }
}
.active-carousel {
  background-color: #a40802;
  color: #fff;
}
.title-news {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-news-mobile {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
a.link-news {
  text-decoration: none;
  color: #ffffff !important;
}
a {
  text-decoration: none;
}
.releted-1 {
  font-family: "ChulabhornLikitDisplay";
  font-size: 26px;
  line-height: 10px;
  font-weight: bold;
}
.releted-2 {
  font-family: "ChulabhornLikitDisplay";
  font-size: 36px;
  font-weight: bold;
  color: #fff;
}
.releted-event-1 {
  font-family: "ChulabhornLikitDisplay";
  font-size: 26px;
  line-height: 10px;
  font-weight: bold;
  color: #555e7d;
}
.releted-event-2 {
  font-family: "ChulabhornLikitDisplay";
  font-size: 36px;
  font-weight: bold;
  color: #000;
}
.line-dot {
  border: 1px dashed #e2e2e2;
}
.contact-title {
  font-family: "ChulabhornLikitDisplay";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
}
form .v-text-field--outlined,
.v-text-field--solo {
  border-radius: 0px;
}

.comments {
  font-family: "ChulabhornLikitDisplay";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
}

.register-bar {
  font-family: "ChulabhornLikitDisplay";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 85.39%;
}
.navbar-footer {
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #ffffff;
  opacity: 0.8;
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .detail-event {
    img {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    iframe {
      width: 100%;
      display: block;
      min-height: 100px;
      // height: 100px;
      justify-content: center;
    }
  }
}
@media only screen and (max-width: 768px) {
  .detail-event {
    img {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    iframe {
      width: 100%;
      height: 450px;
      display: flex;
      justify-content: center;
    }
  }
}
@media only screen and (max-width: 600px) {
  .contact-title {
    font-family: "ChulabhornLikitDisplay";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
  }
  .detail-event {
    img {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    iframe {
      width: 100%;
      display: flex;
      height: 220px;
      justify-content: center;
    }
  }
}
</style>
