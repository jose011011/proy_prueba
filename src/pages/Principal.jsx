import React from "react";
import "./Actores.css";

const actores = [
  {
    nombre: "Robert Downey Jr.",
    lugar: "EE.UU.",
    descripcion: "Famoso por su papel como Iron Man en el UCM.",
    imagen: "../../public/actores/ac1.jpeg",
  },
  {
    nombre: "Salma Hayek",
    lugar: "México",
    descripcion: "Reconocida actriz en Hollywood, protagonista de Frida.",
    imagen: "../../public/actores/ac2.jpeg",
  },

  {
    nombre: "Penélope Cruz",
    lugar: "España",
    descripcion: "Actriz española ganadora de un Óscar.",
    imagen: "../../public/actores/ac4.jpeg",
  },
];

const Principal = () => {
  return (
    <div className="contenedor">
      <h2 className="titulo-principal">Actores Famosos</h2>
      <div className="grid">
        {actores.map((actor, index) => (
          <div className="card" key={index}>
            <img src={actor.imagen} alt={actor.nombre} className="card-img" />
            <div className="card-body">
              <h3>{actor.nombre}</h3>
              <p className="lugar">{actor.lugar}</p>
              <p>{actor.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principal;
