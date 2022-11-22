import React, { useState } from "react";
import './navbar.css'

export default function NavBar() {
    const [active, setActive] = useState('general');
    const menues = [
        {
            id:'general',
            label:'General'
        },
        {
            id:'otras',
            label:'Otras'
        }
    ];
    return (
        <nav>
          <ul>
            {
                menues.map((it) => {
                    return <li key={it.id} id={it.id} className={it.id==active?'active':''}>{it.label} </li>
                })
            }
          </ul>
        </nav>
    );
}