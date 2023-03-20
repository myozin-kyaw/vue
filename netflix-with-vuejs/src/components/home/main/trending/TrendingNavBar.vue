<template>
  <li class="nav-item">
    <a
      :href="'#' + trendingNavData.id"
      class="nav-link"
      :class="trendingNavData.extraClass"
      data-toggle="pill"
      role="tab"
      :aria-selected="trendingNavData.selected"
    >
        {{ trendingNavData.name }}
    </a>
  </li>
</template>

<script setup>
const data = defineProps(['trendingNavData'])
</script>

<style></style>
