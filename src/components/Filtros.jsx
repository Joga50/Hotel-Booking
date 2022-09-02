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
      <div className="dates">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Check-in:
          </span>
          <input
            aria-label="Username"
            aria-describedby="basic-addon1"
            class="form-control"
            type="date"
            onChange={(e) => setFechaInicio(e.target.value)}
            min={minimalDate}
            value={fechaInicio}
          ></input>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Check-Out:
          </span>
          <input
            aria-label="Username"
            aria-describedby="basic-addon1"
            class="form-control"
            type="date"
            onChange={(e) => setFechaFin(e.target.value)}
            value={fechaFin}
            min={fechaInicio}
          ></input>
        </div>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">
          Precios
        </label>
        <select
          onChange={(e) => setPais(e.target.value)}
          class="form-select"
          id="inputGroupSelect01"
        >
          <option value={""}>Todos los paises</option>
          <option>Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Brasil">Brasil</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">
          Precios
        </label>
        <select
          onChange={(e) => setPrecio(e.target.value)}
          class="form-select"
          id="inputGroupSelect01"
        >
          <option value={"Todos los precios"}>Todos los precios</option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">
          Tamaños
        </label>
        <select
          onChange={(e) => setCapacidad(e.target.value)}
          class="form-select"
          id="inputGroupSelect01"
        >
          <option value={"Capacidad del hotel"}>Todos los tamaños</option>
          <option value={"Hotel pequeño"}>Hotel pequeño</option>
          <option value={"Hotel mediano"}>Hotel mediano</option>
          <option value={"Hotel grande"}>Hotel grande</option>
        </select>
      </div>
    </div>
  );
}
export default Filtros;
