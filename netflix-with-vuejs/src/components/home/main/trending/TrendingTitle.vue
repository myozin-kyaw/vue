<template>
    <a href="javascript:void(0);" tabindex="0">
        <div class="channel-logo">
        <img src="@/assets/images/logo.png" class="c-logo" alt="" />
        </div>
    </a>
    <h1 class="trending-text big-title text-uppercase">{{ mainTitle }}</h1>
</template>

<script setup>
defineProps(['mainTitle'])
</script>

<style>

</style>