import React from "react";
import hotelsData from "../assets/scripts/data";
import Card from "./Card";

const minDate = new Date();
const minimalDateFilter =
  minDate.getFullYear() +
  "-0" +
  (minDate.getMonth() + 1) +
  "-" +
  minDate.getDate();
function Hotels(props) {
  const { pais, precio, capacidad, fechaInicio, fechaFin } = props;
  const filtroPorPaises = hotelsData.filter((item) =>
    pais !== "" ? item.country === pais : true
  );
  const filtroPorPrecios = filtroPorPaises.filter((item) =>
    precio !== "Todos los precios" ? item.price.toString() === precio : true
  );
  const filtroPorCapacidad = filtroPorPrecios.filter((item) =>
    capacidad === "Hotel pequeño"
      ? item.rooms <= 10 && item.rooms > 0
      : capacidad === "Hotel mediano"
      ? item.rooms >= 11 && item.rooms <= 20
      : capacidad === "Hotel grande"
      ? item.rooms > 20
      : capacidad === "Capacidad del hotel"
  );
  const filtroPorFechaInicio = filtroPorCapacidad.filter((item) =>
    fechaInicio === minimalDateFilter ? item.availabilityFrom === 0 : true
  );
  return (
    <div className="hotelsContainer">
      <div className="hoteles">
        {filtroPorCapacidad.map((eachHotel) => (
          <div className="hotelCard">
            <Card hotel={eachHotel} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hotels;
