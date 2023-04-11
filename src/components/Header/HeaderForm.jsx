import React from 'react'
import styleForm from '../../styles/Login.module.css'
import logo from "../../assets/logo.png"

export const HeaderForm = () => {
  return (
    <div className={styleForm.formHeader}>
            <img src={logo} alt="logo" />
            <h1>Aliado <span>Agencia</span></h1>
    </div>
  )
}
