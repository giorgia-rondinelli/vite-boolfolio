
<script >
import axios from 'axios';
import { store } from '../data/store';

export default{
 
  data(){
    return{
      'projects':[]
      
    }
  },
  methods:{
    getApi(){

      axios.get(store.apiUrl)
            .then(results=>{
              this.projects=results.data
            })
            .catch(error=>{
              console.log(error.message)
            })
      
     
     
     


    }  

  
  },
  mounted(){
    
    this.getApi();
  }
}

</script>
<template>
  <div class="card m-1" style="width: 18rem;" v-for="project in projects" :key="project.id">
  <div class="card-body">
    <h5 class="card-title">{{ project.title  }}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary" v-if="project.status">pubblico</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary" v-else>privato</h6>

    <p class="card-text">{{ project.description  }}</p>
    <router-link class="card-link" :to="{name:'dettaglio', params:{slug:project.slug}}">Dettagli</router-link>
    
   
  </div>
</div>
</template>
<style lang="scss" scoped>

</style>
