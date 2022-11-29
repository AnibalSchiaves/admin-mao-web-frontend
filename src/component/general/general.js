import React, {useEffect, useState} from "react";
import './general.css'


export default function General({generalService}) {

    const [current, setCurrent] = useState({
        desactivarSitio: false,
        activarSubcategorias: false,
        activarLinksNavegacion: false
    });
    
    //useGeneral(setCurrent);
    useEffect(() => {
        generalService.get()
            .then(g => {setCurrent(g);})
            .catch(e => console.error(e))
            .finally(console.log("se obtuvieron los datos del servicio"));
    },[]);
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(current);
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
        <form onSubmit={onSubmit}>
            <div className="formGroup">
            <label>Desactivar Sitio:</label>
            <input type="checkbox" id="desactivarSitio" 
                checked={current.desactivarSitio}
                onChange={handleChange}>
            </input>
            </div>
            <div className="formGroup">
            <label>Activar Subcategorías:</label>
            <input type="checkbox" id="activarSubcategorias" 
                checked={current.activarSubcategorias}
                onChange={handleChange}>
            </input>
            </div>
            <div className="formGroup">
            <label>Activar Links de Navegación de Productos:</label>
            <input type="checkbox" id="activarLinksNavegacion" 
                checked={current.activarLinksNavegacion}
                onChange={handleChange}>
            </input>
            </div>
            <button type="submit">Guardar</button>
        </form>
        </>
    );
}