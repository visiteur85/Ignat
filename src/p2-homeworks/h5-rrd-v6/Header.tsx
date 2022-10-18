import React from 'react'
import {NavLink} from "react-router-dom";
import s from "../h5-rrd-v6/Heade.module.css"

function Header() {
    return (

        <div className={s.container}>
           <div><NavLink to='/pre-junior'>PreJun</NavLink></div>
           <div><NavLink to='/junior'>Jun</NavLink></div>
           <div><NavLink to='/junior-plus'>Jun+</NavLink></div>
            <div className={s.block}></div>

        </div>


    )
}

export default Header
