import React from 'react'
import styleForm from '../../styles/RegistroAgency.module.css'
import { HeaderForm } from '../Header/HeaderForm';

export const FormAgency = () => {
  return (
    <div className={styleForm.codContainer}>
           
         <div className={styleForm.codContainer}>
                  <HeaderForm />
                  <div className={styleForm.formTitle}>
                    <h3>Registrar agencia</h3>
                  </div>
                  <form action="#" className={styleForm.containerForm}>
                        <label className={styleForm.label}>Ingrese el numero de NIt</label>
                        <input className={styleForm.formInput} type="number" min="0" pattern="^[0-9]+" id="nombre" name="nit" placeholder="   830095321-1" required />
                        <label className={styleForm.label}>Ingrese el nombre de la agencia</label>
                        <input className={styleForm.formInput} type="text" id="nombre" name="razon_social" placeholder="   Aduanas nacionales SAS"  required />
                        <label className={styleForm.label}>Ingrese el numero de telefono</label>
                        <input className={styleForm.formInput} type="number" id="telefono" name="telefono" placeholder="   7452531"  required />
                        <label className={styleForm.label}>Ingrese la direccion</label>
                        <input className={styleForm.formInput} type="text" id="direccion" name="direccion" placeholder="   Calle 58 k No 17 22"  required />
                        <label className={styleForm.label}>Ingrese la fecha de creacion</label>
                        <input className={styleForm.formInput}  type="date" name="fecha_Alta" placeholder="   dia/mes/año" required />
                        <label className={styleForm.label}>Ingrese la fecha de baja</label>
                        <input className={styleForm.formInput} type="date" name="fecha_Baja" placeholder="   dia/mes/año"  required />
                        <label className={styleForm.label}>Ingrese el numero de inspectores</label>
                        <input className={styleForm.formInput} type="number" id="numero_Inspectores" name="numero_Inspectores" placeholder="   5"  required />
                        <label className={styleForm.label}>Ciduad de la agencia o sucursal</label>
                        <input className={styleForm.formInput} type="text" id="ciudad" name="ciudad" placeholder="   Bucaramanga"  required />
                        <label className={styleForm.label}>Ingrese codigo operacion de la ciudad</label>
                        <input className={styleForm.formInput} type="number" id="codigo" name="codigo" placeholder="   0065"  required />
                        <label className={styleForm.label}>Estado</label>
                        <select className={styleForm.estado}>
                        <option>Activo</option>
                        <option>Suspendido</option>						
				                </select>
                        <div className={styleForm.btnForm}>
                            <input className={styleForm.btnEnviar}  type="submit" value="Crear"  />
                        </div>
                </form>
          </div>      
          
    </div>
  )
}
