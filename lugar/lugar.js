const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir);
    console.log(encodeURL);

    const instace = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'b227b594bfmshda246360472d513p1af3d4jsn3dc1db986528' }
    });


    const resp = await instace.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la  ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {

        direccion,
        lat,
        lng

    }



}


module.exports = {

    getLugarLatLng

}