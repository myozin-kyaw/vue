import { createRouter, createWebHistory } from "vue-router"
import Home from './../components/Home.vue'
import SimpleForm from './../components/Form/SimpleForm.vue'
import PiniaProject from './../components/Pinia.vue'
import TextInput from './../components/Form/TextInput.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/pinia-project',
        name: 'Pinia Project',
        component: PiniaProject
    },
    {
        path: '/simple-form',
        name: 'Simple Form',
        component: SimpleForm
    },
    {
        path: '/text-input',
        name: 'Text Input',
        component: TextInput
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router