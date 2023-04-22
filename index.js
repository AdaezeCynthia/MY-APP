function renderWeather(weather){
    console.log(weather);
    let resultsContainer = document.querySelector("#weather-results");

       const city =document.querySelector("#city")
    city.textContent = "Weather in " + weather.name;
   
         
    const myTemp = "Temprature: " + weather.main.temp + "F";
   
    const finalTemp = document.querySelector("#temp-p")
    finalTemp.textContent = myTemp
  
   
   const myHum =  "Humidity: " + weather.main.humidity + " % ";
   const finalHum = document.querySelector("#hum-p")
   finalHum.textContent = myHum

   

    const myWind = "Wind: " + weather.wind.speed + "mph, " + weather.wind.deg +  "°";
   const finalWind = document.querySelector("#wind-p")
   finalWind.textContent = myWind

   const myCount = " Country: " + weather.sys.country;
   const finalCount = document.querySelector("#country")
 finalCount.textContent = myCount



    const weatherDetails = weather.weather[0]
    if(weatherDetails && weatherDetails.description){
     
      const description = document.querySelector("#des-weather")
    description.textContent = weatherDetails.description;
  
    
    }
}






const searchBox = document.querySelector("#getsearch input");
const searchBtn = document.querySelector("#getsearch button");



 function fetchWeather(event){
    //alert(searchBox)
    event.preventDefault()
    let query = searchBox.value
    console.log(searchBox.value)
    let url= "https://api.openweathermap.org/data/2.5/weather?q= "+query+ "&units=imperial&appid=5af9c7bb0b956fe7f6e90bbed9f1f1fb"
    //https://api.openweathermap.org/data/2.5/weather?q="+query+ "&units=imperial&appd=5af9c7bb0b956fe7f6e90bbed9f1f1fb
      
         fetch(url)
         .then (response => response.json())
         .then(data =>renderWeather(data))

        
          
      
}

document.getElementById("weatherform").addEventListener('submit', fetchWeather)

 













 /* var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
         
    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
*/

 const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});



