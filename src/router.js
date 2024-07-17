import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Technologies from './pages/Technologies.vue'
import Types from './pages/Types.vue'
import ProjectDetail from './pages/ProjectDetail.vue'
import Contacts from './pages/Contacts.vue'


const router= createRouter({
  history:createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
    {
      path:('/'),
      name:'home',
      component:Home
    },
    {
      path:('/tecnologie'),
      name:'tecnologie',
      component:Technologies
    },
    {
      path:('/tipologie'),
      name:'tipologie',
      component:Types
    },
    {
      path:('/dettaglio-project/:slug'),
      name:'dettaglio',
      component:ProjectDetail
    },
    {
      path:('/contatti'),
      name:'contatti',
      component:Contacts
    }
 
  ]
})
export {router}