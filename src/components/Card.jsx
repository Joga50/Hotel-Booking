import React from "react";

function Card(props) {
  const { hotel } = props;
  return (
    <div>
      <h1>{hotel.name}</h1>
      <img src={hotel.photo} alt="logo" />
      <p>{hotel.description}</p>
      <p>{hotel.avaiabilityFrom}</p>
      <p>{hotel.availabilityTo}</p>
      <p> {hotel.rooms}</p>
      <p> {hotel.city}</p>
      <p> {hotel.country}</p>
      <p>{hotel.price}</p>
    </div>
  );
}
export default Card;
