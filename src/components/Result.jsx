import React from 'react'
import './Weather.css'

export default function Result({ weatherData }) {

  // const historyItem = historyData.map((item,index)=>{
  //   return <li key={index}>{item}</li>
  // })
  return (
    <>
      {/* //https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png */}

      {/* <div className='result-container'> */}


      {/* <div className="his-container">
          <h1 className='title'>History</h1>
          <ul className='history'>
        {historyItem}
          </ul>
        </div> */}
        <div className="result">
      <h2 className='city-name'>{weatherData.name}</h2>

      {/* <div className="result-box"> */}

      {weatherData.length !== 0
        ?
        <div className="result-box" >
          <div className='temp'>
            <div>Max Temp:{weatherData.main.temp_max} <br />Min Temp:{weatherData.main.temp_min}</div>
            {/* <div>Min Temp:{weatherData.main.temp_min}</div> */}
          </div>
          <div className='icon-and-weather-type'>

            <img className='weather-icon' src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="" />
            <span>{weatherData.weather[0].description}</span>

          </div>

        </div>
        :
        <p className='enter-city-name'>Please Enter Valid City Name</p>

      }
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
  )
}
