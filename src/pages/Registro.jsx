import React from 'react'
import styleForm from '../styles/Login.module.css'
import { FormularioRegistro } from '../components/Formularios/FormularioRegistro'

export const Registro = () => {
  return (
    <div className={styleForm.containerLogin}>
        <FormularioRegistro/>
    </div>
  )
}
