<script >
import axios from 'axios';
import { store } from '../components/data/store';



export default{
  components:{
   

  },
  data(){
    return{
      project:{}
      
      
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrlDetali+this.$route.params.slug)
      .then(res=>{
        this.project =res.data
      })
    },

    formattedDate(){
      const d = new Date(this.project.updated_at);

     

      return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();


    }

    

  
  },
  mounted(){
   this.getApi()
   
  }
 
}

</script>

<template>
  <div class="container" >

    <h1>Dettagli Progetto</h1>
  <h2>Titolo: {{ project.title }}</h2>
  <div class="d-flex justify-content-between ">
        <div class="d-flex">
          <p>Data di creazione: {{  formattedDate()  }}</p>

           <!-- @foreach($project->types as $type )
                    <p class=" ms-2 badge text-bg-secondary">{{$type->name}}</p>


            @endforeach -->

        </div>

      
        <p v-if="project.status" class="badge text-bg-primary ">Pubblico</p>
       
        <p v-else class="badge text-bg-primary ">Privato</p>
        

    </div>
  <div>Linguaggio: {{ project.languages }}</div>
  
  <div>Descrizione: {{ project.description }}</div>
  <img :src="project.image" alt="">
  
  </div>
  
  
 
  
  
</template>

<style lang="scss" scoped>

</style>
