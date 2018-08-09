


const axios = require('axios');
const getClima = async(lat, lng) =>{
        

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=588757e6e4d8efd34c4b5edf4ec011f5`);

    return resp.data.main.temp;


};


module.exports = {
    getClima
}