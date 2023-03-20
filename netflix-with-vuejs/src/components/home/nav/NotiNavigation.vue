<template>
  <a href="#" class="iq-sub-card">
    <div class="media align-items-center">
      <img
        :src="url"
        alt=""
        class="img-fluid mr-3"
      />
      <div class="media-body">
        <h6 class="mb-0">{{ title }}</h6>
        <small class="font-size-12">{{ time }}</small>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps(['url', 'title', 'time'])
</script>