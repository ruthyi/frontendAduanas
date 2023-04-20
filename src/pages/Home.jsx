import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FormUser } from '../components/Formularios/FormUser';
import { FormAgency } from '../components/Formularios/FormAgency';
import { NavBarFirst } from '../components/NavBar/NavBarFirst';
import style from '../styles/Home.module.css'

export const Home = () => {
  const products = useSelector((state) => state.tasks);
  console.log(products)
  return (
    <main className={style.containerHome}>
      <NavBarFirst />
      <section className={style.containerForms}>
        <FormUser />
        <FormAgency />
      </section>
    </main>

  )
}
