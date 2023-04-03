import { ref } from "vue";
import { defineStore } from 'pinia';

export const useSessionStore = defineStore("session", () => {

    const username = ref('');

    return { username }
})