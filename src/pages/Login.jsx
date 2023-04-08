import React from 'react'
import styleForm from '../styles/Login.module.css'
import { FormularioLogin } from '../components/Formularios/FormularioLogin'

export const Login = () => {
  return (
    <div className={styleForm.containerLogin}>
        <FormularioLogin/>
        {/* Hola  */}
        <p>Hola mundo cruel</p>
    </div>
  )
}
