import React from 'react'
import styleForm from '../../styles/RegistroAgency.module.css'

export const FormAgency = () => {
  return (
    <div>
           
         <div className={styleForm.codContainer}>
                  <form action="#" className={styleForm.codForm}>
                        <label className={styleForm.label}>Ingrese el numero de NIt</label>
                        <input type="number" min="0" pattern="^[0-9]+" id="nombre" name="nit" placeholder="830095321-1" className={styleForm.inputCompleto} required />
                        <label className={styleForm.label}>Ingrese el nombre de la agencia</label>
                        <input type="text" id="nombre" name="razon social" placeholder="Aduanas nacionales SAS" class={styleForm.inputCompleto} required />
                        <label className={styleForm.label}>Ingrese el numero de telefono</label>
                        <input type="number" id="telefono" name="telefono" placeholder="7452531" className={styleForm.inputCompleto} required />
                        <label className={styleForm.label}>Ingrese la direccion</label>
                        <input type="text" id="direccion" name="direccion" placeholder="Calle 58 k No 17 22" className={styleForm.inputCompleto} required />
                        <label className={styleForm.label}>Ingrese la fecha de creacion</label>
                        <input type="date" name="fechaAlta" placeholder="dia/mes/año" className={styleForm.inputCompleto} Onblur="(this.type='text')" required />
                        <label className={styleForm.label}>Ingrese la fecha de baja</label>
                        <input type="date" name="fechaBaja" placeholder="dia/mes/año" className={styleForm.inputCompleto} Onblur="(this.type='text')" required />
                        <label className={styleForm.label}>Ingrese el numero de inspectores</label>
                        <input type="number" id="numeroInspectores" name="numeroInspectores" placeholder="5" className={styleForm.inputCompleto} required />
                        <label className={styleForm.label}>Ciduad de la agencia o sucursal</label>
                        <input type="text" id="ciudad" name="ciudad" placeholder="Bucaramanga" className={styleForm.inputCompleto} required />
                        <label className={styleForm.label}>Ingrese codigo operacion de la ciudad</label>
                        <input type="number" id="codigo" name="codigo" placeholder="0065" className={styleForm.inputCompleto} required />
                        <div className={styleForm.btnForm}>
                            <input type="submit" value="Crear" className={styleForm.btnEnviar} />
                            
                        </div>
                </form>
          </div>      
          
    </div>
  )
}
