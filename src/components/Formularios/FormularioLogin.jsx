import React from 'react'
import Swal from 'sweetalert2'
import styleForm from '../../styles/Login.module.css'
import { Outlet, Link } from 'react-router-dom'

import { useState } from 'react'

export const FormularioLogin = () => {
  const [user, setUser] = useState({})

  const handleChangeEmail = event => {
    let email = event.target.value
    console.log(email)
    setUser({
      ...user,
      email: email,
    })
  }
  const handleChangePassword = event => {
    console.log(event.target.value)
    setUser({
      ...user,
      password: event.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    const cantidadElementos = Object.keys(user).length;
    if (cantidadElementos < 2) {
      Swal.fire('Todos los campos son obligatorios')
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Entrando',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Correo electronico
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ejemplo@ejemplo.com" name="email" onChange={handleChangeEmail} required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Contraseña
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name="password" onChange={handleChangePassword} required />
          <p className="text-red-500 text-xs italic">Por favor ingresa una contraseña</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit} name="submit" >
            Enviar
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            ¿Olvido su contraseña?
          </a>
        </div>
      </form>

    </div>
  )
}
