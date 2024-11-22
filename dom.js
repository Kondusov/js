const cities = {
    Sochi: 'Сочи',
    Krasnodar: 'Краснодар',
    Maikop: 'Майкоп'
};
const shablonHeader = 'Ремонт авто в ';
let currentCity;
let resultStr;
 
//const elemDinamic = document.getElementById('main-header')
const elemDinamic = document.querySelector('#main-header')
//cities.push('Анапа')

async function getDataCity() {
    const url = "http://ip-api.com/json/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      currentCity = json.city
    //   console.log(json);
       console.log(json.city);
    return currentCity;
      
    } catch (error) {
      console.error(error.message);
    }
    
  }
let city = getDataCity();
console.log(city)
if(city){
    Object.keys(cities).forEach(element => {
        console.log(element)
        console.log(currentCity)
        if(element == currentCity){
            console.log(element)
            resultStr = shablonHeader + currentCity;
            console.log(resultStr)
            elemDinamic.textContent = resultStr; 
        }
    });
}
else{

}

// let user_ip = window.location.ip; 
// let geoip = fetch('http://ip-api.com/json/24.48.0.1');
//console.log(geoip);
//console.log(elemDinamic.textContent)
//console.dir(cities)

