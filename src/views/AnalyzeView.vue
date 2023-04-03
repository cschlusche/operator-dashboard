<script setup lang="ts">
import { useInvestigationStore } from '@/stores/investigation';
import { storeToRefs } from 'pinia';

const store = useInvestigationStore()
const { deviceID, getPhoneNumberFromDeviceID } = storeToRefs( store )
</script>

<template>
  <main><h1>AnalyzeView</h1></main>
  <label for="deviceID">
  <input type="text" id="deviceID" name="deviceID" v-model="store.deviceID" /></label>
  <ul>
    <li>Gerät: {{store.deviceID}}</li>
    <li>Anschluss: {{ store.getPhoneNumberFromDeviceID }}</li>
  </ul>

</template>