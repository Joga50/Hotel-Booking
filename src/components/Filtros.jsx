import React from "react";

function Filtros(props) {
  const {
    setPrecio,
    setPais,
    setCapacidad,
    setFechaInicio,
    setFechaFin,
    fechaInicio,
    fechaFin,
  } = props;
  const minDate = new Date();
  const minimalDate =
    minDate.getFullYear() +
    "-0" +
    (minDate.getMonth() + 1) +
    "-" +
    minDate.getDate();
  return (
    <div className="inputContainer">
      <label>
        Check-in:
        <input
          type="date"
          onChange={(e) => setFechaInicio(e.target.value)}
          min={minimalDate}
          value={fechaInicio}
        ></input>
      </label>
      <label>
        Check-out:
        <input
          type="date"
          onChange={(e) => setFechaFin(e.target.value)}
          value={fechaFin}
        ></input>
      </label>
      <label>
        <select onChange={(e) => setPais(e.target.value)}>
          <option value={""}>Todos los paises</option>
          <option>Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Brasil">Brasil</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </label>
      <select onChange={(e) => setPrecio(e.target.value)}>
        <option value={"Todos los precios"}>Todos los precios</option>
        <option value={1}>$</option>
        <option value={2}>$$</option>
        <option value={3}>$$$</option>
        <option value={4}>$$$$</option>
      </select>
      <select onChange={(e) => setCapacidad(e.target.value)}>
        <option value={"Capacidad del hotel"}>Todos los tamaños</option>
        <option value={"Hotel pequeño"}>Hotel pequeño</option>
        <option value={"Hotel mediano"}>Hotel mediano</option>
        <option value={"Hotel grande"}>Hotel grande</option>
      </select>
    </div>
  );
}
export default Filtros;
