<script setup lang="ts">
import { ref,  onMounted } from 'vue'
import type { Client } from '../types' 

const props = defineProps< {regClients: Array<Client>} >();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>first</th>
        <th>last</th>
        <th>updated</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in props.regClients" :key="client.id">
        <td>{{ client.id }}</td>
        <td>{{ client.firstname }}</td>
        <td>{{ client.lastname }}</td>
        <td>{{ client.lastUpdate }}</td>
        <td>{{ client.lastStatus }}</td>
      </tr>
    </tbody>
  </table>
</template>
