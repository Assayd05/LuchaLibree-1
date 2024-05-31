import { Link,Outlet } from "react-router-dom"
import perfilImg from '../../Material/perfil.png'
import "./desingNav.css"

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/">LOGO</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Eventos">Eventos</Link>
            </li>
            <li className="icon" >
                <Link to="/Perfil" ><img src={perfilImg} alt="" className="icon" /></Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default NavBar
