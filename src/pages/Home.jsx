import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const products = useSelector((state) => state.tasks);
  console.log(products)
  return (
    <div>Hola : {products[0].role}
    </div>
  )
}
