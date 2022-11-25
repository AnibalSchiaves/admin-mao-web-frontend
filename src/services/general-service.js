import React, { useEffect } from "react";

export default async function useGeneral(setCurrent) {

    useEffect(() => {
        console.log("se dispara useEffect");
        const general = {
            desactivarSitio: false,
            activarSubcategorias: false,
            activarLinksNavegacion: true
        };
    
        setCurrent(general);
    },[])

}