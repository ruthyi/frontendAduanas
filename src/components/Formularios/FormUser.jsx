import React from 'react'
import styleForm from '../../styles/Login.module.css'

export const FormUser = () => {
    return (
        <div className={styleForm.codContainer}>
                <form action="#" className={styleForm.codContainer}>
                    <input type="number" min="0" pattern="^[0-9]+" id="nombre" name="nombre" placeholder="Id" className={styleForm.formInput} required />
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre Razon Social" className={styleForm.formInput} required />
                    <input type="text" id="apellidos" name="apellidos" placeholder="Direccion" className={styleForm.formInput} required />
                    <input type="text" id="telefono" name="telefono" placeholder="Teléfono" className={styleForm.formInput}  required />
                    <input type="number" min="0" pattern="^[0-9]+" id="telefono" name="telefono" placeholder="Codigo Ciudad" className={styleForm.formInput} required />
                    <input type="date" name="fachaAlta" placeholder="Fecha de Alta" className={styleForm.formInput} OnBlur="(this.type='text')" required />
                    <input className={styleForm.formInput} type="date" name="FechaBaja" placeholder="Fecha de Baja" OnClick="ocultarError();" OnFocus="(this.type='date')" OnBlur="(this.type='text')" required />
                    <input type="email" id="correo" name="correo" placeholder="Correo" className={styleForm.formInput} required />
                    <input type="text" id="usuario" name="usuario" placeholder="Usuario" className={styleForm.formInput} required />
                    <input type="password" id="clave" name="clave" placeholder="Contraseña" className={styleForm.formInput} required />
                    <input type="password" id="clave" name="clave" placeholder="Confirmar contraseña" className={styleForm.formInput}required />
                    <div className={styleForm.codContainer}>
                        <input type="submit" value="Crear" className="btn-enviar" />
                        <p class="form-link">Ya tienes una cuenta?<a href="#">Ingresa aquí</a></p>
                    </div>
                </form>
        </div>
    )
}
