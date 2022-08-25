import React from "react";

const cleanToday = new Date();

function Card(props) {
  const { hotel } = props;
  return (
    <div className="cardContainer">
      <h3>{hotel.name}</h3>
      <img src={hotel.photo} alt="logo" className="img" />
      <p>{hotel.description}</p>
      <p>
        Desde:{" "}
        {Math.round(
          hotel.availabilityFrom == cleanToday.valueOf()
            ? hotel.availabilityFrom - cleanToday.valueOf()
            : (hotel.availabilityFrom - cleanToday.valueOf()) / 86400000
        )}{" "}
        dias
      </p>
      <p>
        Hasta:{" "}
        {Math.round((hotel.availabilityTo - cleanToday.valueOf()) / 86400000)}{" "}
        dias
      </p>
      <p>{hotel.rooms} habitaciones</p>
      <p>{hotel.city}</p>
      <p>{hotel.country}</p>
      <p>{hotel.price === 1 && "$"}</p>
      <p>{hotel.price === 2 && "$$"}</p>
      <p>{hotel.price === 3 && "$$$"}</p>
      <p>{hotel.price === 4 && "$$$$"}</p>
      <button>Reservar</button>
    </div>
  );
}
export default Card;
