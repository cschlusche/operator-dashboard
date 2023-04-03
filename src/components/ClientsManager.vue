<script setup lang="ts">
import { ref,  onMounted } from 'vue'
import type { Ref } from 'vue'
//import { defineComponent } from "vue";
import type { Client } from '../types' 
import ClientsGridView from './ClientsGridView.vue'
import axios, {AxiosError} from 'axios'


/*
* Data
*/
const registeredClients: Ref<Array<Client>> = ref([{
  id: 999,
  firstname: "Christian",
  lastname: "Schlusche",
  lastUpdate: 1674734171,
  lastStatus: false
}])

/*
* Methods
*/
function fetchClientData(): Promise<Array<Client>> {
  
  return new Promise( (resolve) => {
    
    /* RECEIVE DATA */
    //throw new Error("No network connection.")
    
    let d = [
    {
      id: 101,
      firstname: "Arthur",
      lastname: "Dent",
      lastUpdate: 1674734171,
      lastStatus: false
    },
    {
      id: 102,
      firstname: "Ford",
      lastname: "Prefect",
      lastUpdate: 1674734171,
      lastStatus: true
    },
    {
      id: 103,
      firstname: "Zaphod",
      lastname: "Beeblebrox",
      lastUpdate: 1674734171,
      lastStatus: false
    }
    ]
    
    setTimeout(() => resolve(d), 2000)
    
    
  });
}

async function fetchClientDataFromServer(): Promise<Array<Client>>  {
  
  return new Promise<Array<Client>>((resolve) => {

  let clientData: Array<Client> = []
    
    axios({
      baseURL: 'http://127.0.0.1:8001/',
      url: "/read",
      method: "get",   
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8001/read",
      },
      timeout: 1500,
      
    }).then((response) => {
      
      clientData = response.data 
      return setTimeout(() => resolve(clientData), 4000)
      
    }).catch((e: AxiosError) => {
      
      console.error('TODO Error occured '+JSON.stringify(e, null, 2))
      
      clientData = []
      return resolve(clientData)
      
    })
    
  })
}
  
  
  /*
  * Lifecycle hooks
  */
  onMounted(() => {
    let task: Promise<Array<Client>> = fetchClientData();
      
      task.then((data:Array<Client>) => {
        
        registeredClients.value = registeredClients.value.concat( data )
        
      }).catch((error: Error) => {
        
        console.error(`Promise failed: ${error.message}`)
      });
      
      
      //
      let clientData: Promise<Array<Client>> = fetchClientDataFromServer();
      clientData.then((data:Array<Client>) => {
        registeredClients.value = registeredClients.value.concat( data )

      }).catch((error: Error) => {
        console.error(`Error response from fetchClientDataFromServer(): ${error.message}`)
      })
      
    });
  </script>
  
  <template>
    <h1>Clients</h1>
    <ClientsGridView :reg-clients="registeredClients" />
  </template>
  