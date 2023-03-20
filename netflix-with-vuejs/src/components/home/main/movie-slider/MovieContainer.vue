<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 overflow-hidden">
        <div
          class="iq-main-header d-flex align-items-center justify-content-between"
        >
          <h4 class="main-title">{{ containerTitle }}</h4>
          <a href="#" class="iq-view-all">View All</a>
        </div>
        <div class="favorite-contens">
          <ul class="favorites-slider list-inline row p-0 mb-0">
            <MovieCard v-for="movie in type" :key="movie.id"
                :movie="movie"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MovieCard from '@/components/home/main/movie-slider/MovieCard.vue'

defineProps(['containerTitle', 'type'])
</script>

<style></style>
