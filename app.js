const argv = require('./config/yargs').argv
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//argv.direccion

// lugar.getLugarLatitudLongitud(argv.direccion)
//     .then(resp => {
//         clima.getClima(resp.latitud, resp.longitud)
//             .then(resp => {
//                 console.log(`El clima de ${argv.direccion} es de ${resp}`)
//             })
//             .catch(err => {
//                 console.log(`No se pudo determinar el clima de ${argv.direccion}`);
//             })
//     })
//     .catch(err => {
//         console.log(`No se pudo determinar las coordenadas de ${argv.direccion}`, err);
//     })

const getInfo = async(direccion) => {
    let coordenadas = await lugar.getLugarLatitudLongitud(direccion);
    let temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud)
    try {
        return `La temperatura de ${direccion} es de ${temperatura} °C`;
    } catch (error) {
        return (`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);