<template>
  <main>
    <header>
      <img src="./../assets/pinia-logo.svg" alt="" />
      <h1>{{ name }}</h1>
    </header>

    <!-- filter task -->

    <div class="task-list">
      <nav>
        <ul>
          <li class="current">
            <a href="#" @click="filter = 'all'"
              ><span>All Items ( {{ totalCount }} ) </span></a
            >
          </li>
          <li class="">
            <a href="#" @click="filter = 'favs'"
              ><span>Favorite Items ( {{ favCount }} ) </span></a
            >
          </li>
        </ul>
      </nav>

      <div class="new-task-form">
        <TaskForm />
      </div>

      <!-- loading -->
      <Loading :isLoading="loading" />

      <!-- Tasks -->

      <div v-if="filter === 'all'">
        <TaskDetail :task="task" v-for="task in tasks" :key="task.id" />
      </div>

      <div v-if="filter === 'favs'">
        <TaskDetail :task="task" v-for="task in favs" :key="task.id" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from './../store/taskStore'
import TaskDetail from './TaskDetail.vue'
import TaskForm from './TaskForm.vue'
import Loading from './Loading.vue'
import { ref } from 'vue-demi'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
taskStore.loading = true
setTimeout(() => {
  taskStore.getTasks()
}, 500);
const filter = ref('all')

const { name, tasks, loading, favs, favCount, totalCount  } = storeToRefs(taskStore)

$(document).on('click', 'li', function() {
  $('.current').removeClass('current');
  $(this).addClass('current');
});
</script>

<style scoped>
body {
  background: #EBEFF0;
}
nav ul {
  background: #FFF;
  position: relative;
  display: flex;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
  list-style: none;
  flex-flow: row wrap;
  justify-content: center;
  border-bottom: 1px solid #e3e3e3;
}
nav li {
  position: relative;
  z-index: 1;
  display: block;
  margin: 0;
  text-align: center;
  flex: 1;
  padding: 16px;
}
nav li a {
  position: relative;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 2.5;
  padding: 1em 0;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  opacity: 0.5;
  color: #9EACB8;
  line-height: 1;
  -webkit-transition: all 0.3s, -webkit-transform 0.3s;
  transition: all 0.3s, transform 0.3s;
}
nav li a:hover {
  opacity: 1;
}
nav li.current a {
  opacity: 1;
  color: #ffd859;
}
/* The line */
nav li:last-child::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
  height: 4px;
  background: #ffd859;
  content: '';
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
/* Move the line */
nav li:first-child.current ~ li:last-child::before {
  -webkit-transform: translate3d(-112.5%, 0, 0);
  transform: translate3d(-112.5%, 0, 0);
}
nav li:last-child.current::before {
  -webkit-transform: translate3d(12.5%, 0, 0);
  transform: translate3d(12.5%, 0, 0);
}

</style>