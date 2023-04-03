<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
</script>

<template>
  <header>
    <div id="flex-header">
      <h1>Operator Dashboard</h1>
      <LoginForm />
    </div>
  </header>
  
  
  <div id="flex-container">
    <nav class="column-1">
      <ul>
        <li><RouterLink to="/">Dashboard</RouterLink></li>
        <li><RouterLink to="/clients">Klienten</RouterLink></li>
        <li><RouterLink to="/analyze">Neue Untersuchung</RouterLink></li>
      </ul>
    </nav>

    <div class="column-2"></div>

    <main class="column-3"><RouterView /></main>
  </div>
  
  
  <footer>Alpha Apr-2023</footer>
</template>

<style scoped>

</style>
