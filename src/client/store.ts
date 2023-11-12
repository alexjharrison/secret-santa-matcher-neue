import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

export const useStore = defineStore('store', () => {
    const selectedUser = ref('bob')
    const route = useRoute()

    return { selectedUser, route }
})
