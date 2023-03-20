<script setup>
import TrendingTitle from "@/components/home/main/trending/TrendingTitle.vue"
import TrendingItem from '@/components/home/main/trending/TrendingItem.vue'
import TrendingNavBar from '@/components/home/main/trending/TrendingNavBar.vue'
import { ref } from "@vue/reactivity";

defineProps([
  'trending', 
  'tranding_overview', 
  'tranding_episodes', 
  'tranding_trailers', 
  'tranding_similiar_like_this'
])
</script>

<template>
  <li>  
    <div
      class="tranding-block position-relative"
      :style="{ 'background-image': 'url(' + trending.mainImg + ')' }"
    >
      <div class="trending-custom-tab">
        <div class="tab-title-info position-relative">
          <ul
            class="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
            role="tablist"
          >
            <TrendingNavBar :trendingNavData="trending.tranding_overview" />
            <TrendingNavBar :trendingNavData="trending.tranding_episodes" />
            <TrendingNavBar :trendingNavData="trending.tranding_trailers" />
            <TrendingNavBar :trendingNavData="trending.tranding_similiar_like_this" />
          </ul>
        </div>
        <div class="trending-content">
          <div
            :id="trending.tranding_overview.id"
            class="overview-tab tab-pane fade active show"
          >
            <div
              class="trending-info align-items-center w-100 animated fadeInUp"
            >
              <!-- main title -->
              <TrendingTitle :mainTitle="trending.mainTitle" />

              <div class="d-flex align-items-center text-white text-detail">
                <span class="badge badge-secondary p-3">{{ trending.mainRating }}</span>
                <span class="ml-3">{{ trending.currentSeason }}</span>
                <span class="trending-year">{{ trending.latestYear }}</span>
              </div>
              <div class="d-flex align-items-center series mb-4">
                <a href="javascript:void(0);">
                  <img
                    src="@/assets/images/trending/trending-label.png"
                    class="img-fluid"
                    alt=""
                  />
                </a>
                <span class="text-gold ml-3"
                  ># {{ trending.seasonNumber }} in Series Today</span
                >
              </div>
              <p class="trending-dec">{{ trending.mainDesc }}</p>
              <div class="p-btns">
                <div class="d-flex align-items-center p-0">
                  <a href="#" class="btn btn-hover mr-2" tabindex="0">
                    <i class="fa fa-play mr-2"></i>
                    Play Now
                  </a>
                  <a href="#" class="btn btn-link" tabindex="0">
                    <i class="fa fa-plus pr-2"></i>
                    My List
                  </a>
                </div>
              </div>
              <div class="trending-list mt-4">
                <div class="text-primary title">
                  Starring : <span class="text-body"> {{ trending.starring }}</span>
                </div>
                <div class="text-primary title">
                  Genres :
                  <span class="text-body"> {{ trending.generes }} </span>
                </div>
                <div class="text-primary title">
                  Creators :
                  <span class="text-body"> {{ trending.creator }} </span>
                </div>
              </div>
            </div>
          </div>

          <div :id="trending.tranding_episodes.id" class="overlay-tab tab-pane fade" style="height: 750px">
            <div
              class="trending-info align-items-center w-100 animated fadeInUp"
            >
              <!-- main title -->
              <TrendingTitle :mainTitle="trending.mainTitle" />

              <div
                class="d-flex align-items-center text-white text-detail mb-4"
              >
                <span class="season_date"> 2 Seasons </span>
                <span class="trending-year">Feb 2019</span>
              </div>
              <div class="iq-custom-select d-inline-block sea-epi">
                <select name="Seasons" class="form-control season-select">
                  <option value="Season1">Season 1</option>
                  <option value="Season2">Season 2</option>
                  <option value="Season3">Season 3</option>
                  <option value="Season4">Season 4</option>
                  <option value="Season4">Season 4</option>
                  <option value="Season6">Season 6</option>
                </select>
              </div>

              <div class="episodes-contens mt-4">
                <div
                  class="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0"
                >
                    <!-- episodes -->
                    <div class="e-item" v-for="episode in trending.episodes" :key="episode.id">
                        <TrendingItem :item="episode"/>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div :id="trending.tranding_trailers.id" class="overlay-tab tab-pane fade">
            <div
              class="trending-info align-items-center w-100 animated fadeInUp"
            >
              <!-- main title -->
              <TrendingTitle :mainTitle="trending.mainTitle" />

              <div class="episodes-contens mt-4">
                <div
                  class="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0"
                >
                    <!-- Trailers -->
                    <div class="e-item" v-for="trailer in trending.trailers" :key="trailer.id">
                        <TrendingItem :item="trailer"/>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div :id="trending.tranding_similiar_like_this.id" class="overlay-tab tab-pane fade">
            <div
              class="trending-info align-items-center w-100 animated fadeInUp"
            >
              <!-- main title -->
              <TrendingTitle :mainTitle="trending.mainTitle" />

              <div class="episodes-contens mt-4">
                <div
                  class="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0"
                >
                    <!-- Other Trailers -->
                    <div class="e-item" v-for="trailer in trending.otherTrailers" :key="trailer.id">
                        <TrendingItem :item="trailer"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style></style>
