import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; // Importa componentes de Bootstrap para las cards
import './Historia.css'; // Asegúrate de tener los estilos

function Historia() {
  return (
    <div className="container mt-5">
      {/* Recuadro con imagen y texto */}
      <div className="top-box">
        <div className="left-side">
          <img 
            src="https://clubrunner.blob.core.windows.net/00000007988/Images/2016%2BBoletinesJulio/Stomer-adoration.jpg" 
            alt="Imagen de Historia"
            className="top-image" 
          />
        </div>
        <div className="right-side">
          <h2>Historia de la Navidad</h2>
          <p>
          La historia de la Navidad se remonta a hace más de dos mil años, con el nacimiento de Jesús de Nazaret en Belén, un acontecimiento central para el cristianismo. Según los Evangelios de la Biblia, Jesús nació en un humilde pesebre, rodeado de María, José, pastores y los Reyes Magos, quienes llevaron regalos en honor al "Rey de los Judíos". Este evento marcó el inicio de una festividad religiosa que más tarde se expandiría a nivel mundial.
          </p>
        </div>
      </div>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>CURIOSIDAD 1</Card.Title>
              <Card.Text>
              Sin embargo, muchas tradiciones de la Navidad tienen raíces en costumbres paganas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>CURIOSIDAD 2</Card.Title>
              <Card.Text>
              A lo largo de los siglos, la Navidad evolucionó para convertirse en una festividad no solo religiosa, sino también cultural.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>CURIOSIDAD 3</Card.Title>
              <Card.Text>
              Hoy en día, se celebra en casi todos los rincones del mundo con tradiciones únicas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Historia;
