import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

export default function NavBar() {
    const [active, setActive] = useState('general');
    const menues = [
        {
            id:'general',
            label:'General',
            url:'/general'
        },
        {
            id:'Categorias',
            label:'Categorías',
            url:'/categorias'
        },
        {
            id:'Marcas',
            label:'Marcas',
            url:'/marcas'
        },
        {
            id:'Articulos',
            label:'Artículos',
            url:'/articulos'
        }

    ];
    return (
        <nav>
          <ul>
            {
                menues.map((it) => {
                    return <li key={it.id} id={it.id} className={it.id==active?'active':''}><NavLink onClick={(e) => {setActive(it.id)}} to={it.url}>{it.label}</NavLink></li>
                })
            }
          </ul>
        </nav>
    );
}