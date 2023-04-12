import React from 'react'
import styleForm from '../styles/Login.module.css'
import { FormularioLogin } from '../components/Formularios/FormularioLogin'
import { FormularioRegistro } from '../components/Formularios/FormularioRegistro'

export const Login = () => {
  return (
    <div className={styleForm.containerLogin}>
        <FormularioLogin/>
        <FormularioRegistro/>
    </div>
    
  )
}
