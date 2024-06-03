<script >
import axios from 'axios';
import { store } from '../components/data/store';
import ProjectCard from '../components/partials/ProjectCard.vue'


export default{
  components:{
    ProjectCard
   

  },
  data(){
    return{
      'projects':[]
    }
  },
 
}

</script>

<template>
  <h1 class="text-center">Progetti</h1>
  <div class="container d-flex">
    <div class="row d-flex justify-content-center">
      <ProjectCard />
      
    </div>
    
     
  </div>
 
  
  
</template>

<style lang="scss" scoped>

</style>
