<script >
import axios from 'axios';
import { store } from '../components/data/store';


export default{
  components:{
   

  },
  data(){
    return{
      'technologies':[]
      
    }
  },
  methods:{
    getApi(){

      axios.get(store.apiUrlTechnology)
            .then(results=>{
              this.technologies=results.data
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
  <h1>Tecnologie</h1>
  <ul> 

    <li v-for="technology in technologies" :key="technology.id">{{ technology.name  }}</li>
  
  </ul>
 
  
  
</template>

<style lang="scss" scoped>

</style>
