import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Elimina la importación de useHistory en la línea 3
import Swal from 'sweetalert2'


export const Form = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  function handleFormSubmit(event) {
    event.preventDefault();
    if (password!="" && email!="") { // Verifica si los campos están llenados

        navigate('/home')
    }else{
        Swal.fire('Todos los campos son obligatorios')
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <Link to="/forgot">¿Olvido su contraseña?</Link>
      <button type="submit">Enviar</button>
    </form>
  )
}
