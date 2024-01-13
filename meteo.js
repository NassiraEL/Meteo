let inpSearch = document.getElementById("inp");
let btn = document.getElementById("btn");
let img = document.querySelector(".img img");
let degry = document.querySelector(".degry h1");
let city = document.querySelector(".city h1");
let humidity = document.querySelector(".humidity");
let Wind = document.querySelector(".Wind");

let meteo ={};



btn.addEventListener("click", function(){
    if(inpSearch.value != ""){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${inpSearch.value}&appid=0f3d5d57f8afc129b04a637c5f046e05&units=metric`;

        fetch(api)
            .then(data => data.json())
            .then(data => meteo ={...data})
            .then(meteo =>{
                if(meteo.name){
                    if(meteo.weather[0].main == "Clear"){
                        img.src = "images/clear.png";
                    }else if(meteo.weather[0].main == "Clouds"){
                        img.src = "images/clouds.png";
                    }else if(meteo.weather[0].main == "Drizzle"){
                        img.src = "images/drizzle.png";
                    }else if(meteo.weather[0].main == "Mist"){
                        img.src = "images/mist.png";
                    }else if(meteo.weather[0].main == "Rain"){
                        img.src = "images/rain.png";
                    }else if(meteo.weather[0].main == "Snow"){
                        img.src = "images/snow.png";
                    }
    
                    degry.innerHTML = `${meteo.main.temp} °c`;
                    city.innerHTML = meteo.name;
                    humidity.innerHTML = `${meteo.main.humidity}%`;
                    Wind.innerHTML = `${meteo.wind.speed} Km/h`;

                }else{
                    city.innerHTML = meteo.message;
                    degry.innerHTML = `0 °c`;
                    humidity.innerHTML = `0%`;
                    Wind.innerHTML = `0 Km/h`;
                }


            })

    }else{
        alert("enter a city!!")
    }
})


