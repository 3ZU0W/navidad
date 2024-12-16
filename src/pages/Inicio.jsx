import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import './Inicio.css'; 

function Inicio() {
  return (
    <div className="container mt-5">
      <div className="text-box">
        <h2>COSTUMBRES NAVIDEÑAS</h2>
      </div>

      <div className="content-row">
        <div className="carousel-container">
          <Carousel>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQg2heZ1km6296pyl8R2agHIxWwwX83kEUA&s"
                alt="Imagen 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static.vecteezy.com/system/resources/previews/015/541/712/non_2x/festive-christmas-background-nice-postcard-snowman-santa-claus-tree-deer-bear-tiger-eps-10-vector.jpg"
                alt="Imagen 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/474x/fd/6f/cc/fd6fcc0a77545864dc2e270a64a6f720.jpg"
                alt="Imagen 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="text-rectangle">
          <p>
          La Navidad es una de las celebraciones más importantes y arraigadas en muchas culturas alrededor del mundo. Aunque su origen es religioso, cada región ha adoptado tradiciones únicas que reflejan su historia y costumbres. Por ejemplo, en México, el 24 de diciembre se celebra con la tradicional cena de tamales y ponche, mientras que en Filipinas se realizan las "Simbang Gabi", una serie de misas al amanecer durante los nueve días previos a la Navidad. En Islandia, la curiosa tradición de los "13 Yule Lads" consiste en que personajes traviesos dejan pequeños regalos o sorpresas en los zapatos de los niños. La diversidad de estas costumbres convierte la Navidad en un mosaico cultural fascinante.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
