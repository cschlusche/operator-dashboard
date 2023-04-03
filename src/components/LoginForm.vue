<script setup lang="ts">
import { ref } from "vue";
import { useSessionStore } from '@/stores/session'
import axios, {AxiosError} from 'axios'

const store = useSessionStore();

const formUsername = ref('');
const formPassword = ref('');


async function submitCredentials(){
    const resEvalCredentials = await axios({
        baseURL: 'http://127.0.0.1:8001/',
        url: "/login",
        method: "post",
        headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:8001/login",
        },
        
        data: {
            'username': formUsername.value,
            'password': formPassword.value,
        },
        timeout: 1500,

    }).then(function(response){

      console.log(JSON.stringify(response, null, 2))
      store.username = response.data.username
    })
      .catch((e: AxiosError) => {
        console.error( JSON.stringify(e, null, 2) );
        return false;
      })
    
}
</script>

<template>

  <form v-if="store.username == ''" @submit.stop.prevent="submitCredentials">
    <input type="text" id="username" v-model="formUsername" />
    <input type="password" id="password" v-model="formPassword" />
    <input type="submit" id="submit" value="Login" />
  </form>
  <p v-else>Welcome {{ store.username }}!</p>


</template>