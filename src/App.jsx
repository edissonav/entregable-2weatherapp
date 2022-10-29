import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import mediumclouds from './assets/img/mediumclouds.jpeg'
import rain from './assets/img/rain.jpg'
import storm from './assets/img/storm.jpg'
import clearsky from './assets/img/clearsky.jpg'

import useData from './hooks/useData'


function App() {


  const {data: weather}=useData()

  
 
 
console.log(weather);

  



 

const temperature= weather.main?.temp
const tempincelcius= Math.round(temperature - 273.15) 

// console.log(tempincelcius);


const [temp, settemp]=useState(true)

const changetempmode=()=>{
  settemp(!temp)
 
}


//  console.log(mediumclouds);

if(weather.weather?.[0].main=== "Clouds"){
  document.body.style=`background-image: url(${mediumclouds})`

}
if(weather.weather?.[0].main=== "Rain"){
  document.body.style=`background-image: url(${rain})`

}
if(weather.weather?.[0].main=== "Clear"){
  document.body.style=`background-image: url(${clearsky})`

}
if(weather.weather?.[0].main=== "Thunderstorm"){
  document.body.style=`background-image: url(${storm})`

}


  return (
    <div className="App">
      <div className='header'>
      <h1>Weather App</h1>
      <h2><i class='bx bx-map-pin'></i>  {weather.name}{", "}{weather.sys?.country}</h2>
      </div>
      <div className='content'>
        <div className='principal-content'>

      <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
      
      <p>Temperature: {temp? tempincelcius: (tempincelcius* 9/5) + 32} {temp? "°C":"°F"} </p>
        </div>
        <div className='secundary-content'>
        <h3>{weather.weather?.[0].description}</h3>
        <ul>
          <li><i class='bx bx-wind'></i>  <b>Wind speed:</b>   {weather.wind?.speed}  m/s</li>
          <li><i class='bx bx-cloud' ></i> <b>Cloud:</b>   {weather.clouds?.all}  %</li>
          <li><i class='bx bxs-tachometer'></i> <b>Pressure:</b>   {weather.main?.pressure}  mb</li>
        </ul>
        </div>
      </div>
         <button onClick={changetempmode} >Change to Celcius/Fahrenheit</button> 
      
      
    </div>
  )
}

export default App
