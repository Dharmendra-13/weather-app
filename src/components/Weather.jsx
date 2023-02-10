import React,{useState} from 'react';
import axios from "axios";
import ShowTemp from './ShowTemp';

const Weather = () => {
    const[city,setCity]=useState("");
    const[data,setData]=useState({
        description:"",
        temp:0,
        temp_max:0,
        temp_min:0,
        humidity:0,
        sunrise:0,
        sunset:0,
        country:"",
    });

    const handleClick =()=>{
         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43082b89b660f658702604df3443ad4b`)   
         .then((response)=>{
            console.log(response.data);
            setData({
                description:response.data.weather[0].description,
                temp:response.data.main.temp,
                temp_max:response.data.main.temp,
                temp_min:response.data.main.temp,
                humidity:response.data.main.humidity,
                sunrise:response.data.sys.sunrise,
                sunset:response.data.sys.sunset,
                country:response.data.sys.country,
            })
         })
    }
  return (
    <>
    <div className='container text-center my-2'>
        <h1>Weather App</h1>
        <input type="text" className='form-control' value={city} onChange={(e)=>{
            setCity(e.target.value)
        }} />
        <button className='btn btn-primary mx-2 my-2' type='submit'
        onClick={handleClick}>Get Temp</button>

    </div>
     
      <ShowTemp text={data}  />

    </>
  )
}

export default Weather;