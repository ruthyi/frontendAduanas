import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Elimina la importación de useHistory en la línea 3
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import styleForm from '../../styles/Login.module.css'

import { addTask } from '../../features/tasks/taskSlice'
import { HeaderForm } from '../Header/HeaderForm';

export const Form = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (password != "" && email != "") {
      let salida = { "email": email, "password": password }
      const body = JSON.stringify(salida);
      const requestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      };
      async function fetchData() {
        const response = await fetch("https://backendaduanas.onrender.com/Api/v1/login/", requestInit);
        if (response.status == 200) {
          const data = await response.json(); //Convierte la respuesta en un archivo json
          console.log("salida", data.tokenSession, data.data._id, data.data.role)
          Swal.fire('Bienvenido')
          const user = {
            tokenSession: data.tokenSession,
            _id: data.data._id,
            role: data.data.role,
            email: email
          }
          dispatch(addTask(user))
          navigate('/home')
        } else {
          Swal.fire('Contraseña Incorrecta')
        }

      }
      fetchData();


      // 
    } else {
      Swal.fire('Todos los campos son obligatorios')
    }
  }

  return (
    <div className={styleForm.codContainer}>
      <HeaderForm />
      <form className={styleForm.containerForm} onSubmit={handleFormSubmit}>
        <div className={styleForm.formTitle}>
          <h3>Iniciar Sesión</h3>
        </div>
        <div className={styleForm.inputGroup}>
          <label className={styleForm.label} >Correo Electronico</label>
          <input className={styleForm.formInput} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className={styleForm.inputGroup}>
          <label className={styleForm.label} >Contraseña</label>
          <input className={styleForm.formInput} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

        </div>

        <div className={styleForm.inputGroupForgot}>
          <Link className={styleForm.altForm} to="/forgot">¿Olvido su contraseña?</Link>
        </div>

        <div className={styleForm.btnForm}>
          <button type="submit">Iniciar Sesión</button>
        </div>

      </form>

    </div>
  )
}
