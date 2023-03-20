<template>
  <main>
    <ul>
      <li>
        <router-link :to="{ name: 'Pinia Project' }">Pinia Project</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Simple Form' }">Form Elements</router-link>
      </li>
    </ul>
  </main>
</template>

<script setup>
</script>


<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  list-style: none;
  padding: 12px;
}
ul li {
  text-align: center;
  font-family: Helvetica, sans-serif;
  font-size: 1.125em;
  background-color: #ffd859;
  padding: 12px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.038em;
}
</style>