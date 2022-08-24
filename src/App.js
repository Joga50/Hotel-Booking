import "./App.css";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import React from "react";
import Hotels from "./components/Hotels";

function App() {
  const [pais, setPais] = React.useState("");
  const [precio, setPrecio] = React.useState("Todos los precios");
  const [capacidad, setCapacidad] = React.useState("Capacidad del hotel");
  return (
    <div className="App">
      hola
      <Header />
      <Filtros
        setPrecio={setPrecio}
        setPais={setPais}
        setCapacidad={setCapacidad}
      />
      <Hotels pais={pais} precio={precio} capacidad={capacidad} />
    </div>
  );
}

export default App;
