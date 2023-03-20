<template>
    <div v-if="isLoading" class="main spinner-box">
        <div class="circle-border">
            <div class="circle-core"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
  isLoading: Boolean,
  default: false,
});
</script>

<style scoped>
/* KEYFRAMES */

@keyframes spin {
    from {
        transform: rotate(0);
    }
    to{
        transform: rotate(359deg);
    }
}

@keyframes configure-clockwise {
    0% {
        transform: rotate(0);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.main {
    min-height: 50vh;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
}

.spinner-box {
    /* width: 300px; */
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: transparent; */
}

.circle-border {
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; /* 220, 38, 38 */
    background: #ffd859;
    background: linear-gradient(0deg, rgba(30, 41, 59,0.1) 33%, #ffd859 100%);
    animation: spin .8s linear 0s infinite;
}

.circle-core {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
}
</style>
