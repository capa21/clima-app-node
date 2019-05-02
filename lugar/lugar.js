const axios = require('axios');

const getLugarLatitudLongitud = async(direccion) => {
    const encodeUlr = encodeURI(direccion);
    // console.log(encodeUlr);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'X-RapidAPI-Key': '4eae274d33mshf62a19635da48dfp1a347djsn0916a4e31261' }
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR !!!', err);
    //     })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const nameDireccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;


    return {
        nameDireccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatitudLongitud
}