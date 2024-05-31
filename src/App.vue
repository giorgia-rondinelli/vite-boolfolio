<script >
import axios from 'axios';
import { store } from './components/data/store';
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
  <ul>lista progetti:</ul>
  <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
  
</template>

<style lang="scss" scoped>

</style>
