<script>
export default {
  name: "NavBar"

}
</script>

<template>
  
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">

        <!-- navBar toggler button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- NavBr -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link active">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings" class="nav-link">Settings</router-link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    

</template>

<style scoped>
.navbar-nav .nav-link {
  cursor: pointer
}
</style>