const lugar = require('./lugar/lugar');
const clima = require('./Clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);
// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)





const getinfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `la temperatura de ${coords.direccion} es de: ${temp}.`;


    } catch (e) {

        return `no se pudo determinar el clima de ${direccion}`;

    }

}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log);