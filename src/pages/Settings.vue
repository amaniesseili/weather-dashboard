<script>
export default {
  
};
</script>
<template>
  <div>
      <div class="weather-dashboard">
        <div class="overlay"></div>
        <div class="background-image"></div>
      </div>

    <div class="settings d-flex flex-column ">
      <h1 class="text-center">Settings Page</h1>
      <p class=" text-center">Customize your weather dashboard settings.</p>


      <!-- Link per tornare alla pagina Dashboard -->
      <router-link to="/dashboard" class="btn ">Back to Dashboard</router-link>
    </div>


  </div>
</template>
<style lang="scss" scoped>
  

.background-image {
  height: 66vh;
  background-image: url(/lodi-2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); 
  height: 66vh;
  margin-top: 3.5rem;
  z-index: 1; 
}

settings {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;
}
.btn {
  margin-top: 20px;
  background-color:cadetblue;;
}





</style>