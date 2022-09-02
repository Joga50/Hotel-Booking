import React from "react";

function Header(props) {
  const { fechaInicio, fechaFin } = props;
  return (
    <div className="headerContainer">
      <h1 className="headerTittle">HotelBooking.com</h1>
      <h4>
        desde el {fechaInicio} hasta el {fechaFin}{" "}
      </h4>
    </div>
  );
}
export default Header;
