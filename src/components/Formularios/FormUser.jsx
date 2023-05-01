
import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react'
import styleForm from '../../styles/RegistrarUsuario.module.css'
import { HeaderForm } from '../Header/HeaderForm';
export const FormUser = () => {
    
    return (
        <div className={styleForm.codContainer}>
            <HeaderForm />
            <div className={styleForm.formTitle}>
                    <h3>Registrar Usuario</h3>
                  </div>
                <form action="#" className={styleForm.codContainer}>
                    
                    <div className={styleForm.inputGroup}>
                        <label >Ingrese el numero de Identificacion del usuario</label>
                        <input  className={styleForm.formInput} type="number" min="0" pattern="^[0-9]+" id="id" name="nombre" placeholder="79341225" required />
                    </div>
                    <div className={styleForm.inputGroup}>
                        <label >Ingrese el nombre del usuario</label>
                        <input className={styleForm.formInput}  type="text" id="nombre" name="nombre" placeholder="Carlos Eduardo" required />
                    </div>
                    <div className={styleForm.inputGroup}>
                        <label >Ingrese el apellido del usuario</label>
                        <input className={styleForm.formInput}  type="text"  id="apellido"  placeholder="Rodriguez Diaz" required />
                    </div>
                    <div className={styleForm.inputGroup}>
                        <label >Ingrese la direccion de correo del usuario</label>
                        <input className={styleForm.formInput} type="email" id="correo"  placeholder="carloseduardo@gmail.com"  required />
                    </div>
                    <div className={styleForm.inputGroup}>
                        <div className={styleForm.inputGroup}>
                            <label >Rol que desea crear</label>
                        </div>
                        <div className={styleForm.inputGroup}>
                            <select id="dino-select">
                            <option>Super Administrador</option>
                            <option>Agencia</option>
                            <option>Gerente de agencia</option>
                            <option>Inspector</option>							
                            </select>
                        </div> 
                </div>
                    <div className={styleForm.btnForm}>
                        <button type="submit">Crear Usuario</button>
                    </div>
                </form>
        </div>
    )
}
