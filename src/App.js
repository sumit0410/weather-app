// import logo from './logo.svg';
import { useState } from 'react';
import './components/Weather.css'
import Result from './components/Result';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';


function App() {

  const [search, setSearch] = useState(" ");
  const [weather, setWeather]= useState([]);
  // const [history,setHistory] = useState([]);

  const changeSearch =(value)=>{
      setSearch(value);
  }


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// const getWeatherData = ()=>{
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?q={search}&appid={API key}`)
//       .then(
//         (response)=>{
//           console.log(response);
//         }
//       ).catch(
//         (error)=>{
//           console.log(error);
//         }
//       )
// }

//https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=3265874a2c77ae4a04bb96236a642d2f&units metric

const searchWeatherHandler = ()=>{

     

  if(search!==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
      .then(
        (response)=>{
          console.log(response.data);
          // if(history.indexOf(search)=== -1){
          //   setHistory([
          //     ...history,
          //     search
          //   ])
          // }
          setWeather(response.data)
        }
      ).catch(
        (error)=>{
          alert("Please enter correct City Name")
        }
      )
  }
}
  // useEffect(()=>{
  //       if(search!==""){
  //         getWeatherData();
  //       }
  // },[search])
  return (
    <>
       <Header/>
    <div className='app'>
      
        <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler}/>
        <Result weatherData={weather}/>

    </div>   
     </>
  );
}

export default App;
