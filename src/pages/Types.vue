<script >

import axios from 'axios';
import { store } from '../components/data/store';

export default{
  components:{
   

  },
  data(){
    return{
      'types':[]
      
    }
  },
  methods:{
    getApi(){

      axios.get(store.apiUrlType)
            .then(results=>{
              this.types=results.data
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
  <h1>Tipologie</h1>
  <ul> 

    <li v-for="type in types" :key="type.id">{{ type.name  }}</li>

</ul>
 
  
  
</template>

<style lang="scss" scoped>

</style>
