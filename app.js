//Const es equivalente a definicion de variables 

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion:'Dirección de la ciudad para optener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try{
        let coors = await lugar.getLugar(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El clima en: ${coors.direccion} es: ${temperatura}`;
    }catch(e){
        return `No se pudo determinar el clima en: ${ direccion}`
    }
    
}

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(e => console.log(e));