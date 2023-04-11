import React from 'react'
import styleForm from '../styles/Login.module.css'
import { Form } from '../components/Formularios/Form'


export const Login = () => {
  return (
    <div className={styleForm.containerLogin}>
      <Form/>
    </div>
  )
}
