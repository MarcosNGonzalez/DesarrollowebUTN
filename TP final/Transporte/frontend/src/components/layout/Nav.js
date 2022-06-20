import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder"> 
        <ul >
            <li><Link to="/"> Home</Link> </li>

            <li><Link to="NosotrosPage">Nosotros</Link> </li>

            <li><Link to="ServiciosPage">Servicios </Link> </li>

            <li><Link to="GaleriaPage"> Galeria </Link> </li>

            <li><Link to="NovedadesPage"> Novedades </Link> </li>

            <li><Link to="ContactosPage"> Contactos </Link> </li>





        </ul>
        </div>
    </nav>
    );
}


export default Nav;