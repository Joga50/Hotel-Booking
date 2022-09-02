import React from "react";

const cleanToday = new Date();

function Card(props) {
  const { hotel } = props;
  return (
    <div className="cardContainer">
      <h2>{hotel.name}</h2>
      <img src={hotel.photo} alt="logo" className="img" />
      <p className="hotelDescription">{hotel.description}</p>
      <p>
        Desde{" "}
        <b>
          {" "}
          {Math.round(
            hotel.availabilityFrom == cleanToday.valueOf()
              ? hotel.availabilityFrom - cleanToday.valueOf()
              : (hotel.availabilityFrom - cleanToday.valueOf()) / 86400000
          )}
        </b>{" "}
        dias, Hasta{" "}
        <b>
          {" "}
          {Math.round((hotel.availabilityTo - cleanToday.valueOf()) / 86400000)}
        </b>{" "}
        dias para hacer la reservación.
      </p>
      <p>
        Capacidad <b>{hotel.rooms}</b> habitaciones
      </p>
      <p>
        <b> {hotel.city}</b>, {hotel.country}.
      </p>

      <p> {hotel.price === 1 && "Precio: $"}</p>
      <p> {hotel.price === 2 && "Precio: $$"}</p>
      <p>{hotel.price === 3 && "Precio: $$$"}</p>
      <p> {hotel.price === 4 && "Precio: $$$$"}</p>
      <button type="button" class="btn btn-outline-secondary">
        Reservar
      </button>
    </div>
  );
}
export default Card;
