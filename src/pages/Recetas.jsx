import React, { useState } from 'react';
import { Accordion, Card, Row, Col, Carousel } from 'react-bootstrap'; // Importa los componentes de Bootstrap
import './Recetas.css';

function Recetas() {
  const [activeKey, setActiveKey] = useState('0');

  return (
    <div className="container mt-5 recetas-container">
      <div className="header">
        <h2>RECETAS NAVIDEÑAS</h2>
      </div>
      <Row className="mt-4">
        <Col md={4} sm={12}>
          <div className="accordion-container">
            <h3 className="accordion-title">PLATILLOS SALADOS</h3>
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>RELLENO DE PAVO (internacional) </Accordion.Header>
                <Accordion.Body>
                Clásico de la cena navideña, acompañado de salsas como el gravy o de arándanos.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>POLLO AL HORNO (latinoamericano) </Accordion.Header>
                <Accordion.Body>
                Masa de maíz rellena de carne, queso o dulces, cocida en hojas de maíz o plátano.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>BACALAO (español) </Accordion.Header>
                <Accordion.Body>
                Guiso con bacalao, jitomate, aceitunas y papas, muy tradicional en mesas navideñas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>IMAGENES</Accordion.Header>
                <Accordion.Body>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpK_oEYL6UhCOC-QgI-TTEjxMQCVPFl1lpA&s"
                        alt="Imagen 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UNq4P0YoUXaHM9cgelg3JasOaouk7K2wbg&s"
                        alt="Imagen 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://www.clamato.com/img/recipes/desktop/es_bacalao-desktop.jpg"
                        alt="Imagen 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="accordion-container">
            <h3 className="accordion-title">POSTRES</h3>
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>PANETTONE (italiano)</Accordion.Header>
                <Accordion.Body>
                Pan dulce con frutas confitadas, nueces y pasas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>BUÑUELOS (latinoamericano) </Accordion.Header>
                <Accordion.Body>
                Postre frito, crujiente, espolvoreado con azúcar o miel.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>TURRÓN (español) </Accordion.Header>
                <Accordion.Body>
                Dulce elaborado con almendras, miel y azúcar, muy típico en Navidad.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>IMAGENES</Accordion.Header>
                <Accordion.Body>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTezphJO9KO70G9mP2v-5lmMHObAYTzkWK5w&s"
                        alt="Imagen 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/kd0ZKBjc2uI/sddefault.jpg"
                        alt="Imagen 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBs3eS9PPEOUrXe-5bUJGByWAFp7TneaqZQ&s"
                        alt="Imagen 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="accordion-container">
            <h3 className="accordion-title">BEBIDAS</h3>
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>PONCHE NAVIDEÑO (latinoamericano) </Accordion.Header>
                <Accordion.Body>
                Bebida caliente hecha con frutas como tejocote, manzana, canela y caña de azúcar.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>EGGNOG (Estados Unidos)</Accordion.Header>
                <Accordion.Body>
                Crema de huevo con especias, leche y, en ocasiones, un toque de licor.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>GLUHWEIN (Alemania) </Accordion.Header>
                <Accordion.Body>
                Vino caliente especiado, perfecto para climas fríos.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>IMAGENES</Accordion.Header>
                <Accordion.Body>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgTa4oy5uGIzy9_oCz5nRXlfhMxtV4o_n0g&s"
                        alt="Imagen 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://www.biggerbolderbaking.com/wp-content/uploads/2021/12/BBB0926213039-scaled.jpg"
                        alt="Imagen 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2EZDl-dnwYYttlpMyWFp0VvCubvwqjZiGQ&s"
                        alt="Imagen 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Recetas;
