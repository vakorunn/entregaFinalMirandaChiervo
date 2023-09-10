import React from 'react'

import { NavLink } from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2><NavLink to={'/'} className={'navbar-brand'}>Belleza Oculta</NavLink></h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} className={'nav-link'} aria-current='page'>Inico</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={'nav-link'} to={'/categoria/1'}>Camisas</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={'nav-link'} to={'/categoria/2'}>Calzado</NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  )
}

export default Navbar