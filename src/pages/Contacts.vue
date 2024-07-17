<script >
import axios from 'axios';
import { store } from '../components/data/store';



export default{
  components:{
   

  },
  data(){
    return{
      name:'giorgia',
      email:'gio@gmail.com',
      message:'dfdfdf',
      sent:true
      
      
    }
  },
  methods:{
    sendEmail(){
      const data={
        name:this.name,
        email:this.email,
        message:this.message,
      
      };
      console.log(data);
      axios.post(store.apiUrlContacts,data)
      .then(res=>{
        console.log(res.data.success) 
        data =res.data.success

      })
    }
    
      
     
     
     


    
  
  },
  mounted(){
    
    
    
  }
 
}

</script>

<template>

  <div class="container ">
    <form action=""
    @submit.prevent= sendEmail>

      <div class="mb-3">
        <label class="form-label">Nome</label>
        <input v-model="name" name="nome" class="form-control"  >
      </div>

      <div class="mb-3">
        <label class="form-label">indirizzo Email</label>
        <input v-model="email" name="email"  type="email" class="form-control"  >
      </div>
      <div class="mb-3">
        <label  class="form-label">Messaggio</label>
        <input v-model="message" name="text" class="form-control" id="exampleFormControlTextarea1" rows="3">
      </div>
      <button  class="btn btn-primary" type="submit"> Invia</button>
    </form>
  </div>
  
</template>

<style lang="scss" scoped>

</style>
