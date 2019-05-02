const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a877d54b64bbad8ec8e993814970b4b7&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}