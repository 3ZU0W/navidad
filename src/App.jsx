import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Inicio from './pages/Inicio';
import Historia from './pages/Historia';
import Costumbres from './pages/Costumbres';
import Recetas from './pages/Recetas'; // Importar Recetas
import Galeria from './pages/Galeria'; // Importar Galería
import Canciones from './pages/Canciones'; // Importar Canciones
import Footer from './components/Footer';
import './App.css'; // Importar los estilos generales
import './index.css';
import logo from './img/logo.png'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <Container>
          {/* Enlace con imagen como logo */}
          <Link className="navbar-brand" to="/">
            <img 
              src={logo} 
              alt="Logo" 
              style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
          <div className="collapse navbar-collapse justify-content-center">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">INICIO</Nav.Link>
              <Nav.Link as={Link} to="/historia">HISTORIA</Nav.Link>
              <Nav.Link as={Link} to="/costumbres">COSTUMBRES</Nav.Link>
              <Nav.Link as={Link} to="/recetas">RECETAS</Nav.Link> {/* Nuevo enlace */}
              <Nav.Link as={Link} to="/galeria">GALERÍA</Nav.Link> {/* Nuevo enlace */}
              <Nav.Link as={Link} to="/canciones">CANCIONES</Nav.Link> {/* Nuevo enlace */}
            </Nav>
          </div>
        </Container>
      </nav>

      {/* Contenedor principal con fondo aplicado solo al contenido */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/costumbres" element={<Costumbres />} />
          <Route path="/recetas" element={<Recetas />} /> {/* Ruta para Recetas */}
          <Route path="/galeria" element={<Galeria />} /> {/* Ruta para Galería */}
          <Route path="/canciones" element={<Canciones />} /> {/* Ruta para Canciones */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
