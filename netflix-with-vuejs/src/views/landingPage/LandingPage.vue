<template>
    <div v-if="loading">
      <Loading :isLoading="loading" />
    </div>
    <main v-else>
        <h1>
            Movie Landing Page
        </h1>
        <button @click="login" class="">Next</button>
    </main>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import Loading from '../../components/loading/Loading.vue'
import LandingPage from '@/views/landingPage/LandingPage.vue'
import helper from '@/helper/helper'
import { useRouter } from 'vue-router'

const loading = ref(true)
const token = ref(null)
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})

const login = () => {
  token.value = helper.getRandomToken(44)
  localStorage.setItem('token', token.value)
  router.push('/user-name')
}
</script>

<style scoped>
main {
  background-color: rgb(30, 41, 59);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
}

main h1 {
  font-size: 2.5rem;
}

main button {
  background-color: rgb(220, 38, 38);
  border: 1px solid rgb(220, 38, 38);
  padding: 10px 12px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

main button:hover {
  background-color: rgb(245, 14, 14);
}
</style>