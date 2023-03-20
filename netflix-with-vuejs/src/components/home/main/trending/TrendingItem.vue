<template>
    <div class="block-image position-relative">
        <a href="#">
        <img :src="item.episodeImg" class="img-fluid" alt="" />
        </a>
        <div class="episode-play-info">
        <div class="episode-play">
            <a href="#" tabindex="0">
            <i class="fa fa-play"></i>
            </a>
        </div>
        </div>
    </div>
    <div class="episodes-description text-body">
        <div class="d-flex align-items-center justify-content-between">
        <a href="#">{{ item.name }}</a> <!-- Episode 1 -->
        <span class="text-primary">{{ item.period }}</span>
        </div>
        <p class="mb-0">{{ item.desc }}</p>
    </div>
</template>

<script setup>
defineProps(['item'])
</script>

<style></style>
