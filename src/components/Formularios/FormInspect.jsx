import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react'
import styleForm from '../../styles/RegistrarUsuario.module.css'
import { HeaderForm } from '../Header/HeaderForm';
export function Forminspect() {

    return (
        <div className={styleForm.codContainer}>
            <HeaderForm />
            <div className={styleForm.formTitle}>
                <h3>Inspector</h3>
            </div>
            <form action="#" className={styleForm.codContainer}>

                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese el numero de cedula</label>
                    <input className={styleForm.formInput} type="number" min="0" pattern="^[0-9]+" id="numero_cedula" placeholder="   79341225" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese el nombre </label>
                    <input className={styleForm.formInput} type="text" id="nombre" placeholder="   Fabian Andres" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese el apellido </label>
                    <input className={styleForm.formInput} type="text" id="apellido" placeholder="   Duarte Monsalve" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese numero de telefono</label>
                    <input className={styleForm.formInput} type="number" min="0" pattern="^[0-9]+" id="telefono" placeholder="   3112457891" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese la direccion de correo del usuario</label>
                    <input className={styleForm.formInput} type="text" id="direccion" placeholder="   Calle 90 # 19 C 32" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese la direccion de correo del usuario</label>
                    <input className={styleForm.formInput} type="number" min="0" pattern="^[0-9]+" id="codigo_auditor" placeholder="   34" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <label className={styleForm.label}>Ingrese la direccion de correo del usuario</label>
                    <input className={styleForm.formInput} type="email" id="correo" placeholder="   carloseduardo@gmail.com" required />
                </div>
                <div className={styleForm.inputGroup}>
                    <div className={styleForm.inputGroup}>
                        <label className={styleForm.label}>Estado</label>
                    </div>
                    <div className={styleForm.inputGroup}>
                        <select className={styleForm.inputGroup} id="state">
                            <option>Activo</option>
                            <option>Inactivo</option>
                        </select>
                    </div>
                </div>
                <div className={styleForm.btnForm}>
                    <button type="submit">Crear Inspector</button>
                </div>
            </form>
        </div>
    );
}