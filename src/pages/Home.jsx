import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FormUser } from '../components/Formularios/FormUser';
import { FormAgency } from '../components/Formularios/FormAgency';
<<<<<<< HEAD
import { Forminspect } from '../components/Formularios/FormInspect';

=======
import { NavBarFirst } from '../components/NavBar/NavBarFirst';
import style from '../styles/Home.module.css'
>>>>>>> 6adfed6fc67bf5a15aa60c5f26eb9dacc946e058

export const Home = () => {
  const products = useSelector((state) => state.tasks);
  console.log(products)
  return (
<<<<<<< HEAD
    <div  >Hola : {products[0].role}
    
      <FormAgency/>
    </div>
=======
    <main className={style.containerHome}>
      <NavBarFirst />
      <section className={style.containerForms}>
        <FormUser />
        <FormAgency />
      </section>
    </main>

>>>>>>> 6adfed6fc67bf5a15aa60c5f26eb9dacc946e058
  )
}
