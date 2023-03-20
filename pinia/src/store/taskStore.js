import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        name: 'Hi Pinia',
        tasks: [],
        loading: false
    }),
    getters: {
        favs() {
            return this.tasks.filter(t =>t.isFav)
        }, 

        favCount() {
            return this.tasks.filter(t =>t.isFav).length
        },

        totalCount() {
            return this.tasks.length
        }
    },
    actions: {
        async getTasks() {
            const res = await fetch("http://localhost:3000/tasks")
            // console.log(res.json())
            this.tasks = await res.json()
            this.loading = false
            
        },
        async addNewTask(task) {
            this.tasks.push(task)
            const res = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                body: JSON.stringify(task),
                headers: {
                    "Content-type": "application/json"
                }
            })

            if (res.error) {
                alert(res.error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id != id
            })

            const res = await fetch("http://localhost:3000/tasks/" + id, {
                method: "DELETE",
            })

            if (res.error) {
                alert(res.error)
            }
        },
        async toogleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !  task.isFav

            const res = await fetch("http://localhost:3000/tasks/" + id, {
                method: "PATCH",
                body: JSON.stringify({isFav: task.isFav}),
                headers: {
                    "Content-type": "application/json"
                }
            })

            if (res.error) {
                alert(res.error)
            }
        }
    }
})