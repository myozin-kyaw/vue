<template>
    <form @submit.prevent="handleSubmit">
        <input 
            type="text" 
            placeholder="Add new task ..." 
            v-model="newTask"
            @keyup.enter="handleSubmit"
        />
        <button type="submit">Submit</button>
        <button @click="taskStore.$reset">Reset State</button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/taskStore";

const newTask = ref('')
const taskStore = useTaskStore()

const handleSubmit = () => {
    if (newTask.value.length > 0) {
        const lastId = taskStore.tasks.length - 1;
        taskStore.addNewTask({
            id: taskStore.tasks[lastId].id + 1,
            title: newTask.value,
            isFav: false
        })
    }
    
    newTask.value = ''
}

</script>

<style></style>
