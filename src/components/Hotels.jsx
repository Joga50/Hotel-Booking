import React from "react";
import hotelsData from "../assets/scripts/data";
import Card from "./Card";

function Hotels(props) {
  const { pais, precio, capacidad, fechaInicio, fechaFin } = props;
  const minDate = new Date(fechaInicio);
  console.log(minDate);
  const maxDate = new Date(fechaFin);
  console.log(maxDate);

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
  const filtroPorFecha = filtroPorCapacidad.filter((item) =>
    !maxDate.getTime() && !minDate.getTime()
      ? item.availabilityFrom > 0
      : item.availabilityFrom <= minDate.getTime() &&
        item.availabilityTo >= maxDate.getTime()
  );
  return (
    <div className="hotelMapContainer">
      {filtroPorFecha.map((eachHotel, i) => (
        <div key={i} className="hotelCard">
          <Card hotel={eachHotel} />
        </div>
      ))}
    </div>
  );
}
export default Hotels;
