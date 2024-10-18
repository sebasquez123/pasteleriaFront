import axios from 'axios';
import { config } from './config';

// const base = 'http://localhost:3003/api/v1'; // quitar en produccion
const base = config.serverPath;

const query = async (url) => {
    
    let respuesta = {
    datos: [],
    error: ''
}
    try { 
        console.log(base+url);
        const response = await axios.get(base + url);
        if (!response.statusText === 'OK') { throw new Error(`Error al obtener los datos: ${response.error} =  Status: ${response.status}`); }
        respuesta.datos = response.data.body;
        respuesta.error = '';
        return respuesta;
    
    }
    catch (error) {
        respuesta.error = error;
        respuesta.datos = [];
        console.warn('Error al obtener los datos' + error);
    return respuesta;   
    }


}

export default query;