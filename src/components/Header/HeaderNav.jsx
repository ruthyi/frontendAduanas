import React from 'react'
import logo from "../../assets/logo.png"
import styleForm from '../../styles/HeaderNav.module.css'

export const HeaderNav = () => {
    return (
        <div className={styleForm.headerNav}>
            <img src={logo} alt="logo" />
            <div>
                <h1>Aliado <span>Agencia</span></h1>
            </div>

        </div>
    )
}
