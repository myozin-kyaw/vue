<template>
  <li>
    <a href="javascript:void(0);">
      <div class="movie-slick position-relative">
        <img :src="img" class="img-fluid" alt="" />
      </div>
    </a>
  </li>
</template>

<script setup>
defineProps(['img'])
</script>

<style>
</style>