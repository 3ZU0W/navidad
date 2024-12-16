import React, { useState } from 'react';
import { Row, Col, ListGroup, Carousel } from 'react-bootstrap'; // Importa los componentes necesarios de Bootstrap
import './Canciones.css'; // Archivo CSS

function Canciones() {
  // Lista de canciones con título, ID de video, imagen y enlace a YouTube
  const songs = [
    {
      title: 'Snowman - Sia',
      videoId: 'gset79KMmt0',
      image: 'https://img.youtube.com/vi/gset79KMmt0/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=gset79KMmt0'
    },
    {
      title: 'Nonsense Christmas - Sabrina Carpenter',
      videoId: 'YcSP1ZUf1eQ',
      image: 'https://img.youtube.com/vi/YcSP1ZUf1eQ/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=YcSP1ZUf1eQ'
    },
    {
      title: 'All I Want for Christmas Is You - Mariah Carey',
      videoId: 'aAkMkVFwAoo',
      image: 'https://img.youtube.com/vi/aAkMkVFwAoo/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=aAkMkVFwAoo'
    },
    {
      title: 'Rockin\' Around the Christmas Tree - Brenda Lee',
      videoId: 'TFsZy9t-qDc',
      image: 'https://img.youtube.com/vi/TFsZy9t-qDc/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TFsZy9t-qDc'
    },
    {
      title: 'Jingle Bell Rock - Bobby Helms',
      videoId: 'FR8oqeNFy0U',
      image: 'https://img.youtube.com/vi/FR8oqeNFy0U/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=FR8oqeNFy0U'
    },
    {
      title: 'Santa Tell Me - Ariana Grande',
      videoId: 'nlR0MkrRklg',
      image: 'https://img.youtube.com/vi/nlR0MkrRklg/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=nlR0MkrRklg'
    },
    {
      title: 'Christmas Medley 🎄 (Holiday Youtube Singers Collab)',
      videoId: 'I8josdlDof4',
      image: 'https://img.youtube.com/vi/I8josdlDof4/0.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=I8josdlDof4'
    }

  ];

  const [currentSong, setCurrentSong] = useState(songs[0]); // Por defecto, muestra la primera canción

  return (
    <div className="container mt-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Playlist Navideña</h2>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="playlist-container">
            <ListGroup>
              {songs.map((song, index) => (
                <ListGroup.Item
                  key={index}
                  onClick={() => setCurrentSong(song)}
                  style={{ cursor: 'pointer' }}
                  active={currentSong.title === song.title} 
                >
                  {song.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col md={6}>
          <div className="carousel-container">
            <h3>{currentSong.title}</h3>
            <Carousel>
              <Carousel.Item>
                <a
                  href={currentSong.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="d-block w-100"
                    src={currentSong.image} 
                    alt={currentSong.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                </a>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Canciones;
