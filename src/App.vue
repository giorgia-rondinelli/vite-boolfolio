<script >
import Header from'./components/partials/Header.vue'

export default{
  components:{
    Header
    

  },
  data(){
    return{
      
    }
  },
 
}

</script>

<template>
  <Header />
  <div class="container">
    <div><router-view></router-view></div>
  </div>
  

  
</template>

<style lang="scss" scoped>

</style>
