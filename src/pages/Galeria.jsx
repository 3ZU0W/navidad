import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'; // Importa los componentes de Bootstrap
import './Galeria.css'; // Asegúrate de tener los estilos

function Galeria() {
  return (
    <div className="container mt-5">
      <Row className="mt-4">
        {/* Carrusel 1: Paisajes Navideños */}
        <Col md={6} sm={12}>
          <div className="carousel-container">
            <h3 className="carousel-title">Paisajes Navideños</h3>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4C4mq-LPssi7UZ4Z2jOsZcT-QVTYgZoiRg&s"
                  alt="Paisaje 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2020/12/pueblos-navidenos-viena-1.jpg?resize=600%2C401&ssl=1"
                  alt="Paisaje 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnkbLwCPIMAyudLJxtMTDyvO76DiFy70RTQ&s"
                  alt="Paisaje 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>

        <Col md={6} sm={12}>
          <div className="carousel-container">
            <h3 className="carousel-title">Personajes Navideños</h3>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://palomaynacho.com/wp-content/uploads/2022/12/personajes-navidad-adaptaciones-al-cine.jpg"
                  alt="Personaje 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://elcomercio.pe/resizer/v2/43DHXXEUJ5E2DHF7OIDAB3MZAA.jpg?auth=a03abf67dddd9be4188fdeb77dbdc45f1d42b71e995b5d2043c01ae8ff847e1c&width=1200&height=900&quality=90&smart=true"
                  alt="Personaje 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.gq.com.mx/photos/654ba2ae4b03c676f9fc79be/master/w_2560%2Cc_limit/El%2520Grinch.jpg"
                  alt="Personaje 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">

        <Col md={6} sm={12}>
          <div className="carousel-container">
            <h3 className="carousel-title">Ropa Navideña</h3>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.glamour.mx/photos/619b3413f53619c87f8d2946/master/w_1600%2Cc_limit/271947.jpeg"
                  alt="Ropa 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.pinimg.com/550x/cb/47/f1/cb47f123bb7c2e67dfd25b6c06098406.jpg"
                  alt="Ropa 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://static8.depositphotos.com/1518767/1029/i/450/depositphotos_10293267-stock-photo-afro-american-family-holding-christmas.jpg"
                  alt="Ropa 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="carousel-container">
            <h3 className="carousel-title">Decoraciones Navideñas</h3>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNSl368atyVLmTmoeT9UeU9U2ux9tDFK53g&s"
                  alt="Decoración 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://http2.mlstatic.com/D_NQ_NP_623023-CBT79582651029_092024-O.webp"
                  alt="Decoración 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZUcvVKYkI2J7UNQ7pf3YNdGz7_RLg3UBxQ&s"
                  alt="Decoración 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Galeria;
