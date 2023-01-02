import React, {useEffect, useState} from "react";
import './general.css'
import Mensaje from "../common/mensaje/mensaje";


export default function General({generalService}) {

    const [current, setCurrent] = useState({
        inactivo: false,
        activa_subcat: false,
        activa_naveg: false
    });

    const initialMsg = {
        exito: true,
        mensajes: []
    };

    const duracionMensaje = 1500;

    const [respuesta, setRespuesta] = useState(initialMsg);
    
    //useGeneral(setCurrent);
    useEffect(() => {
        generalService.get()
            .then(g => {setCurrent(g);})
            .catch(e => console.error(e))
            .finally(console.log("se obtuvieron los datos del servicio"));
    },[]);
    
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const resp = await generalService.save(current);
        setRespuesta(resp);
        setTimeout(()=>{setRespuesta(initialMsg)},duracionMensaje);//Para que deje de mostrarlo en futuras actualizaciones del componente
    }

    const handleChange = (event) => {
        const target = event.target;
        setCurrent({
            ...current,
            [target.id] : target.checked
        });
    }

    return (
        <>
        <h2>Configuración General</h2>
        <Mensaje error={!respuesta.exito} interval={duracionMensaje} mensajes={respuesta.mensajes} />
        <form onSubmit={onSubmit}>
            <div className="formGroup">
            <label>Desactivar Sitio:</label>
            <input type="checkbox" id="inactivo" 
                checked={current.inactivo}
                onChange={handleChange}>
            </input>
            </div>
            <div className="formGroup">
            <label>Activar Subcategorías:</label>
            <input type="checkbox" id="activa_subcat" 
                checked={current.activa_subcat}
                onChange={handleChange}>
            </input>
            </div>
            <div className="formGroup">
            <label>Activar Links de Navegación de Productos:</label>
            <input type="checkbox" id="activa_naveg" 
                checked={current.activa_naveg}
                onChange={handleChange}>
            </input>
            </div>
            <button type="submit">Guardar</button>
        </form>
        </>
    );
}