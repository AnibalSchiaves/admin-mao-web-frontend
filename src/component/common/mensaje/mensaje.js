import React from "react";
import { useEffect } from "react";
import './mensaje.css';

export default function Mensaje({interval, error, mensajes}) {
    if (mensajes && mensajes.length>0) {
        const cambio = interval / 10;
        let initial = 0;
        const half = interval / 2;
        const intervalID = setInterval(()=>{
            if (document.getElementById("errores")) {
                if (document.getElementById("errores").style.display == 'none') {
                    document.getElementById("errores").style.display = 'inline-block';
                    document.getElementById("errores").style.opacity = 1;
                }
                if (initial>half) {
                    let opacity = window.getComputedStyle(document.getElementById("errores")).getPropertyValue("opacity");
                    if (opacity>0) {
                        document.getElementById("errores").style.opacity = opacity - 0.2;
                    } else {
                        document.getElementById("errores").style.display = 'none';
                        clearInterval(intervalID);
                    }
                }
                initial += cambio;
            } else {
                clearInterval(intervalID);
            }
        },cambio);
    }

    if (mensajes && mensajes.length>0) {
        return <ul id="errores" className={error?'error':'success'}>
            {(mensajes || []).map((r,i) => {return <li key={i}><span>{r}</span></li>})}
        </ul>
    } else 
        return <></>
}