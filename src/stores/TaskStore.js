import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFave: false},
            {id: 2, title: "play Gloomhaven", isFave: true},
        ]    
    })
})