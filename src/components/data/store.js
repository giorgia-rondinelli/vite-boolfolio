import {reactive} from 'vue'
export const store= reactive({
  apiUrl:'http://127.0.0.1:8000/api/projects',
  apiUrlDetali:'http://127.0.0.1:8000/api/dettaglio-project/',
  apiUrlTechnology:'http://127.0.0.1:8000/api/technologies',
  apiUrlType:'http://127.0.0.1:8000/api/types',
  apiUrlContacts:'http://127.0.0.1:8000/api/send-mail',
 
})
