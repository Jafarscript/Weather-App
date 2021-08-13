let apiKey = '2341a2abddc990b61f22c2b315450889';
let city = 'london';

const getWeather = async () => {
    const getlocation = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const location = await getlocation.json;
    console.log('location', location);
}

getWeather();
// const getWeather = async () => {
//     const getlocation = await fetch('https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=94c0d175d2286c57ac2e6347fa9501b1');
//     const location = await getlocation.json();
//     console.log('location',location);
//     document.querySelector('.name').innerHTML = location.name + ', ' + location.sys.country;
//     document.querySelector('.temp').innerHTML = Math.round(location.main.temp - 273.15) + '<sup>°C</sup>';
//     document.querySelector('#low').innerHTML = Math.round(location.main.temp_min - 273.15) + '<sup>°C</sup>';
//     document.querySelector('#feel').innerHTML = Math.round(location.main.feels_like - 273.15)  + '<sup>°C</sup>';
//     document.querySelector('#high').innerHTML = Math.round(location.main.temp_max - 273.15) + '<sup>°C</sup>';

//     // document.querySelector('#img').innerHTML = location.weather[0].icon;
//     document.querySelector('#main').innerHTML = location.weather[0].main;
//     document.querySelector('#wind').innerHTML = location.wind.speed + ' mph';
//     document.querySelector('#humidity').innerHTML = location.main.humidity + '%';
//     document.querySelector('#desc').innerHTML = location.weather[0].description;
// }
// getWeather()