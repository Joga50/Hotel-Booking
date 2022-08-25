import "./App.css";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import React from "react";
import Hotels from "./components/Hotels";

function App() {
  const [pais, setPais] = React.useState("");
  const [precio, setPrecio] = React.useState("Todos los precios");
  const [capacidad, setCapacidad] = React.useState("Capacidad del hotel");
  const [fechaInicio, setFechaInicio] = React.useState("(Check-in)");
  const [fechaFin, setFechaFin] = React.useState("(Check-Out)");
  return (
    <div className="App">
      <Header fechaInicio={fechaInicio} fechaFin={fechaFin} />
      <Filtros
        setPrecio={setPrecio}
        setPais={setPais}
        setCapacidad={setCapacidad}
        setFechaFin={setFechaFin}
        setFechaInicio={setFechaInicio}
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
      />
      <Hotels
        pais={pais}
        precio={precio}
        capacidad={capacidad}
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
      />
    </div>
  );
}

export default App;
