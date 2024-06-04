    
    <script>
    export default {
      data() {
        return {
          currentWeather: {
            //dayOfWeek: 'Monday',
            date: '06-06-2024',
            icon: 'fa-solid fa-sun',
            currentTemp: 15,
            
          },
          weeklyWeather: [
            { dayOfWeek: 'Monday', icon:'fa-solid fa-cloud', minTemp: 6, maxTemp: 16 },
            { dayOfWeek: 'Tuesday', icon: 'fa-solid fa-bolt', minTemp: 6, maxTemp: 16 },
            { dayOfWeek: 'Wednesday', icon: 'fa-solid fa-sun', minTemp: 6, maxTemp: 16 },
            { dayOfWeek: 'Thursday', icon: 'fa-solid fa-wind', minTemp: 6, maxTemp: 16 },
            { dayOfWeek: 'Friday', icon: 'fa-solid fa-cloud-bolt', minTemp: 6, maxTemp: 16 },
            { dayOfWeek: 'Saturday', icon: 'fa-solid fa-sun', minTemp: 6, maxTemp: 16 },
            { dayOfWeek: 'Sunday', icon: 'fa-solid fa-tornado', minTemp: 6, maxTemp: 16 },

          ]
        };
      }
    };
    </script>
<template>
  <div>
      <div class="weather-dashboard">
        <div class="overlay"></div>
        <div class="background-image">
        
          <div class="current-day"> 
            <h4 class="currentDateFont-size">{{ currentWeather.date }}</h4> 
            <i class="current-day-icon" :class="currentWeather.icon"></i> 
            <p class="currentWeatherFont-size">{{ currentWeather.currentTemp }}°C </p> 
          </div>
      </div>

      <div class="weekly-forecast">
        <div class="container-fluid ">
        <div class="row d-flex justify-content-between">
          <div v-for="day in weeklyWeather" :key="day.dayOfWeek" class="col-12 col-lg-4 col-xl-1 day">
            <h3>{{ day.dayOfWeek }}</h3>
            <i class="weekly-forecast-icon" :class="day.icon"></i> 
            <p>{{ day.minTemp }}°C - {{ day.maxTemp }}°C</p>
          </div>
        </div>
      </div>
      </div>

      </div>


  </div>
</template>
<style lang="scss" scoped>
  
.weather-dashboard {
  display: flex;
  flex-direction: column;
}

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
.current-day {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.current-day-icon {
  color: white; 
  font-size: 4rem; 
  margin-top: 2rem;
  z-index: 2;
}

.weekly-forecast-icon{
  font-size: 4rem;
  color: cadetblue;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
}
.currentWeatherFont-size{
  font-size: 9rem;
  color: white;
  z-index: 2;
}
.currentDateFont-size{
  margin-top: 10rem;
  font-size: 2rem;
  color: white;
  z-index: 2;

}

.weekly-forecast {
  display: flex;
  justify-content: space-around;
}

.day {
  text-align: center;
  //border-right: 1px solid rgb(86, 85, 85);
  
}

</style>