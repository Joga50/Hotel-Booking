import React from "react";

function Header(props) {
  const { fechaInicio, fechaFin } = props;
  return (
    <div className="headerContainer">
      <h1>Hoteles</h1>
      desde el {fechaInicio} hasta el {fechaFin}
    </div>
  );
}
export default Header;
