import React, { Component } from "react";

import ClimaInfo from "./componentes/ClimaInfo";
import ClimaForm from "./componentes/ClimaForm";

import {CLIMA_KEY} from "./keys";
class App extends Component {
   

    state = {
        temperature: '',
        temperaturemax: '',
        temperaturemin: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };






    getClima = async e => {
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${CLIMA_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
      
        

    

    this.setState({
        temperature: data.main.temp,
        temperaturemax: data.main.temp_max,
        temperaturemin: data.main.temp_min,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
    });

} else {
    this.setState({
        error: 'Please enter a City and a Country.'
    });
}};
   
   
    render() {
        return (
            <div className= "container p-4"> 
            <div className= "row">
                <div className= "col-md-5 mx-auto">

                
                <ClimaForm getClima={this.getClima}/>
                <ClimaInfo {...this.state}/>


            </div>
            </div> 
            </div>
        )
    }

}

export default App;