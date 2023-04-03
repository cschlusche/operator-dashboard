import { defineStore } from "pinia";
import { computed } from 'vue';
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useInvestigationStore = defineStore('investigation', () => {
    
    const deviceID: Ref<string> = ref('UKM-A-0000-00')

    const getPhoneNumberFromDeviceID: Ref<string> = computed(() => {

        let rev = '';
        for(let i=0; rev.length < deviceID.value.length; i++){
            
            let current = deviceID.value.charAt( (deviceID.value.length-i) )
            rev += current
        }
        
        return rev
    });


    return { deviceID, getPhoneNumberFromDeviceID }
})