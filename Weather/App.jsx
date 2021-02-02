import React, { useEffect, useState } from 'react';
import './css/style.css';
const App = () =>
{

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b93f49e146434ec327595a2c7865e969` ;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search]) 
    return(
        <>
          <div className="main_div">
          <div className="box">
             
                  <input 
                    type="search"
                    className="inputField" 
                    value={search}
                    onChange = {(event) =>
                         {return setSearch(event.target.value);}
                        }
                    />
               {
                   !city ? (<p>No Data Found</p>) :
               
                (
                    <div>
                <div className="info">
                <h1 className="location">
                <i className="fa fa-street-view" aria-hidden="true"></i>{search}
                </h1>
                <h1 className="temp" style={{color:'white'}}>
                    {city.temp} Celsius
                </h1>
                <h3 className="temp_min">
                   Min: {city.temp_min}C | Max:{city.temp_max}C
                </h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
                )
                }
                    
          </div>
          </div>
        </>
    )
}

export default App;