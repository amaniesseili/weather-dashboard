<script>
export default {
  //name: "NavBar"

}
</script>

<template>
  
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <!-- logo -->
        <a class="navbar-brand" href="#">Navbar</a>
        <!-- navBar toggler button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- NavBr -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Settings</a>
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