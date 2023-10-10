import { FaGithub, FaArrowLeft, FaHome } from 'react-icons/fa';

function Navbar() {
  const goBack = () => {
    window.history.back();
  };

  const goToHome = () => {
    window.location.href = "/"; // Reemplaza "/" con la URL de tu página de inicio
  };

// Función para determinar si estás en la página de inicio
const isHomePage = () => {
    // window.location.hash contiene la parte de fragmento de la URL (el valor después del #)
    // Esta línea compara el valor de window.location.hash con '/'
    // Si son iguales, significa que estás en la página de inicio
    // Si no son iguales, significa que no estás en la página de inicio
    console.log('Va por Ref:', window.location.href)
    console.log('Va por hash:', window.location.hash)
    console.log('Va por hash:', window.location.pathname)
    return window.location.pathname === "/";
  };
  

   return (
    <div className="navbar">
        
      <FaGithub className="github-icon" />
      <h1>
        <a href="https://github.com/rommeljose">Rommel está en GitHub.</a>
      </h1>
      {/* Condición para mostrar o no el botón "Volver" */}
      {isHomePage() ? null : ( 
        <button onClick={goBack}>
          <FaArrowLeft /> Volver
        </button>
      )}
      <button onClick={goToHome}>
      <FaHome /> Inicio
      </button>

    </div>
  );
      }
export default Navbar;
