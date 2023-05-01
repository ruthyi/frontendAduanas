import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { HeaderNav } from '../Header/HeaderNav'
import { useSelector } from "react-redux";
import style from '../../styles/NavBar.module.css'

export const NavBarFirst = () => {

    const products = useSelector((state) => state.tasks);
    const [showSubOptions1, setShowSubOptions1] = useState(false);
    const [showSubOptions2, setShowSubOptions2] = useState(false);
    const [showSubOptions3, setShowSubOptions3] = useState(false);
    const [showSubOptions4, setShowSubOptions4] = useState(false);
    const [navbar, setNavbar] = useState(false);


    return (
        <div className={style.containerNav}>
            <nav className="w-full  shadow ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className={style.logo}>
                                <HeaderNav />
                                <h1 className='text-gray-300'>{products[0].role}</h1>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-org rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-300 hover:text-org mr-4 py-2 rounded inline-flex items-center">
                                    <Link to="/inicio">Inicio</Link>
                                </li>


                                <li className="text-teal-500 hover:text-blue-600">
                                    <div className="dropdown inline-block relative">
                                        <button
                                            onClick={() => { setShowSubOptions1(!showSubOptions1); setShowSubOptions2(false); setShowSubOptions3(false); setShowSubOptions4(false) }}
                                            className="text-gray-300 hover:text-org mr-4 py-2 rounded inline-flex items-center"
                                        >
                                            <span className="mr-1">Usuario</span>
                                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                                <path d="M10 13l-5-5 1.41-1.41L10 10.18l3.59-3.59L15 8l-5 5z" />
                                            </svg>
                                        </button>
                                        <ul
                                            className={`dropdown-menu absolute ${showSubOptions1 ? '' : 'hidden'
                                                } text-gray-700 pt-1`}
                                        >
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion1">Opcion1</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion2">Opcion2</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion3">Opcion2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>


                                <li className="text-teal-500 hover:text-blue-600">
                                    <div className="dropdown inline-block relative">
                                        <button
                                            onClick={() => { setShowSubOptions2(!showSubOptions2); setShowSubOptions1(false); setShowSubOptions3(false); setShowSubOptions4(false) }}
                                            className="text-gray-300 hover:text-org mr-4 py-2 rounded inline-flex items-center"
                                        >
                                            <span className="mr-1">Agencia</span>
                                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                                <path d="M10 13l-5-5 1.41-1.41L10 10.18l3.59-3.59L15 8l-5 5z" />
                                            </svg>
                                        </button>
                                        <ul
                                            className={`dropdown-menu absolute ${showSubOptions2 ? '' : 'hidden'
                                                } text-gray-700 pt-1`}>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion1">Opcion1</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion2">Opcion2</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion3">Opcion2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="text-teal-500 hover:text-blue-600">
                                    <div className="dropdown inline-block relative">
                                        <button
                                            onClick={() => { setShowSubOptions3(!showSubOptions3); setShowSubOptions1(false); setShowSubOptions2(false); setShowSubOptions4(false) }}
                                            className="text-gray-300 hover:text-org mr-4 py-2 rounded inline-flex items-center"
                                        >
                                            <span className="mr-1">Inspector</span>
                                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                                <path d="M10 13l-5-5 1.41-1.41L10 10.18l3.59-3.59L15 8l-5 5z" />
                                            </svg>
                                        </button>
                                        <ul className={`dropdown-menu absolute ${showSubOptions3 ? '' : 'hidden' } text-gray-700 pt-1`} >
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion1">Opcion1</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion2">Opcion2</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion3">Opcion2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <div className="dropdown inline-block relative">
                                        <button
                                            onClick={() => { setShowSubOptions4(!showSubOptions4); setShowSubOptions1(false); setShowSubOptions2(false); setShowSubOptions3(false) }}
                                            className="text-gray-300 hover:text-org mr-4 py-2 rounded inline-flex items-center"
                                        >
                                            <span className="mr-1">Actas</span>
                                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                                <path d="M10 13l-5-5 1.41-1.41L10 10.18l3.59-3.59L15 8l-5 5z" />
                                            </svg>
                                        </button>
                                        <ul
                                            className={`dropdown-menu absolute ${showSubOptions4 ? '' : 'hidden'
                                                } text-gray-700 pt-1`}
                                        >
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion1">Opcion1</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion2">Opcion2</Link>
                                            </li>
                                            <li>
                                                <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/opcion3">Opcion2</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="text-gray-300 hover:text-org mr-4 py-2 rounded inline-flex items-center">
                                    <Link to="/">Cerrar sesion</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
}
