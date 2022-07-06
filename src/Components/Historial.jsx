import React, { useState } from "react";
import PropTypes from "prop-types";

const Historial = (props) => {
  const date = new Date();

  const [fecha, setFecha] = useState(
    date.toLocaleDateString("es-ES").split("/").reverse().join("-")
  );

  // const inicio = new Date("2022-06-21T00:00:00");
  // const fin = new Date("2022-07-05T00:00:00");
  // const UN_DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24;
  // const INTERVALO = UN_DIA_EN_MILISEGUNDOS; // Cada semana
  // const formatDate = (date) => {
  //   //let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  //   let formatted_date =
  //     date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  //   return formatted_date;
  // };

  // for (let i = inicio; i <= fin; i = new Date(i.getTime() + INTERVALO)) {
  //   console.log(formatDate(i));
  // }

  return (
    <div>
      <h3>Historial</h3>
      <input
        type={"date"}
        placeholder="ingresa Fecha"
        value={fecha}
        onChange={(ev) => setFecha(ev.target.value)}
      />
      {}
    </div>
  );
};

Historial.propTypes = {};

export default Historial;

// fetch('https://api.fastforex.io/historical?date=2022-06-20&api_key=a8b3b3c7b3-ffd79e40b0-recrr2')
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
