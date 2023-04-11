import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Elimina la importación de useHistory en la línea 3
import Swal from 'sweetalert2'


export const Form = () => {
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
          navigate('/home')
        }else{
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
