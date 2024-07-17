<script >


export default{
 

 
}

</script>

<template>

<nav class="navbar navbar-expand-lg " style="background-color: #e3f2fd;">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'home'}">Progetti</router-link>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'tecnologie'}">Tecnologie</router-link>
        </li>
        
    
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'tipologie'}">Tipologie</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'contatti'}">Contatti</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  
</template>

<style lang="scss" scoped>

</style>
