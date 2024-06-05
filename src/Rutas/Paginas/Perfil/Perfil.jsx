
import { Link } from 'react-router-dom';
import { FaTicketAlt, FaUser } from 'react-icons/fa';
import './DesingPerfil.css'; 

const Perfil = () => {
 

  return (
    <div className="PerfilContainer">
      <div className="Perfil">
        <h1>Bienvenido</h1>
        <h1> Usuario!!</h1>
        
              <FaTicketAlt /> Boletos
            
                <Link to="/MisBoletos">Mis Boletos</Link>
              
          <div className="separator" /> {/* Línea de separación */}
          
              <FaUser /> Perfil
            
                <Link to="/DetallesPerfil">Detalles de Perfil</Link>
             
        </div>
        <button className="cerrarSesionButton">Cerrar Sesión</button>
      </div>
    
  );
};

export default Perfil;
