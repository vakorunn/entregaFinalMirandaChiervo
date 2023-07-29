import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"
import TituloPrincipal from "../TituloPrincipal/TituloPrincipal"
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <Link to="/">
            <TituloPrincipal />
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink classname="link" to="/"> Inicio </NavLink>
                </li>
                <li>
                    <NavLink classname="link" to="/categoria/1"> Ropa </NavLink>
                </li>
                <li>
                    <NavLink classname="link" to="/categoria/2"> Calzado </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default Navbar