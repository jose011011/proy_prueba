import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const peliculas = [
  {
    titulo: "El Padrino",
    descripcion: "Una saga épica sobre una familia mafiosa en Estados Unidos.",
  },
  {
    titulo: "Rápidos y Furiosos",
    descripcion: "Una saga de acción sobre carreras callejeras y familia.",
  },
  {
    titulo: "El Señor de los Anillos",
    descripcion: "Una aventura épica para destruir un anillo poderoso.",
  },
  {
    titulo: "Matrix",
    descripcion: "¿Y si el mundo en el que vivimos no es real?",
  },
  {
    titulo: "stich",
    descripcion:
      "Una pelicula sobre un alienígena que se hace pasar por un perro y vive aventuras en la Tierra.",
  },
];

const Peliculas = () => {
  const [show, setShow] = useState(false);
  const [pelicula, setPelicula] = useState(null);

  const handleShow = (p) => {
    setPelicula(p);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setPelicula(null);
  };

  return (
    <div className="text-center mt-4">
      <h2>Películas</h2>
      <div
        className="col-6 mx-auto mt-4"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {peliculas.map((peli, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => handleShow(peli)}
          >
            {peli.titulo}
          </Button>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{pelicula?.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{pelicula?.descripcion}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Peliculas;
