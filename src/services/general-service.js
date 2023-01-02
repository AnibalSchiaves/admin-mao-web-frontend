import axios from "axios";

async function get() {
    try {
        const resp = await axios.get(process.env.REACT_APP_API_URL_BASE+"general/1")
        if (resp.status === 200) {
            return resp.data.data;
        } else {
            console.log("Hubo un error al consultar la api. Status: "+resp.status);
            return {};
        }
    } catch(e) {
        if (e.response) {
            console.log("Hubo un error al consultar la api. Status: "+e.response.status+" .Mensaje: ",e.response.data.mensajes || e.response.data.mensaje);
        } else {
            console.log("Hubo un error al consultar la api. Status: "+e.code+" .Mensaje: ",e.message); 
        }
        return {};
    }
}

async function save(obj) {
    let result = {};
    try {
        const resp = await axios.put(process.env.REACT_APP_API_URL_BASE+"general/1", obj);
        if (resp.status === 200) {
            result.exito = true;
            result.mensajes = ["Configuración guardada con éxito"];
        } else {
            result.exito = false;
            result.mensajes = resp.data.mensajes || [resp.data.mensaje];
        }
    } catch(e) {
        if (e.response) {
            console.log("Hubo un error al consultar la api. Status: "+e.response.status+" .Mensaje: ",e.response.data.mensajes || e.response.data.mensaje);
            result.exito = false;
            result.mensajes = e.response.data.mensajes || [e.response.data.mensaje];
        } else {
            console.log("Hubo un error al consultar la api. Status: "+e.code+" .Mensaje: ",e.message); 
            result.exito = false;
            result.mensajes = [e.message];
        }
    }   
    return result;
}

export const generalService = {
    get,
    save
}