import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; 
import './Costumbres.css'; 

function Costumbres() {
  return (
    <div className="container mt-5">
      {/* Fila de 6 tarjetas */}
      <Row className="mt-4">
        <Col md={4} sm={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfCzXJzYhlBFmcTVCeynViM1asB3op3D4eQ&s" />
            <Card.Body>
              <Card.Title>Decoración del Árbol</Card.Title>
              <Card.Text>
                La decoración del árbol de Navidad es una de las tradiciones más populares en todo el mundo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxvLCH-C42ABSwSx51r_GUeUni-e0rY1TQQ&s" />
            <Card.Body>
              <Card.Title>Villancicos</Card.Title>
              <Card.Text>
                Cantar villancicos es una tradición navideña que llena de alegría las celebraciones familiares.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNgk1aZcSWESd1PSqjI13qbTrNYhlT9coEw&s" />
            <Card.Body>
              <Card.Title>Intercambio de Regalos</Card.Title>
              <Card.Text>
                El intercambio de regalos es una costumbre que simboliza el amor y la generosidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs2tHX2QdOJ5eiwFXORHe_gj17EW68FNt-g77EAcPg0JCiHSfWoqQE8j1_0TekmDYYQV_cVerUyu3VaGaRu4SMK5R4z6pvSv4nd97JIZbeqraVCW3EY4-kOnlo90iPuehimgM4hRkVqHd4wd34I3CdzMGONlbag-MmThMoNRvdiBS6WtiWAo2nVup1/s1000/413190C4-55C5-4718-8904-91D56D35640C.jpeg" />
            <Card.Body>
              <Card.Title>Cena Familiar</Card.Title>
              <Card.Text>
                La cena navideña es una ocasión para compartir en familia, con platillos típicos de cada región.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Img variant="top" src="https://www.monmavi.com/wp-content/uploads/2021/09/Arbol-Navidad-rojo-y-dorado.jpg" />
            <Card.Body>
              <Card.Title>El Árbol de Navidad</Card.Title>
              <Card.Text>
                El árbol de Navidad es uno de los elementos más icónicos de la celebración.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbqyVyxBHZ_1OQMULp4hxLzTCAVABTvRBVw&s" />
            <Card.Body>
              <Card.Title>La Misa de Gallo</Card.Title>
              <Card.Text>
                La Misa de Gallo es celebrada en la noche del 24 de diciembre, en honor al nacimiento de Jesús.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Costumbres;

  