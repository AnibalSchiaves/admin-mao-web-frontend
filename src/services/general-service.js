import axios from "axios";

async function get() {
    console.log("va a invocar api para obtener configuracion general");
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

export const generalService = {
    get
}