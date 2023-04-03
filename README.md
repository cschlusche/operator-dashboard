# operator-dashboard
A demo for playing around with Vue 3 and Pinia store; sending requests to a deno server.
Based on the template [Vue 3 in Vite](https://github.com/vuejs/create-vue).

- Klienten (`/components/ClientsManager.vue`)
  - Promise: asynchronously loads local data (`fetchClientData()`)
  - Promise: fetch data from server (`fetchClientDataFromServer()`)
- Neue Untersuchung (`/views/AnalyzeView.vue`)
  - Bindings to Pinia store (`/stores/investigation.ts`)
- Login (`/components/LoginForm.vue`)
  - Send `login` request to `operator-server`




## Compile and Hot-Reload for Development

```sh
npm run dev
```