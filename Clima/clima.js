const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7de044ba3a403774fa0ebf55cc0b1c59&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}