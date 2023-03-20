<template>
    <div class="simple-form">
        <h1>Simple Form</h1>
        <div>
            <label for="">Text Input</label>
            <input type="text" v-model="text">
        </div>
        <div>
            <label for="">Select box</label>
            <select v-model="selectBox">
                <option value="1">Value 1</option>
                <option value="2">Value 2</option>
                <option value="3">Value 3</option>
            </select>
        </div>
        <div>
            <label for="">Radio</label>
            <input type="radio" v-model="radio" value="A">A
            <input type="radio" v-model="radio" value="B">B
            <input type="radio" v-model="radio" value="C">C
        </div>
        <div>
            <label for="">Radio</label>
            <input type="checkbox" v-model="checkbox" value="A">A
            <input type="checkbox" v-model="checkbox" value="B">B
            <input type="checkbox" v-model="checkbox" value="C">C
        </div>

        <div class="json" v-if="json">
            text: {{ text }}
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue-demi";

const text = ref()
const selectBox = ref()
const radio = ref()
const checkbox = ref()
const json = ref({
    'text': text.value,
    'selectBox': selectBox.value,
    'radio': radio.value,
    'checkbox': checkbox.value
})
</script>

<style scoped> 
.json {
    padding: 1rem;
    background-color: #ccc;
}

h1 {
    margin: 1rem 0;
}

.simple-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}

label {
    margin: 0 10px 0 0;
}

input[type = text], select, input[type = radio] {
    width: 200px;
    padding: 10px;
    outline: none;
    border: 2px solid #f0d068;
    font-size: 1rem;
}

select {
    width: 225px;
}

input[type = radio], input[type = checkbox] {
    width: 50px;
}

input:focus, select:focus {
    border: 2px solid #f1bd14;
}
</style>