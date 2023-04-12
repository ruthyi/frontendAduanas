import React from 'react'
export const FormularioRegistro = () => {
    
  return (
    <div className="w-full max-w-xs">
        <p>Hola mundo Cruel y despiadado</p>
        <div className='cod-form'>
            <form action="#" className="cod-form">
                <div className="form-title">
                    <h3>Regístrate Gratis</h3>
                </div>

                <div className="input-group">
                    <input className="1" type="text" id="nombre" name="nombre" placeholder="Nombre" class="form-input" required/>
                </div>

                <div className="input-group">
                    <input className="2" type="text" id="apellidos" name="apellidos" placeholder="Apellidos" class="form-input" required/>
                </div>

                <div className="input-group">
                    <input className="3" type="email" id="correo" name="correo" placeholder="Correo" class="form-input" required/>
                </div>

                <div className="input-group">
                    <input className="4" type="text" id="usuario" name="usuario" placeholder="Usuario" class="form-input" required/>
                </div>
                <div className="input-group">
                    <input className="4" type="password" id="clave" name="clave" placeholder="Contraseña" class="form-input"required />
                </div>
                <div className="input-group">
                    <input className="6" type="text" id="telefono" name="telefono" placeholder="Teléfono" class="form-input" required/>
                </div>
                <div className="input-group">
                    <input className="7" type="submit" value="Registrar" class="btn-enviar"/>
                    
                </div>
               
            </form>


         </div>
    </div>
    
  )
}