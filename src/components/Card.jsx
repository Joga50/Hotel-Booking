import React from "react";

function Card(props) {
  const { hotel } = props;
  return (
    <div className="cardContainer">
      <h3>{hotel.name}</h3>
      <img src={hotel.photo} alt="logo" className="img" />
      <p>{hotel.description}</p>
      <p>{hotel.avaiabilityFrom}</p>
      <p>{hotel.availabilityTo}</p>
      <p> {hotel.rooms} habitaciones</p>
      <p> {hotel.city}</p>
      <p> {hotel.country}</p>
      <p>{hotel.price}</p>
    </div>
  );
}
export default Card;
