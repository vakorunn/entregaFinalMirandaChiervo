import React from 'react'

import { NavLink } from 'react-router-dom'

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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className={'dropdown-item'} to={'/categoria'}>Camisas</NavLink>
                  </li>
                  <li>
                    <NavLink className={'dropdown-item'} to={'/categoria'}>Calzado</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar