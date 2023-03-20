<template>
  <a href="#" class="iq-sub-card setting-dropdown">
    <div class="media align-items-center">
      <div class="right-icon">
        <slot></slot>
      </div>
      <div class="media-body ml-3">
        <h6 class="mb-0">{{ title }}</h6>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
    title: String
})
</script>

<style></style>
