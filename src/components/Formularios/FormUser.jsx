import React from 'react'
import styleForm from '../../styles/Login.module.css'

export const FormUser = () => {
    return (
        <div className={styleForm.codContainer}>


           
                <form action="#" className={styleForm.codForm}>
                    <input type="number" min="0" pattern="^[0-9]+" id="nombre" name="nombre" placeholder="Id" className="input-100" required />
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre Razon Social" className="input-100" required />
                    <input type="text" id="apellidos" name="apellidos" placeholder="Direccion" className="input-100" required />
                    <input type="text" id="telefono" name="telefono" placeholder="Teléfono" className="input-48" required />
                    <input type="number" min="0" pattern="^[0-9]+" id="telefono" name="telefono" placeholder="Codigo Ciudad" className="input-48" required />
                    <input type="date" name="nacimientotitular" placeholder="Fecha de Alta" className="input-48" onBlur="(this.type='text')" required />
                    <input className="input-48" type="date" name="nacimientotitular" placeholder="Fecha de Baja" onClick="ocultarError();" onFocus="(this.type='date')" onBlur="(this.type='text')" required />
                    <input type="email" id="correo" name="correo" placeholder="Correo" className="input-100" required />
                    <input type="text" id="usuario" name="usuario" placeholder="Usuario" className="input-100" required />
                    <input type="password" id="clave" name="clave" placeholder="Contraseña" className="input-48" required />
                    <input type="password" id="clave" name="clave" placeholder="Confirmar contraseña" className="input-100" required />
                    <input type="submit" value="Crear" className="btn-enviar" />
                    <p class="form-link">Ya tienes una cuenta?<a href="#">Ingresa aquí</a></p>


                </form>


        </div>
    )
}
