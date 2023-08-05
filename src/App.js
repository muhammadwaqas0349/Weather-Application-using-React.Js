import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';




function App() {

  const apiKey = "ed826b1f753377f06b5ad9a83333eaf0"; 
  const [data, setData] = useState(null); 
  const [inputCity, setInputCity] = useState("");


    const  getWeatherData = (cityName) => {
      if(!cityName) return
  
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" 
      + cityName + "&appid=" + apiKey + "&units=metric"; 
  
      axios.get(apiUrl).
      then( (res) => {
        //console.log("responce", res.data);
        setData(res.data);
  
      }).catch( (err) => {
        console.log("Incorrect City Name", err);
      })
    }


  const handleSearch = () => {
    getWeatherData(inputCity); 
  }
  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  }

  useEffect( ()=> {
    
    getWeatherData("Amsterdam"); 
  }, [])





  return (
    <div className='main'>

      <div className='weatherbg'>
        <h1 className='header'>Weather App</h1>


            <div className='search-div'>
            <input type='text' className='form-control' 
            placeholder="Enter City Name" onChange={handleChangeInput}  value={inputCity}/>
            <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>     
            </div> 
        
        </div>

        <div>
          <div className='result'>
          <img src="https://ar.happyvalentinesday2020.online/pics/i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" />
          
          <h5>{data?.name}</h5>
          <h6>{(data?.main.temp)}°C</h6>
          </div>
        </div>

    </div>
  )
}

export default App;
