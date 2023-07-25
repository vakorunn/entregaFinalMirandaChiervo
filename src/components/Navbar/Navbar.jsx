import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"
import TituloPrincipal from "../TituloPrincipal/TituloPrincipal"

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
        
    </header>
  )
}

export default Navbar